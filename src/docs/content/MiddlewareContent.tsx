import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, Lead, P, Table } from '../components/Prose';

export default function MiddlewareContent() {
  return (
    <>
      <Lead>
        Middleware is code that runs *around* a request: before the action, after it, or both. Logging, authentication, rate limiting, and timing are all middleware.
      </Lead>

      <H2>Writing one</H2>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;
use std::time::Instant;

pub struct Timer;

#[luxid::middleware]
impl Timer {
    async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response> {
        let started = Instant::now();

        let response = next.run(ctx).await?;

        Ok(response.header("x-response-time", format!("{}ms", started.elapsed().as_millis())))
    }
}`}
      />

      <P>The shape is always the same:</P>

      <CodeExample
        language="rust"
        code={`async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response>`}
      />

      <P><C>next</C> is the rest of the chain — the remaining middleware and, at the end, the action. Calling <C>next.run(ctx)</C> continues; not calling it stops.</P>

      <P>Note the same <C>HttpContext</C> type as controllers. There is one mental model for the whole framework.</P>

      <H2>Before, after, and instead</H2>

      <P>There is no separate "before" and "after" API, because ordinary code position is enough:</P>

      <CodeExample
        language="rust"
        code={`async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response> {
    // BEFORE — runs on the way in

    let response = next.run(ctx).await?;

    // AFTER — runs on the way out

    Ok(response)
}`}
      />

      <P>To reject a request outright, return without calling <C>next</C>:</P>

      <CodeExample
        language="rust"
        code={`pub struct BlockRobots;

#[luxid::middleware]
impl BlockRobots {
    async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response> {
        if ctx.request.header("user-agent").is_some_and(|ua| ua.contains("bot")) {
            return Err(Error::Forbidden);
        }

        next.run(ctx).await
    }
}`}
      />

      <P>The action never runs.</P>

      <H2>Attaching it</H2>

      <P>Three levels, from widest to narrowest.</P>

      <P><strong>Global</strong> — every route in the application:</P>

      <CodeExample
        language="rust"
        code={`App::new()
    .middleware(Timer)
    .routes(routes::register)`}
      />

      <P><strong>Group</strong> — every route inside it:</P>

      <CodeExample
        language="rust"
        code={`r.group("/admin", |r| {
    r.middleware(Auth::jwt());

    r.get("/stats", AdminController::stats);
    r.get("/users", AdminController::users);
});`}
      />

      <P><strong>Route</strong> — one endpoint:</P>

      <CodeExample
        language="rust"
        code={`r.get("/me", MeController::show).middleware(Auth::jwt());`}
      />

      <P>Or across a whole resource:</P>

      <CodeExample
        language="rust"
        code={`r.resource("/posts", PostsController).middleware(Auth::jwt());`}
      />

      <P>Several at once:</P>

      <CodeExample
        language="rust"
        code={`r.get("/admin", AdminController::show).middleware((Auth::jwt(), Role::admin()));`}
      />

      <P>Middleware is attached by <strong>value</strong>, not by a string name, so a typo is a compile error rather than a route that silently runs unguarded.</P>

      <H2>Order</H2>

      <P>Middleware runs outermost first: global, then group, then route. On the way out it unwinds in reverse.</P>

      <P>With <C>Timer</C> global and <C>Auth::jwt()</C> on a group:</P>

      <CodeExample
        language="text"
        code={`→ Timer starts
  → Auth checks the token
    → the action runs
  ← Auth returns
← Timer adds its header`}
      />

      <P>You can see the depth per route:</P>

      <CodeExample
        language="sh"
        code={`cargo luxid routes`}
      />

      <CodeExample
        language="text"
        code={`GET  /api/health  HealthController::show  [1 middleware]
GET  /api/me      MeController::show      [2 middleware]`}
      />

      <P>If a route that should be guarded shows a lower number than its neighbours, that is your bug.</P>

      <H2>Passing data to the action</H2>

      <P>Middleware often computes something the action needs. <C>ctx.extensions</C> is a typed bag for exactly that:</P>

      <CodeExample
        language="rust"
        code={`#[derive(Debug, Clone)]
pub struct RequestId(pub String);

pub struct AssignRequestId;

#[luxid::middleware]
impl AssignRequestId {
    async fn handle(&self, mut ctx: HttpContext, next: Next) -> Result<Response> {
        let id = RequestId(luxid::session::new_id());   // a 256-bit random id
        ctx.extensions.insert(id.clone());

        Ok(next.run(ctx).await?.header("x-request-id", id.0))
    }
}`}
      />

      <P>The action reads it back by type:</P>

      <CodeExample
        language="rust"
        code={`async fn show(ctx: HttpContext) -> Result<Response> {
    let id = ctx.extensions.get::<RequestId>().map(|r| r.0.clone());
    ctx.response.ok(json!({ "request_id": id }))
}`}
      />

      <P>Note <C>mut ctx</C> in the middleware — writing to the context needs it.</P>

      <H2>Errors skip the after-part</H2>

      <P>If anything downstream fails, the <C>?</C> propagates and the code after <C>next.run</C> does not execute:</P>

      <CodeExample
        language="rust"
        code={`let response = next.run(ctx).await?;   // ← an error returns here
Ok(response.header("x-trace", "1"))    // ← never reached`}
      />

      <P>That is usually what you want. When you need cleanup regardless of outcome, match rather than use <C>?</C>:</P>

      <CodeExample
        language="rust"
        code={`let outcome = next.run(ctx).await;

// runs either way
metrics.record(started.elapsed());

outcome`}
      />

      <H2>Middleware with configuration</H2>

      <P>Because <C>handle</C> takes <C>&self</C>, middleware can hold state:</P>

      <CodeExample
        language="rust"
        code={`pub struct RequireHeader {
    name: &'static str,
}

impl RequireHeader {
    pub fn new(name: &'static str) -> Self {
        Self { name }
    }
}

#[luxid::middleware]
impl RequireHeader {
    async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response> {
        if ctx.request.header(self.name).is_none() {
            return Err(Error::BadRequest(format!("the \`{}\` header is required", self.name)));
        }

        next.run(ctx).await
    }
}`}
      />

      <CodeExample
        language="rust"
        code={`r.post("/webhook", WebhookController::receive)
    .middleware(RequireHeader::new("x-signature"));`}
      />

      <P>This is how the built-in guards work: <C>Auth::jwt()</C> returns a configured value.</P>

      <H2>Built-in middleware</H2>

      <Table
        headers={['', 'What it does', 'Chapter']}
        rows={[
            [<span key={0}><C>WithDatabase</C></span>, <span key={1}>Makes the database available. Every app needs it.</span>, <span key={2}>11</span>],
            [<span key={0}><C>WithRollbackDatabase</C></span>, <span key={1}>As above, but rolls back after each request. Tests only.</span>, <span key={2}>20</span>],
            [<span key={0}><C>Auth::jwt()</C></span>, <span key={1}>Requires a valid bearer token</span>, <span key={2}>16</span>],
            [<span key={0}><C>Auth::optional_jwt()</C></span>, <span key={1}>Reads a token if present, allows anonymous</span>, <span key={2}>16</span>],
            [<span key={0}><C>Auth::session()</C></span>, <span key={1}>Cookie-backed sessions</span>, <span key={2}>17</span>],
        ]}
      />

    </>
  );
}
