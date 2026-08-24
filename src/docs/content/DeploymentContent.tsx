import React from 'react';
import CodeExample from '@/components/CodeExample';
import { C, H2, LI, Lead, P, Table, UL } from '../components/Prose';

export default function DeploymentContent() {
  return (
    <>
      <Lead>
        A Luxid application compiles to one binary with no runtime, no interpreter, and no external process manager. Deploying it means copying that file to a machine and running it.
      </Lead>

      <H2>What the framework costs</H2>

      <P>Measured, not asserted. <C>cargo bench -p luxid --bench overhead</C> serves byte-identical responses through four stacks and compares them against bare salvo underneath.</P>

      <Table
        headers={['Stack', 'µs/request', 'req/s/core', 'vs bare salvo']}
        rows={[
            [<span key={0}>bare salvo</span>, <span key={1}>2.38</span>, <span key={2}>419,000</span>, <span key={3}>—</span>],
            [<span key={0}>Luxid, no middleware</span>, <span key={1}>3.36</span>, <span key={2}>298,000</span>, <span key={3}>+0.97 µs</span>],
            [<span key={0}>Luxid + 2 middleware + container</span>, <span key={1}>4.72</span>, <span key={2}>212,000</span>, <span key={3}>+2.33 µs</span>],
            [<span key={0}>Luxid + JWT guard</span>, <span key={1}>9.34</span>, <span key={2}>107,000</span>, <span key={3}>+6.95 µs</span>],
            [<span key={0}>Luxid, realistic stack</span>, <span key={1}>12.59</span>, <span key={2}>79,000</span>, <span key={3}>+10.20 µs</span>],
        ]}
      />

      <P>Reference hardware: Intel i7-4980HQ, a 2014 four-core laptop part, single-threaded.</P>

      <P><strong>Read the differences, not the absolutes.</strong> Requests are driven in-process through salvo's test client, which charges every variant the same fixed cost. The absolute numbers are a latency floor, not a throughput claim for a networked server. Every variant sends an identical request — including the <C>authorization</C> header the unauthenticated ones ignore — so no driver cost lands on one variant and not another.</P>

      <H2>Where the time goes</H2>

      <UL>
        <LI key={0}><strong>The framework floor is about 1 µs per request.</strong> That buys context construction, the dispatch chain, and translating your <C>Response</C> back into salvo's. It is the price of <C>HttpContext</C> and of sealing salvo away.</LI>
        <LI key={1}><strong>Each middleware layer costs roughly 0.7 µs</strong>, container resolution included. That is the boxed future and the owned context, as designed.</LI>
        <LI key={2}><strong>Authentication dominates a realistic stack.</strong> The JWT guard adds about 4.6 µs, of which 3.18 µs is signature verification with no HTTP involved at all. That cost belongs to <C>jsonwebtoken</C>, not to Luxid, and you would pay it in any framework.</LI>
      </UL>

      <P>The practical reading: middleware is cheap enough to use freely, and the first thing worth optimising in a slow endpoint is almost never the framework.</P>

      <H2>Measuring on your own machine</H2>

      <P>Comparisons <strong>within</strong> one <C>cargo bench</C> invocation are sound, because every variant runs back to back under the same conditions. Comparisons <strong>across</strong> invocations are not — background load drifts, and an early attempt to compare two crypto providers in separate runs produced a confident and completely reversed conclusion. If you need to compare two things, measure them in the same run.</P>

      <P>Differences below roughly 100 ns are not resolvable on ordinary hardware.</P>

      <H2>Building for production</H2>

      <CodeExample
        language="sh"
        code={`cargo build --release`}
      />

      <P>The binary lands in <C>target/release/{'<'}crate-name{'>'}</C> and carries your routes, migrations, and configuration defaults with it. Nothing else needs to be on the target machine except the shared libraries your database driver links against.</P>

      <H2>Running it</H2>

      <CodeExample
        language="sh"
        code={`./blog migrate    # apply pending migrations first
./blog serve      # then serve`}
      />

      <P>Keep those two as separate steps. A process that migrates on boot will, on the day you run three replicas, try to migrate three times at once.</P>

      <P>Address resolution is <C>LUXID_ADDR</C>, then <C>PORT</C>, then <C>127.0.0.1:3000</C>.</P>

      <H2>Binding inside a container</H2>

      <P>The default binds to loopback, which is right on a laptop and wrong in a container: nothing outside can reach it, and the symptom is a health check that times out against a process that is running perfectly.</P>

      <CodeExample
        language="sh"
        code={`LUXID_ADDR=0.0.0.0:3000 ./blog serve`}
      />

      <H2>Configuration in production</H2>

      <P><C>luxid.toml</C> is committed and holds what is true everywhere. The environment holds what is true for this deployment, and overrides the file. So a secret never needs to be written down in the repository:</P>

      <CodeExample
        language="sh"
        code={`DATABASE_URL=postgres://user:password@host/db
APP_KEY=...
LUXID_ADDR=0.0.0.0:3000`}
      />

      <P>A missing required key fails at startup with a message naming the environment variable to set, rather than at 3am on the first request that happens to read it.</P>

      <H2>A container image</H2>

      <P>A two-stage build keeps the toolchain out of the shipped image:</P>

      <CodeExample
        language="text"
        code={`FROM rust:1.94 AS build
WORKDIR /src
COPY . .
RUN cargo build --release

FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y ca-certificates libssl3 \\
    && rm -rf /var/lib/apt/lists/*
COPY --from=build /src/target/release/blog /usr/local/bin/blog
ENV LUXID_ADDR=0.0.0.0:3000
EXPOSE 3000
CMD ["blog", "serve"]`}
      />

      <P><C>ca-certificates</C> is needed for outbound TLS, and <C>libssl3</C> for database drivers that link OpenSSL. Both are easy to leave out and produce errors that look nothing like their cause.</P>

      <H2>Before you ship</H2>

      <UL>
        <LI key={0}><C>cargo test</C> — the suite, including the endpoint tests</LI>
        <LI key={1}><C>cargo clippy --all-targets</C> — lints</LI>
        <LI key={2}><C>cargo luxid routes</C> — confirm the route table is what you think it is</LI>
        <LI key={3}><C>cargo luxid migrate:status</C> — confirm the target database is up to date</LI>
      </UL>
    </>
  );
}
