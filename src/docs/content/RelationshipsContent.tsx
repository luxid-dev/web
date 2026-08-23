import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, H3, Lead, P } from '../components/Prose';

export default function RelationshipsContent() {
  return (
    <>
      <Lead>
        Rows reference other rows: a post has an author, a user has many posts. This chapter covers declaring those links, loading them efficiently, and the mistake that makes web applications slow.
      </Lead>

      <H2>The N+1 problem</H2>

      <P>Say you list twenty posts and show each author's name. The naive approach:</P>

      <CodeExample
        language="text"
        code={`SELECT * FROM posts LIMIT 20          -- 1 query
SELECT * FROM users WHERE id = 1      -- then one per post
SELECT * FROM users WHERE id = 2
... eighteen more`}
      />

      <P>Twenty-one queries for twenty posts. At a hundred posts it is a hundred and one. This is the <strong>N+1 problem</strong>, and it is the single most common cause of slow endpoints in every framework.</P>

      <P>The fix is to fetch all the authors in one query. Luxid calls that <strong>eager loading</strong>, and — importantly — it makes forgetting to do so an error rather than a slow page.</P>

      <H2>Declaring relations</H2>

      <P>In <C>src/models/post.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`pub use crate::entities::posts::Model as Post;

use crate::models::user::User;

#[luxid::model(belongs_to(author = User, fk = "user_id"))]
impl Post {}`}
      />

      <P>And the other direction, in <C>src/models/user.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`pub use crate::entities::users::Model as User;

use crate::models::post::Post;

#[luxid::model(has_many(posts = Post, fk = "user_id"))]
impl User {}`}
      />

      <P>Read those as sentences: <em>a post belongs to an author, found via the <C>user_id</C> column</em>; <em>a user has many posts, found via <C>posts.user_id</C></em>.</P>

      <H3>The three kinds</H3>

      <CodeExample
        language="rust"
        code={`#[luxid::model(
    has_many(posts = Post, fk = "user_id"),        // one user → many posts
    has_one(profile = Profile, fk = "user_id"),    // one user → one profile
    belongs_to(team = Team),                       // this row holds team_id
)]
impl User {}`}
      />

      <P><strong><C>has_many</C></strong> and <strong><C>has_one</C></strong> — the <em>other</em> table holds the foreign key, so you must name it with <C>fk</C>.</P>

      <P><strong><C>belongs_to</C></strong> — <em>this</em> table holds it, and the name is inferred from the relation: <C>belongs_to(team = Team)</C> looks for <C>team_id</C>. Override when it differs:</P>

      <CodeExample
        language="rust"
        code={`belongs_to(author = User, fk = "user_id")`}
      />

      <P>Both sides accept <C>local_key</C> when the joined column is not <C>id</C>.</P>

      <H2>Loading and reading them</H2>

      <CodeExample
        language="rust"
        code={`let posts = Post::query().with("author").paginate(1, 20).await?;

for post in &posts.data {
    let author = post.author()?;      // Option<&User>
}`}
      />

      <CodeExample
        language="rust"
        code={`let users = User::query().with("posts").all().await?;

for user in &users {
    let posts = user.posts()?;        // &[Post]
}`}
      />

      <P>Each relation generates a <strong>method named after it</strong>. That is why two relations pointing at the same model stay unambiguous:</P>

      <CodeExample
        language="rust"
        code={`#[luxid::model(
    belongs_to(author = User, fk = "author_id"),
    belongs_to(editor = User, fk = "editor_id"),
)]
impl Post {}`}
      />

      <CodeExample
        language="rust"
        code={`post.author()?    // Option<&User>
post.editor()?    // Option<&User>`}
      />

      <P>Load several at once:</P>

      <CodeExample
        language="rust"
        code={`Post::query().with("author").with("comments").all().await?`}
      />

      <H2>One query per relation, whatever the page size</H2>

      <P><C>.with("author")</C> on twenty posts issues <strong>one</strong> query for the authors:</P>

      <CodeExample
        language="text"
        code={`SELECT * FROM posts LIMIT 20
SELECT * FROM users WHERE id IN (1, 2, 3)`}
      />

      <P>Two queries, not twenty-one. Duplicate keys are collapsed first, so a hundred posts by three authors fetch three rows.</P>

      <H2>Relations serialize with the model</H2>

      <P>A loaded relation appears in the JSON alongside the columns:</P>

      <CodeExample
        language="rust"
        code={`let post = Post::query().with("author").first_or_fail().await?;
ctx.response.ok(post)`}
      />

      <CodeExample
        language="json"
        code={`{
  "id": 1,
  "title": "Hello",
  "user_id": 7,
  "author": { "id": 7, "name": "Ada" }
}`}
      />

      <P>A model with nothing loaded renders no relation keys at all — you never get <C>"author": null</C> for a relation you simply did not ask for.</P>

      <H2>Forgetting to load is an error</H2>

      <P>This is the part that saves you.</P>

      <CodeExample
        language="rust"
        code={`let posts = Post::query().all().await?;   // no .with("author")
let author = posts[0].author()?;          // ← Err`}
      />

      <CodeExample
        language="text"
        code={`the \`author\` relation of \`Post\` was not loaded.
Add \`.with("author")\` to the query, or call
\`luxid::set_strict_relations(false)\` to read unloaded relations as empty.`}
      />

      <P>The message names the exact fix. And because it is an error rather than a silent extra query, <strong>an N+1 becomes a failing test</strong> instead of a production slowdown.</P>

      <P>This is on in development and off in release, controlled by <C>luxid.toml</C>:</P>

      <CodeExample
        language="toml"
        code={`[database]
strict_relations = true`}
      />

      <P>Leave it on in tests. That is where it earns its keep.</P>

      <P>A parent with no children is <em>loaded and empty</em>, not unloaded — a user with zero posts gives you <C>[]</C>, not an error. Only genuinely forgetting to load trips it.</P>

      <H2>A misspelled relation says what exists</H2>

      <CodeExample
        language="rust"
        code={`Post::query().with("auther").all().await?`}
      />

      <CodeExample
        language="text"
        code={`\`Post\` has no relation \`auther\`. Declared relations: [author, comments].`}
      />

      <H2>Current limits</H2>

      <P>Two things to know before you design around this:</P>

      <P><strong>Eager paths are single-level.</strong> <C>.with("posts.comments")</C> does not work yet — it reports the relation as undeclared. Load one level, then query the second.</P>

      <P><strong><C>.with()</C> needs a declared relation.</strong> A model whose <C>#[luxid::model()]</C> block declares none cannot be passed to <C>.with()</C> at all — that is a compile error, not a runtime surprise.</P>

      <H2>A worked example</H2>

      <CodeExample
        language="rust"
        code={`// src/models/user.rs
pub use crate::entities::users::Model as User;

use crate::models::post::Post;

#[luxid::model(has_many(posts = Post, fk = "user_id"))]
impl User {}`}
      />

      <CodeExample
        language="rust"
        code={`// src/controllers/users_controller.rs
async fn show(ctx: HttpContext) -> Result<Response> {
    let id: i64 = ctx.params.get("id")?;

    let user = User::query()
        .where_eq(User::id, id)
        .with("posts")
        .first_or_fail()
        .await?;

    ctx.response.ok(user)
}`}
      />

      <CodeExample
        language="json"
        code={`{
  "id": 7,
  "name": "Ada",
  "posts": [
    { "id": 1, "title": "Hello", "user_id": 7 },
    { "id": 4, "title": "Again", "user_id": 7 }
  ]
}`}
      />

      <P>Two queries, one endpoint, and the relation is impossible to forget without the tests telling you.</P>

    </>
  );
}
