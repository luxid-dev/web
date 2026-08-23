import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, H3, LI, Lead, P, Table, UL } from '../components/Prose';

export default function MigrationsContent() {
  return (
    <>
      <H2>Connecting</H2>

      <Lead>
        A generated app connects in <C>src/app.rs</C>:
      </Lead>

      <CodeExample
        language="rust"
        code={`let url = config.get_or("database.url", "sqlite://./app.db?mode=rwc".to_owned())?;
let db = Db::connect(url).await?;`}
      />

      <P>The default is SQLite in a file next to your code, so a fresh project runs with nothing installed. Point <C>DATABASE_URL</C> at Postgres when you want one:</P>

      <CodeExample
        language="sh"
        code={`DATABASE_URL=postgres://user:password@localhost/blog`}
      />

      <P>Nothing else changes. Both are supported throughout.</P>

      <P>The connection is registered as a singleton and made available to requests by the <C>WithDatabase</C> middleware:</P>

      <CodeExample
        language="rust"
        code={`Ok(App::new()
    .providers(Providers::new().singleton(move |_| db.clone()))
    .middleware(WithDatabase)
    .routes(crate::routes::register))`}
      />

      <P>If you forget <C>WithDatabase</C>, queries fail with a message saying so. They do not silently use the wrong connection.</P>

      <H2>How queries find the connection</H2>

      <P>You will notice that queries do not take a database argument:</P>

      <CodeExample
        language="rust"
        code={`let posts = Post::query().all().await?;`}
      />

      <P>The connection is <em>ambient</em> — the middleware puts it in scope for the duration of the request, and queries pick it up. This is what lets model code read like <C>User::find(id)</C> instead of <C>User::find(&db, id)</C>.</P>

      <P>Two consequences worth knowing:</P>

      <UL>
        <LI key={0}>Code outside a request needs its own scope: <C>db.scope(async {'{'} ... {'}'}).await</C>.</LI>
        <LI key={1}>A detached <C>tokio::spawn</C> does <strong>not</strong> inherit the scope. Queries there fail with a message explaining exactly that, rather than quietly using a different connection.</LI>
      </UL>

      <H2>What migrations are</H2>

      <P>A migration is a versioned, repeatable change to your database structure. You do not create tables by hand — you write a migration, commit it, and every environment applies the same ones in the same order.</P>

      <H2>Creating one</H2>

      <CodeExample
        language="sh"
        code={`luxid make:model Post -m`}
      />

      <P>That writes <C>migration/src/m20260822_140530_create_posts.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`use sea_orm_migration::prelude::*;
use sea_orm_migration::schema::*;

#[derive(DeriveIden)]
enum Posts {
    Table,
    Id,
}

pub struct Migration;

impl MigrationName for Migration {
    fn name(&self) -> &str {
        "m20260822_140530_create_posts"
    }
}

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    .table(Posts::Table)
                    .if_not_exists()
                    .col(pk_auto(Posts::Id))
                    // Add your columns here.
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager.drop_table(Table::drop().table(Posts::Table).to_owned()).await
    }
}`}
      />

      <P>Note there is <strong>no <C>--fields</C> flag</strong>. The migration starts empty and you fill in the columns. Your database is the source of truth for your schema, and a field DSL would be a second, weaker one that cannot express every column type.</P>

      <H2>Filling it in</H2>

      <P>Add the column names to the enum, then the columns to the table:</P>

      <CodeExample
        language="rust"
        code={`#[derive(DeriveIden)]
enum Posts {
    Table,
    Id,
    Title,
    Body,
    Published,
}`}
      />

      <CodeExample
        language="rust"
        code={`.col(pk_auto(Posts::Id))
.col(string(Posts::Title))
.col(text(Posts::Body))
.col(boolean(Posts::Published))`}
      />

      <P>Common column helpers:</P>

      <Table
        headers={['Helper', 'Column']}
        rows={[
            [<span key={0}><C>pk_auto(X)</C></span>, <span key={1}>auto-incrementing primary key</span>],
            [<span key={0}><C>string(X)</C> / <C>string_null(X)</C></span>, <span key={1}>VARCHAR, required / nullable</span>],
            [<span key={0}><C>text(X)</C> / <C>text_null(X)</C></span>, <span key={1}>TEXT</span>],
            [<span key={0}><C>integer(X)</C> / <C>big_integer(X)</C></span>, <span key={1}>INTEGER / BIGINT</span>],
            [<span key={0}><C>boolean(X)</C></span>, <span key={1}>BOOLEAN</span>],
            [<span key={0}><C>timestamp(X)</C> / <C>timestamp_null(X)</C></span>, <span key={1}>TIMESTAMP</span>],
            [<span key={0}><C>double(X)</C> / <C>decimal(X)</C></span>, <span key={1}>floating point / exact decimal</span>],
        ]}
      />

      <P>Every <C>*_null</C> variant makes the column optional.</P>

      <H3>Foreign keys</H3>

      <CodeExample
        language="rust"
        code={`#[derive(DeriveIden)]
enum Posts {
    Table,
    Id,
    UserId,
}`}
      />

      <CodeExample
        language="rust"
        code={`.col(big_integer(Posts::UserId))
.foreign_key(
    ForeignKey::create()
        .from(Posts::Table, Posts::UserId)
        .to(Users::Table, Users::Id)
        .on_delete(ForeignKeyAction::Cascade),
)`}
      />

      <P>Referencing another table means declaring its identifier too:</P>

      <CodeExample
        language="rust"
        code={`#[derive(DeriveIden)]
enum Users {
    Table,
    Id,
}`}
      />

      <H2>Running them</H2>

      <CodeExample
        language="sh"
        code={`cargo luxid migrate            # apply everything pending
cargo luxid migrate:status     # what has run
cargo luxid migrate:rollback   # undo the last one
cargo luxid migrate:fresh --force   # drop everything and rebuild`}
      />

      <P><C>migrate:fresh</C> requires <C>--force</C> because it destroys data, and that should not follow from a mistyped command in the wrong shell.</P>

      <P><C>migrate:status</C> is worth checking when behaviour differs between machines:</P>

      <CodeExample
        language="text"
        code={` applied  m20260822_140530_create_posts
 pending  m20260823_101500_add_published_to_posts`}
      />

      <H2>One migration per file</H2>

      <P>SeaORM derives a migration's name from its <strong>file name</strong>, not its struct name. Two migrations in one file therefore share a name, and the second is silently treated as already applied — which is a data-loss-shaped trap.</P>

      <P><C>luxid make:model -m</C> writes one per file, correctly named. If you write one by hand, keep that rule, or implement <C>MigrationName</C> explicitly as the generated ones do.</P>

      <H2>Changing an existing table</H2>

      <P>There is no generator for this yet — write the file by hand in <C>migration/src/</C>, named with a later timestamp, and register it in <C>migration/src/lib.rs</C>:</P>

      <CodeExample
        language="rust"
        code={`mod m20260822_140530_create_posts;
mod m20260823_101500_add_published_to_posts;   // ← add

// <luxid:migration-modules>

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20260822_140530_create_posts::Migration),
            Box::new(m20260823_101500_add_published_to_posts::Migration),   // ← add
            // <luxid:migrations>
        ]
    }
}`}
      />

      <P>Order matters: they run top to bottom.</P>

      <H2>Keeping code in step with the schema</H2>

      <P>After a migration, your Rust code needs to know about the new columns:</P>

      <CodeExample
        language="sh"
        code={`cargo luxid db:sync`}
      />

      <P>That reads the <strong>live database</strong> and refreshes the field lists in your entities and factories — but only what lies between the <C>// {'<'}luxid:fields{'>'}</C> markers. Rules and overrides you wrote outside them survive.</P>

      <CodeExample
        language="text"
        code={`  updated src/entities/posts.rs
  updated src/factories/post_factory.rs
1 table(s) read, 2 file(s) changed`}
      />

      <P>Use <C>--dry-run</C> to see what would change first. Running it twice changes nothing the second time.</P>

      <P>The usual loop is therefore:</P>

      <CodeExample
        language="sh"
        code={`luxid make:model Post -a     # generate
# edit the migration to add columns
cargo luxid migrate         # apply
cargo luxid db:sync         # bring the code into step`}
      />

      <H2>Transactions</H2>

      <P>The <C>Db</C> handle itself is a service, so resolve it when you need one:</P>

      <CodeExample
        language="rust"
        code={`let db = ctx.services.get::<Db>()?;

db.transaction(async || {
    let user = luxid::insert(new_user).await?;
    luxid::insert(new_profile(user.id)).await?;
    Ok(())
})
.await?;`}
      />

      <P>Commits on <C>Ok</C>, rolls back on <C>Err</C>. Every query inside joins the transaction automatically — there is no handle to thread through.</P>

    </>
  );
}
