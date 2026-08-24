import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, H3, Lead, P } from '../components/Prose';

export default function TestingContent() {
  return (
    <>
      <Lead>
        Luxid tests go through the <strong>real</strong> service: the same routing, middleware, container, and adapter that production uses. A passing test therefore means the endpoint works, not that a parallel code path works.
      </Lead>

      <H2>The shape</H2>

      <CodeExample
        language="rust"
        code={`// tests/posts.rs
use luxid::prelude::*;
use luxid_testing::TestApp;
use serde_json::json;

#[luxid::test(db = crate::support::database)]
async fn the_index_is_paginated(db: Db) -> Result<()> {
    app(db)
        .get("/api/posts")
        .send()
        .await
        .assert_ok()
        .assert_json_count("data", 2)
        .assert_json_path("data.0.title", "First");

    Ok(())
}`}
      />

      <P><C>luxid new</C> already declares the harness in your <C>Cargo.toml</C>. If you are adding Luxid to an existing project, add it yourself:</P>

      <CodeExample
        language="toml"
        code={`[dev-dependencies]
luxid-testing = "0.2"`}
      />

      <H2>Each test gets a clean database</H2>

      <P><C>#[luxid::test(db = ...)]</C> runs the body inside a <strong>transaction that is rolled back afterwards</strong>. Tests share one database, run in parallel, and need no truncation, no fixtures, and no ordering.</P>

      <P>The <C>db = </C> argument names a function returning a <C>Db</C>:</P>

      <CodeExample
        language="rust"
        code={`// tests/support.rs — or a module in your test file
use luxid::prelude::*;

pub async fn database() -> Db {
    let db = Db::in_memory().await.expect("opens");
    db.migrate::<migration::Migrator>().await.expect("migrates");
    db
}`}
      />

      <P><C>Db::in_memory()</C> gives an isolated SQLite database. Running your real migrations against it means your tests exercise the real schema.</P>

      <P>Without a database argument, <C>#[luxid::test]</C> is <C>#[tokio::test]</C> plus <C>Result</C> unwrapping.</P>

      <H2>Building the app under test</H2>

      <CodeExample
        language="rust"
        code={`fn app(db: Db) -> TestApp {
    TestApp::new(
        App::new()
            .providers(
                Providers::new()
                    .singleton(move |_| db.clone())
                    .singleton(|_| Jwt::new(SECRET)),
            )
            .middleware(WithDatabase)
            .routes(crate::routes::register)
            .into_service(),
    )
}`}
      />

      <P>Note it registers <C>crate::routes::register</C> — the <strong>real</strong> routing table. Tests that wire up their own routes test their own wiring rather than yours.</P>

      <P><C>into_service()</C> deliberately skips the boot-time check that every singleton resolves, so a test can bind only what it needs.</P>

      <H2>Making requests</H2>

      <CodeExample
        language="rust"
        code={`app.get("/api/posts").send().await;

app.post("/api/posts")
    .json(json!({ "title": "Hello" }))
    .send()
    .await;

app.put("/api/posts/1").json(body).send().await;
app.delete("/api/posts/1").send().await;

app.get("/api/me").header("x-trace", "abc").send().await;
app.get("/api/me").bearer(token).send().await;`}
      />

      <H3>Acting as a user</H3>

      <CodeExample
        language="rust"
        code={`app(db).get("/api/me").acting_as(SECRET, user.id).send().await.assert_ok();`}
      />

      <P><C>acting_as</C> signs a real token with your secret, so the request goes <strong>through</strong> the guard rather than around it. A test that bypassed the guard would not be testing the guard.</P>

      <P>With claims:</P>

      <CodeExample
        language="rust"
        code={`app.get("/api/admin")
    .acting_as_with(SECRET, user.id, [("role".to_owned(), json!("admin"))])
    .send()
    .await;`}
      />

      <P>And for sessions:</P>

      <CodeExample
        language="rust"
        code={`app.get("/api/cart").with_session(session_id).send().await;`}
      />

      <H2>Assertions</H2>

      <CodeExample
        language="rust"
        code={`.assert_ok()                    // 200
.assert_created()               // 201
.assert_no_content()            // 204
.assert_unauthorized()          // 401
.assert_forbidden()             // 403
.assert_not_found()             // 404
.assert_status(418)

.assert_header("content-type", "application/json; charset=utf-8")

.assert_json_path("data.0.title", "First")
.assert_json_count("data", 3)
.assert_validation_message("email", "has already been taken")
.assert_validation_errors(&["email", "name"])`}
      />

      <P>They chain, and <strong>every failure prints the response body</strong> — a failure that says only "expected 200, got 500" costs a debugging session the body would have saved.</P>

      <P><C>assert_validation_errors</C> asserts a <C>422</C> naming <strong>exactly</strong> those fields; extra or missing fields both fail. That is usually what you want, since a rule firing that you did not expect is a bug.</P>

      <P>For anything else, read the body:</P>

      <CodeExample
        language="rust"
        code={`let response = app.get("/api/posts").send().await;
let body = response.json();

assert_eq!(body["data"].as_array().unwrap().len(), 2);`}
      />

      <P>Note <C>assert_json_path</C> reads from the <strong>root</strong> of the body. Validation errors live under <C>errors</C>, so it is <C>errors.email.0</C> — or just use <C>assert_validation_message</C>, which exists so nobody gets that prefix wrong.</P>

      <H2>Factories</H2>

      <P>A factory describes a <em>typical</em> row so tests can override only what they care about:</P>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;
use sea_orm::ActiveValue::Set;

use crate::entities::users;

pub struct UserFactory;

impl Factory for UserFactory {
    type Active = users::ActiveModel;

    fn definition() -> Self::Active {
        let n = next_id();

        users::ActiveModel {
            name: Set(format!("User {n}")),
            email: Set(format!("user{n}@example.com")),
            role: Set("member".to_owned()),
            ..Default::default()
        }
    }
}`}
      />

      <CodeExample
        language="rust"
        code={`UserFactory::new().create_one().await?;                                  // one
UserFactory::new().count(3).create().await?;                             // three
UserFactory::new().state(|u| u.role = Set("admin".into())).create_one().await?;
UserFactory::new().count(2).make();                                      // no database`}
      />

      <P>Make each generated row <strong>distinct</strong> — a counter, a random suffix. Three identical rows break any test that asserts on a unique column.</P>

      <P>States apply in order, so a later one wins. <C>create_one</C> ignores <C>count</C>.</P>

      <P><C>luxid make:model User -f</C> generates the file; <C>cargo luxid db:sync</C> fills in the required columns from your schema.</P>

      <H2>What to test</H2>

      <P>Endpoints, mostly — the thing a client actually touches:</P>

      <CodeExample
        language="rust"
        code={`#[luxid::test(db = crate::support::database)]
async fn only_the_owner_may_update(db: Db) -> Result<()> {
    let owner = UserFactory::new().create_one().await?;
    let other = UserFactory::new().create_one().await?;
    let post = PostFactory::new()
        .state(move |p| p.user_id = Set(owner.id))
        .create_one()
        .await?;

    let app = app(db);

    app.put(&format!("/api/posts/{}", post.id))
        .acting_as(SECRET, owner.id)
        .json(json!({ "title": "Updated" }))
        .send()
        .await
        .assert_ok();

    app.put(&format!("/api/posts/{}", post.id))
        .acting_as(SECRET, other.id)
        .json(json!({ "title": "Hijacked" }))
        .send()
        .await
        .assert_forbidden();

    Ok(())
}`}
      />

      <P>Policies, scopes, and pure helpers are worth unit-testing directly since they need no HTTP.</P>

      <H2>Turn N+1s into failures</H2>

      <P>Leave strict relations on in tests:</P>

      <CodeExample
        language="toml"
        code={`[database]
strict_relations = true`}
      />

      <P>Then an endpoint that forgets <C>.with("author")</C> fails its test rather than quietly issuing a query per row.</P>

      <H2>Running</H2>

      <CodeExample
        language="sh"
        code={`cargo test                     # everything
cargo test --test posts        # one file
cargo test only_the_owner      # by name
cargo test -- --nocapture      # show println output`}
      />

    </>
  );
}
