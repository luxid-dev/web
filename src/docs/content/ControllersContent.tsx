import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, Lead, P, Table } from '../components/Prose';

export default function ControllersContent() {
  return (
    <>
      <Lead>
        A controller groups related actions. An action handles one endpoint.
      </Lead>

      <H2>The shape</H2>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;
use serde_json::json;

pub struct PostsController;

#[luxid::controller]
impl PostsController {
    async fn index(ctx: HttpContext) -> Result<Response> {
        ctx.response.ok(json!({ "posts": [] }))
    }

    async fn show(ctx: HttpContext) -> Result<Response> {
        let id: i64 = ctx.params.get("id")?;
        ctx.response.ok(json!({ "id": id }))
    }
}`}
      />

      <P>Every action has the same signature:</P>

      <CodeExample
        language="rust"
        code={`async fn name(ctx: HttpContext) -> Result<Response>`}
      />

      <P><C>async</C> because almost everything real is asynchronous. One <C>HttpContext</C> in, a <C>Result{'<'}Response{'>'}</C> out. That is the whole contract.</P>

      <H2>What <C>#[luxid::controller]</C> does</H2>

      <P>For each action in the block, it generates a route handler and exposes it under the action's name. That is why <C>r.get("/posts", PostsController::index)</C> works — <C>PostsController::index</C> is something the macro created.</P>

      <P>It leaves everything else alone. Helper functions, associated constants, and methods taking <C>&self</C> are untouched:</P>

      <CodeExample
        language="rust"
        code={`#[luxid::controller]
impl PostsController {
    async fn index(ctx: HttpContext) -> Result<Response> {
        ctx.response.ok(json!({ "per_page": Self::per_page() }))
    }

    // Not an action: takes no context. Left exactly as written.
    fn per_page() -> u32 {
        20
    }
}`}
      />

      <P>The rule is mechanical: an <C>async fn</C> whose single argument is an <C>HttpContext</C> <strong>by value</strong> becomes an action. Everything else — including a helper taking <C>&amp;HttpContext</C> — is left alone, which is how actions share logic without accidentally acquiring a route:</P>

      <CodeExample
        language="rust"
        code={`// An action.
async fn show(ctx: HttpContext) -> Result<Response> { /* ... */ }

// A helper. Same block, no route.
async fn find_owned(ctx: &HttpContext) -> Result<Post> { /* ... */ }`}
      />

      <H2>What is in the context</H2>

      <P><C>HttpContext</C> carries eight things:</P>

      <Table
        headers={['Field', 'What it is', 'Chapter']}
        rows={[
            [<span key={0}><C>ctx.request</C></span>, <span key={1}>The incoming request</span>, <span key={2}>06</span>],
            [<span key={0}><C>ctx.response</C></span>, <span key={1}>A response builder</span>, <span key={2}>06</span>],
            [<span key={0}><C>ctx.params</C></span>, <span key={1}>Route parameters</span>, <span key={2}>04</span>],
            [<span key={0}><C>ctx.auth</C></span>, <span key={1}>Who the request is</span>, <span key={2}>16</span>],
            [<span key={0}><C>ctx.session</C></span>, <span key={1}>Cookie-backed state</span>, <span key={2}>17</span>],
            [<span key={0}><C>ctx.services</C></span>, <span key={1}>Your registered services</span>, <span key={2}>09</span>],
            [<span key={0}><C>ctx.config</C></span>, <span key={1}>Configuration</span>, <span key={2}>10</span>],
            [<span key={0}><C>ctx.extensions</C></span>, <span key={1}>A typed bag middleware can write to</span>, <span key={2}>08</span>],
        ]}
      />

      <P>There is deliberately no <C>ctx.db</C>. Queries do not need one — the database is <em>ambient</em> within a request, so <C>Post::find(id).await?</C> just works. On the rare occasion you need the handle itself (to open a transaction), resolve it like any other service: <C>ctx.services.get::{'<'}Db{'>'}()?</C>.</P>

      <P>An action uses two or three of these. They are all there so you never have to change a signature to reach one.</P>

      <H2>The two styles</H2>

      <P>Because <C>HttpContext</C> is an ordinary struct, you can destructure it:</P>

      <CodeExample
        language="rust"
        code={`async fn store(HttpContext { request, response, .. }: HttpContext) -> Result<Response> {
    let input: Value = request.body_json()?;
    response.created(input)
}`}
      />

      <P>That is the same type — it is a style choice, not a different mode. The <C>..</C> is required and is deliberately so: it means new fields can be added to <C>HttpContext</C> in future versions without breaking your code.</P>

      <P>Most people find the short signature easier to read, and destructure inside the body when they want short names:</P>

      <CodeExample
        language="rust"
        code={`async fn store(ctx: HttpContext) -> Result<Response> {
    let HttpContext { request, response, .. } = ctx;
    // ...
}`}
      />

      <P>Use whichever you prefer; the tutorial uses <C>ctx: HttpContext</C> throughout.</P>

      <H2>One thing that catches everyone</H2>

      <P>This does not compile:</P>

      <CodeExample
        language="rust"
        code={`ctx.response.ok(json!({ "id": ctx.params.get::<i64>("id")? }))   // ✗`}
      />

      <P><C>ctx.response.ok(...)</C> <strong>moves</strong> the response out of <C>ctx</C> before the argument is evaluated, so the argument cannot also use <C>ctx</C>. Bind first:</P>

      <CodeExample
        language="rust"
        code={`let id: i64 = ctx.params.get("id")?;                            // ✓
ctx.response.ok(json!({ "id": id }))`}
      />

      <P>This is ordinary Rust move semantics rather than anything Luxid invented, but it is the error new users hit most often.</P>

      <H2>Organising controllers</H2>

      <P>One controller per resource, named plurally, in a file named after it:</P>

      <CodeExample
        language="text"
        code={`src/controllers/
├── mod.rs
├── auth_controller.rs        AuthController
├── posts_controller.rs       PostsController
└── comments_controller.rs    CommentsController`}
      />

      <P><C>luxid make:model Post -c</C> produces exactly this and registers the routes. You can of course write them by hand.</P>

      <H2>Keeping actions short</H2>

      <P>An action should read like a summary of what the endpoint does. When it grows past a screen, the usual culprits and their homes:</P>

      <Table
        headers={['The action is doing...', 'Move it to', 'Chapter']}
        rows={[
            [<span key={0}>checking input</span>, <span key={1}>a validator</span>, <span key={2}>15</span>],
            [<span key={0}>deciding permission</span>, <span key={1}>a policy</span>, <span key={2}>18</span>],
            [<span key={0}>reusable query filtering</span>, <span key={1}>a scope</span>, <span key={2}>14</span>],
            [<span key={0}>something on every request</span>, <span key={1}>middleware</span>, <span key={2}>08</span>],
            [<span key={0}>business logic used in several places</span>, <span key={1}>a service</span>, <span key={2}>09</span>],
        ]}
      />

      <P>A well-factored action is often four lines:</P>

      <CodeExample
        language="rust"
        code={`async fn store(ctx: HttpContext) -> Result<Response> {
    let input = ctx.request.validate::<StorePost>().await?;
    let post = luxid::insert(posts::ActiveModel { /* ... */ }).await?;

    ctx.response.created(post)
}`}
      />

    </>
  );
}
