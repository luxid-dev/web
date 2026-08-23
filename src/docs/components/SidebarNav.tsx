import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Search, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { docsChapters, type DocChapter, type DocSection } from '../content/chapters';

interface SidebarNavProps {
  /** Called after a chapter link is followed, so the mobile drawer can close. */
  onNavigate?: () => void;
}

const matches = (chapter: DocChapter, needle: string): boolean => {
  if (!needle) return true;

  const haystack = [chapter.title, chapter.description, ...(chapter.keywords ?? [])]
    .join(' ')
    .toLowerCase();

  return haystack.includes(needle);
};

export default function SidebarNav({ onNavigate }: SidebarNavProps) {
  const { darkMode } = useTheme();
  const { pathname } = useLocation();
  const [filter, setFilter] = useState('');
  const activeRef = useRef<HTMLAnchorElement>(null);

  const needle = filter.trim().toLowerCase();

  const sections = useMemo(() => {
    if (!needle) return docsChapters;

    return docsChapters
      .map((section) => ({
        ...section,
        chapters: section.chapters.filter((chapter) => matches(chapter, needle)),
      }))
      .filter((section) => section.chapters.length > 0);
  }, [needle]);

  // Sections start open when they contain the current chapter, and a filtered
  // search always opens whatever it matched.
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const isOpen = (section: DocSection): boolean => {
    if (needle) return true;
    if (section.id in collapsed) return !collapsed[section.id];
    return true;
  };

  // Keep the active entry visible when a page is opened directly by URL.
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest' });
  }, [pathname]);

  const inputClass = darkMode
    ? 'bg-zinc-900 border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:border-zinc-600'
    : 'bg-white border-zinc-200 text-zinc-800 placeholder-zinc-400 focus:border-zinc-400';

  return (
    <nav aria-label="Documentation" className="flex h-full flex-col">
      {/* Filter */}
      <div className="relative mb-4 shrink-0">
        <Search
          className={`pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 ${
            darkMode ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        />
        <input
          type="search"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="Filter chapters"
          aria-label="Filter chapters"
          className={`w-full rounded-lg border py-2 pl-9 pr-8 text-sm outline-none transition ${inputClass}`}
        />
        {filter && (
          <button
            type="button"
            onClick={() => setFilter('')}
            aria-label="Clear filter"
            className={`absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 ${
              darkMode ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'
            }`}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <div className="docs-scroll min-h-0 flex-1 overflow-y-auto pb-10 pr-1">
        {sections.length === 0 && (
          <p className={`px-2 py-6 text-sm ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
            No chapter matches “{filter}”.
          </p>
        )}

        {sections.map((section) => {
          const open = isOpen(section);
          const Icon = section.icon;

          return (
            <div key={section.id} className="mb-1">
              <button
                type="button"
                onClick={() =>
                  setCollapsed((state) => ({ ...state, [section.id]: !(section.id in state ? state[section.id] : false) }))
                }
                aria-expanded={open}
                className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left transition ${
                  darkMode ? 'hover:bg-white/5' : 'hover:bg-zinc-100'
                }`}
              >
                <span
                  className={`rounded-md p-1 ${
                    darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200 text-zinc-700'
                  }`}
                >
                  <Icon className="h-3 w-3" />
                </span>
                <span
                  className={`flex-1 text-[11px] font-semibold uppercase tracking-wider ${
                    darkMode ? 'text-zinc-400' : 'text-zinc-500'
                  }`}
                >
                  {section.title}
                </span>
                <ChevronRight
                  className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-90' : ''} ${
                    darkMode ? 'text-zinc-600' : 'text-zinc-400'
                  }`}
                />
              </button>

              {open && (
                <ul
                  className={`ml-[15px] space-y-0.5 border-l pl-3 ${
                    darkMode ? 'border-zinc-800' : 'border-zinc-200'
                  }`}
                >
                  {section.chapters.map((chapter) => {
                    const active = pathname === chapter.path;

                    return (
                      <li key={chapter.id}>
                        <Link
                          ref={active ? activeRef : undefined}
                          to={chapter.path}
                          onClick={onNavigate}
                          aria-current={active ? 'page' : undefined}
                          className={`relative flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] leading-5 transition ${
                            active
                              ? darkMode
                                ? 'bg-white/10 font-medium text-white'
                                : 'bg-zinc-900/5 font-medium text-zinc-900'
                              : darkMode
                                ? 'text-zinc-400 hover:bg-white/5 hover:text-zinc-100'
                                : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                          }`}
                        >
                          {active && (
                            <span
                              aria-hidden
                              className={`absolute -left-[13px] top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full ${
                                darkMode ? 'bg-zinc-100' : 'bg-zinc-900'
                              }`}
                            />
                          )}
                          <span className="flex-1 truncate">{chapter.title}</span>

                          {(chapter.quickStart || chapter.isNew) && (
                            <span
                              className={`rounded-full border px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                                darkMode
                                  ? 'border-zinc-700 text-zinc-400'
                                  : 'border-zinc-300 text-zinc-500'
                              }`}
                            >
                              {chapter.quickStart ? 'Start' : 'New'}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
