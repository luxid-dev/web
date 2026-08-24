import React from 'react';
import CodeExample from '@/components/CodeExample';
import { A, C, H2, H3, LI, Lead, P, UL } from '../components/Prose';

export default function IntroductionContent() {
  return (
    <>
      <H2>What Luxid is</H2>

      <Lead>
        Luxid is a web framework for Rust that takes its shape from Laravel and, more directly, from AdonisJS. If you have used either, most of this will feel familiar. If you have not, that is fine — this course assumes you have not.
      </Lead>

      <P>The pitch is short: <strong>Rust's performance and safety, without Rust's usual web boilerplate.</strong> You should be able to describe a resource and get a working, documented, tested API out the other side.</P>

      <P>Underneath, Luxid runs on <A href="https://salvo.rs">salvo</A>, a fast HTTP library. You will not see salvo anywhere in your code. That is deliberate — the substrate is sealed off so the framework can present one consistent surface.</P>

      <H2>Who this is for</H2>

      <P>Someone who knows Rust reasonably well and wants to build a web service. You should be comfortable with:</P>

      <UL>
        <LI key={0}>structs, enums, traits, and <C>impl</C> blocks</LI>
        <LI key={1}><C>Result{'<'}T, E{'>'}</C> and the <C>?</C> operator</LI>
        <LI key={2}><C>async fn</C> and <C>.await</C></LI>
      </UL>

      <P>You do <strong>not</strong> need to know salvo, SeaORM, tokio internals, or any other framework. Each is introduced when it first matters.</P>

      <H2>The four ideas</H2>

      <P>Almost everything in Luxid follows from four decisions. Learn these now and the rest of the framework will feel predictable rather than arbitrary.</P>

      <H3>1. One context, owned</H3>

      <P>Every controller action takes exactly one argument:</P>

      <CodeExample
        language="rust"
        code={`async fn index(ctx: HttpContext) -> Result<Response> {
    ctx.response.ok(json!({ "hello": "world" }))
}`}
      />

      <P><C>HttpContext</C> carries everything the request needs — the request itself, a response builder, route parameters, who the caller is, your services, configuration, the session. There is no second signature to learn, no set of "extractors" to memorise, and no way to get the argument list wrong. (The database is not a field on it: queries reach an ambient connection, so <C>Post::find(id).await?</C> needs no handle. Chapter 11.)</P>

      <P>Frameworks that use extractors ask you to write <C>async fn index(State(db): State{'<'}Db{'>'}, Query(page): Query{'<'}Page{'>'})</C> and, when you get it slightly wrong, hand you a page of trait-bound errors. Luxid trades a little magic for signatures that cannot fail to compile in confusing ways.</P>

      <H3>2. Errors carry their own status code</H3>

      <P>There is one error type, and each of its variants already knows what HTTP response it should become:</P>

      <CodeExample
        language="rust"
        code={`async fn show(ctx: HttpContext) -> Result<Response> {
    let post = Post::find_or_fail(ctx.params.get::<i64>("id")?).await?;
    ctx.response.ok(post)
}`}
      />

      <P>If that row does not exist, the client gets a well-formed <C>404</C> with a JSON body — and there is no error handling in the action at all. The <C>?</C> did it. This is the single biggest reason Luxid controllers stay short.</P>

      <H3>3. Convention, but visible</H3>

      <P>Luxid generates code for you: models, migrations, controllers, routes. What it generates is <strong>ordinary code in your project</strong>, which you can read, edit, and delete.</P>

      <P>Some frameworks discover your routes by scanning the binary at startup. Luxid does not. Your routes are a function you can read:</P>

      <CodeExample
        language="rust"
        code={`pub fn register(r: &mut Router) {
    r.group("/api", |r| {
        r.get("/health", controllers::health_controller::HealthController::show);
        r.resource("/posts", controllers::posts_controller::PostsController);
    });
}`}
      />

      <P>When a route 404s, you can find out why by reading that file, or by running <C>cargo luxid routes</C>. Nothing is hidden.</P>

      <H3>4. The mistakes should be loud</H3>

      <P>Luxid tries to turn quiet bugs into loud ones:</P>

      <UL>
        <LI key={0}>Reading a database relation you forgot to load is an <strong>error</strong> in development, naming the fix — so an N+1 query becomes a failing test rather than a slow production endpoint.</LI>
        <LI key={1}>A service you forgot to register fails <strong>at startup</strong>, naming the type, rather than on the first request that needs it.</LI>
        <LI key={2}>A validation rule that needs the database runs in the same pass as the rest, so the client gets every problem at once rather than one per round trip.</LI>
      </UL>

      <H2>What a Luxid app looks like</H2>

      <CodeExample
        language="text"
        code={`my-app/
├── luxid.toml            configuration
├── migration/            schema changes over time
└── src/
    ├── main.rs           four lines
    ├── app.rs            assembling the application
    ├── routes.rs         the routing table
    ├── controllers/      what happens per endpoint
    ├── models/           your behaviour on database rows
    ├── entities/         generated from the database schema
    ├── validators/       input rules
    ├── policies/         permission rules
    ├── services/         your own shared objects
    ├── middleware/       code that runs around requests
    ├── factories/        test data
    └── seeders/          development data`}
      />

      <P>If you have used Laravel, this is <C>app/Http/Controllers</C>, <C>app/Models</C>, <C>database/migrations</C> under different names. If you have not, each directory gets its own chapter.</P>

      <H2>What Luxid is not</H2>

      <P>Being honest about this saves you time later.</P>

      <UL>
        <LI key={0}><strong>It is not stable.</strong> This is 0.1.x. The API will change.</LI>
        <LI key={1}><strong>It is API-first.</strong> Luxid renders JSON. There is no template engine and no asset pipeline yet.</LI>
        <LI key={2}><strong>It does not do background jobs, email, or caching yet.</strong> Those are planned.</LI>
        <LI key={3}><strong>It has one data layer.</strong> Luxid uses SeaORM underneath. You can drop down to raw SeaORM whenever you need to, but you cannot swap in Diesel.</LI>
      </UL>

      <P>If you need server-rendered HTML today, or a job queue, Luxid is not ready for you yet. If you are building a JSON API, read on.</P>

    </>
  );
}
