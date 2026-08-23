import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, Callout, H2, LI, Lead, P, Table, UL } from '../components/Prose';

export default function AuthenticationContent() {
  return (
    <>
      <Lead>
        Authentication answers *who is this?* Authorization — chapter 18 — answers *may they do this?* Keep them separate in your head; they are separate in the code.
      </Lead>

      <P>Luxid offers two mechanisms:</P>

      <UL>
        <LI key={0}><strong>JWT tokens</strong> — for APIs, mobile clients, anything that can hold a token. This chapter.</LI>
        <LI key={1}><strong>Sessions</strong> — for browsers. Chapter 17.</LI>
      </UL>

      <H2>Passwords</H2>

      <P>Never store a password. Store a hash.</P>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;

let hash = Hash::make("correct horse battery staple")?;   // store this
let ok = Hash::verify("correct horse battery staple", &hash);   // bool`}
      />

      <P><C>Hash::make</C> uses argon2id with a fresh random salt, so the same password hashes differently every time — which is the point. <C>Hash::verify</C> handles the salt for you.</P>

      <P>Two behaviours worth knowing:</P>

      <UL>
        <LI key={0}>A <strong>corrupt stored hash</strong> fails verification rather than erroring, so a mangled database row is indistinguishable from a wrong password.</LI>
        <LI key={1}>Hashing is <strong>deliberately slow</strong>. That is what makes stolen hashes expensive to crack, and it is why you hash on registration and login rather than on every request.</LI>
      </UL>

      <P>The reliable way to never store plaintext is a hook (chapter 14), so no code path can bypass it.</P>

      <H2>Tokens</H2>

      <P>A JSON Web Token says "the bearer is subject X" and is signed so it cannot be forged.</P>

      <CodeExample
        language="rust"
        code={`let jwt = Jwt::new(secret);

let identity = Identity::new("42").with_claim("role", "admin");
let token = jwt.sign(&identity)?;

let identity = jwt.verify(&token)?;
identity.subject();                       // "42"
identity.id::<i64>()?;                    // 42
identity.claim::<String>("role")?;        // Some("admin")`}
      />

      <P>A <strong>subject</strong> is who the token is for — usually a user id as a string. <strong>Claims</strong> are extra facts you attach.</P>

      <P>Configure the signer once:</P>

      <CodeExample
        language="rust"
        code={`Providers::new()
    .singleton(move |_| Jwt::new(&secret).with_ttl(Duration::from_secs(3600)))`}
      />

      <P>The default lifetime is fourteen days.</P>

      <Callout tone="warning">A token is <strong>signed, not encrypted</strong>. Anyone holding one can read its claims. Put identifiers and roles in there; never put anything secret.</Callout>

      <H2>Guarding routes</H2>

      <CodeExample
        language="rust"
        code={`r.group("/api", |r| {
    r.post("/login", AuthController::login);          // public

    r.group("/", |r| {
        r.middleware(Auth::jwt());                     // everything below needs a token

        r.get("/me", MeController::show);
        r.resource("/posts", PostsController);
    });
});`}
      />

      <P><C>Auth::jwt()</C> reads the <C>Authorization: Bearer …</C> header, verifies the token, and puts the identity on the context. No token, or a bad one, and the action never runs — the client gets a <C>401</C>.</P>

      <P>For endpoints that render differently when signed in but allow anonymous access:</P>

      <CodeExample
        language="rust"
        code={`r.get("/feed", FeedController::index).middleware(Auth::optional_jwt());`}
      />

      <H2>Reading the user</H2>

      <CodeExample
        language="rust"
        code={`async fn show(ctx: HttpContext) -> Result<Response> {
    let id: i64 = ctx.auth.id()?;                          // 401 if anonymous
    let role: Option<String> = ctx.auth.identity()?.claim("role")?;

    ctx.response.ok(json!({ "id": id, "role": role }))
}`}
      />

      <Table
        headers={['Method', 'Returns']}
        rows={[
            [<span key={0}><C>ctx.auth.check()</C></span>, <span key={1}><C>bool</C> — is anyone signed in?</span>],
            [<span key={0}><C>ctx.auth.id::{'<'}T{'>'}()</C></span>, <span key={1}>the subject, parsed. <C>401</C> if anonymous</span>],
            [<span key={0}><C>ctx.auth.identity()</C></span>, <span key={1}><C>&Identity</C>. <C>401</C> if anonymous</span>],
            [<span key={0}><C>ctx.auth.try_identity()</C></span>, <span key={1}><C>Option{'<'}&Identity{'>'}</C> — never fails</span>],
        ]}
      />

      <P>Use <C>try_identity</C> behind <C>optional_jwt</C>, and <C>id</C>/<C>identity</C> behind <C>jwt</C>.</P>

      <P><C>ctx.auth</C> carries the <em>identity</em>, not the user row. To load the row:</P>

      <CodeExample
        language="rust"
        code={`let user = User::find_or_fail(ctx.auth.id::<i64>()?).await?;`}
      />

      <H2>A login endpoint</H2>

      <CodeExample
        language="rust"
        code={`use luxid::prelude::*;
use serde::Deserialize;
use serde_json::json;

use crate::models::user::User;

#[derive(Deserialize, Validate)]
pub struct Credentials {
    #[validate(email)]
    pub email: String,
    #[validate(length(min = 1))]
    pub password: String,
}

pub struct AuthController;

#[luxid::controller]
impl AuthController {
    async fn login(ctx: HttpContext) -> Result<Response> {
        let input = ctx.request.validate::<Credentials>().await?;

        let user = User::query()
            .where_eq(User::email, input.email)
            .first()
            .await?;

        // One branch for both failures: a wrong email and a wrong password must
        // be indistinguishable, or the endpoint tells attackers which addresses
        // are registered.
        let Some(user) = user.filter(|u| Hash::verify(&input.password, &u.password)) else {
            return Err(Error::Unauthorized);
        };

        let jwt = ctx.services.get::<Jwt>()?;
        let identity = Identity::new(user.id.to_string());

        ctx.response.ok(json!({ "token": jwt.sign(&identity)? }))
    }
}`}
      />

      <P>That comment is the important part of the endpoint. It is easy to write</P>

      <CodeExample
        language="rust"
        code={`let user = User::query()... .first().await?.ok_or(Error::not_found("User", email))?;
if !Hash::verify(...) { return Err(Error::Unauthorized); }`}
      />

      <P>and thereby tell anyone who asks which email addresses have accounts.</P>

      <H2>Verification failures do not explain themselves</H2>

      <P>Expired, forged, and malformed tokens all produce a byte-identical <C>401</C>:</P>

      <CodeExample
        language="json"
        code={`{ "type": "https://luxid.rs/errors/unauthorized", "title": "unauthenticated", "status": 401 }`}
      />

      <P>Deliberately — a caller who can tell "expired" from "bad signature" can probe your signing key. If you need to distinguish them, do it in your logs.</P>

      <H2>Choosing a secret</H2>

      <CodeExample
        language="sh"
        code={`# .env, never committed
APP_KEY=$(openssl rand -hex 32)`}
      />

      <CodeExample
        language="rust"
        code={`let secret: String = config.get("app.key")?;`}
      />

      <P>Changing it invalidates every issued token, which is your emergency "log everyone out" switch.</P>

      <H2>Adding a guard of your own</H2>

      <P><C>Auth::jwt()</C> is ordinary middleware, so an API-key or OAuth guard needs no framework release:</P>

      <CodeExample
        language="rust"
        code={`pub struct ApiKey;

#[luxid::middleware]
impl ApiKey {
    async fn handle(&self, mut ctx: HttpContext, next: Next) -> Result<Response> {
        let presented = ctx.request.header("x-api-key").ok_or(Error::Unauthorized)?;
        let expected: String = ctx.config.get("app.api_key")?;

        if presented != expected {
            return Err(Error::Unauthorized);
        }

        ctx.auth.set(Identity::new("service"));
        next.run(ctx).await
    }
}`}
      />

      <P>Downstream actions read <C>ctx.auth</C> exactly as they would behind the JWT guard.</P>

    </>
  );
}
