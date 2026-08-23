import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, H3, LI, Lead, OL, OLI, P, UL } from '../components/Prose';

export default function FirstAppContent() {
  return (
    <>
      <Lead>
        We will build one endpoint, understand every file involved, then add a second endpoint that takes input. Keep this project — later chapters build on it.
      </Lead>

      <CodeExample
        language="sh"
        code={`luxid new blog
cd blog`}
      />

      <H2>The tour</H2>

      <P>Nine things were created. Here is what each is for, in the order a request touches them.</P>

      <H3><C>src/main.rs</C></H3>

      <CodeExample
        language="rust"
        code={`mod app;
mod config;
mod controllers;
// ... the rest of the module declarations

#[tokio::main]
async fn main() -> luxid::Result<()> {
    let _ = dotenvy::dotenv();

    luxid::cli::run::<migration::Migrator>(app::build().await?).await
}`}
      />

      <P>Four lines of behaviour:</P>

      <OL>
        <OLI key={0} number={1}><C>dotenvy::dotenv()</C> loads a <C>.env</C> file if one exists. The <C>let _ =</C> means "it is fine if there isn't one".</OLI>
        <OLI key={1} number={2}><C>app::build()</C> assembles the application.</OLI>
        <OLI key={2} number={3}><C>luxid::cli::run</C> looks at the command-line arguments. No arguments means serve; <C>migrate</C>, <C>routes</C>, <C>openapi</C> and friends do those things instead.</OLI>
      </OL>

      <P><C>main.rs</C> rarely changes.</P>

      <H3><C>src/app.rs</C></H3>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;

pub async fn build() -> luxid::Result<App> {
    let config = Config::load("luxid.toml")?;

    luxid::set_strict_relations(
        config.get_or("database.strict_relations", cfg!(debug_assertions))?,
    );

    let url = config.get_or("database.url", "sqlite://./app.db?mode=rwc".to_owned())?;
    let db = Db::connect(url).await?;

    Ok(App::new()
        .config(config)
        .providers(providers(db))
        .middleware(WithDatabase)
        .routes(crate::routes::register))
}

fn providers(db: Db) -> Providers {
    Providers::new().singleton(move |_| db.clone())
}`}
      />

      <P>This is the one file that knows how the whole application fits together: configuration is loaded, a database connection is opened, shared objects are registered, global middleware is attached, routes are wired in.</P>

      <P>Read it top to bottom whenever you forget how something is set up.</P>

      <P><C>WithDatabase</C> is middleware that makes the database available to every request. Without it, queries fail with a message telling you it is missing.</P>

      <H3><C>src/routes.rs</C></H3>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;

use crate::controllers;

pub fn register(r: &mut Router) {
    r.group("/api", |r| {
        r.get("/health", controllers::health_controller::HealthController::show);

        // <luxid:routes>
    });
}`}
      />

      <P>The routing table, as plain code. <C>r.group("/api", ...)</C> puts everything inside it under <C>/api</C>.</P>

      <P>That <C>// {'<'}luxid:routes{'>'}</C> comment is a <strong>marker</strong>. When you run <C>luxid make:model Post -c</C>, the generator inserts the new routes just above it. Leave it there — but the lines it writes are ordinary code you own and can rearrange.</P>

      <H3><C>src/controllers/health_controller.rs</C></H3>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;
use serde_json::json;

pub struct HealthController;

#[luxid::controller]
impl HealthController {
    #[openapi(summary = "Liveness probe", tag = "system")]
    async fn show(ctx: HttpContext) -> Result<Response> {
        ctx.response.ok(json!({ "status": "ok" }))
    }
}`}
      />

      <P>The endpoint itself. Three things to notice:</P>

      <UL>
        <LI key={0}><strong><C>pub struct HealthController;</C></strong> — an empty struct that exists only to group related actions and give them a name.</LI>
        <LI key={1}><strong><C>#[luxid::controller]</C></strong> — turns each <C>async fn</C> in the block into something the router can accept. Without it, <C>HealthController::show</C> would not exist as a route target.</LI>
        <LI key={2}><strong><C>#[openapi(...)]</C></strong> — optional documentation, covered in chapter 19. Delete it and everything still works.</LI>
      </UL>

      <H3>The empty directories</H3>

      <P><C>models/</C>, <C>entities/</C>, <C>validators/</C>, <C>services/</C>, <C>middleware/</C>, <C>policies/</C>, <C>factories/</C>, <C>seeders/</C> each start with just a <C>mod.rs</C> containing a marker. They fill up as you generate things. Each gets its own chapter.</P>

      <H3><C>migration/</C></H3>

      <P>A separate small crate holding your database changes. Chapter 11.</P>

      <H3><C>luxid.toml</C></H3>

      <CodeExample
        language="toml"
        code={`[app]
name = "blog"
per_page = 20

[database]
strict_relations = true`}
      />

      <P>Settings your application reads at startup and can read again from any action. Environment variables override these — <C>app.name</C> is also <C>APP_NAME</C>. Chapter 10.</P>

      <H2>Adding an endpoint</H2>

      <P>Create <C>src/controllers/greeting_controller.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;
use serde_json::json;

pub struct GreetingController;

#[luxid::controller]
impl GreetingController {
    async fn hello(ctx: HttpContext) -> Result<Response> {
        ctx.response.ok(json!({ "message": "Hello from Luxid" }))
    }
}`}
      />

      <P>Rust needs to be told the file exists. In <C>src/controllers/mod.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`pub mod greeting_controller;
pub mod health_controller;

// <luxid:modules>`}
      />

      <P>And register the route in <C>src/routes.rs</C>, inside the group:</P>

      <CodeExample
        language="rust"
        code={`r.get("/hello", controllers::greeting_controller::GreetingController::hello);`}
      />

      <P>Run it:</P>

      <CodeExample
        language="sh"
        code={`cargo run`}
      />

      <CodeExample
        language="sh"
        code={`curl localhost:3000/api/hello`}
      />

      <CodeExample
        language="json"
        code={`{"message":"Hello from Luxid"}`}
      />

      <P><strong>Three steps for every new controller</strong>: write the file, declare the module, register the route. Miss the second and you get "file not found in module tree"; miss the third and you get a 404.</P>

      <H2>Reading input</H2>

      <P>Change the action to greet by name:</P>

      <CodeExample
        language="rust"
        code={`async fn hello(ctx: HttpContext) -> Result<Response> {
    let name: String = ctx.request.input("name")?.unwrap_or_else(|| "world".to_owned());

    ctx.response.ok(json!({ "message": format!("Hello, {name}") }))
}`}
      />

      <CodeExample
        language="sh"
        code={`curl 'localhost:3000/api/hello?name=Ada'`}
      />

      <CodeExample
        language="json"
        code={`{"message":"Hello, Ada"}`}
      />

      <P>Three things are happening in that one line:</P>

      <UL>
        <LI key={0}><strong><C>input</C></strong> looks in the query string first, then the JSON body. <C>?name=Ada</C> and <C>{'{'}"name":"Ada"{'}'}</C> both work.</LI>
        <LI key={1}><strong><C>Option</C></strong> — the key might be absent, so you decide the default.</LI>
        <LI key={2}><strong><C>?</C></strong> — the value might be present but undecodable. Ask for a <C>u32</C> and send <C>?name=abc</C> and the client gets a <C>400</C> explaining which field failed. You did not write that handling.</LI>
      </UL>

      <P>Try it:</P>

      <CodeExample
        language="sh"
        code={`curl 'localhost:3000/api/hello?name=Ada&name=Grace'   # first one wins`}
      />

      <H2>Seeing your routes</H2>

      <CodeExample
        language="sh"
        code={`cargo luxid routes`}
      />

      <CodeExample
        language="text"
        code={`GET  /api/health  HealthController::show      [1 middleware]
GET  /api/hello   GreetingController::hello   [1 middleware]`}
      />

      <P>Every registered route, what handles it, and how many middleware wrap it. When an endpoint 404s, this is the first thing to check — usually the route was never registered, or the path differs from what you are requesting.</P>

      <H2>What you now know</H2>

      <UL>
        <LI key={0}>How a request finds its way from <C>routes.rs</C> to an action</LI>
        <LI key={1}>The three steps for adding a controller</LI>
        <LI key={2}>That <C>ctx.request.input</C> reads from the query string or body, and that <C>?</C> turns bad input into a proper error response</LI>
        <LI key={3}>That <C>cargo luxid routes</C> answers "why is this 404ing?"</LI>
      </UL>

    </>
  );
}
