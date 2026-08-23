import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, H3, LI, Lead, P, UL } from '../components/Prose';

export default function RequestsContent() {
  return (
    <>
      <H2>Reading input</H2>

      <H3><C>input</C> — query string or body</H3>

      <Lead>
        The one you will use most:
      </Lead>

      <CodeExample
        language="rust"
        code={`let page: Option<u32> = ctx.request.input("page")?;
let page = page.unwrap_or(1);`}
      />

      <P>Or in one line:</P>

      <CodeExample
        language="rust"
        code={`let page = ctx.request.input::<u32>("page")?.unwrap_or(1);`}
      />

      <P><C>input</C> checks the query string first, then falls back to the JSON body. So <C>?page=2</C> and <C>{'{'}"page": 2{'}'}</C> both work, and your action does not care which the client used.</P>

      <P>Two layers of "might not work" are worth separating:</P>

      <UL>
        <LI key={0}><strong><C>Option</C></strong> — the key was absent. Not an error; you decide the default.</LI>
        <LI key={1}><strong><C>?</C></strong> — the key was present but could not be read as the type you asked for. That *is* an error, and it becomes a <C>400</C> naming the field.</LI>
      </UL>

      <H3><C>query</C> and <C>query_all</C></H3>

      <P>When you specifically want the query string:</P>

      <CodeExample
        language="rust"
        code={`let search: Option<String> = ctx.request.query("q")?;
let tags: Vec<String> = ctx.request.query_all("tag")?;   // ?tag=a&tag=b`}
      />

      <P><C>query</C> takes the first value of a repeated key; <C>query_all</C> takes them all.</P>

      <H3><C>body_json</C> — the whole body</H3>

      <CodeExample
        language="rust"
        code={`#[derive(Deserialize)]
struct CreatePost {
    title: String,
    body: String,
}

let input: CreatePost = ctx.request.body_json()?;`}
      />

      <P>A body that will not deserialize produces a <C>400</C>, not a <C>422</C>. The distinction matters: <C>422</C> says "these fields are wrong", which implies the client can fix them one at a time. A body that is not valid JSON at all is a broken request.</P>

      <P>For anything user-facing, prefer <C>validate</C> over <C>body_json</C> — chapter 15.</P>

      <H3>Headers and cookies</H3>

      <CodeExample
        language="rust"
        code={`let agent = ctx.request.header("user-agent");        // Option<&str>
let token = ctx.request.bearer_token();              // Option<&str>, strips "Bearer "
let session = ctx.request.cookie("luxid_session");   // Option<&str>`}
      />

      <H3>Everything else</H3>

      <CodeExample
        language="rust"
        code={`ctx.request.method()      // &Method
ctx.request.path()        // &str
ctx.request.uri()         // &Uri
ctx.request.headers()     // &HeaderMap
ctx.request.body_bytes()  // &Bytes — raw, for uploads or signatures`}
      />

      <H2>Writing output</H2>

      <P><C>ctx.response</C> is a builder. Methods come in two kinds.</P>

      <P><strong>Builders</strong> return a <C>Response</C> and can be chained:</P>

      <CodeExample
        language="rust"
        code={`ctx.response.status(201).header("x-trace", trace_id)`}
      />

      <P><strong>Terminal methods</strong> return <C>Result{'<'}Response{'>'}</C> and finish the action:</P>

      <CodeExample
        language="rust"
        code={`ctx.response.ok(post)`}
      />

      <P>So a typical action ends with exactly one terminal call, optionally after some builders.</P>

      <H3>The terminal methods</H3>

      <CodeExample
        language="rust"
        code={`ctx.response.ok(value)         // 200, JSON body
ctx.response.created(value)    // 201, JSON body
ctx.response.accepted(value)   // 202, JSON body
ctx.response.no_content()      // 204, no body
ctx.response.json(value)       // JSON body, whatever status is set
ctx.response.text("hello")     // text/plain
ctx.response.redirect("/here") // 303
ctx.response.bytes(data, "image/png")`}
      />

      <P>Anything implementing <C>serde::Serialize</C> can be a body — your models, a <C>Vec</C>, a <C>serde_json::json!</C> literal, a tuple struct.</P>

      <H3>Setting a status yourself</H3>

      <CodeExample
        language="rust"
        code={`ctx.response.status(418).json(json!({ "detail": "I'm a teapot" }))`}
      />

      <P>An out-of-range status becomes a <C>500</C> rather than panicking, on the grounds that a programming error should not take the process down.</P>

      <H3>Headers and cookies</H3>

      <CodeExample
        language="rust"
        code={`ctx.response
    .header("x-request-id", id)
    .cookie(Cookie::new("theme", "dark").max_age(86_400))
    .ok(body)`}
      />

      <P>Cookies default to <C>HttpOnly</C>, <C>SameSite=Lax</C>, <C>Path=/</C>. Override deliberately:</P>

      <CodeExample
        language="rust"
        code={`Cookie::new("theme", "dark")
    .http_only(false)          // readable from JavaScript
    .secure(true)              // HTTPS only — turn this on in production
    .same_site(SameSite::Strict)`}
      />

      <H2>A worked example</H2>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;
use serde::Deserialize;
use serde_json::json;

#[derive(Deserialize)]
struct Search {
    term: String,
}

pub struct SearchController;

#[luxid::controller]
impl SearchController {
    async fn index(ctx: HttpContext) -> Result<Response> {
        let page = ctx.request.input::<u32>("page")?.unwrap_or(1);
        let per_page = ctx.request.input::<u32>("per_page")?.unwrap_or(20).min(100);

        ctx.response
            .header("x-page", page.to_string())
            .ok(json!({ "page": page, "per_page": per_page, "results": [] }))
    }

    async fn store(ctx: HttpContext) -> Result<Response> {
        let search: Search = ctx.request.body_json()?;

        if search.term.trim().is_empty() {
            return Err(Error::BadRequest("a search term is required".into()));
        }

        ctx.response.created(json!({ "term": search.term }))
    }
}`}
      />

      <P>Two habits worth copying from that: clamping <C>per_page</C> so a client cannot ask for a million rows, and returning early with an explicit error rather than nesting the happy path inside an <C>if</C>.</P>

    </>
  );
}
