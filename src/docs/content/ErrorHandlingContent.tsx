import React from 'react';
import CodeExample from '@/components/CodeExample';
import { A, C, H2, LI, Lead, P, Table, UL } from '../components/Prose';

export default function ErrorHandlingContent() {
  return (
    <>
      <Lead>
        This chapter explains why Luxid controllers have almost no error handling in them, and what your clients see when something goes wrong.
      </Lead>

      <H2>One error type</H2>

      <P>Every action returns <C>Result{'<'}Response{'>'}</C>, where the error is <C>luxid::Error</C>. Each variant already knows its HTTP status:</P>

      <Table
        headers={['Variant', 'Status', 'Use it when']}
        rows={[
            [<span key={0}><C>Error::Validation(errors)</C></span>, <span key={1}>422</span>, <span key={2}>Input failed its rules</span>],
            [<span key={0}><C>Error::NotFound {'{'} .. {'}'}</C></span>, <span key={1}>404</span>, <span key={2}>The thing does not exist</span>],
            [<span key={0}><C>Error::Unauthorized</C></span>, <span key={1}>401</span>, <span key={2}>Not signed in</span>],
            [<span key={0}><C>Error::Forbidden</C></span>, <span key={1}>403</span>, <span key={2}>Signed in, but not allowed</span>],
            [<span key={0}><C>Error::Conflict(msg)</C></span>, <span key={1}>409</span>, <span key={2}>Clashes with existing state</span>],
            [<span key={0}><C>Error::TooManyRequests</C></span>, <span key={1}>429</span>, <span key={2}>Rate limited</span>],
            [<span key={0}><C>Error::BadRequest(msg)</C></span>, <span key={1}>400</span>, <span key={2}>Malformed request</span>],
            [<span key={0}><C>Error::Internal(err)</C></span>, <span key={1}>500</span>, <span key={2}>Something broke</span>],
            [<span key={0}><C>Error::Http {'{'} .. {'}'}</C></span>, <span key={1}>you choose</span>, <span key={2}>Anything else</span>],
        ]}
      />

      <H2>Why <C>?</C> is enough</H2>

      <P>Because each variant carries its status, <C>?</C> turns a failure into a correct HTTP response with no handling at the call site:</P>

      <CodeExample
        language="rust"
        code={`async fn show(ctx: HttpContext) -> Result<Response> {
    let post = Post::find_or_fail(ctx.params.get::<i64>("id")?).await?;
    ctx.response.ok(post)
}`}
      />

      <P>Two things there can fail, and both are handled:</P>

      <UL>
        <LI key={0}><C>params.get</C> on a non-numeric id → <C>400</C></LI>
        <LI key={1}><C>find_or_fail</C> on a missing row → <C>404</C></LI>
      </UL>

      <P>Compare with what you would otherwise write:</P>

      <CodeExample
        language="rust"
        code={`// The same endpoint, without the error type doing any work
async fn show(ctx: HttpContext) -> Result<Response> {
    let raw = ctx.params.raw("id").ok_or_else(|| /* 400 */)?;
    let id: i64 = raw.parse().map_err(|_| /* 400 */)?;

    match Post::find(id).await {
        Ok(Some(post)) => ctx.response.ok(post),
        Ok(None) => Err(/* 404 */),
        Err(e) => Err(/* 500 */),
    }
}`}
      />

      <P>Same behaviour, five times the code, and three chances to get a status wrong.</P>

      <H2>What the client sees</H2>

      <P>Errors render as <A href="https://www.rfc-editor.org/rfc/rfc7807">RFC 7807</A> problem documents — a small standard for API errors, so clients and code generators already know the shape.</P>

      <CodeExample
        language="json"
        code={`{
  "type": "https://luxid.rs/errors/not-found",
  "title": "Post \`42\` not found",
  "status": 404,
  "resource": "Post",
  "id": "42"
}`}
      />

      <P>Validation failures add an <C>errors</C> object keyed by field:</P>

      <CodeExample
        language="json"
        code={`{
  "type": "https://luxid.rs/errors/validation",
  "title": "The given data was invalid",
  "status": 422,
  "errors": {
    "email": ["must be a valid email address"],
    "name": ["must be at least 2 characters"]
  }
}`}
      />

      <P>The <C>Content-Type</C> is <C>application/problem+json</C>, not <C>application/json</C>, which lets a client tell an error apart from a successful body without reading it.</P>

      <H2>Internal errors are redacted</H2>

      <P><C>Error::Internal</C> is the one variant whose message never reaches the client:</P>

      <CodeExample
        language="rust"
        code={`Err(Error::internal(format!("could not reach {}", connection_string)))`}
      />

      <P>The client gets:</P>

      <CodeExample
        language="json"
        code={`{ "type": "https://luxid.rs/errors/internal", "title": "internal server error", "status": 500 }`}
      />

      <P>while the full message — connection string and all — goes to your logs. This is deliberate: internal errors routinely contain hostnames, credentials, and query fragments, and a framework that leaks them by default is a framework that leaks them in production.</P>

      <P>Everything else uses the message you gave it, so put client-facing wording in the other variants and diagnostic detail in <C>Internal</C>.</P>

      <H2>Raising errors</H2>

      <CodeExample
        language="rust"
        code={`// Simple cases
return Err(Error::Unauthorized);
return Err(Error::Forbidden);
return Err(Error::Conflict("that email is already registered".into()));

// A 404 that names what was missing
return Err(Error::not_found("Post", id));

// A 500 with a diagnostic message, without needing anyhow in scope
return Err(Error::internal("the payment gateway returned nothing"));

// Validation, built by hand
let mut errors = ValidationErrors::new();
errors.add("title", "is required");
return Err(Error::Validation(errors));

// Anything else
return Err(Error::Http {
    status: 402,
    code: "payment-required".into(),
    message: "your subscription has lapsed".into(),
    details: None,
});`}
      />

      <H2>Converting other errors</H2>

      <P><C>?</C> works on any error type with a <C>From</C> conversion into <C>luxid::Error</C>. <C>serde_json::Error</C> already converts to a <C>400</C>. For your own types:</P>

      <CodeExample
        language="rust"
        code={`impl From<PaymentError> for Error {
    fn from(err: PaymentError) -> Self {
        match err {
            PaymentError::CardDeclined => Error::Conflict("card declined".into()),
            PaymentError::Network(e) => Error::internal(format!("gateway: {e}")),
        }
    }
}`}
      />

      <P>Now <C>charge_card().await?</C> inside an action produces the right status automatically. This is where to encode "which of my failures is the client's fault" — once, rather than at every call site.</P>

      <H2>Choosing the right one</H2>

      <P>A rule that resolves most cases:</P>

      <UL>
        <LI key={0}>Can the client fix it by changing a field? → <C>Validation</C> (422)</LI>
        <LI key={1}>Can they fix it by changing the request some other way? → <C>BadRequest</C> (400)</LI>
        <LI key={2}>Do they need to sign in? → <C>Unauthorized</C> (401)</LI>
        <LI key={3}>Are they signed in but not permitted? → <C>Forbidden</C> (403)</LI>
        <LI key={4}>Does the thing simply not exist? → <C>NotFound</C> (404)</LI>
        <LI key={5}>Is it your fault? → <C>Internal</C> (500)</LI>
      </UL>

      <P>The 401/403 distinction is worth getting right: <C>401</C> means "I do not know who you are", <C>403</C> means "I know, and no".</P>

    </>
  );
}
