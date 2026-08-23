import React from 'react';
import CodeExample from '@/components/CodeExample';
import { A, C, H2, Lead, P } from '../components/Prose';

export default function InstallationContent() {
  return (
    <>
      <H2>Rust</H2>

      <Lead>
        Luxid needs <strong>Rust 1.94 or newer</strong> and uses edition 2024. If you do not have Rust:
      </Lead>

      <CodeExample
        language="sh"
        code={`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`}
      />

      <P>Check what you have:</P>

      <CodeExample
        language="sh"
        code={`rustc --version`}
      />

      <P>If it prints something older than 1.94:</P>

      <CodeExample
        language="sh"
        code={`rustup update stable`}
      />

      <H2>The <C>luxid</C> command</H2>

      <P>Luxid ships a command-line tool that creates projects and generates code:</P>

      <CodeExample
        language="sh"
        code={`cargo install luxid-cli`}
      />

      <P>That installs a binary called <C>luxid</C> into <C>~/.cargo/bin</C>. Verify it:</P>

      <CodeExample
        language="sh"
        code={`luxid --help`}
      />

      <P>If the shell cannot find it, <C>~/.cargo/bin</C> is not on your <C>PATH</C>. Add it:</P>

      <CodeExample
        language="sh"
        code={`# bash / zsh — in ~/.bashrc or ~/.zshrc
export PATH="$HOME/.cargo/bin:$PATH"

# fish — in ~/.config/fish/config.fish
fish_add_path ~/.cargo/bin`}
      />

      <H2>A database — or not</H2>

      <P>Luxid defaults to <strong>SQLite</strong>, which needs nothing installed: the database is a file in your project directory. You can complete this entire course without setting up anything.</P>

      <P>When you want Postgres later, it is one environment variable. Chapter 11 covers it.</P>

      <H2>Two commands, two places</H2>

      <P>This trips people up, so it is worth stating early.</P>

      <P><strong><C>luxid</C></strong> — the tool you just installed. It creates projects and generates files. It only touches the filesystem.</P>

      <CodeExample
        language="sh"
        code={`luxid new my-app
luxid make:model Post -a`}
      />

      <P><strong><C>cargo luxid</C></strong> — your <em>application's own</em> command line. It runs migrations, prints routes, serves.</P>

      <CodeExample
        language="sh"
        code={`cargo luxid migrate
cargo luxid routes
cargo run                  # serve`}
      />

      <P>Why two? Because <C>migrate</C> and <C>routes</C> need to know about <em>your</em> migrations and <em>your</em> routes — and those are Rust types that live in your crate. No external program can see them. So those commands live inside your application's binary, wired up by one line in <C>main.rs</C>.</P>

      <P><C>cargo luxid</C> is a cargo alias that <C>luxid new</C> writes into <C>.cargo/config.toml</C>. It expands to <C>cargo run --</C>, so the two are interchangeable — chapter 21 has the details.</P>

      <P>Scaffolding is different: creating files needs no knowledge of your code, so it lives in the standalone tool.</P>

      <H2>Optional: a faster linker</H2>

      <P>Rust spends a surprising amount of build time linking. If you install <A href="https://github.com/rui314/mold">mold</A>, your rebuilds get noticeably faster:</P>

      <CodeExample
        language="sh"
        code={`# Arch
sudo pacman -S mold
# Debian / Ubuntu
sudo apt install mold`}
      />

      <P>Every project <C>luxid new</C> creates includes a <C>.cargo/config.toml</C> with the mold setting <strong>commented out</strong>. Uncomment it once mold is installed. It ships disabled because a project that requires mold to build is a project that fails on any machine without it — including your colleagues'.</P>

      <H2>Checking it works</H2>

      <CodeExample
        language="sh"
        code={`luxid new hello
cd hello
cargo run`}
      />

      <P>The first build takes several minutes — Luxid pulls in an HTTP stack and an ORM, and they compile once. Subsequent builds take seconds.</P>

      <P>When it finishes:</P>

      <CodeExample
        language="text"
        code={`luxid listening on http://127.0.0.1:3000`}
      />

      <P>In another terminal:</P>

      <CodeExample
        language="sh"
        code={`curl localhost:3000/api/health`}
      />

      <CodeExample
        language="json"
        code={`{"status":"ok"}`}
      />

      <P>That is a working Luxid application. The next chapter takes it apart.</P>

    </>
  );
}
