import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, H3, Lead, P, Table } from '../components/Prose';

export default function CLIReferenceContent() {
  return (
    <>
      <Lead>
        Two command lines, in two places. Chapter 02 explained why; this is the full list.
      </Lead>

      <H2><C>luxid</C> — the standalone tool</H2>

      <P>Installed with <C>cargo install luxid-cli</C>. Creates files; knows nothing about your code.</P>

      <H3><C>luxid new {'<'}name{'>'}</C></H3>

      <P>Creates a project.</P>

      <CodeExample
        language="sh"
        code={`luxid new blog
luxid new blog --luxid-path /path/to/luxid    # depend on a local checkout`}
      />

      <P><C>--luxid-path</C> is for working on the framework itself. Ordinary projects do not need it.</P>

      <P>The name becomes the crate name, normalised — <C>my-app</C> gives a crate called <C>my_app</C>.</P>

      <H3><C>luxid make:model {'<'}Name{'>'}</C></H3>

      <P>Generates a model and, with flags, everything around it.</P>

      <CodeExample
        language="sh"
        code={`luxid make:model Post          # model + entity
luxid make:model Post -m       # + migration
luxid make:model Post -mc      # + resource controller
luxid make:model Post -mfsc    # + factory + seeder + controller
luxid make:model Post -a       # everything`}
      />

      <Table
        headers={['Flag', 'Generates']}
        rows={[
            [<span key={0}><C>-m</C></span>, <span key={1}>migration</span>],
            [<span key={0}><C>-f</C></span>, <span key={1}>factory</span>],
            [<span key={0}><C>-s</C></span>, <span key={1}>seeder</span>],
            [<span key={0}><C>-c</C></span>, <span key={1}>API resource controller, and registers its routes</span>],
            [<span key={0}><C>-a</C></span>, <span key={1}>all of the above, plus a policy and form requests</span>],
        ]}
      />

      <P>Flags combine: <C>-mfsc</C> is four of them.</P>

      <P><C>-a</C> is what you want most of the time. There is no standalone flag for policies or form requests — <C>-a</C> produces them.</P>

      <P><C>-c</C> generates an <strong>API</strong> resource controller (<C>index show store update destroy</C>, no <C>create</C>/<C>edit</C> form actions) and adds one <C>r.resource(...)</C> line to <C>routes.rs</C>.</P>

      <P>Names are normalised, so <C>Post</C>, <C>post</C>, and <C>user_profile</C> all work. Plurals are derived — <C>Category</C> becomes the table <C>categories</C>. The rules are simple and will get irregular nouns wrong; override with <C>#[luxid(name = "...")]</C> on the entity when they do.</P>

      <P><strong>Nothing is overwritten.</strong> If any target file exists, the command writes nothing at all and says which clashed — a half-applied generator is worse than one that declined.</P>

      <H2><C>cargo luxid</C> — your application</H2>

      <P>These need your routes, migrations, and services, so they live in your binary.</P>

      <P><C>cargo luxid</C> is a cargo alias, written into <C>.cargo/config.toml</C> by <C>luxid new</C>:</P>

      <CodeExample
        language="toml"
        filename=".cargo/config.toml"
        code={`[alias]
luxid = "run --"`}
      />

      <P>Cargo expands it before dispatch, so <C>cargo luxid migrate</C> and <C>cargo run -- migrate</C> are the same command and either will do. Adding Luxid to a project that already existed? Copy those two lines across to get the shorter form.</P>

      <H3>Serving</H3>

      <CodeExample
        language="sh"
        code={`cargo run              # serve (the default)
cargo luxid serve     # the same thing`}
      />

      <P>Address comes from <C>LUXID_ADDR</C>, then <C>PORT</C>, then <C>127.0.0.1:3000</C>.</P>

      <H3>Migrations</H3>

      <CodeExample
        language="sh"
        code={`cargo luxid migrate                  # apply everything pending
cargo luxid migrate --steps 1        # apply at most one
cargo luxid migrate:rollback         # undo the last
cargo luxid migrate:rollback --steps 3
cargo luxid migrate:status           # what has run
cargo luxid migrate:fresh --force    # drop everything and rebuild`}
      />

      <P><C>migrate:fresh</C> requires <C>--force</C>, because destroying every table should not follow from a mistyped command in the wrong shell.</P>

      <H3>Schema sync</H3>

      <CodeExample
        language="sh"
        code={`cargo luxid db:sync
cargo luxid db:sync --dry-run`}
      />

      <P>Reads the live database and refreshes the field lists in your entities and factories — but only what lies between the <C>// {'<'}luxid:fields{'>'}</C> markers. Anything outside them survives.</P>

      <P>Run it after every migration.</P>

      <H3>Inspecting</H3>

      <CodeExample
        language="sh"
        code={`cargo luxid routes`}
      />

      <CodeExample
        language="text"
        code={`GET     /api/posts       PostsController::index    [1 middleware]
POST    /api/posts       PostsController::store    [1 middleware]
GET     /api/posts/{id}  PostsController::show     [1 middleware]`}
      />

      <P>The first thing to check when an endpoint behaves unexpectedly.</P>

      <CodeExample
        language="sh"
        code={`cargo luxid openapi
cargo luxid openapi --pretty --title "Blog API" --version 1.0.0`}
      />

      <H2>Cargo commands worth knowing</H2>

      <CodeExample
        language="sh"
        code={`cargo test                  # the suite
cargo clippy --all-targets  # lints
cargo fmt --all             # formatting
cargo build --release       # an optimised binary`}
      />

      <H2>A typical session</H2>

      <CodeExample
        language="sh"
        code={`luxid new blog && cd blog

luxid make:model Post -a
# edit migration/src/m..._create_posts.rs to add columns
cargo luxid migrate
cargo luxid db:sync

cargo luxid routes
cargo run`}
      />

      <H2>When something is not working</H2>

      <Table
        headers={['Symptom', 'Check']}
        rows={[
            [<span key={0}>404 on a route you added</span>, <span key={1}><C>cargo luxid routes</C> — is it registered?</span>],
            [<span key={0}>"file not found for module"</span>, <span key={1}>You forgot <C>pub mod ...;</C> in the parent <C>mod.rs</C></span>],
            [<span key={0}>"no database connection is in scope"</span>, <span key={1}><C>WithDatabase</C> is missing from <C>app.rs</C></span>],
            [<span key={0}>"no provider bound for <C>X</C>"</span>, <span key={1}>Register it in <C>providers()</C></span>],
            [<span key={0}>"the <C>x</C> relation was not loaded"</span>, <span key={1}>Add <C>.with("x")</C> to the query</span>],
            [<span key={0}>"no session is active"</span>, <span key={1}>Add <C>.middleware(Auth::session())</C></span>],
            [<span key={0}>Column not found after a migration</span>, <span key={1}><C>cargo luxid db:sync</C></span>],
        ]}
      />

      <P>Luxid's error messages generally name the fix. When one does not, that is worth reporting as a bug.</P>

    </>
  );
}
