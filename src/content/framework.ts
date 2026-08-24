/**
 * Every factual claim the marketing pages make about Luxid, in one place.
 *
 * The landing page argues that Luxid shows its receipts rather than asserting
 * things, so the receipts have to be real. Everything below is copied from the
 * framework itself — the README, `cargo bench -p luxid --bench overhead`, a
 * `cargo test` run, and actual `rustc` output — not paraphrased. If a number
 * here disagrees with the repository, the repository is right and this file is
 * stale.
 */

export const LUXID = {
  /** Workspace version. Every `luxid-*` crate publishes in lockstep. */
  version: '0.2.0',
  /** `rust-version` floor from the workspace manifest. */
  rustVersion: '1.94',
  repo: 'https://github.com/luxid-dev/luxid',
  license: 'MIT or Apache-2.0',
  /** `cargo test` at the workspace root, run against this checkout. */
  tests: 280,
} as const;

export const INSTALL_COMMAND = 'cargo install luxid-cli';

/** The quickstart from the README, verbatim. */
export const QUICKSTART = `cargo install luxid-cli     # provides the \`luxid\` binary

luxid new blogapp
cd blogapp

cargo luxid migrate     # SQLite by default; no infrastructure needed
cargo run               # http://127.0.0.1:3000`;

/**
 * `cargo luxid routes` after `luxid make:model Post -a`.
 *
 * The hero renders this row by row rather than as a code block: it is the one
 * artifact that shows scaffolding, routing and middleware at once.
 */
export const ROUTE_TABLE: ReadonlyArray<{
  method: string;
  path: string;
  action: string;
  middleware: string;
}> = [
  { method: 'GET', path: '/api/health', action: 'HealthController::show', middleware: '[1 middleware]' },
  { method: 'GET', path: '/api/posts', action: 'PostsController::index', middleware: '[1 middleware]' },
  { method: 'POST', path: '/api/posts', action: 'PostsController::store', middleware: '[1 middleware]' },
  { method: 'GET', path: '/api/posts/{id}', action: 'PostsController::show', middleware: '[1 middleware]' },
  { method: 'PUT', path: '/api/posts/{id}', action: 'PostsController::update', middleware: '[1 middleware]' },
  { method: 'DELETE', path: '/api/posts/{id}', action: 'PostsController::destroy', middleware: '[1 middleware]' },
];

/**
 * Real `rustc` output, captured by compiling the mistake against this
 * checkout. Only the file path is presentational — you would hit this in your
 * own controller rather than in the framework's test suite. Everything else,
 * including the trailing `From` impls, is verbatim.
 */
export const COMPILE_ERROR = {
  source: `Post::query().where_eq(Post::user_id, "seven")`,
  diagnostic: `error[E0277]: the trait bound \`i64: From<&str>\` is not satisfied
  --> src/controllers/posts.rs:32:51
   |
32 |     let _ = Post::query().where_eq(Post::user_id, "seven");
   |                           --------                ^^^^^^^ the trait \`From<&str>\` is not implemented for \`i64\`
   |                           |
   |                           required by a bound introduced by this call
   |
   = help: \`i64\` implements trait \`From<T>\`:
             From<bool>
             From<i16>
             From<i32>
             From<i8>
             From<u16>
             From<u32>
             From<u8>
           and 3 others
   = note: required for \`&str\` to implement \`Into<i64>\`
note: required by a bound in \`luxid::Query::<E>::where_eq\`
  --> crates/luxid-orm/src/model.rs:95:12
   |
92 |     pub fn where_eq<C, V>(mut self, column: C, value: V) -> Self
   |            -------- required by a bound in this associated function
...
95 |         V: Into<C::Value>,
   |            ^^^^^^^^^^^^^^ required by this bound in \`Query::<E>::where_eq\``,
} as const;

/** The runtime guard against N+1, from `crates/luxid-orm/src/relations.rs`. */
export const NOT_LOADED_ERROR =
  'the `author` relation of `Post` was not loaded. Add `.with("author")` to the ' +
  'query, or call `luxid::set_strict_relations(false)` to read unloaded ' +
  'relations as empty.';

/**
 * `cargo bench -p luxid --bench overhead`, as published in the README.
 *
 * Requests are driven in-process, so these are a latency floor rather than a
 * networked throughput claim — the page says so wherever it shows them.
 */
export const BENCHMARK = {
  hardware: 'i7-4980HQ (2014)',
  command: 'cargo bench -p luxid --bench overhead',
  rows: [
    { variant: 'bare salvo', us: 2.38, delta: null },
    { variant: 'luxid, no middleware', us: 3.36, delta: 0.97 },
    { variant: 'luxid + 2 middleware + container', us: 4.72, delta: 2.33 },
    { variant: 'luxid, realistic stack', us: 12.59, delta: 10.2 },
  ] as ReadonlyArray<{ variant: string; us: number; delta: number | null }>,
  notes: [
    'The framework floor is about 1 µs per request.',
    'Authentication dominates a realistic stack: the JWT guard adds ~4.6 µs, of which 3.18 µs is HS256 verification with no HTTP involved.',
    'Read the differences, not the absolutes.',
  ],
} as const;

/** From the README's "What is built". */
export const BUILT: ReadonlyArray<{ title: string; body: string; href: string }> = [
  {
    title: 'Routing',
    body: 'Paths, groups, route parameters and resource routes, registered in one function you can read top to bottom.',
    href: '/docs/routing',
  },
  {
    title: 'One context, no extractors',
    body: 'Every action takes an owned HttpContext and returns Result<Response>. There are no extractor trait bounds to decipher.',
    href: '/docs/controllers',
  },
  {
    title: 'Errors that map themselves',
    body: 'The error type carries its own HTTP status, so a missing row becomes a 404 RFC 7807 document with nothing in the action body.',
    href: '/docs/errors',
  },
  {
    title: 'Validation that reaches the database',
    body: 'unique and exists run as asynchronous rules beside the synchronous ones. No other Rust framework ships these.',
    href: '/docs/validation',
  },
  {
    title: 'Models and relations',
    body: 'Relations, scopes, hooks and typed columns. Eager loading is batched — one query per relation, whatever the page size.',
    href: '/docs/models',
  },
  {
    title: 'A service container',
    body: "ASP.NET Core's lifetime model: singleton, scoped, and interface binding. Every singleton resolves at boot, so a missing binding fails at startup.",
    href: '/docs/services',
  },
  {
    title: 'Authentication and sessions',
    body: 'JWT guards, argon2 hashing, and cookie-backed sessions whose id rotates on login. Policies are plain functions of (&Auth, &T) -> bool.',
    href: '/docs/authentication',
  },
  {
    title: 'OpenAPI 3.1',
    body: 'Generated from the code that serves the request, because 3.1 is JSON Schema and schemars output drops in unchanged.',
    href: '/docs/openapi',
  },
  {
    title: 'A test harness',
    body: 'Every test runs in a transaction that is rolled back, so the suite shares one database and runs in parallel. acting_as skips the login round-trip.',
    href: '/docs/testing',
  },
];

/**
 * From the README's "What is not built", minus `ctx.config`, which has since
 * shipped — see `crates/luxid/tests/config.rs`.
 */
export const NOT_BUILT: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: 'Nested eager paths',
    body: '.with("posts.comments") is single-level only.',
  },
  { title: 'luxid check', body: 'Planned, not written.' },
  { title: 'Inertia.js', body: 'Planned for 0.2.' },
  { title: 'Background jobs', body: 'Planned for 0.2.' },
];

/** The code tour. Every snippet is lifted from the README or the test suite. */
export const TOUR: ReadonlyArray<{
  id: string;
  label: string;
  filename: string;
  blurb: string;
  code: string;
}> = [
  {
    id: 'controller',
    label: 'Controller',
    filename: 'src/controllers/posts.rs',
    blurb:
      'An action takes the context by value and returns a response. The ? on a missing row is the whole 404 path.',
    code: `#[luxid::controller]
impl PostsController {
    #[openapi(summary = "List posts", tag = "posts")]
    async fn index(ctx: HttpContext) -> Result<Response> {
        let page = ctx.request.input::<u64>("page")?.unwrap_or(1);

        ctx.response.ok(Post::query().published().paginate(page, 20).await?)
    }

    #[openapi(body = StorePost, tag = "posts", errors = [422])]
    async fn store(ctx: HttpContext) -> Result<Response> {
        let input = ctx.request.validate::<StorePost>().await?;

        let post = luxid::insert(posts::ActiveModel {
            title: Set(input.title),
            ..Default::default()
        })
        .await?;

        ctx.response.created(post)
    }

    #[openapi(tag = "posts", errors = [404])]
    async fn show(ctx: HttpContext) -> Result<Response> {
        // A missing row becomes a 404 problem document. No branching here.
        ctx.response.ok(Post::find_or_fail(ctx.params.get::<i64>("id")?).await?)
    }
}`,
  },
  {
    id: 'validation',
    label: 'Validation',
    filename: 'src/validators/store_user.rs',
    blurb:
      'Synchronous rules run first. The database-backed ones run afterwards, skipping fields that already failed — so one mistake produces one message.',
    code: `#[derive(Deserialize, Validate, JsonSchema)]
pub struct StoreUser {
    #[validate(length(min = 2, max = 64))]
    pub name: String,

    #[validate(email, unique(User::email))]      // hits the database
    pub email: String,

    #[validate(exists(Team::id))]                // hits the database
    pub team_id: i64,

    #[validate(range(min = 18, max = 120))]
    pub age: Option<i64>,
}`,
  },
  {
    id: 'model',
    label: 'Model',
    filename: 'src/models/post.rs',
    blurb:
      'Relations go in the attribute, scopes are functions. Columns are typed, so a mismatched comparison never reaches the database.',
    code: `#[luxid::model(belongs_to(author = User, fk = "user_id"))]
impl Post {
    #[scope]
    fn published(query: Query<posts::Entity>) -> Query<posts::Entity> {
        query.where_eq(Post::published, true)
    }
}

// Eager loading is batched: one query per relation, whatever the page size.
let posts = Post::query().with("author").paginate(1, 20).await?;
posts.data[0].author()?;   // Option<&User>`,
  },
  {
    id: 'middleware',
    label: 'Middleware',
    filename: 'src/middleware/timer.rs',
    blurb:
      'The same context type as a controller, so there is one mental model. Above next.run() is the way in; below it is the way out.',
    code: `#[luxid::middleware]
impl Timer {
    async fn handle(&self, ctx: HttpContext, next: Next) -> Result<Response> {
        let started = Instant::now();
        let response = next.run(ctx).await?;

        Ok(response.header("x-response-time", format!("{}ms", started.elapsed().as_millis())))
    }
}`,
  },
  {
    id: 'test',
    label: 'Test',
    filename: 'tests/posts.rs',
    blurb:
      'Each test runs inside a transaction that is rolled back afterwards, so the suite shares one database and runs in parallel — no truncation, no fixtures.',
    code: `#[luxid::test(db = crate::support::database)]
async fn it_lists_posts(db: Db) -> Result<()> {
    app(db).get("/api/posts").send().await
        .assert_ok()
        .assert_json_count("data", 2)
        .assert_json_path("data.0.title", "First");

    Ok(())
}`,
  },
];

/** The RFC 7807 document a failed validation produces. */
export const PROBLEM_DOCUMENT = `{ "type": "https://luxid.rs/errors/validation",
  "title": "the given data was invalid",
  "status": 422,
  "errors": { "email": ["has already been taken"] } }`;

/** `luxid` creates files; `cargo luxid` needs your types, so it lives in your binary. */
export const CLI: ReadonlyArray<{
  group: string;
  note: string;
  commands: ReadonlyArray<{ cmd: string; desc: string }>;
}> = [
  {
    group: 'luxid',
    note: 'The standalone binary. Creates files; knows nothing about your code.',
    commands: [
      { cmd: 'luxid new blog', desc: 'Scaffold a project' },
      { cmd: 'luxid make:model Post -a', desc: 'Model, migration, factory, seeder, policy, form requests and a resource controller' },
      { cmd: 'luxid make:model Post -mc', desc: 'Model, migration and controller only' },
    ],
  },
  {
    group: 'cargo luxid',
    note: "A cargo alias that `luxid new` writes into .cargo/config.toml. It expands to `cargo run --`, and these commands need your routes, migrations and services, so they live in your binary.",
    commands: [
      { cmd: 'cargo luxid migrate', desc: 'Apply everything pending' },
      { cmd: 'cargo luxid migrate:rollback', desc: 'Undo the last migration' },
      { cmd: 'cargo luxid db:sync', desc: 'Refresh generated field lists from the live schema' },
      { cmd: 'cargo luxid routes', desc: 'Print the routing table' },
      { cmd: 'cargo luxid openapi --pretty', desc: 'Emit an OpenAPI 3.1 document' },
      { cmd: 'cargo run', desc: 'Serve on 127.0.0.1:3000' },
    ],
  },
];
