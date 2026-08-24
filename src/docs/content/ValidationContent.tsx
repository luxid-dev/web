import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, H3, Lead, P } from '../components/Prose';

export default function ValidationContent() {
  return (
    <>
      <Lead>
        Never trust input. This chapter replaces the hand-rolled checking from chapter 12 with something declarative, and introduces the rules that make Luxid's validation unusual: ones that consult the database.
      </Lead>

      <H2>A form request</H2>

      <P>A struct describing what the endpoint accepts, with the rules attached:</P>

      <CodeExample
        language="rust"
        code={`// src/validators/user.rs
use luxid::prelude::*;
use serde::Deserialize;

use crate::models::user::User;

#[derive(Debug, Deserialize, Validate, luxid::JsonSchema)]
pub struct StoreUser {
    #[validate(length(min = 2, max = 64))]
    pub name: String,

    #[validate(email, unique(User::email))]
    pub email: String,

    #[validate(length(min = 8))]
    pub password: String,
}`}
      />

      <P>Use it in an action:</P>

      <CodeExample
        language="rust"
        code={`async fn store(ctx: HttpContext) -> Result<Response> {
    let input = ctx.request.validate::<StoreUser>().await?;

    // Past this line, \`input\` is valid. Nothing else to check.
    ctx.response.created(json!({ "name": input.name }))
}`}
      />

      <P>One line replaces the entire block of <C>body.get(...).and_then(...)</C> from earlier. The <C>?</C> turns any failure into a <C>422</C> listing every problem.</P>

      <P>The <C>luxid::JsonSchema</C> derive is optional and only needed if you want this type in your OpenAPI document (chapter 19).</P>

      <H2>The rules</H2>

      <H3>Length — strings</H3>

      <CodeExample
        language="rust"
        code={`#[validate(length(min = 2))]
#[validate(length(max = 64))]
#[validate(length(min = 2, max = 64))]
#[validate(length(equal = 6))]`}
      />

      <P>Counted in <strong>characters, not bytes</strong> — "café" is four characters, and a user counting them agrees.</P>

      <H3>Email</H3>

      <CodeExample
        language="rust"
        code={`#[validate(email)]`}
      />

      <P>A pragmatic shape check, not RFC 5322. Full compliance accepts addresses no mail system will deliver to and rejects nothing users actually type; every framework that tries ends up with a regex nobody can read. If an address must genuinely work, send a confirmation link.</P>

      <H3>Range — numbers</H3>

      <CodeExample
        language="rust"
        code={`#[validate(range(min = 18))]
#[validate(range(min = 18, max = 120))]`}
      />

      <H3>Custom</H3>

      <CodeExample
        language="rust"
        code={`fn not_reserved(name: &String) -> bool {
    !matches!(name.as_str(), "admin" | "root")
}`}
      />

      <CodeExample
        language="rust"
        code={`#[validate(custom(function = not_reserved, message = "is reserved"))]
pub name: String,`}
      />

      <P>The function takes a reference to the field and returns <C>bool</C>.</P>

      <H3>Custom messages</H3>

      <P>Any rule accepts one:</P>

      <CodeExample
        language="rust"
        code={`#[validate(length(min = 8, message = "pick something longer"))]`}
      />

      <H2>Rules that hit the database</H2>

      <P>These are the ones no other Rust framework ships.</P>

      <H3><C>unique</C></H3>

      <CodeExample
        language="rust"
        code={`#[validate(email, unique(User::email))]
pub email: String,`}
      />

      <P>Fails with <em>"has already been taken"</em> if a row already holds that value. For an update, exclude the row being edited:</P>

      <CodeExample
        language="rust"
        code={`#[derive(Deserialize, Validate)]
pub struct UpdateUser {
    pub id: i64,

    #[validate(email, unique(User::email, except = "id"))]
    pub email: String,
}`}
      />

      <P><C>except</C> names a field <strong>on this struct</strong> holding the id to skip.</P>

      <H3><C>exists</C></H3>

      <CodeExample
        language="rust"
        code={`#[validate(exists(Team::id))]
pub team_id: i64,`}
      />

      <P>Fails with <em>"does not exist"</em> if nothing matches. Use it for foreign keys, so a bad reference becomes a clean <C>422</C> rather than a database constraint error surfacing as a <C>500</C>.</P>

      <H2>How the two kinds interact</H2>

      <P>Synchronous rules run first. Then the asynchronous ones run — <strong>skipping any field that already failed</strong>.</P>

      <P>That ordering matters. Send a malformed email and you get:</P>

      <CodeExample
        language="json"
        code={`{ "errors": { "email": ["must be a valid email address"] } }`}
      />

      <P>not:</P>

      <CodeExample
        language="json"
        code={`{ "errors": { "email": ["must be a valid email address", "has already been taken"] } }`}
      />

      <P>One mistake, one message. There is no point asking the database whether a malformed address is taken, and reporting both would be confusing.</P>

      <P>Fields that passed their synchronous rules still get their database rules in the <strong>same pass</strong>, so a form with three database-backed rules costs one round of queries — not three requests to discover three problems.</P>

      <H2>Everything at once</H2>

      <CodeExample
        language="rust"
        code={`#[derive(Deserialize, Validate)]
pub struct StoreUser {
    #[validate(length(min = 2, max = 64))]
    pub name: String,

    #[validate(email, unique(User::email))]
    pub email: String,

    #[validate(exists(Team::id))]
    pub team_id: i64,

    #[validate(range(min = 18, max = 120))]
    pub age: Option<i64>,
}`}
      />

      <CodeExample
        language="sh"
        code={`curl -X POST localhost:3000/api/users \\
  -d '{"name":"G","email":"nope","team_id":999,"age":5}'`}
      />

      <CodeExample
        language="json"
        code={`{
  "type": "https://luxid.rs/errors/validation",
  "title": "the given data was invalid",
  "status": 422,
  "errors": {
    "name": ["must be at least 2 characters"],
    "email": ["must be a valid email address"],
    "team_id": ["does not exist"],
    "age": ["must be at least 18"]
  }
}`}
      />

      <P>Four problems, one response. A client can fix the whole form in one pass.</P>

      <H2>Optional fields</H2>

      <P>An <C>Option</C> field is validated <strong>only when present</strong>:</P>

      <CodeExample
        language="rust"
        code={`#[validate(range(min = 18, max = 120))]
pub age: Option<i64>,`}
      />

      <P>Absent → no rule applies. Present → the range applies. Presence itself is a different question: make the field non-<C>Option</C> and serde will reject a body that omits it.</P>

      <H2>Malformed bodies are a 400</H2>

      <CodeExample
        language="sh"
        code={`curl -X POST localhost:3000/api/users -d 'not json at all'`}
      />

      <P>gives <C>400</C>, not <C>422</C>. A <C>422</C> says "these fields are wrong", which implies the client can fix them one at a time. A body that is not JSON is broken as a whole.</P>

      <H2>Where validators live</H2>

      <CodeExample
        language="text"
        code={`src/validators/
├── mod.rs
├── user.rs      StoreUser, UpdateUser
└── post.rs      StorePost, UpdatePost`}
      />

      <P><C>luxid make:model User -a</C> generates the file with both structs and a commented-out example rule. Unlike entities and factories, validators are <strong>not</strong> touched by <C>cargo luxid db:sync</C> — they carry no <C>{'<'}luxid:fields{'>'}</C> markers, because what an endpoint accepts is a decision, not a reflection of the table.</P>

      <H2>Building errors by hand</H2>

      <P>Occasionally a rule does not fit the declarative form:</P>

      <CodeExample
        language="rust"
        code={`async fn store(ctx: HttpContext) -> Result<Response> {
    let input = ctx.request.validate::<StoreBooking>().await?;

    if input.ends_at <= input.starts_at {
        let mut errors = ValidationErrors::new();
        errors.add("ends_at", "must be after the start time");

        return Err(Error::Validation(errors));
    }

    // ...
}`}
      />

      <P>The client sees the same shape either way.</P>

    </>
  );
}
