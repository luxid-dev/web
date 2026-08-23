import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, H3, LI, Lead, P, UL } from '../components/Prose';

export default function ModelsContent() {
  return (
    <>
      <H2>Two files per model</H2>

      <Lead>
        Luxid splits a model in two, and the split matters:
      </Lead>

      <UL>
        <LI key={0}><strong><C>src/entities/posts.rs</C></strong> — the table's shape. Generated from the database by <C>db:sync</C>. You do not hand-edit the field list.</LI>
        <LI key={1}><strong><C>src/models/post.rs</C></strong> — your behaviour: relations, scopes. Yours entirely.</LI>
      </UL>

      <P>Keeping them apart means resyncing after a migration can never destroy the code you wrote.</P>

      <H2>The entity</H2>

      <CodeExample
        language="rust"
        code={`use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, serde::Serialize, luxid::Model)]
#[sea_orm(table_name = "posts")]
pub struct Model {
    // <luxid:fields>  refreshed by \`cargo luxid db:sync\`
    #[sea_orm(primary_key)]
    pub id: i64,
    pub title: String,
    pub published: bool,
    // </luxid:fields>
    #[sea_orm(ignore)]
    #[serde(flatten)]
    pub relations: luxid::Relations,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}`}
      />

      <P>Three parts do real work:</P>

      <UL>
        <LI key={0}><strong><C>luxid::Model</C></strong> gives you <C>find</C>, <C>query</C>, and typed columns.</LI>
        <LI key={1}><strong>The markers</strong> are what <C>db:sync</C> rewrites. Nothing outside them is touched.</LI>
        <LI key={2}><strong><C>relations</C></strong> holds eager-loaded relations. It is not a column (<C>#[sea_orm(ignore)]</C>) and it serializes inline (<C>#[serde(flatten)]</C>), so a post with its author loaded renders both together. Chapter 13.</LI>
      </UL>

      <H2>The model</H2>

      <CodeExample
        language="rust"
        code={`pub use crate::entities::posts::Model as Post;

#[luxid::model()]
impl Post {}`}
      />

      <P><C>Post</C> is an alias for the entity's <C>Model</C>, so it has the columns as ordinary fields. The <C>#[luxid::model()]</C> block is where relations and scopes go — chapters 13 and 14.</P>

      <H2>Finding rows</H2>

      <CodeExample
        language="rust"
        code={`Post::find(id).await?           // Option<Post>
Post::find_or_fail(id).await?   // Post, or a 404
Post::all().await?              // Vec<Post>
Post::count_all().await?        // u64`}
      />

      <P><C>find_or_fail</C> is the one you will use most, because it makes actions short:</P>

      <CodeExample
        language="rust"
        code={`async fn show(ctx: HttpContext) -> Result<Response> {
    let post = Post::find_or_fail(ctx.params.get::<i64>("id")?).await?;
    ctx.response.ok(post)
}`}
      />

      <P>A missing row produces a <C>404</C> naming the resource and id. No branching.</P>

      <H2>Querying</H2>

      <CodeExample
        language="rust"
        code={`let posts = Post::query()
    .where_eq(Post::published, true)
    .order_by_desc(Post::id)
    .limit(10)
    .all()
    .await?;`}
      />

      <H3>Filtering</H3>

      <CodeExample
        language="rust"
        code={`.where_eq(Post::published, true)
.where_ne(Post::status, "draft")
.where_gt(Post::views, 100)
.where_lt(Post::views, 1000)
.where_in(Post::status, ["published", "archived"])
.where_like(Post::title, "%rust%")
.where_null(Post::deleted_at)
.where_not_null(Post::published_at)`}
      />

      <P>Chained conditions are combined with AND.</P>

      <H3>Ordering and limiting</H3>

      <CodeExample
        language="rust"
        code={`.order_by_asc(Post::title)
.order_by_desc(Post::id)
.limit(10)
.offset(20)`}
      />

      <H3>Finishing</H3>

      <CodeExample
        language="rust"
        code={`.all().await?              // Vec<Post>
.first().await?            // Option<Post>
.first_or_fail().await?    // Post, or a 404
.count().await?            // u64
.exists().await?           // bool
.paginate(page, 20).await? // Paginated<Post>`}
      />

      <P>Nothing runs until one of these is called.</P>

      <H2>Typed columns catch mistakes at compile time</H2>

      <P><C>Post::published</C> is not a string — it is a generated type that knows the column's Rust type:</P>

      <CodeExample
        language="rust"
        code={`Post::query().where_eq(Post::published, true)      // ✓ compiles
Post::query().where_eq(Post::published, "yes")     // ✗ does not compile`}
      />

      <P>That second line is a compile error, not a runtime one. Compare with an untyped API, where <C>"yes"</C> would be accepted and fail — or worse, silently match nothing — at run time.</P>

      <P>The entity's own <C>Column</C> enum remains available as an escape hatch, accepting anything:</P>

      <CodeExample
        language="rust"
        code={`Post::query().where_eq(posts::Column::Published, true)`}
      />

      <P>Reach for it only when the typed form cannot express something.</P>

      <H2>Pagination</H2>

      <CodeExample
        language="rust"
        code={`let page = ctx.request.input::<u64>("page")?.unwrap_or(1);
let posts = Post::query().order_by_desc(Post::id).paginate(page, 20).await?;

ctx.response.ok(posts)`}
      />

      <CodeExample
        language="json"
        code={`{
  "data": [ /* ... */ ],
  "page": 1,
  "per_page": 20,
  "total": 57,
  "last_page": 3
}`}
      />

      <P>Pages are <strong>1-based</strong>, matching what people type in URLs. Nonsense input is clamped rather than fatal — <C>paginate(0, 0)</C> gives you page 1 with one row per page — and asking for a page past the end returns an empty <C>data</C> rather than an error.</P>

      <P>In Rust:</P>

      <CodeExample
        language="rust"
        code={`posts.data        // Vec<Post>
posts.total       // u64
posts.last_page   // u64
posts.has_more()  // bool
posts.len()       // usize
posts.is_empty()  // bool`}
      />

      <H2>Writing rows</H2>

      <P>Writes go through an <C>ActiveModel</C> — a version of the struct where each field is "set" or "unchanged".</P>

      <H3>Inserting</H3>

      <CodeExample
        language="rust"
        code={`use sea_orm::ActiveValue::Set;

use crate::entities::posts;

let post = luxid::insert(posts::ActiveModel {
    title: Set("Hello".to_owned()),
    published: Set(false),
    ..Default::default()
})
.await?;`}
      />

      <P><C>..Default::default()</C> leaves everything else unset — including <C>id</C>, which the database assigns. The returned value is the stored row, with its id.</P>

      <H3>Updating</H3>

      <CodeExample
        language="rust"
        code={`use sea_orm::IntoActiveModel;

let post = Post::find_or_fail(id).await?;

let mut active = post.into_active_model();
active.title = Set("A better title".to_owned());

let post = luxid::update(active).await?;`}
      />

      <P>Only the fields you <C>Set</C> are written.</P>

      <H3>Deleting</H3>

      <CodeExample
        language="rust"
        code={`use crate::entities::posts::Entity as Posts;

let removed: bool = luxid::delete_by_id::<Posts>(id).await?;`}
      />

      <P>Returns whether anything was removed — deleting a row that is already gone is not an error.</P>

      <H3>Hooks run on writes</H3>

      <P><C>insert</C> and <C>update</C> run the model's lifecycle hooks (chapter 14). There is also <C>luxid::insert_without_hooks</C>, named for what it costs you — for seeders and fixtures where hooks would be wrong. Never reach for it in application code: a hook that quietly does not fire is how an unhashed password reaches the database.</P>

      <H2>A complete controller</H2>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;
use sea_orm::ActiveValue::Set;
use serde_json::Value;

use crate::entities::posts;
use crate::models::post::Post;

pub struct PostsController;

#[luxid::controller]
impl PostsController {
    async fn index(ctx: HttpContext) -> Result<Response> {
        let page = ctx.request.input::<u64>("page")?.unwrap_or(1);

        let posts = Post::query()
            .where_eq(Post::published, true)
            .order_by_desc(Post::id)
            .paginate(page, 20)
            .await?;

        ctx.response.ok(posts)
    }

    async fn show(ctx: HttpContext) -> Result<Response> {
        ctx.response.ok(Post::find_or_fail(ctx.params.get::<i64>("id")?).await?)
    }

    async fn store(ctx: HttpContext) -> Result<Response> {
        let body: Value = ctx.request.body_json()?;
        let title = body.get("title").and_then(Value::as_str).unwrap_or_default();

        let post = luxid::insert(posts::ActiveModel {
            title: Set(title.to_owned()),
            published: Set(false),
            ..Default::default()
        })
        .await?;

        ctx.response.created(post)
    }

    async fn destroy(ctx: HttpContext) -> Result<Response> {
        let id: i64 = ctx.params.get("id")?;
        Post::find_or_fail(id).await?;

        luxid::delete_by_id::<posts::Entity>(id).await?;
        ctx.response.no_content()
    }
}`}
      />

      <P><C>store</C> reads the body by hand there, which chapter 15 replaces with something much better.</P>

    </>
  );
}
