import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import CodeExample from '@/components/CodeExample';
import { PROBLEM_DOCUMENT, TOUR } from '@/content/framework';

/**
 * A tour of the five things you write in a Luxid app.
 *
 * Every snippet is lifted from the README or the test suite rather than
 * written for the page, so what a visitor reads here is what compiles.
 */
export default function CodeShowcase() {
  const { darkMode } = useTheme();
  const [activeId, setActiveId] = useState(TOUR[0].id);

  const active = TOUR.find((t) => t.id === activeId) ?? TOUR[0];

  return (
    <section
      className={`py-24 sm:py-28 ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <header className="max-w-2xl">
          <p className={`lx-eyebrow mb-4 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
            // the whole surface
          </p>
          <h2
            className={`lx-display text-2xl leading-tight sm:text-3xl ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Five files, and you have an API.
          </h2>
          <p
            className={`mt-5 text-base leading-7 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
          >
            Salvo is sealed inside the framework — its types never appear in a Luxid signature — so
            this is the entire vocabulary.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Code tour"
          className={`mt-10 flex flex-wrap gap-1 rounded-lg border p-1 ${
            darkMode ? 'border-zinc-800 bg-black' : 'border-zinc-200 bg-white'
          }`}
        >
          {TOUR.map((tab) => {
            const selected = tab.id === active.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(tab.id)}
                className={`lx-mono rounded-md px-4 py-2 text-xs font-medium transition ${
                  selected
                    ? darkMode
                      ? 'bg-white text-black'
                      : 'bg-zinc-900 text-white'
                    : darkMode
                      ? 'text-zinc-500 hover:text-zinc-200'
                      : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <p
          className={`mt-6 max-w-2xl text-sm leading-6 ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          {active.blurb}
        </p>

        <CodeExample code={active.code} language="rust" filename={active.filename} />

        {/* Validation is the one case where the output matters as much as the input. */}
        {active.id === 'validation' && (
          <>
            <p
              className={`mt-8 max-w-2xl text-sm leading-6 ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              A failure renders as an RFC 7807 problem document, so clients and code generators
              already know the shape:
            </p>
            <CodeExample code={PROBLEM_DOCUMENT} language="json" filename="422 Unprocessable Content" />
          </>
        )}
      </div>
    </section>
  );
}
