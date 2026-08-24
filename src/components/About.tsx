import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { LUXID } from '@/content/framework';

/**
 * The story, and the current state of things.
 *
 * There is no team page here, no contributor leaderboard and no sponsor tiers,
 * because there is not yet a team, a leaderboard or a sponsor. What there is:
 * one author, a design document, and a version number that says 0.1.
 */

/** From the README's "Why another one" — the four differences, concretely. */
const DIFFERENCES: ReadonlyArray<{ claim: string; detail: string }> = [
  {
    claim: 'Controllers take one owned context, not extractors',
    detail:
      'So the trait-bound error messages that make axum-based frameworks hostile to newcomers do not exist here.',
  },
  {
    claim: 'Validation rules reach the database',
    detail:
      'unique and exists run as asynchronous rules in the same pass as the synchronous ones. No other Rust framework ships these.',
  },
  {
    claim: 'The error type carries its own HTTP mapping',
    detail: 'So a missing row is a 404 with no handling in the action body.',
  },
  {
    claim: 'Compile time is treated as a feature',
    detail: 'With a benchmark rather than a claim.',
  },
];

export default function About() {
  const { darkMode } = useTheme();

  const heading = darkMode ? 'text-white' : 'text-zinc-900';
  const body = darkMode ? 'text-zinc-400' : 'text-zinc-600';
  const muted = darkMode ? 'text-zinc-500' : 'text-zinc-500';
  const rule = darkMode ? 'border-zinc-900' : 'border-zinc-200';
  const raised = darkMode ? 'border-zinc-900 bg-zinc-950' : 'border-zinc-200 bg-zinc-50';

  return (
    <section className={`pt-28 pb-24 sm:pt-36 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-3xl px-6">
        <p className={`lx-eyebrow mb-4 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
          // about
        </p>

        <h1 className={`lx-display text-3xl leading-tight sm:text-4xl ${heading}`}>
          Why another one.
        </h1>

        <p className={`mt-7 text-lg leading-8 ${body}`}>
          Rust already has good web frameworks. What it did not have was a convention-driven one —
          where a controller is a controller, a model knows its own relations, and the framework
          answers the boring questions so you do not have to re-answer them per project.
        </p>

        <p className={`mt-5 text-base leading-7 ${body}`}>
          <a
            href="https://loco.rs"
            target="_blank"
            rel="noreferrer noopener"
            className={darkMode ? 'text-zinc-200 underline decoration-zinc-700 underline-offset-2' : 'text-zinc-900 underline decoration-zinc-300 underline-offset-2'}
          >
            loco
          </a>{' '}
          answers that with a Rails-shaped framework on axum. Luxid answers it on{' '}
          <a
            href="https://salvo.rs"
            target="_blank"
            rel="noreferrer noopener"
            className={darkMode ? 'text-zinc-200 underline decoration-zinc-700 underline-offset-2' : 'text-zinc-900 underline decoration-zinc-300 underline-offset-2'}
          >
            salvo
          </a>
          , taking its cues from the convention-driven frameworks that came before it — Laravel and,
          more directly, AdonisJS. The interesting problem was never copying them. It was keeping
          those ergonomics inside a type system that will not bend.
        </p>

        <ul className={`mt-10 divide-y rounded-xl border ${raised} ${darkMode ? 'divide-zinc-900' : 'divide-zinc-200'}`}>
          {DIFFERENCES.map((item) => (
            <li key={item.claim} className="px-5 py-4 sm:px-6">
              <h2 className={`lx-mono text-sm font-medium ${heading}`}>{item.claim}</h2>
              <p className={`mt-1.5 text-sm leading-6 ${muted}`}>{item.detail}</p>
            </li>
          ))}
        </ul>

        {/* Where the project actually stands. */}
        <h2 className={`lx-display mt-16 text-xl ${heading}`}>Where it stands</h2>

        <p className={`mt-5 text-base leading-7 ${body}`}>
          Luxid is <span className="lx-mono">{LUXID.version}</span> and experimental. The API will
          change before 1.0 and some pieces are missing. It builds, it is tested —{' '}
          {LUXID.tests} tests, none failing — and it runs, but it has not carried a production
          workload yet.
        </p>

        <p className={`mt-5 text-base leading-7 ${body}`}>
          If you are building a JSON API and are willing to update code across minor versions, it
          is usable today. If you need server-rendered HTML or a job queue, it is not ready for you
          yet. The{' '}
          <a
            href={`${LUXID.repo}/blob/main/docs/design.md`}
            target="_blank"
            rel="noreferrer noopener"
            className={darkMode ? 'text-zinc-200 underline decoration-zinc-700 underline-offset-2' : 'text-zinc-900 underline decoration-zinc-300 underline-offset-2'}
          >
            design document
          </a>{' '}
          records the reasoning behind every decision, the benchmark methodology, and a status
          table of what is and is not built.
        </p>

        {/* The author. One person, stated plainly. */}
        <h2 className={`lx-display mt-16 text-xl ${heading}`}>Who builds it</h2>

        <div className={`mt-6 flex flex-col gap-5 rounded-xl border p-6 sm:flex-row sm:items-center ${raised}`}>
          <img
            src="/images/profiles/jhay-profile.jpeg"
            alt="Samuel Tagoe"
            className={`h-20 w-20 shrink-0 rounded-full border object-cover ${rule}`}
          />

          <div className="min-w-0">
            <h3 className={`text-lg font-semibold ${heading}`}>Samuel Tagoe</h3>
            <p className={`lx-mono mt-0.5 text-xs ${muted}`}>
              Creator and maintainer · Ghana
            </p>
            <p className={`mt-3 text-sm leading-6 ${body}`}>
              Luxid is written and maintained by one person. That is worth knowing before you
              depend on it, and worth knowing if you want to change that.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a
                href="https://jhayonline.dev"
                target="_blank"
                rel="noreferrer noopener"
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition ${
                  darkMode
                    ? 'border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white'
                    : 'border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-900'
                }`}
              >
                jhayonline.dev
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href={LUXID.repo}
                target="_blank"
                rel="noreferrer noopener"
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition ${
                  darkMode
                    ? 'border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white'
                    : 'border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-900'
                }`}
              >
                <Github className="h-3 w-3" />
                luxid-dev/luxid
              </a>
            </div>
          </div>
        </div>

        {/* What actually helps, instead of a sponsor tier list. */}
        <h2 className={`lx-display mt-16 text-xl ${heading}`}>How to help</h2>

        <p className={`mt-5 text-base leading-7 ${body}`}>
          The most valuable thing right now is someone building something real with it and saying
          where it broke. Luxid's error messages generally name the fix; when one does not, that is
          worth reporting as a bug.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={`${LUXID.repo}/issues/new`}
            target="_blank"
            rel="noreferrer noopener"
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
              darkMode
                ? 'bg-white text-black hover:bg-zinc-200'
                : 'bg-zinc-900 text-white hover:bg-zinc-700'
            }`}
          >
            Open an issue
          </a>
          <Link
            to="/docs/project-todo"
            className={`inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium transition ${
              darkMode
                ? 'border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white'
                : 'border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-900'
            }`}
          >
            Build something with it
          </Link>
        </div>

        <p className={`mt-12 border-t pt-6 text-xs ${rule} ${muted}`}>
          Licensed {LUXID.license}, at your option.
        </p>
      </div>
    </section>
  );
}
