import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { INSTALL_COMMAND, LUXID, ROUTE_TABLE } from '@/content/framework';

/**
 * The hero's argument is the route table, not the headline.
 *
 * One scaffold command writes a model, a migration, a factory, a seeder, a
 * policy, form requests and a controller — and registers six routes. Printing
 * that table is the most characteristic thing the framework does, so the page
 * opens with it rather than with a claim about it.
 */
export default function Hero() {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className={`relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
        {/* Left: the claim, kept short because the terminal makes the case. */}
        <div>
          <div className="mb-7 flex flex-wrap items-center gap-2">
            <span
              className={`lx-mono rounded-full border px-2.5 py-1 text-xs ${
                darkMode
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-400'
                  : 'border-zinc-200 bg-zinc-50 text-zinc-600'
              }`}
            >
              v{LUXID.version}
            </span>
            <span
              className={`lx-mono rounded-full border px-2.5 py-1 text-xs ${
                darkMode
                  ? 'border-zinc-800 bg-zinc-900 text-zinc-500'
                  : 'border-zinc-200 bg-zinc-50 text-zinc-500'
              }`}
            >
              experimental — no production workload yet
            </span>
          </div>

          <h1
            className={`lx-display text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3rem] ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Convention over configuration,
            <br />
            in a type system that{' '}
            <span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>will not bend.</span>
          </h1>

          <p
            className={`mt-7 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            A convention-over-configuration web framework for Rust. Controllers take one owned
            context, validation rules reach the database, and a missing row is a{' '}
            <span className={darkMode ? 'text-zinc-200' : 'text-zinc-900'}>404</span> with nothing
            in the action body.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/docs/introduction"
              className={`group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition ${
                darkMode
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'bg-zinc-900 text-white hover:bg-zinc-700'
              }`}
            >
              Read the docs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <a
              href={LUXID.repo}
              target="_blank"
              rel="noreferrer noopener"
              className={`inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3.5 text-sm font-medium transition ${
                darkMode
                  ? 'border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white'
                  : 'border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-900'
              }`}
            >
              Source on GitHub
            </a>
          </div>

          {/* Install line. The only command a first-time visitor needs. */}
          <div
            className={`mt-6 inline-flex max-w-full items-center gap-3 rounded-lg border px-4 py-3 ${
              darkMode ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'
            }`}
          >
            <span className={`lx-mono text-sm ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
              $
            </span>
            <code
              className={`lx-mono overflow-x-auto whitespace-nowrap text-sm ${
                darkMode ? 'text-zinc-300' : 'text-zinc-700'
              }`}
            >
              {INSTALL_COMMAND}
            </code>
            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? 'Copied' : 'Copy install command'}
              className={`ml-auto shrink-0 rounded-md p-1.5 transition ${
                darkMode
                  ? 'text-zinc-500 hover:bg-white/10 hover:text-white'
                  : 'text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900'
              }`}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Right: the receipt. */}
        <RouteTable />
      </div>
    </section>
  );
}

/**
 * `cargo luxid routes`, printed a row at a time.
 *
 * The stagger is the one piece of motion in the hero and it earns its place:
 * terminal output arrives line by line, so the reveal is the artifact behaving
 * the way the real thing does. It is skipped entirely under reduced motion.
 */
function RouteTable() {
  const { darkMode } = useTheme();
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setRevealed(ROUTE_TABLE.length);
      return;
    }

    const timers = ROUTE_TABLE.map((_, i) =>
      setTimeout(() => setRevealed((n) => Math.max(n, i + 1)), 260 + i * 110),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <figure className="min-w-0">
      <div
        className={`overflow-hidden rounded-xl border ${
          darkMode ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'
        }`}
      >
        <div
          className={`flex items-center gap-2 border-b px-4 py-2.5 ${
            darkMode ? 'border-zinc-800 bg-zinc-900/60' : 'border-zinc-200 bg-white'
          }`}
        >
          <span aria-hidden className="flex items-center gap-1.5">
            <span
              className={`h-2.5 w-2.5 rounded-full ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`}
            />
            <span
              className={`h-2.5 w-2.5 rounded-full ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`}
            />
            <span
              className={`h-2.5 w-2.5 rounded-full ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`}
            />
          </span>
          <span
            className={`lx-mono ml-2 text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}
          >
            blogapp
          </span>
        </div>

        <div className="overflow-x-auto px-4 py-4 sm:px-5">
          <div className="lx-mono min-w-[34rem] text-[0.8rem] leading-6">
            <div className={darkMode ? 'text-zinc-500' : 'text-zinc-500'}>
              <span className={darkMode ? 'text-zinc-600' : 'text-zinc-400'}>$ </span>
              luxid make:model Post -a
            </div>
            <div className={`mb-3 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
              wrote model, migration, factory, seeder, policy, form requests, controller
            </div>

            <div className={darkMode ? 'text-zinc-500' : 'text-zinc-500'}>
              <span className={darkMode ? 'text-zinc-600' : 'text-zinc-400'}>$ </span>
              cargo luxid routes
            </div>

            <table className="mt-2 w-full border-separate border-spacing-0 text-left">
              <tbody>
                {ROUTE_TABLE.map((route, i) => (
                  <tr
                    key={`${route.method} ${route.path}`}
                    className="transition-opacity duration-300 motion-reduce:transition-none"
                    style={{ opacity: i < revealed ? 1 : 0 }}
                  >
                    <td
                      className={`py-0.5 pr-6 font-medium ${
                        darkMode ? 'text-zinc-100' : 'text-zinc-900'
                      }`}
                    >
                      {route.method}
                    </td>
                    <td className={`py-0.5 pr-6 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      {route.path}
                    </td>
                    <td className={`py-0.5 pr-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {route.action}
                    </td>
                    <td className={`py-0.5 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
                      {route.middleware}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <figcaption
        className={`mt-3 text-xs leading-5 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}
      >
        One command wrote the model, migration, factory, seeder, policy, form requests and
        controller — and registered its routes. Nothing above was typed by hand.
      </figcaption>
    </figure>
  );
}
