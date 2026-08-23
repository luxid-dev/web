import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { BUILT, NOT_BUILT } from '@/content/framework';

/**
 * What the framework does, and — immediately after — what it does not.
 *
 * The second list is the point. Luxid is 0.1.2 and says so, and a feature grid
 * that only lists wins would be the first dishonest thing on the page. Each
 * card links to the chapter that covers it, so the grid doubles as a way in.
 */
export default function Features() {
  const { darkMode } = useTheme();

  return (
    <section
      id="features"
      className={`border-y py-24 sm:py-28 ${
        darkMode ? 'border-zinc-900 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-2xl">
          <p className={`lx-eyebrow mb-4 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
            // what is built
          </p>
          <h2
            className={`lx-display text-2xl leading-tight sm:text-3xl ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Batteries, and a list of the ones missing.
          </h2>
        </header>

        <ul className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {BUILT.map((item) => (
            <li key={item.title}>
              <Link
                to={item.href}
                className={`group flex h-full flex-col rounded-xl border p-6 transition ${
                  darkMode
                    ? 'border-zinc-900 hover:border-zinc-700 hover:bg-black'
                    : 'border-zinc-200 hover:border-zinc-400 hover:bg-white'
                }`}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3
                    className={`lx-mono text-sm font-medium ${
                      darkMode ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition ${
                      darkMode
                        ? 'text-zinc-700 group-hover:text-zinc-400'
                        : 'text-zinc-300 group-hover:text-zinc-600'
                    }`}
                  />
                </div>
                <p
                  className={`text-sm leading-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
                >
                  {item.body}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        {/* The counterweight. Deliberately quiet — it is a list, not a pitch. */}
        <div
          className={`mt-14 rounded-xl border p-6 sm:p-8 ${
            darkMode ? 'border-zinc-900 bg-black' : 'border-zinc-200 bg-white'
          }`}
        >
          <p className={`lx-eyebrow mb-5 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
            // not built yet
          </p>

          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {NOT_BUILT.map((item) => (
              <div key={item.title}>
                <dt
                  className={`lx-mono text-sm ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}
                >
                  {item.title}
                </dt>
                <dd
                  className={`mt-1.5 text-sm leading-6 ${
                    darkMode ? 'text-zinc-500' : 'text-zinc-500'
                  }`}
                >
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>

          <p
            className={`mt-6 border-t pt-5 text-sm leading-6 ${
              darkMode
                ? 'border-zinc-900 text-zinc-500'
                : 'border-zinc-200 text-zinc-500'
            }`}
          >
            If you need server-rendered HTML today, or a job queue, Luxid is not ready for you yet.
            If you are building a JSON API, it is.
          </p>
        </div>
      </div>
    </section>
  );
}
