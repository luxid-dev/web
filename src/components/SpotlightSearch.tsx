import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, ArrowUp, CornerDownLeft, Search, Sparkles } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { allDocs, docsChapters, type DocChapter, type DocSection } from '@/docs/content/chapters';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface Entry {
  chapter: DocChapter;
  section: DocSection;
}

const ENTRIES: Entry[] = docsChapters.flatMap((section) =>
  section.chapters.map((chapter) => ({ chapter, section })),
);

/**
 * Ranks an entry against the query. Higher is better; 0 means no match.
 *
 * Title hits outrank description hits, which outrank keyword hits, so typing
 * "routing" surfaces the routing chapter rather than every page that mentions a
 * route in passing.
 */
const score = (entry: Entry, needle: string): number => {
  if (!needle) return 1;

  const title = entry.chapter.title.toLowerCase();
  const description = entry.chapter.description.toLowerCase();
  const keywords = (entry.chapter.keywords ?? []).join(' ').toLowerCase();
  const section = entry.section.title.toLowerCase();

  if (title === needle) return 100;
  if (title.startsWith(needle)) return 80;
  if (title.includes(needle)) return 60;
  if (keywords.split(' ').includes(needle)) return 50;
  if (section.includes(needle)) return 30;
  if (description.includes(needle)) return 20;
  if (keywords.includes(needle)) return 10;

  return 0;
};

const RECENT_KEY = 'luxid-docs-recent';

const readRecent = (): string[] => {
  try {
    const stored = localStorage.getItem(RECENT_KEY);
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    return [];
  }
};

export default function SpotlightSearch({ isOpen, onClose }: Props) {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const [recent, setRecent] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const needle = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!needle) {
      // With no query, show recently opened chapters, then the quick-start path.
      const recentDocs = recent
        .map((path) => ENTRIES.find((entry) => entry.chapter.path === path))
        .filter((entry): entry is Entry => entry !== undefined);

      const rest = ENTRIES.filter((entry) => !recent.includes(entry.chapter.path));

      return [...recentDocs, ...rest].slice(0, 8);
    }

    return ENTRIES.map((entry) => ({ entry, rank: score(entry, needle) }))
      .filter((item) => item.rank > 0)
      .sort((a, b) => b.rank - a.rank)
      .slice(0, 12)
      .map((item) => item.entry);
  }, [needle, recent]);

  useEffect(() => {
    setSelected(0);
  }, [needle]);

  useEffect(() => {
    if (isOpen) {
      setRecent(readRecent());
      setQuery('');
      setSelected(0);
      document.body.style.overflow = 'hidden';
      // Focus after the dialog paints, so the caret lands reliably.
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const node = listRef.current?.querySelector<HTMLElement>('[data-selected="true"]');
    node?.scrollIntoView({ block: 'nearest' });
  }, [selected, results]);

  const open = (entry: Entry) => {
    const next = [entry.chapter.path, ...recent.filter((path) => path !== entry.chapter.path)].slice(
      0,
      5,
    );

    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
      // Storage may be unavailable in private modes; navigation still works.
    }

    navigate(entry.chapter.path);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelected((index) => (results.length ? (index + 1) % results.length : 0));
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelected((index) => (results.length ? (index - 1 + results.length) % results.length : 0));
      }
      if (event.key === 'Enter' && results[selected]) {
        event.preventDefault();
        open(results[selected]);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, results, selected, onClose]);

  if (!isOpen) return null;

  const panel = darkMode
    ? 'bg-zinc-900/95 border-zinc-700 shadow-black/50'
    : 'bg-white/95 border-zinc-200 shadow-black/10';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search documentation"
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[10vh]"
      onClick={onClose}
    >
      <div className={`absolute inset-0 backdrop-blur-md ${darkMode ? 'bg-black/80' : 'bg-zinc-900/25'}`} />

      <div
        className={`relative mx-4 w-full max-w-2xl overflow-hidden rounded-2xl border shadow-2xl ${panel}`}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Query */}
        <div
          className={`flex items-center gap-3 border-b px-5 py-4 ${
            darkMode ? 'border-zinc-800' : 'border-zinc-200'
          }`}
        >
          <Search className={`h-5 w-5 shrink-0 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the documentation…"
            aria-label="Search the documentation"
            className={`flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-500 ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          />
          <kbd
            className={`rounded px-2 py-1 text-xs ${
              darkMode ? 'bg-zinc-800 text-zinc-500' : 'bg-zinc-100 text-zinc-500'
            }`}
          >
            esc
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[26rem] overflow-y-auto py-2">
          {!needle && recent.length > 0 && (
            <p
              className={`px-5 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider ${
                darkMode ? 'text-zinc-600' : 'text-zinc-400'
              }`}
            >
              Recent
            </p>
          )}

          {results.length === 0 ? (
            <div className={`px-5 py-10 text-center ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
              <Sparkles className="mx-auto mb-3 h-5 w-5 opacity-50" />
              <p className="text-sm">
                Nothing matches “<span className="font-medium">{query}</span>”.
              </p>
              <p className="mt-1 text-xs">Try “routing”, “migration”, “worker” or “auth”.</p>
            </div>
          ) : (
            results.map((entry, index) => {
              const active = index === selected;
              const Icon = entry.section.icon;

              return (
                <button
                  key={entry.chapter.id}
                  type="button"
                  data-selected={active}
                  onMouseEnter={() => setSelected(index)}
                  onClick={() => open(entry)}
                  className={`flex w-full items-center gap-3 px-5 py-3 text-left transition ${
                    active ? (darkMode ? 'bg-zinc-800' : 'bg-zinc-100') : ''
                  }`}
                >
                  <span
                    className={`shrink-0 rounded-md p-1.5 ${
                      darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200 text-zinc-700'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className={`block truncate text-sm font-medium ${
                        darkMode ? 'text-white' : 'text-zinc-900'
                      }`}
                    >
                      {entry.chapter.title}
                    </span>
                    <span
                      className={`block truncate text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}
                    >
                      {entry.chapter.description}
                    </span>
                  </span>

                  <span
                    className={`shrink-0 text-[11px] ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}
                  >
                    {entry.section.title}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div
          className={`flex flex-wrap items-center gap-x-6 gap-y-1 border-t px-5 py-3 text-xs ${
            darkMode ? 'border-zinc-800 text-zinc-500' : 'border-zinc-200 text-zinc-500'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <ArrowUp className="h-3 w-3" />
            <ArrowDown className="h-3 w-3" />
            navigate
          </span>
          <span className="flex items-center gap-1.5">
            <CornerDownLeft className="h-3 w-3" />
            open
          </span>
          <span className="ml-auto">
            {allDocs.length} chapters
          </span>
        </div>
      </div>
    </div>
  );
}
