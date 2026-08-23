import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import type { DocChapter } from '../content/chapters';

interface Props {
  previous?: DocChapter;
  next?: DocChapter;
}

/** Continue-reading links at the foot of a chapter. */
export default function DocPager({ previous, next }: Props) {
  const { darkMode } = useTheme();

  if (!previous && !next) return null;

  const card = darkMode
    ? 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900'
    : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50';

  const label = darkMode ? 'text-zinc-500' : 'text-zinc-500';
  const title = darkMode ? 'text-white' : 'text-zinc-900';

  return (
    <nav
      aria-label="Chapter navigation"
      className={`mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2 ${
        darkMode ? 'border-zinc-800' : 'border-zinc-200'
      }`}
    >
      {previous ? (
        <Link to={previous.path} className={`group rounded-xl border p-4 transition ${card}`}>
          <span className={`flex items-center gap-1.5 text-xs font-medium ${label}`}>
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className={`mt-1.5 block font-semibold ${title}`}>{previous.title}</span>
        </Link>
      ) : (
        <span />
      )}

      {next && (
        <Link
          to={next.path}
          className={`group rounded-xl border p-4 text-right transition sm:col-start-2 ${card}`}
        >
          <span className={`flex items-center justify-end gap-1.5 text-xs font-medium ${label}`}>
            Next
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className={`mt-1.5 block font-semibold ${title}`}>{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
