import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useSearch } from '@/contexts/SearchContext';
import Header from '@/components/Header';
import SpotlightSearch from '@/components/SpotlightSearch';
import Footer from '@/components/Footer';

/**
 * The 404.
 *
 * It previously styled itself with shadcn's `--background` / `--primary`
 * custom properties, which this project never defines — so the page rendered
 * with no background and near-invisible text. It now uses the same theme
 * context as the rest of the site, and offers the two things a lost visitor
 * actually wants: the docs, and search.
 */
export default function NotFound() {
  const { darkMode } = useTheme();
  const { searchOpen, setSearchOpen } = useSearch();
  const { pathname } = useLocation();

  return (
    <div
      className={
        darkMode ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-zinc-900'
      }
    >
      <Header onSearchClick={() => setSearchOpen(true)} />
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="mx-auto flex max-w-2xl flex-col items-start px-6 py-32 sm:py-40">
        <p className={`lx-eyebrow mb-4 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
          // 404
        </p>

        <h1
          className={`lx-display text-2xl leading-tight sm:text-3xl ${
            darkMode ? 'text-white' : 'text-zinc-900'
          }`}
        >
          No route matched.
        </h1>

        <p className={`mt-5 text-base leading-7 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Nothing is published at{' '}
          <code
            className={`lx-mono rounded px-1.5 py-0.5 text-[0.85em] ${
              darkMode ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
            }`}
          >
            {pathname}
          </code>
          .
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/docs/introduction"
            className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
              darkMode
                ? 'bg-white text-black hover:bg-zinc-200'
                : 'bg-zinc-900 text-white hover:bg-zinc-700'
            }`}
          >
            Go to the docs
          </Link>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className={`inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-medium transition ${
              darkMode
                ? 'border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white'
                : 'border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-900'
            }`}
          >
            Search the docs
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
