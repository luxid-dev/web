import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, Lead, P, Table } from '../components/Prose';

export default function SessionsContent() {
  return (
    <>
      <Lead>
        Tokens suit clients that can store one. Browsers are better served by a cookie, and that is what sessions are for.
      </Lead>

      <H2>How it works</H2>

      <P>The browser holds a cookie containing an <strong>opaque id and nothing else</strong>. The values live server-side in a store. So the client cannot read what is in the session, and cannot forge it.</P>

      <CodeExample
        language="text"
        code={`Browser                        Server
   │ ── request + cookie ────────▶ │
   │                               │ look up the id in the store
   │                               │ run the action with that session
   │ ◀───── response + cookie ──── │ save any changes`}
      />

      <H2>Setting it up</H2>

      <P>A store, registered like any service:</P>

      <CodeExample
        language="rust"
        code={`use std::sync::Arc;

Providers::new()
    .bind::<dyn SessionStore, _>(|_| Arc::new(MemoryStore::new()))`}
      />

      <P>Then the middleware:</P>

      <CodeExample
        language="rust"
        code={`r.group("/", |r| {
    r.middleware(Auth::session());

    r.get("/cart", CartController::show);
    r.post("/login", AuthController::login);
});`}
      />

      <P>Note it goes on <strong>public routes too</strong>, including login — a session is how a user <em>becomes</em> authenticated, so anonymous requests pass through rather than being rejected.</P>

      <P><C>MemoryStore</C> keeps sessions in the process. Sessions are lost on restart and are not shared between instances, so it suits a single process and tests. The <C>SessionStore</C> trait is public for anything shared.</P>

      <H2>Reading and writing</H2>

      <CodeExample
        language="rust"
        code={`async fn show(ctx: HttpContext) -> Result<Response> {
    let visits: u32 = ctx.session.get("visits")?.unwrap_or(0);
    ctx.session.put("visits", visits + 1)?;

    ctx.response.ok(json!({ "visits": visits }))
}`}
      />

      <Table
        headers={['Method', '']}
        rows={[
            [<span key={0}><C>get::{'<'}T{'>'}(key)</C></span>, <span key={1}><C>Option{'<'}T{'>'}</C></span>],
            [<span key={0}><C>put(key, value)</C></span>, <span key={1}>store anything <C>Serialize</C></span>],
            [<span key={0}><C>has(key)</C></span>, <span key={1}><C>bool</C></span>],
            [<span key={0}><C>forget(key)</C></span>, <span key={1}>remove one value</span>],
            [<span key={0}><C>flush()</C></span>, <span key={1}>remove all values, keep the session</span>],
            [<span key={0}><C>destroy()</C></span>, <span key={1}>invalidate entirely</span>],
            [<span key={0}><C>id()</C></span>, <span key={1}>the session id</span>],
        ]}
      />

      <P>Notice <C>put</C> takes <C>&self</C>, not <C>&mut self</C> — the session is a shared handle, so you do not need <C>mut ctx</C>.</P>

      <H2>Logging in and out</H2>

      <CodeExample
        language="rust"
        code={`async fn login(ctx: HttpContext) -> Result<Response> {
    let input = ctx.request.validate::<Credentials>().await?;
    let user = /* look up and verify, as in chapter 16 */;

    ctx.session.login(&Identity::new(user.id.to_string()))?;

    ctx.response.ok(json!({ "ok": true }))
}

async fn logout(ctx: HttpContext) -> Result<Response> {
    ctx.session.logout()?;
    ctx.response.no_content()
}`}
      />

      <P>On subsequent requests, <C>Auth::session()</C> reads the session and populates <C>ctx.auth</C> — so <C>ctx.auth.id::{'<'}i64{'>'}()?</C> works exactly as it does behind the JWT guard. Your actions do not care which mechanism signed the user in.</P>

      <H2>Why <C>login</C> rotates the id</H2>

      <P><C>session.login()</C> does two things: it assigns a <strong>new</strong> session id, then records the subject.</P>

      <P>The rotation is not incidental. Without it, an attacker who plants a known session id in a victim's browser before they log in still holds a valid id <em>afterwards</em> — a <strong>session fixation</strong> attack, and a complete account takeover.</P>

      <P>Rotate whenever privilege changes. <C>login()</C> does it for you; <C>regenerate()</C> is there if you change privileges some other way.</P>

      <P><C>logout()</C> destroys the store entry <em>and</em> clears the cookie, so the old value is worthless even if it was captured.</P>

      <H2>Cookie settings</H2>

      <P>Defaults are the safe ones: <C>HttpOnly</C> (not readable from JavaScript), <C>SameSite=Lax</C>, <C>Path=/</C>, and a fourteen-day lifetime.</P>

      <CodeExample
        language="rust"
        code={`r.middleware(
    Auth::session()
        .secure(true)                          // HTTPS only — turn on in production
        .ttl(Duration::from_secs(60 * 60))     // one hour
        .cookie("my_app_session"),
);`}
      />

      <P>Turn on <C>secure</C> in production. Without it the cookie travels over plain HTTP where anyone on the network can take it.</P>

      <H2>Failure modes</H2>

      <P><strong>An unknown or expired cookie starts a fresh session</strong> rather than failing. A stale cookie is ordinary — a restarted store, an expired entry — not an error.</P>

      <P><strong>Writing without the middleware is an error</strong>, not a silent no-op:</P>

      <CodeExample
        language="text"
        code={`no session is active on this route. Add \`.middleware(Auth::session())\`,
and bind a \`SessionStore\` in \`providers()\`.`}
      />

      <P>A session write that vanished silently would be an extremely annoying bug to find.</P>

      <H2>Sessions or tokens?</H2>

      <Table
        headers={['', 'Sessions', 'Tokens']}
        rows={[
            [<span key={0}>Client</span>, <span key={1}>browsers</span>, <span key={2}>anything</span>],
            [<span key={0}>Carried in</span>, <span key={1}>a cookie</span>, <span key={2}>a header</span>],
            [<span key={0}>State</span>, <span key={1}>server-side</span>, <span key={2}>in the token</span>],
            [<span key={0}>Revoking</span>, <span key={1}>delete the entry</span>, <span key={2}>wait for expiry, or keep a list</span>],
            [<span key={0}>Scaling</span>, <span key={1}>needs a shared store</span>, <span key={2}>stateless</span>],
            [<span key={0}>CSRF</span>, <span key={1}>needs consideration</span>, <span key={2}>not applicable</span>],
        ]}
      />

      <P>Building a browser app? Sessions. A mobile or third-party API? Tokens. Both? Register both guards and put them on different route groups — <C>ctx.auth</C> reads the same either way.</P>

    </>
  );
}
