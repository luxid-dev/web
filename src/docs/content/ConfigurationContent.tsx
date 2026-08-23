import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, LI, Lead, P, Table, UL } from '../components/Prose';

export default function ConfigurationContent() {
  return (
    <>
      <Lead>
        Configuration is anything that changes between your laptop and production: a database URL, a secret key, a page size.
      </Lead>

      <H2>Two layers</H2>

      <P>Luxid reads <C>luxid.toml</C>, then lets <strong>environment variables override it</strong>. That split follows the usual convention:</P>

      <UL>
        <LI key={0}><strong><C>luxid.toml</C></strong> holds what is true for everyone. It is committed.</LI>
        <LI key={1}><strong>The environment</strong> holds what is true for this deployment. It is not.</LI>
      </UL>

      <CodeExample
        language="toml"
        code={`# luxid.toml
[app]
name = "blog"
per_page = 20

[database]
strict_relations = true`}
      />

      <CodeExample
        language="sh"
        code={`# .env — not committed
DATABASE_URL=postgres://localhost/blog
APP_KEY=a-real-secret`}
      />

      <H2>Keys are forgiving</H2>

      <P>A nested TOML table flattens to a dotted key, and separators and case do not matter:</P>

      <CodeExample
        language="text"
        code={`[database]              →  database.strict_relations
strict_relations = true →  DATABASE_STRICT_RELATIONS
                        →  database_strict_relations`}
      />

      <P>All three spellings are <strong>the same key</strong>. So the environment override for <C>app.per_page</C> is <C>APP_PER_PAGE</C>, without you having to look up a mapping.</P>

      <H2>Reading it</H2>

      <P>Any action, middleware, or anything with a context:</P>

      <CodeExample
        language="rust"
        code={`async fn index(ctx: HttpContext) -> Result<Response> {
    let name: String = ctx.config.get("app.name")?;
    let per_page: u32 = ctx.config.get_or("app.per_page", 20)?;

    ctx.response.ok(json!({ "app": name, "per_page": per_page }))
}`}
      />

      <Table
        headers={['Method', 'Behaviour']}
        rows={[
            [<span key={0}><C>get::{'<'}T{'>'}(key)</C></span>, <span key={1}>Required. Missing is an error naming the environment variable.</span>],
            [<span key={0}><C>try_get::{'<'}T{'>'}(key)</C></span>, <span key={1}>Optional. Returns <C>Option{'<'}T{'>'}</C>.</span>],
            [<span key={0}><C>get_or(key, default)</C></span>, <span key={1}>Uses the default when <strong>absent</strong>.</span>],
            [<span key={0}><C>raw(key)</C></span>, <span key={1}>The unparsed string.</span>],
            [<span key={0}><C>has(key)</C></span>, <span key={1}>Whether it is set.</span>],
        ]}
      />

      <H2>Absent and malformed are different</H2>

      <P>This is worth internalising:</P>

      <CodeExample
        language="rust"
        code={`let per_page: u32 = ctx.config.get_or("app.per_page", 20)?;`}
      />

      <UL>
        <LI key={0}>Key <strong>absent</strong> → you get <C>20</C>.</LI>
        <LI key={1}>Key present but set to <C>"twenty"</C> → <strong>an error</strong>, not <C>20</C>.</LI>
      </UL>

      <P>Silently falling back on a malformed value would hide a typo until someone wondered why their setting had no effect. The default covers "you did not say", not "you said something I could not read".</P>

      <H2>Missing keys tell you the fix</H2>

      <CodeExample
        language="rust"
        code={`let key: String = ctx.config.get("app.key")?;`}
      />

      <P>If it is not set, your logs get:</P>

      <CodeExample
        language="text"
        code={`configuration key \`app.key\` is not set. Add it to luxid.toml, or set \`APP_KEY\`.`}
      />

      <P>The client gets a redacted <C>500</C> — configuration keys can be revealing.</P>

      <H2>Where configuration is loaded</H2>

      <P>In <C>src/app.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`pub async fn build() -> luxid::Result<App> {
    let config = Config::load("luxid.toml")?;

    // ...

    Ok(App::new().config(config).routes(crate::routes::register))
}`}
      />

      <P><C>Config::load</C> reads the file if it exists — a missing file is <strong>not</strong> an error, since an application configured entirely by environment is perfectly ordinary — and then layers the environment over it.</P>

      <H2>Prefer a typed struct for real settings</H2>

      <P><C>Config</C> is a string map with typed reads. That is fine for a handful of values, but for anything your application depends on, parse it <strong>once at boot</strong> into a struct and register that:</P>

      <CodeExample
        language="rust"
        code={`pub struct Settings {
    pub per_page: u32,
    pub app_key: String,
}

impl Settings {
    pub fn load(config: &Config) -> luxid::Result<Self> {
        Ok(Self {
            per_page: config.get_or("app.per_page", 20)?,
            app_key: config.get("app.key")?,
        })
    }
}`}
      />

      <CodeExample
        language="rust"
        code={`let settings = Settings::load(&config)?;

Ok(App::new()
    .config(config)
    .providers(Providers::new().singleton(move |_| settings.clone()))
    .routes(crate::routes::register))`}
      />

      <P>Two things improve. A missing or malformed value now fails <strong>at startup</strong> rather than on whichever request first reads it. And actions get a real struct:</P>

      <CodeExample
        language="rust"
        code={`let settings = ctx.services.get::<Settings>()?;
settings.per_page      // a u32, already validated`}
      />

      <P>Use <C>ctx.config</C> for one-off reads and for building that struct. Use the struct for everything else.</P>

      <H2>Secrets</H2>

      <P>Never put a secret in <C>luxid.toml</C> — it is committed. Use the environment:</P>

      <CodeExample
        language="sh"
        code={`# .env, gitignored
APP_KEY=...
DATABASE_URL=postgres://user:password@host/db`}
      />

      <P><C>luxid new</C> gitignores <C>.env</C> and writes a <C>.env.example</C> showing which variables exist without their values. Keep that habit: the example file is how the next person knows what to set.</P>

    </>
  );
}
