import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, LI, Lead, P, Table, UL } from '../components/Prose';

export default function RoutingContent() {
  return (
    <>
      <Lead>
        A route says: *this method and path go to this action.* Every route in a Luxid app is registered in one function, so the routing table is something you read rather than deduce.
      </Lead>

      <H2>The five verbs</H2>

      <CodeExample
        language="rust"
        code={`pub fn register(r: &mut Router) {
    r.get("/posts", PostsController::index);
    r.post("/posts", PostsController::store);
    r.put("/posts/{id}", PostsController::update);
    r.patch("/posts/{id}", PostsController::patch);
    r.delete("/posts/{id}", PostsController::destroy);
}`}
      />

      <P>The second argument is an action, referenced <strong>without parentheses</strong>. You are naming the action, not calling it.</P>

      <H2>Route parameters</H2>

      <P>Curly braces capture a path segment:</P>

      <CodeExample
        language="rust"
        code={`r.get("/posts/{id}", PostsController::show);`}
      />

      <CodeExample
        language="rust"
        code={`async fn show(ctx: HttpContext) -> Result<Response> {
    let id: i64 = ctx.params.get("id")?;
    // ...
}`}
      />

      <P><C>params.get</C> decodes into whatever type you ask for. <C>/posts/abc</C> requested as an <C>i64</C> produces a <C>400</C> with a message naming the parameter — no handling needed in the action.</P>

      <P>Use <C>try_get</C> when a parameter is genuinely optional:</P>

      <CodeExample
        language="rust"
        code={`let id: Option<i64> = ctx.params.try_get("id")?;`}
      />

      <P>You can capture more than one:</P>

      <CodeExample
        language="rust"
        code={`r.get("/teams/{team}/posts/{id}", PostsController::show);`}
      />

      <H2>Groups</H2>

      <P>A group applies a common prefix:</P>

      <CodeExample
        language="rust"
        code={`r.group("/api/v1", |r| {
    r.get("/posts", PostsController::index);      // /api/v1/posts
    r.get("/posts/{id}", PostsController::show);  // /api/v1/posts/{id}
});`}
      />

      <P>Groups nest:</P>

      <CodeExample
        language="rust"
        code={`r.group("/api", |r| {
    r.group("/v1", |r| {
        r.get("/posts", PostsController::index);  // /api/v1/posts
    });

    r.group("/v2", |r| {
        r.get("/posts", v2::PostsController::index);  // /api/v2/posts
    });
});`}
      />

      <P>Groups also carry middleware, which is their more important job — see chapter 8.</P>

      <H2>Resource routes</H2>

      <P>Five routes for one resource is a common shape, so there is a shortcut:</P>

      <CodeExample
        language="rust"
        code={`r.resource("/posts", PostsController);`}
      />

      <P>That single line registers, for a controller defining all five actions:</P>

      <Table
        headers={['Method', 'Path', 'Action']}
        rows={[
            [<span key={0}>GET</span>, <span key={1}><C>/posts</C></span>, <span key={2}><C>index</C></span>],
            [<span key={0}>POST</span>, <span key={1}><C>/posts</C></span>, <span key={2}><C>store</C></span>],
            [<span key={0}>GET</span>, <span key={1}><C>/posts/{'{'}id{'}'}</C></span>, <span key={2}><C>show</C></span>],
            [<span key={0}>PUT</span>, <span key={1}><C>/posts/{'{'}id{'}'}</C></span>, <span key={2}><C>update</C></span>],
            [<span key={0}>DELETE</span>, <span key={1}><C>/posts/{'{'}id{'}'}</C></span>, <span key={2}><C>destroy</C></span>],
        ]}
      />

      <P>Note the argument: <C>PostsController</C>, the <strong>struct value</strong>, not an action.</P>

      <P><strong>Only the actions that exist are registered.</strong> A read-only controller:</P>

      <CodeExample
        language="rust"
        code={`#[luxid::controller]
impl ReportsController {
    async fn index(ctx: HttpContext) -> Result<Response> { /* ... */ }
    async fn show(ctx: HttpContext) -> Result<Response> { /* ... */ }
}`}
      />

      <CodeExample
        language="rust"
        code={`r.resource("/reports", ReportsController);`}
      />

      <P>registers two routes, not five. You never get a <C>DELETE</C> route pointing at an action that does not exist.</P>

      <P>Any <em>other</em> action on the controller — say <C>archive</C> — is not part of the resource convention and gets no route. Register it yourself if you want one:</P>

      <CodeExample
        language="rust"
        code={`r.resource("/posts", PostsController);
r.post("/posts/{id}/archive", PostsController::archive);`}
      />

      <P>A controller with none of the five resource actions cannot be passed to <C>resource</C> at all — that is a compile error, not a silently empty registration.</P>

      <H2>Reading the table</H2>

      <CodeExample
        language="sh"
        code={`cargo luxid routes`}
      />

      <CodeExample
        language="text"
        code={`GET     /api/posts       PostsController::index    [1 middleware]
POST    /api/posts       PostsController::store    [1 middleware]
GET     /api/posts/{id}  PostsController::show     [1 middleware]
PUT     /api/posts/{id}  PostsController::update   [1 middleware]
DELETE  /api/posts/{id}  PostsController::destroy  [1 middleware]`}
      />

      <P>Reach for this whenever an endpoint behaves unexpectedly. It answers:</P>

      <UL>
        <LI key={0}>Is the route registered at all?</LI>
        <LI key={1}>Is the path what I think it is? (A missing or doubled prefix is common.)</LI>
        <LI key={2}>Is the right action handling it?</LI>
        <LI key={3}>How many middleware wrap it? (A route missing its guard shows up here.)</LI>
      </UL>

      <H2>Order does not decide matching</H2>

      <P>Unlike some frameworks, Luxid does not match routes in declaration order — the underlying router picks the most specific match. So <C>/posts/{'{'}id{'}'}</C> and <C>/posts/featured</C> can coexist, and <C>featured</C> will win for that exact path.</P>

      <P>One consequence worth knowing: a request to <C>/posts/archive</C> where only <C>/posts/{'{'}id{'}'}</C> is registered <em>does</em> match — and then fails when <C>archive</C> cannot be read as an <C>i64</C>, producing a <C>400</C>. That is the correct behaviour, but it surprises people expecting a <C>404</C>.</P>

      <H2>A realistic routing file</H2>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;

use crate::controllers;

pub fn register(r: &mut Router) {
    r.group("/api", |r| {
        // Public
        r.get("/health", controllers::health_controller::HealthController::show);
        r.post("/register", controllers::auth_controller::AuthController::register);
        r.post("/login", controllers::auth_controller::AuthController::login);

        // Authenticated
        r.group("/", |r| {
            r.middleware(Auth::jwt());

            r.get("/me", controllers::me_controller::MeController::show);
            r.resource("/posts", controllers::posts_controller::PostsController);
        });

        // <luxid:routes>
    });
}`}
      />

      <P>Public routes first, then a group carrying the guard. That grouping is the point of chapter 8.</P>

    </>
  );
}
