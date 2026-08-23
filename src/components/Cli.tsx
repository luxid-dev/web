import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { CLI, QUICKSTART } from '@/content/framework';
import CodeExample from '@/components/CodeExample';

/**
 * Two command lines, and why there are two.
 *
 * This trips up everyone once: `luxid` writes files and knows nothing about
 * your code, while `migrate` and `routes` need your Rust types and so have to
 * run inside your own binary. Saying that plainly here saves a support thread.
 */
export default function Cli() {
  const { darkMode } = useTheme();

  return (
    <section className={`py-24 sm:py-28 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className={`lx-eyebrow mb-4 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
              // the command line
            </p>
            <h2
              className={`lx-display text-2xl leading-tight sm:text-3xl ${
                darkMode ? 'text-white' : 'text-zinc-900'
              }`}
            >
              From nothing to a running server.
            </h2>
            <p
              className={`mt-5 text-base leading-7 ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              SQLite by default, so there is no infrastructure to stand up before the first
              request.
            </p>

            <CodeExample code={QUICKSTART} language="bash" filename="Terminal" />

            <Link
              to="/docs/cli"
              className={`group inline-flex items-center gap-2 text-sm font-medium transition ${
                darkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-zinc-900'
              }`}
            >
              Full CLI reference
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="space-y-8">
            {CLI.map((group) => (
              <div key={group.group}>
                <h3
                  className={`lx-mono text-sm font-medium ${
                    darkMode ? 'text-white' : 'text-zinc-900'
                  }`}
                >
                  {group.group}
                </h3>
                <p
                  className={`mt-1.5 text-sm leading-6 ${
                    darkMode ? 'text-zinc-500' : 'text-zinc-500'
                  }`}
                >
                  {group.note}
                </p>

                <ul
                  className={`mt-4 divide-y rounded-xl border ${
                    darkMode
                      ? 'divide-zinc-900 border-zinc-900 bg-zinc-950'
                      : 'divide-zinc-200 border-zinc-200 bg-zinc-50'
                  }`}
                >
                  {group.commands.map((entry) => (
                    <li key={entry.cmd} className="px-4 py-3">
                      <code
                        className={`lx-mono block overflow-x-auto whitespace-nowrap text-[0.78rem] ${
                          darkMode ? 'text-zinc-200' : 'text-zinc-800'
                        }`}
                      >
                        {entry.cmd}
                      </code>
                      <p
                        className={`mt-1 text-xs leading-5 ${
                          darkMode ? 'text-zinc-500' : 'text-zinc-500'
                        }`}
                      >
                        {entry.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
