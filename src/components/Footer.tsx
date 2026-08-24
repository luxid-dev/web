import React from 'react';
import { Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { LUXID } from '@/content/framework';

/**
 * Only links that go somewhere.
 *
 * The previous footer advertised a Discord, a newsletter, a careers page and a
 * press kit, none of which exist. A dead link in a footer is a small lie, and
 * this project's whole pitch is that it does not tell those.
 */
const SECTIONS: ReadonlyArray<{
  title: string;
  links: ReadonlyArray<{ name: string; to: string; external?: boolean }>;
}> = [
  {
    title: 'Getting started',
    links: [
      { name: 'Introduction', to: '/docs/introduction' },
      { name: 'Installation', to: '/docs/installation' },
      { name: 'Your first app', to: '/docs/first-app' },
      { name: 'CLI reference', to: '/docs/cli' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { name: 'Routing', to: '/docs/routing' },
      { name: 'Models & queries', to: '/docs/models' },
      { name: 'Validation', to: '/docs/validation' },
      { name: 'Testing', to: '/docs/testing' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { name: 'Build an auth API', to: '/docs/project-auth' },
      { name: 'Build a todo API', to: '/docs/project-todo' },
      { name: 'Performance & deployment', to: '/docs/deployment' },
    ],
  },
  {
    title: 'Project',
    links: [
      { name: 'Source', to: LUXID.repo, external: true },
      { name: 'Issues', to: `${LUXID.repo}/issues`, external: true },
      { name: 'Design document', to: `${LUXID.repo}/blob/main/docs/design.md`, external: true },
      { name: 'About', to: '/about' },
    ],
  },
];

export default function Footer() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const linkClass = 'text-sm text-zinc-400 transition-colors hover:text-white';

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t ${darkMode ? 'border-zinc-900 bg-zinc-950' : 'border-zinc-800 bg-zinc-900'}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <a
              href="/"
              onClick={handleLogoClick}
              className="group mb-4 flex items-center gap-2.5"
            >
              <span className="lx-display text-lg text-white">Luxid</span>
              <img
                src="/lion7.svg"
                alt=""
                aria-hidden="true"
                className="h-7 w-7 transition-transform group-hover:scale-105"
              />
            </a>

            <p className="mb-6 max-w-xs text-sm leading-6 text-zinc-400">
              A convention-over-configuration web framework for Rust, built on salvo.
            </p>

            <a
              href={LUXID.repo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Luxid on GitHub"
              className="inline-flex rounded-lg bg-zinc-800 p-2 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-sm font-semibold text-white">{section.title}</h2>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={linkClass}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.to} className={linkClass}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Built by{' '}
            <a
              href="https://jhayonline.dev"
              target="_blank"
              rel="noreferrer noopener"
              className="text-zinc-300 transition-colors hover:text-white"
            >
              jhayonline.dev
            </a>
          </p>

          <p className="lx-mono text-xs">
            v{LUXID.version} · {LUXID.license}
          </p>
        </div>
      </div>
    </footer>
  );
}
