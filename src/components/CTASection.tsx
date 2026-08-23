import React, { useState } from 'react';
import { ArrowRight, Check, Copy, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { INSTALL_COMMAND, LUXID } from '@/content/framework';

/**
 * The closing ask.
 *
 * It repeats the install command rather than inventing a new call to action:
 * by this point the visitor has read the route table, the diagnostic and the
 * benchmark, and the only thing left to offer is the command.
 */
export default function CTASection() {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="get-started"
      className={`border-t py-24 sm:py-32 ${
        darkMode ? 'border-zinc-900 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'
      }`}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <img
          src={darkMode ? '/lion7.svg' : '/lion5.svg'}
          alt=""
          aria-hidden="true"
          className="mx-auto mb-8 h-14 w-14 opacity-70"
        />

        <h2
          className={`lx-display text-2xl leading-tight sm:text-3xl ${
            darkMode ? 'text-white' : 'text-zinc-900'
          }`}
        >
          Start with one command.
        </h2>

        <p
          className={`mx-auto mt-5 max-w-xl text-base leading-7 ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          Luxid is {LUXID.version} and experimental — the API will change before 1.0. It builds, it
          is tested, and it runs. If you try it and something is wrong, the issue tracker is the
          most useful thing you can send.
        </p>

        <div
          className={`mx-auto mt-9 flex max-w-md items-center gap-3 rounded-lg border px-4 py-3.5 ${
            darkMode ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-zinc-50'
          }`}
        >
          <span className={`lx-mono text-sm ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
            $
          </span>
          <code
            className={`lx-mono overflow-x-auto whitespace-nowrap text-sm ${
              darkMode ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            {INSTALL_COMMAND}
          </code>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? 'Copied' : 'Copy install command'}
            className={`ml-auto shrink-0 rounded-md p-1.5 transition ${
              darkMode
                ? 'text-zinc-500 hover:bg-white/10 hover:text-white'
                : 'text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900'
            }`}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/docs/first-app"
            className={`group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition ${
              darkMode
                ? 'bg-white text-black hover:bg-zinc-200'
                : 'bg-zinc-900 text-white hover:bg-zinc-700'
            }`}
          >
            Build your first app
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <a
            href={LUXID.repo}
            target="_blank"
            rel="noreferrer noopener"
            className={`inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3.5 text-sm font-medium transition ${
              darkMode
                ? 'border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white'
                : 'border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-900'
            }`}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
