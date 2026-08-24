import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, ListTree, PanelLeft, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useSearch } from '@/contexts/SearchContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpotlightSearch from '@/components/SpotlightSearch';
import SidebarNav from './SidebarNav';
import TableOfContents from './TableOfContents';
import DocPager from './DocPager';
import { getAdjacentDocs, type DocChapter, type DocSection } from '../content/chapters';
import { LUXID_VERSIONS } from '../content/versions';

interface DocsLayoutProps {
  children: React.ReactNode;
  currentDoc: DocChapter;
  currentSection?: DocSection;
}

/** Where a chapter's source lives, for the "Edit this page" link. */
const editUrl = (doc: DocChapter): string =>
  `https://github.com/luxid-dev/web/edit/main/src/docs/content/${doc.content}.tsx`;

/** A slim bar under the header showing how far through the chapter you are. */
function ReadingProgress() {
  const { darkMode } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`fixed left-0 right-0 top-14 z-40 h-0.5 ${darkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}
    >
      <div
        className={`h-full transition-[width] duration-150 ${
          darkMode ? 'bg-zinc-100' : 'bg-zinc-900'
        }`}
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

export default function DocsLayout({ children, currentDoc, currentSection }: DocsLayoutProps) {
  const { darkMode } = useTheme();
  const { searchOpen, setSearchOpen } = useSearch();
  const [navOpen, setNavOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const { previous, next } = getAdjacentDocs(currentDoc);

  // Land at the top of a newly opened chapter, unless the URL targets a
  // specific heading.
  useEffect(() => {
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentDoc.id]);

  // Close the mobile panels on navigation and on Escape.
  useEffect(() => {
    setNavOpen(false);
    setTocOpen(false);
  }, [currentDoc.id]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setNavOpen(false);
        setTocOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  const shell = darkMode ? 'bg-black text-zinc-100' : 'bg-white text-zinc-900';
  const muted = darkMode ? 'text-zinc-500' : 'text-zinc-500';
  const rule = darkMode ? 'border-zinc-800' : 'border-zinc-200';

  return (
    <div className={`min-h-screen pt-14 ${shell}`}>
      <Header onSearchClick={() => setSearchOpen(true)} />
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ReadingProgress />

      {/* Mobile control bar: opens the chapter list and the page outline. */}
      <div
        className={`sticky top-14 z-30 flex items-center gap-2 border-b px-4 py-2.5 backdrop-blur-xl lg:hidden ${rule} ${
          darkMode ? 'bg-black/80' : 'bg-white/85'
        }`}
      >
        <button
          type="button"
          onClick={() => setNavOpen(true)}
          className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm ${
            darkMode ? 'text-zinc-300 hover:bg-white/10' : 'text-zinc-700 hover:bg-zinc-100'
          }`}
        >
          <PanelLeft className="h-4 w-4" />
          Chapters
        </button>

        <ChevronRight className={`h-3.5 w-3.5 ${muted}`} />
        <span className="min-w-0 flex-1 truncate text-sm font-medium">{currentDoc.title}</span>

        <button
          type="button"
          onClick={() => setTocOpen((open) => !open)}
          aria-expanded={tocOpen}
          className={`rounded-lg p-1.5 ${
            darkMode ? 'text-zinc-300 hover:bg-white/10' : 'text-zinc-700 hover:bg-zinc-100'
          }`}
          aria-label="On this page"
        >
          <ListTree className="h-4 w-4" />
        </button>
      </div>

      {tocOpen && (
        <div className={`border-b px-4 py-4 lg:hidden ${rule} ${darkMode ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
          <TableOfContents contentKey={currentDoc.id} onNavigate={() => setTocOpen(false)} />
        </div>
      )}

      {/* Mobile chapter drawer */}
      {navOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className={`absolute inset-0 ${darkMode ? 'bg-black/70' : 'bg-zinc-900/30'} backdrop-blur-sm`}
            onClick={() => setNavOpen(false)}
          />
          <div
            className={`absolute left-0 top-0 flex h-full w-[19rem] max-w-[85vw] flex-col border-r p-4 ${rule} ${
              darkMode ? 'bg-zinc-950' : 'bg-white'
            }`}
          >
            <div className="mb-4 flex shrink-0 items-center justify-between">
              <span className="text-sm font-semibold">Documentation</span>
              <button
                type="button"
                onClick={() => setNavOpen(false)}
                aria-label="Close chapters"
                className={`rounded-lg p-1.5 ${
                  darkMode ? 'text-zinc-400 hover:bg-white/10' : 'text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <SidebarNav onNavigate={() => setNavOpen(false)} />
          </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[15rem_minmax(0,1fr)_13rem] xl:gap-12">
          {/* Chapter list */}
          <aside className="hidden lg:sticky lg:top-14 lg:block lg:h-[calc(100vh-3.5rem)] lg:py-8">
            <SidebarNav />
          </aside>

          {/* Chapter body */}
          <main ref={mainRef} className="min-w-0 py-8 lg:py-12">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className={`mb-4 flex flex-wrap items-center gap-1.5 text-sm ${muted}`}>
              <Link
                to="/docs"
                className={`transition ${darkMode ? 'hover:text-zinc-200' : 'hover:text-zinc-900'}`}
              >
                Docs
              </Link>
              {currentSection && (
                <>
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span>{currentSection.title}</span>
                </>
              )}
              <ChevronRight className="h-3.5 w-3.5" />
              <span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>{currentDoc.title}</span>
            </nav>

            <header className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{currentDoc.title}</h1>

              {currentDoc.description && (
                <p className={`mt-3 text-lg leading-8 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {currentDoc.description}
                </p>
              )}

              <div className={`mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs ${muted}`}>
                <span
                  className={`rounded-full border px-2.5 py-1 font-medium ${rule} ${
                    darkMode ? 'bg-zinc-900' : 'bg-zinc-50'
                  }`}
                >
                  Luxid v{LUXID_VERSIONS.luxid}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 font-medium ${rule} ${
                    darkMode ? 'bg-zinc-900' : 'bg-zinc-50'
                  }`}
                >
                  Rust {LUXID_VERSIONS.rust}+
                </span>
                <a
                  href={editUrl(currentDoc)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 transition ${darkMode ? 'hover:text-zinc-200' : 'hover:text-zinc-900'}`}
                >
                  Edit this page
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </header>

            {/* The TOC reads the headings rendered inside this wrapper. */}
            <div className="docs-prose max-w-none">{children}</div>

            <DocPager previous={previous} next={next} />

            <p className={`mt-10 text-xs ${muted}`}>
              Luxid is pre-release software — APIs may change between minor versions. Found something
              out of date?{' '}
              <a
                href="https://github.com/luxid-dev/luxid/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className={`underline transition ${darkMode ? 'hover:text-zinc-200' : 'hover:text-zinc-900'}`}
              >
                Open an issue
              </a>
              .
            </p>
          </main>

          {/* Page outline */}
          <aside className="hidden xl:sticky xl:top-14 xl:block xl:h-[calc(100vh-3.5rem)] xl:overflow-y-auto xl:py-12">
            <TableOfContents contentKey={currentDoc.id} className="docs-scroll" />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
