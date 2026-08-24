import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { COMPILE_ERROR, NOT_LOADED_ERROR } from '@/content/framework';

/**
 * The page's one bold moment: real `rustc` output, unedited.
 *
 * Every framework claims to be safe. Luxid's actual claim is narrower and
 * checkable — a column knows its type, so the wrong comparison never reaches
 * the database — and the only honest way to show it is to compile the mistake
 * and print what the compiler said. The diagnostic below was captured that
 * way; only the file path is presentational.
 */
export default function TypeSystem() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`border-y py-24 sm:py-28 ${
        darkMode ? 'border-zinc-900 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-2xl">
          <p className={`lx-eyebrow mb-4 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
            // typed columns
          </p>
          <h2
            className={`lx-display text-2xl leading-tight sm:text-3xl ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            The wrong query does not compile.
          </h2>
          <p
            className={`mt-5 text-base leading-7 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
          >
            A column carries its type, so comparing one against the wrong thing is a build failure
            rather than an empty result set at three in the morning. Here are both lines, and here
            is what the compiler actually says about the second one.
          </p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
          {/* The two lines, side by side. */}
          <div className="flex flex-col gap-4">
            <Panel label="src/controllers/posts.rs">
              <div className="lx-mono space-y-3 text-[0.8rem] leading-6">
                <div>
                  <div className={darkMode ? 'text-zinc-200' : 'text-zinc-800'}>
                    Post::query().where_eq(Post::user_id, 7)
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className={darkMode ? 'text-zinc-400' : 'text-zinc-500'}>✓</span>
                    <span className={darkMode ? 'text-zinc-500' : 'text-zinc-500'}>compiles</span>
                  </div>
                </div>

                <div
                  className={`border-t pt-3 ${darkMode ? 'border-zinc-800' : 'border-zinc-200'}`}
                >
                  <div className={darkMode ? 'text-zinc-200' : 'text-zinc-800'}>
                    Post::query().where_eq(Post::user_id,{' '}
                    <span className={darkMode ? 'text-white' : 'text-black'}>"seven"</span>)
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className={darkMode ? 'text-zinc-400' : 'text-zinc-500'}>✗</span>
                    <span className={darkMode ? 'text-zinc-500' : 'text-zinc-500'}>
                      does not
                    </span>
                  </div>
                </div>
              </div>
            </Panel>

            {/* A second receipt: the same discipline, enforced at runtime. */}
            <Panel label="N+1, caught in development">
              <p
                className={`mb-3 text-sm leading-6 ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                Reading a relation you forgot to load is an error that names the fix, so an N+1
                becomes a failing test rather than a slow endpoint.
              </p>
              <p
                className={`lx-mono text-[0.78rem] leading-6 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-700'
                }`}
              >
                {NOT_LOADED_ERROR}
              </p>
            </Panel>
          </div>

          {/* The diagnostic itself. */}
          <Panel label="cargo check">
            <Diagnostic text={COMPILE_ERROR.diagnostic} />
          </Panel>
        </div>

        <p className={`mt-6 text-xs ${darkMode ? 'text-zinc-600' : 'text-zinc-500'}`}>
          Captured from <span className="lx-mono">cargo check</span> against this checkout. The
          file path is the only thing changed — you would meet this in your own controller.
        </p>

        <Link
          to="/docs/models"
          className={`group mt-8 inline-flex items-center gap-2 text-sm font-medium transition ${
            darkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'
          }`}
        >
          How Luxid types its columns
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

function Panel({ label, children }: { label: string; children: React.ReactNode }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`overflow-hidden rounded-xl border ${
        darkMode ? 'border-zinc-800 bg-black' : 'border-zinc-200 bg-white'
      }`}
    >
      <div
        className={`border-b px-4 py-2.5 ${
          darkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-200 bg-zinc-50'
        }`}
      >
        <span className={`lx-mono text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
          {label}
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

/**
 * Renders `rustc` output with the compiler's own colours.
 *
 * This block is the only colour on the whole site, and it is here because it
 * is a transcript: the `error[…]` header and its `^^^^` carets in rose, the
 * `help:` / `note:` labels in cyan, exactly as the terminal prints them.
 * Everything else — the gutter, line numbers, source echo — stays monochrome.
 */
function Diagnostic({ text }: { text: string }) {
  const { darkMode } = useTheme();
  const lines = useMemo(() => text.split('\n'), [text]);

  const base = darkMode ? 'text-zinc-300' : 'text-zinc-700';
  const dim = darkMode ? 'text-zinc-600' : 'text-zinc-400';

  return (
    <pre
      className={`lx-mono max-h-[26rem] overflow-auto text-[0.72rem] leading-5 sm:text-[0.78rem] ${base}`}
      style={{ padding: 0, margin: 0, background: 'transparent' }}
    >
      <code style={{ background: 'transparent' }}>
        {lines.map((line, i) => (
          <div key={i}>{colourise(line, dim) ?? ' '}</div>
        ))}
      </code>
    </pre>
  );
}

/** Splits one diagnostic line into tinted spans. */
const TOKENS = /(error\[E\d+\]|(?:=\s+)?(?:help|note):|\^+|-->|\|)/g;

function colourise(line: string, dim: string): React.ReactNode {
  if (!line) return null;

  return line.split(TOKENS).map((part, i) => {
    if (!part) return null;

    if (/^error\[E\d+\]$/.test(part)) {
      return (
        <span key={i} style={{ color: 'var(--lx-err)', fontWeight: 700 }}>
          {part}
        </span>
      );
    }

    if (/^\^+$/.test(part)) {
      return (
        <span key={i} style={{ color: 'var(--lx-err)' }}>
          {part}
        </span>
      );
    }

    if (/(help|note):$/.test(part)) {
      return (
        <span key={i} style={{ color: 'var(--lx-help)' }}>
          {part}
        </span>
      );
    }

    if (part === '-->' || part === '|') {
      return (
        <span key={i} className={dim}>
          {part}
        </span>
      );
    }

    return <span key={i}>{part}</span>;
  });
}
