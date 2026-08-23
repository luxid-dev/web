import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, H3, Lead, P, Table } from '../components/Prose';

export default function ScopesHooksContent() {
  return (
    <>
      <Lead>
        Two ways to put behaviour on a model: <strong>scopes</strong> name a reusable piece of a query, <strong>hooks</strong> run automatically around writes.
      </Lead>

      <H2>Scopes</H2>

      <P>You will write <C>where_eq(Post::published, true)</C> in a dozen places, and one day change what "published" means. A scope names it once.</P>

      <CodeExample
        language="rust"
        code={`// src/models/post.rs
pub use crate::entities::posts::Model as Post;

use luxid::prelude::*;
use luxid::Query;

use crate::entities::posts;

#[luxid::model()]
impl Post {
    #[scope]
    fn published(query: Query<posts::Entity>) -> Query<posts::Entity> {
        query.where_eq(Post::published, true)
    }
}`}
      />

      <P>A scope takes the query, returns the query. That is all.</P>

      <H3>Two ways to call it</H3>

      <CodeExample
        language="rust"
        code={`Post::published().all().await?`}
      />

      <P>An associated function on the model that starts a query. Needs no import.</P>

      <CodeExample
        language="rust"
        code={`use crate::models::post::PostScopes;

Post::query().where_eq(Post::user_id, id).published().all().await?`}
      />

      <P>Mid-chain, which needs the generated <C>PostScopes</C> trait in scope. The trait is generated alongside the impl block, so it lives in the same module as your model — <C>crate::models::post::PostScopes</C>, not in the entity module.</P>

      <P>That import is the one thing people get wrong. If <C>.published()</C> does not resolve, this is why.</P>

      <H3>Scopes take arguments</H3>

      <CodeExample
        language="rust"
        code={`#[scope]
fn in_team(query: Query<posts::Entity>, team_id: i64) -> Query<posts::Entity> {
    query.where_eq(Post::team_id, team_id)
}

#[scope]
fn titled_like(query: Query<posts::Entity>, pattern: &str) -> Query<posts::Entity> {
    query.where_like(Post::title, pattern)
}`}
      />

      <CodeExample
        language="rust"
        code={`Post::in_team(3).all().await?;
Post::titled_like("%rust%").all().await?;`}
      />

      <H3>They compose</H3>

      <P>With everything else, in any order:</P>

      <CodeExample
        language="rust"
        code={`Post::published()
    .in_team(3)
    .with("author")
    .order_by_desc(Post::id)
    .paginate(1, 20)
    .await?`}
      />

      <H3>A scope may not share a name with a column</H3>

      <P>Both become associated items on the model, so this collides:</P>

      <CodeExample
        language="rust"
        code={`pub done: bool,          // gives you the column \`Todo::done\`

#[scope]
fn done(query: ...)      // ✗ duplicate definition`}
      />

      <CodeExample
        language="text"
        code={`error[E0592]: duplicate definitions with name \`done\``}
      />

      <P>Name the scope for the <em>filter</em> rather than the field — <C>completed</C>, <C>outstanding</C>, <C>visible</C> — which usually reads better anyway.</P>

      <H3>Ordinary functions are untouched</H3>

      <P>Anything in the block without <C>#[scope]</C> stays exactly as written:</P>

      <CodeExample
        language="rust"
        code={`#[luxid::model()]
impl Post {
    #[scope]
    fn published(query: Query<posts::Entity>) -> Query<posts::Entity> {
        query.where_eq(Post::published, true)
    }

    // Not a scope. A plain method.
    pub fn excerpt(&self) -> String {
        self.title.chars().take(40).collect()
    }
}`}
      />

      <H2>Hooks</H2>

      <P>A hook runs automatically when a row is written. The classic use is hashing a password so it can never be stored in plain text by accident.</P>

      <P>Hooks are declared <strong>on the derive</strong>, and their functions live in a plain <C>impl</C>:</P>

      <CodeExample
        language="rust"
        code={`// src/entities/users.rs
use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, serde::Serialize, luxid::Model)]
#[luxid(before_create = Self::hash_password)]
#[sea_orm(table_name = "users")]
pub struct Model {
    // <luxid:fields>
    #[sea_orm(primary_key)]
    pub id: i64,
    pub email: String,
    pub password: String,
    // </luxid:fields>
    #[sea_orm(ignore)]
    #[serde(flatten)]
    pub relations: luxid::Relations,
}

impl Model {
    async fn hash_password(active: &mut ActiveModel) -> luxid::Result<()> {
        if let sea_orm::ActiveValue::Set(password) = &active.password {
            active.password = sea_orm::ActiveValue::Set(luxid::Hash::make(password)?);
        }
        Ok(())
    }
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}`}
      />

      <P>Now no code path can insert an unhashed password. Not the controller, not a seeder, not a test.</P>

      <H3>The six hook points</H3>

      <Table
        headers={['Hook', 'Receives', 'When']}
        rows={[
            [<span key={0}><C>before_save</C></span>, <span key={1}><C>&mut ActiveModel</C></span>, <span key={2}>before any write</span>],
            [<span key={0}><C>before_create</C></span>, <span key={1}><C>&mut ActiveModel</C></span>, <span key={2}>before an insert</span>],
            [<span key={0}><C>before_update</C></span>, <span key={1}><C>&mut ActiveModel</C></span>, <span key={2}>before an update</span>],
            [<span key={0}><C>after_create</C></span>, <span key={1}><C>&Model</C></span>, <span key={2}>after an insert</span>],
            [<span key={0}><C>after_update</C></span>, <span key={1}><C>&Model</C></span>, <span key={2}>after an update</span>],
            [<span key={0}><C>after_save</C></span>, <span key={1}><C>&Model</C></span>, <span key={2}>after any write</span>],
        ]}
      />

      <P>Order on create:</P>

      <CodeExample
        language="text"
        code={`before_save → before_create → INSERT → after_create → after_save`}
      />

      <P>Update mirrors it. Declare several at once:</P>

      <CodeExample
        language="rust"
        code={`#[luxid(
    before_save = Self::stamp,
    before_create = Self::hash_password,
    after_create = Self::send_welcome,
)]`}
      />

      <H3><C>before</C> hooks can abort the write</H3>

      <P>Return an error and nothing is written, and no <C>after</C> hook runs:</P>

      <CodeExample
        language="rust"
        code={`async fn reject_reserved(active: &mut ActiveModel) -> luxid::Result<()> {
    if let sea_orm::ActiveValue::Set(name) = &active.name
        && name == "admin"
    {
        return Err(luxid::Error::Conflict("that name is reserved".into()));
    }
    Ok(())
}`}
      />

      <H3>Why hooks are declared on the derive</H3>

      <P>It looks like it would be nicer to write <C>#[before_save]</C> above the function, the way scopes work. There is a reason it does not.</P>

      <P><C>luxid::insert</C> and <C>luxid::update</C> <em>require</em> the hooks trait, so hooks always run on the ordinary write path. A hook that silently fails to fire is not an inconvenience — it is an unhashed password in your database. Requiring the trait means every model must implement it, which means the derive must generate it, which means the derive has to know which hooks exist.</P>

      <P>The cost is the function name appearing twice. The benefit is that there is no way to write a model whose hooks quietly do not run.</P>

      <H3>The escape hatch</H3>

      <CodeExample
        language="rust"
        code={`luxid::insert_without_hooks(active).await?`}
      />

      <P>Named for what it costs you. Use it in seeders and fixtures where hooks would be wrong — never in application code.</P>

      <H2>Which to use</H2>

      <Table
        headers={['You want', 'Use']}
        rows={[
            [<span key={0}>A filter used in several places</span>, <span key={1}>a scope</span>],
            [<span key={0}>Something derived on every save</span>, <span key={1}>a <C>before</C> hook</span>],
            [<span key={0}>Something to happen after a row exists</span>, <span key={1}>an <C>after</C> hook</span>],
            [<span key={0}>A computed value from an existing row</span>, <span key={1}>a plain method</span>],
        ]}
      />

    </>
  );
}
