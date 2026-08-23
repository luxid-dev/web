import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { BENCHMARK, LUXID } from '@/content/framework';

/**
 * Measured, not asserted.
 *
 * The framework treats its own overhead as something to benchmark rather than
 * claim, so the page prints the numbers and the caveats together. The figure is
 * built as a real table with the bars drawn inside it: one series, so no
 * legend, every value directly labelled, and the accessible table view is the
 * chart rather than an alternative to it.
 *
 * The two greys are deliberate. This is a single magnitude series, not a
 * categorical palette — the baseline row is set apart by tone, position and the
 * word "baseline", never by hue. Both tones clear 3:1 against their surface and
 * separate from each other well past the CVD threshold; they read grey on
 * purpose, because the only colours on this site belong to the compiler.
 */

const BAR_BASELINE = '#71717A';

export default function Benchmarks() {
  const { darkMode } = useTheme();

  const max = Math.max(...BENCHMARK.rows.map((r) => r.us));
  const barMeasured = darkMode ? '#FAFAFA' : '#18181B';

  const rule = darkMode ? 'border-zinc-900' : 'border-zinc-200';
  const muted = darkMode ? 'text-zinc-500' : 'text-zinc-500';

  return (
    <section
      className={`border-y py-24 sm:py-28 ${
        darkMode ? 'border-zinc-900 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'
      }`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <header className="max-w-2xl">
          <p className={`lx-eyebrow mb-4 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
            // overhead
          </p>
          <h2
            className={`lx-display text-2xl leading-tight sm:text-3xl ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Measured, not asserted.
          </h2>
          <p className={`mt-5 text-base leading-7 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            What the framework costs you over the HTTP library it sits on, from a benchmark you can
            run yourself.
          </p>
        </header>

        {/* Two headline numbers. Both are single facts, so neither is a chart. */}
        <div className={`mt-12 grid gap-px border-y sm:grid-cols-2 ${rule}`}>
          <div className={`py-7 sm:pr-8 ${rule} sm:border-r`}>
            <div
              className={`lx-display text-4xl sm:text-5xl ${
                darkMode ? 'text-white' : 'text-zinc-900'
              }`}
            >
              ~1 µs
            </div>
            <p className={`mt-2 text-sm ${muted}`}>Framework floor, per request</p>
          </div>
          <div className="py-7 sm:pl-8">
            <div
              className={`lx-display text-4xl sm:text-5xl ${
                darkMode ? 'text-white' : 'text-zinc-900'
              }`}
            >
              {LUXID.tests}
            </div>
            <p className={`mt-2 text-sm ${muted}`}>Tests passing, none failing</p>
          </div>
        </div>

        <figure className="mt-12">
          <table className="w-full border-separate border-spacing-0 text-left">
            <caption
              className={`mb-5 text-left text-sm leading-6 ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              Microseconds per request, lower is better. Reference hardware:{' '}
              {BENCHMARK.hardware}.
            </caption>

            <thead>
              <tr className={`lx-mono text-xs ${muted}`}>
                <th scope="col" className={`border-b pb-2.5 font-medium ${rule}`}>
                  variant
                </th>
                <th scope="col" className={`border-b pb-2.5 pl-6 font-medium ${rule}`}>
                  µs/request
                </th>
                <th
                  scope="col"
                  className={`border-b pb-2.5 pl-6 text-right font-medium ${rule}`}
                >
                  vs salvo
                </th>
              </tr>
            </thead>

            <tbody>
              {BENCHMARK.rows.map((row) => {
                const baseline = row.delta === null;

                return (
                  <tr key={row.variant} className="group">
                    <th
                      scope="row"
                      className={`border-b py-4 pr-6 align-middle text-sm font-normal ${rule} ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      {row.variant}
                      {baseline && (
                        <span className={`lx-mono ml-2 text-xs ${muted}`}>baseline</span>
                      )}
                    </th>

                    <td className={`border-b py-4 pl-6 align-middle ${rule}`}>
                      <div className="flex items-center gap-3">
                        {/* The bar. 4px rounded end, anchored to the axis. */}
                        <div
                          className="h-2.5 min-w-[2px] rounded-r-[4px] transition-opacity group-hover:opacity-80"
                          style={{
                            width: `${(row.us / max) * 100}%`,
                            background: baseline ? BAR_BASELINE : barMeasured,
                          }}
                        />
                        <span
                          className={`lx-mono shrink-0 text-xs tabular-nums ${
                            darkMode ? 'text-zinc-300' : 'text-zinc-700'
                          }`}
                        >
                          {row.us.toFixed(2)}
                        </span>
                      </div>
                    </td>

                    <td
                      className={`lx-mono border-b py-4 pl-6 text-right align-middle text-xs tabular-nums ${rule} ${muted}`}
                    >
                      {row.delta === null ? '—' : `+${row.delta.toFixed(2)} µs`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <figcaption className={`mt-6 space-y-2 text-sm leading-6 ${muted}`}>
            {BENCHMARK.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
            <p>
              Requests are driven in-process, so these are a latency floor rather than a networked
              throughput claim. Reproduce with{' '}
              <code className={`lx-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {BENCHMARK.command}
              </code>
              .
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
