import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, Lead, P, Table } from '../components/Prose';

export default function AuthorizationContent() {
  return (
    <>
      <Lead>
        Authentication established *who*. Authorization decides *whether they may*.
      </Lead>

      <H2>A policy is a function</H2>

      <P>No trait to implement, no registry to populate:</P>

      <CodeExample
        language="rust"
        code={`// src/policies/post_policy.rs
use luxid::prelude::*;

use crate::models::post::Post;

pub struct PostPolicy;

impl PostPolicy {
    pub fn view(_auth: &Auth, _post: &Post) -> bool {
        true
    }

    pub fn update(auth: &Auth, post: &Post) -> bool {
        auth.try_identity()
            .and_then(|identity| identity.id::<i64>().ok())
            .is_some_and(|id| id == post.user_id)
    }

    pub fn delete(auth: &Auth, post: &Post) -> bool {
        Self::update(auth, post)
    }
}`}
      />

      <P>The signature is always <C>(&Auth, &T) -{'>'} bool</C>. Anything matching it is a policy.</P>

      <H2>Enforcing it</H2>

      <CodeExample
        language="rust"
        code={`async fn update(ctx: HttpContext) -> Result<Response> {
    let post = Post::find_or_fail(ctx.params.get::<i64>("id")?).await?;

    ctx.authorize(PostPolicy::update, &post)?;

    // Past this line, they are allowed.
}`}
      />

      <P>Denied means <C>403</C>, through the ordinary error path. One line, no branching.</P>

      <P>Note the policy is passed <strong>without parentheses</strong> — you are naming the function, not calling it.</P>

      <H2>Asking without enforcing</H2>

      <CodeExample
        language="rust"
        code={`async fn show(ctx: HttpContext) -> Result<Response> {
    let post = Post::find_or_fail(ctx.params.get::<i64>("id")?).await?;

    let can_edit = ctx.can(PostPolicy::update, &post);

    ctx.response.ok(json!({ "post": post, "can_edit": can_edit }))
}`}
      />

      <P><C>can</C> returns a <C>bool</C> and never fails the request — for telling a client which buttons to render.</P>

      <P>Remember the move-order rule from chapter 05: bind <C>can_edit</C> before <C>ctx.response.ok(...)</C>, since that call consumes part of <C>ctx</C>.</P>

      <H2>Order matters: 404 before 403</H2>

      <P>Load the row first, authorize second:</P>

      <CodeExample
        language="rust"
        code={`let post = Post::find_or_fail(id).await?;   // 404 if it does not exist
ctx.authorize(PostPolicy::update, &post)?;  // 403 if it does but they may not`}
      />

      <P>Reversing that is not possible here — you need the row to decide — but the principle generalises: <em>existence</em> is checked before <em>permission</em>.</P>

      <P>There is a subtlety worth naming. Returning <C>403</C> for a row that exists tells the caller it exists. For most applications that is fine. For something where the mere existence of a record is sensitive, return a <C>404</C> for both cases instead:</P>

      <CodeExample
        language="rust"
        code={`let post = Post::find(id).await?;

let Some(post) = post.filter(|p| ctx.can(PostPolicy::view, p)) else {
    return Err(Error::not_found("Post", id));
};`}
      />

      <P>Now "does not exist" and "not yours" are indistinguishable.</P>

      <H2>Why <C>bool</C> and not <C>Result</C></H2>

      <P>A policy answers a permission question. Returning <C>Result</C> would invite putting <em>other</em> failures in there — a missing row, a database error — and those are not permission decisions. A missing row is a <C>404</C> and belongs before the check.</P>

      <P>Keeping policies to <C>bool</C> means they stay pure, testable without a database, and obviously correct at a glance:</P>

      <CodeExample
        language="rust"
        code={`#[test]
fn only_the_owner_may_update() {
    let mut auth = Auth::default();
    auth.set(Identity::new("1"));

    let mine = Post { id: 1, user_id: 1, /* ... */ };
    let theirs = Post { id: 2, user_id: 2, /* ... */ };

    assert!(PostPolicy::update(&auth, &mine));
    assert!(!PostPolicy::update(&auth, &theirs));
}`}
      />

      <P>No HTTP, no database, no async.</P>

      <H2>Roles</H2>

      <P>Policies read whatever is on the identity, so roles come from claims:</P>

      <CodeExample
        language="rust"
        code={`pub fn delete(auth: &Auth, post: &Post) -> bool {
    let Some(identity) = auth.try_identity() else {
        return false;
    };

    let is_admin = identity
        .claim::<String>("role")
        .ok()
        .flatten()
        .is_some_and(|role| role == "admin");

    is_admin || identity.id::<i64>().is_ok_and(|id| id == post.user_id)
}`}
      />

      <P>Put the role in the token when you issue it:</P>

      <CodeExample
        language="rust"
        code={`let identity = Identity::new(user.id.to_string()).with_claim("role", user.role);`}
      />

      <P>Claims travel in the token, so a role change does not take effect until the next token is issued. For roles that must revoke immediately, read the user row instead.</P>

      <H2>Policies for a whole class of thing</H2>

      <P>Not every policy needs a model:</P>

      <CodeExample
        language="rust"
        code={`pub struct AdminPolicy;

impl AdminPolicy {
    pub fn access(auth: &Auth, _: &()) -> bool {
        auth.try_identity()
            .and_then(|i| i.claim::<String>("role").ok().flatten())
            .is_some_and(|role| role == "admin")
    }
}`}
      />

      <CodeExample
        language="rust"
        code={`ctx.authorize(AdminPolicy::access, &())?;`}
      />

      <P>Though when it applies to every route in a section, middleware is tidier:</P>

      <CodeExample
        language="rust"
        code={`r.group("/admin", |r| {
    r.middleware(Auth::jwt());
    r.middleware(RequireRole::new("admin"));
    // ...
});`}
      />

      <H2>Where authorization goes</H2>

      <Table
        headers={['Check', 'Where']}
        rows={[
            [<span key={0}>"must be signed in"</span>, <span key={1}>middleware (<C>Auth::jwt()</C>)</span>],
            [<span key={0}>"must have this role"</span>, <span key={1}>middleware</span>],
            [<span key={0}>"must own *this row*"</span>, <span key={1}>a policy, in the action</span>],
        ]}
      />

      <P>The rule of thumb: if the check needs the specific record, it belongs in the action after you have loaded it. Otherwise it belongs in middleware, where it runs once and protects everything below.</P>

    </>
  );
}
