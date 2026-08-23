import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, LI, Lead, P, UL } from '../components/Prose';

export default function ServicesContent() {
  return (
    <>
      <Lead>
        A service is any object your application wants to share: a database handle, an HTTP client, a configuration struct, a mailer. The <strong>container</strong> is where you register them, and <C>ctx.services</C> is how actions get them.
      </Lead>

      <H2>Why not just use globals?</H2>

      <P>You could put a <C>static</C> somewhere and reach for it. The container is better for three reasons that matter as soon as you write tests:</P>

      <UL>
        <LI key={0}>You can <strong>swap an implementation</strong> — a fake mailer in tests, a real one in production — without changing the code that uses it.</LI>
        <LI key={1}>Objects with <strong>per-request</strong> lifetimes work naturally.</LI>
        <LI key={2}>Missing wiring fails <strong>at startup</strong> with a message naming the type, rather than on the first request that needs it.</LI>
      </UL>

      <H2>Registering</H2>

      <P>In <C>src/app.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`fn providers(db: Db) -> Providers {
    Providers::new()
        .singleton(move |_| db.clone())
        .singleton(|_| Settings { per_page: 20 })
}`}
      />

      <P>Each closure receives the container, so services can depend on each other:</P>

      <CodeExample
        language="rust"
        code={`Providers::new()
    .singleton(|_| Settings::from_env())
    .singleton(|c| {
        let settings = c.get::<Settings>().expect("Settings is registered");
        Mailer::new(&settings.smtp_url)
    })`}
      />

      <H2>Three lifetimes</H2>

      <CodeExample
        language="rust"
        code={`Providers::new()
    .singleton(|_| Settings::from_env())   // once, for the whole app
    .scoped(|_| RequestId::new())          // once per request
    .transient(|_| Formatter::new())       // every time it is resolved`}
      />

      <P><strong><C>singleton</C></strong> — built once at startup and shared. Use for connection pools, configuration, clients. Most services are singletons.</P>

      <P><strong><C>scoped</C></strong> — built once per request, then shared for the rest of it. Use when a value should be consistent within one request but not across them — a request id, a per-request cache.</P>

      <P><strong><C>transient</C></strong> — built fresh every time. Rare; use when the object is stateful and must not be shared.</P>

      <H2>Resolving</H2>

      <P>From any action or middleware:</P>

      <CodeExample
        language="rust"
        code={`async fn index(ctx: HttpContext) -> Result<Response> {
    let settings = ctx.services.get::<Settings>()?;

    ctx.response.ok(json!({ "per_page": settings.per_page }))
}`}
      />

      <P>You get an <C>Arc{'<'}Settings{'>'}</C>. The <C>?</C> handles the case where nothing is registered, producing a redacted <C>500</C> with the type name in your logs.</P>

      <H2>Swapping implementations</H2>

      <P>Register a trait rather than a concrete type and you can substitute freely:</P>

      <CodeExample
        language="rust"
        code={`pub trait Mailer: Send + Sync {
    fn send(&self, to: &str, body: &str) -> luxid::Result<()>;
}

pub struct Smtp { /* ... */ }
impl Mailer for Smtp { /* ... */ }

pub struct Collected {
    pub sent: std::sync::Mutex<Vec<String>>,
}
impl Mailer for Collected { /* records instead of sending */ }`}
      />

      <CodeExample
        language="rust"
        code={`// production
Providers::new().bind::<dyn Mailer, _>(|_| Arc::new(Smtp::new()))

// tests
Providers::new().bind::<dyn Mailer, _>(|_| Arc::new(Collected::default()))`}
      />

      <P>Resolve a bound trait with <C>get_dyn</C> rather than <C>get</C>:</P>

      <CodeExample
        language="rust"
        code={`let mailer = ctx.services.get_dyn::<dyn Mailer>()?;
mailer.send(&user.email, "welcome")?;`}
      />

      <P>The action is identical in both configurations. That is the whole point.</P>

      <H2>Failing at startup, not at 3am</H2>

      <P><C>App::run</C> resolves <strong>every singleton before binding the port</strong>. A missing dependency stops the process immediately:</P>

      <CodeExample
        language="text"
        code={`error: no provider bound for \`app::services::Mailer\`.
       Register it in \`providers()\`, e.g. \`.singleton(|_| Mailer::new())\``}
      />

      <P>Cyclic dependencies are caught too, and reported as the chain rather than a stack overflow:</P>

      <CodeExample
        language="text"
        code={`error: dependency cycle in providers: Pool → Repo → Pool`}
      />

      <P>Tests use <C>App::into_service()</C>, which deliberately <em>skips</em> this check so a test can bind only what it needs. <C>App::try_into_service()</C> is the validating version when you want it.</P>

      <H2>A worked example</H2>

      <P><C>src/services/mod.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`pub mod pricing;

// <luxid:modules>`}
      />

      <P><C>src/services/pricing.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;

pub struct Pricing {
    tax_rate: f64,
}

impl Pricing {
    pub fn new(tax_rate: f64) -> Self {
        Self { tax_rate }
    }

    pub fn with_tax(&self, amount: f64) -> f64 {
        amount * (1.0 + self.tax_rate)
    }
}`}
      />

      <P>Register it in <C>src/app.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`fn providers(db: Db, config: &Config) -> luxid::Result<Providers> {
    let tax_rate: f64 = config.get_or("pricing.tax_rate", 0.2)?;

    Ok(Providers::new()
        .singleton(move |_| db.clone())
        .singleton(move |_| crate::services::pricing::Pricing::new(tax_rate)))
}`}
      />

      <P>Use it:</P>

      <CodeExample
        language="rust"
        code={`async fn quote(ctx: HttpContext) -> Result<Response> {
    let pricing = ctx.services.get::<crate::services::pricing::Pricing>()?;
    let amount = ctx.request.input::<f64>("amount")?.unwrap_or(0.0);

    ctx.response.ok(json!({ "total": pricing.with_tax(amount) }))
}`}
      />

      <H2>When not to use a service</H2>

      <P>Not everything needs registering. A pure function is simpler than a service and needs no wiring:</P>

      <CodeExample
        language="rust"
        code={`pub fn slugify(title: &str) -> String { /* ... */ }`}
      />

      <P>Reach for the container when the thing holds state, owns a connection, or needs to be swapped in tests. Otherwise, write a function.</P>

    </>
  );
}
