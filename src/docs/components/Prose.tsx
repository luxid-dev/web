import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Info,
  Lightbulb,
  Link as LinkIcon,
  ShieldAlert,
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * Shared building blocks for documentation pages.
 *
 * Headings register themselves with a stable `id` so the table of contents can
 * find them by querying the DOM — content pages never have to maintain a
 * parallel list of their own sections.
 */

/** `Route parameters` -> `route-parameters` */
export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const useText = () => {
  const { darkMode } = useTheme();

  return {
    darkMode,
    heading: darkMode ? 'text-white' : 'text-zinc-900',
    body: darkMode ? 'text-zinc-400' : 'text-zinc-600',
    strong: darkMode ? 'text-zinc-200' : 'text-zinc-900',
    border: darkMode ? 'border-zinc-800' : 'border-zinc-200',
    surface: darkMode ? 'bg-zinc-900/50' : 'bg-zinc-50',
  };
};

interface HeadingProps {
  children: React.ReactNode;
  /** Defaults to the slug of the text content. */
  id?: string;
}

const headingText = (node: React.ReactNode): string =>
  React.Children.toArray(node)
    .map((child) => (typeof child === 'string' || typeof child === 'number' ? String(child) : ''))
    .join('');

/** A section heading with a hover-revealed anchor link. */
export function H2({ children, id }: HeadingProps) {
  const { heading, border } = useText();
  const anchor = id ?? slugify(headingText(children));

  return (
    <h2
      id={anchor}
      className={`docs-heading group mb-4 mt-14 flex scroll-mt-28 items-center gap-2 border-t pt-8 text-2xl font-bold tracking-tight first:mt-0 first:border-0 first:pt-0 ${heading} ${border}`}
    >
      <span>{children}</span>
      <a
        href={`#${anchor}`}
        aria-label={`Link to ${headingText(children)}`}
        className="docs-heading-anchor text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
      >
        <LinkIcon className="h-4 w-4" />
      </a>
    </h2>
  );
}

export function H3({ children, id }: HeadingProps) {
  const { heading } = useText();
  const anchor = id ?? slugify(headingText(children));

  return (
    <h3
      id={anchor}
      className={`docs-heading group mb-3 mt-10 flex scroll-mt-28 items-center gap-2 text-lg font-semibold tracking-tight ${heading}`}
    >
      <span>{children}</span>
      <a
        href={`#${anchor}`}
        aria-label={`Link to ${headingText(children)}`}
        className="docs-heading-anchor text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
      >
        <LinkIcon className="h-3.5 w-3.5" />
      </a>
    </h3>
  );
}

/** Body copy. */
export function P({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { body } = useText();
  return <p className={`mb-4 leading-7 ${body} ${className}`}>{children}</p>;
}

/** The one-sentence summary directly beneath a page title. */
export function Lead({ children }: { children: React.ReactNode }) {
  const { darkMode } = useTheme();
  return (
    <p className={`mb-8 text-lg leading-8 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
      {children}
    </p>
  );
}

/**
 * A link out of the prose. External targets open in a new tab and carry the
 * usual `rel` guard; in-app paths are left to the router.
 */
export function A({ href, children }: { href: string; children: React.ReactNode }) {
  const { darkMode } = useTheme();
  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      className={`underline decoration-1 underline-offset-2 transition-colors ${
        darkMode
          ? 'text-zinc-200 decoration-zinc-600 hover:decoration-zinc-300'
          : 'text-zinc-900 decoration-zinc-400 hover:decoration-zinc-700'
      }`}
    >
      {children}
    </a>
  );
}

/** Inline code. */
export function C({ children }: { children: React.ReactNode }) {
  const { darkMode } = useTheme();
  return (
    <code
      className={`whitespace-nowrap rounded px-1.5 py-0.5 font-mono text-[0.85em] ${
        darkMode ? 'bg-zinc-800/80' : 'bg-zinc-100'
      }`}
      style={{ color: 'var(--lx-code-soft)' }}
    >
      {children}
    </code>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  const { body } = useText();
  return <ul className={`mb-5 ml-1 space-y-2 ${body}`}>{children}</ul>;
}

export function LI({ children }: { children: React.ReactNode }) {
  const { darkMode } = useTheme();
  return (
    <li className="flex gap-3 leading-7">
      <span className={`mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full ${darkMode ? 'bg-zinc-600' : 'bg-zinc-400'}`} />
      <span className="flex-1">{children}</span>
    </li>
  );
}

/** A numbered list, where the order of the items is part of the meaning. */
export function OL({ children }: { children: React.ReactNode }) {
  const { body } = useText();
  return <ol className={`mb-5 ml-1 space-y-2 ${body}`}>{children}</ol>;
}

export function OLI({ number, children }: { number: number; children: React.ReactNode }) {
  const { darkMode } = useTheme();
  return (
    <li className="flex gap-3 leading-7">
      <span
        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums ${
          darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'
        }`}
      >
        {number}
      </span>
      <span className="flex-1">{children}</span>
    </li>
  );
}

type CalloutTone = 'note' | 'tip' | 'warning' | 'danger' | 'success';

const TONES: Record<CalloutTone, { icon: typeof Info; label: string }> = {
  note: { icon: Info, label: 'Note' },
  tip: { icon: Lightbulb, label: 'Tip' },
  warning: { icon: AlertTriangle, label: 'Careful' },
  danger: { icon: ShieldAlert, label: 'Security' },
  success: { icon: CheckCircle2, label: 'Good to know' },
};

export function Callout({
  tone = 'note',
  title,
  children,
}: {
  tone?: CalloutTone;
  title?: string;
  children: React.ReactNode;
}) {
  const { darkMode } = useTheme();
  const config = TONES[tone];
  const Icon = config.icon;

  return (
    <div
      className={`my-6 rounded-xl border p-4 ${
        darkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-200 bg-zinc-50'
      }`}
      role="note"
    >
      <div className="flex gap-3">
        <Icon
          className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${
            darkMode ? 'text-zinc-400' : 'text-zinc-500'
          }`}
        />
        <div className="min-w-0 flex-1">
          <p className={`mb-1 text-sm font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
            {title ?? config.label}
          </p>
          <div className={`text-sm leading-6 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/** A reference table. Rows are `[cell, cell, ...]` matching `headers`. */
export function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: React.ReactNode[][];
}) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`my-6 overflow-x-auto rounded-xl border ${darkMode ? 'border-zinc-800' : 'border-zinc-200'}`}
    >
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className={darkMode ? 'bg-zinc-900/70' : 'bg-zinc-50'}>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className={`whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-500'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-200'}`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 align-top leading-6 ${
                    j === 0
                      ? darkMode
                        ? 'font-medium text-zinc-200'
                        : 'font-medium text-zinc-900'
                      : darkMode
                        ? 'text-zinc-400'
                        : 'text-zinc-600'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** A grid of links to related chapters, used to close a page. */
export function NextSteps({
  items,
}: {
  items: { title: string; description: string; to: string }[];
}) {
  const { darkMode } = useTheme();

  return (
    <div className="my-8 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`group rounded-xl border p-4 transition ${
            darkMode
              ? 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900'
              : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50'
          }`}
        >
          <span
            className={`flex items-center gap-1.5 text-sm font-semibold ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            {item.title}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className={`mt-1 block text-sm leading-6 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {item.description}
          </span>
        </Link>
      ))}
    </div>
  );
}

/** A labelled comparison of a wrong and a right way to do something. */
export function DoDont({
  dont,
  doIt,
}: {
  dont: { label: string; children: React.ReactNode };
  doIt: { label: string; children: React.ReactNode };
}) {
  const { darkMode } = useTheme();

  // Both panels share one surface. The mark and the label do the telling, so
  // the distinction survives greyscale, colour blindness and print alike.
  const panel = darkMode
    ? 'border-zinc-800 bg-zinc-900/40'
    : 'border-zinc-200 bg-zinc-50';

  const heading = darkMode ? 'text-zinc-300' : 'text-zinc-700';
  const mark = darkMode ? 'text-zinc-500' : 'text-zinc-400';

  return (
    <div className="my-6 grid gap-4 lg:grid-cols-2">
      <div className={`rounded-xl border p-1 ${panel}`}>
        <p
          className={`flex items-center gap-1.5 px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide ${heading}`}
        >
          <span aria-hidden className={mark}>
            &#10007;
          </span>
          {dont.label}
        </p>
        <div className="[&>figure]:my-0">{dont.children}</div>
      </div>
      <div className={`rounded-xl border p-1 ${panel}`}>
        <p
          className={`flex items-center gap-1.5 px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide ${heading}`}
        >
          <span aria-hidden className={mark}>
            &#10003;
          </span>
          {doIt.label}
        </p>
        <div className="[&>figure]:my-0">{doIt.children}</div>
      </div>
    </div>
  );
}

/** Numbered steps, for install and setup flows. */
export function Steps({ children }: { children: React.ReactNode }) {
  return <ol className="my-6 space-y-0">{children}</ol>;
}

export function Step({
  number,
  title,
  children,
  last = false,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  const { darkMode } = useTheme();

  return (
    <li className="relative flex gap-4 pb-8 last:pb-0">
      {!last && (
        <span
          aria-hidden
          className={`absolute left-[15px] top-9 h-[calc(100%-2.25rem)] w-px ${
            darkMode ? 'bg-zinc-800' : 'bg-zinc-200'
          }`}
        />
      )}
      <span
        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
          darkMode
            ? 'bg-zinc-800 text-zinc-300 ring-1 ring-zinc-700'
            : 'bg-white text-zinc-700 ring-1 ring-zinc-300'
        }`}
      >
        {number}
      </span>
      <div className="min-w-0 flex-1 pt-1">
        <h3 className={`mb-2 font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{title}</h3>
        <div className={`text-sm leading-7 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {children}
        </div>
      </div>
    </li>
  );
}
