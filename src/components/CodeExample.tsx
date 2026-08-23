import React, { useMemo, useState } from 'react';
import { Check, Copy, WrapText } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { highlight, languageLabel, type Language } from '@/lib/highlight';

interface CodeExampleProps {
  code: string;
  title?: string;
  explanation?: string;
  language?: Language | string;
  /** Caps the block height and lets it scroll, for long reference listings. */
  compact?: boolean;
  className?: string;
  /** Overrides the language chip in the header, e.g. "src/controllers/posts.rs". */
  filename?: string;
  showLineNumbers?: boolean;
  /** 1-indexed lines to emphasise. */
  highlightLines?: number[];
}

export default function CodeExample({
  code,
  title = '',
  explanation = '',
  language = 'rust',
  compact = false,
  className = '',
  filename,
  showLineNumbers,
  highlightLines = [],
}: CodeExampleProps) {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);
  const [wrapped, setWrapped] = useState(false);

  const source = code.replace(/\s+$/, '');
  const lines = useMemo(() => source.split('\n'), [source]);

  // Highlight per line so line numbers and per-line emphasis stay aligned with
  // the tokens. Each line is tokenised independently, which is fine for every
  // language here since none of the rules span newlines in practice.
  const highlighted = useMemo(
    () => lines.map((line) => highlight(line, language)),
    [lines, language],
  );

  const label = filename ?? title ?? '';
  const headerLabel = label || languageLabel(String(language));
  const numbered = showLineNumbers ?? lines.length > 6;
  const emphasised = new Set(highlightLines);

  const handleCopy = () => {
    navigator.clipboard.writeText(source);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shell = darkMode
    ? 'bg-zinc-950 border-zinc-800'
    : 'bg-zinc-50 border-zinc-200';

  const header = darkMode
    ? 'bg-zinc-900/60 border-zinc-800 text-zinc-500'
    : 'bg-zinc-100/70 border-zinc-200 text-zinc-500';

  const iconButton = darkMode
    ? 'text-zinc-500 hover:text-white hover:bg-white/10'
    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200';

  return (
    <figure className={`group my-6 not-prose ${className}`}>
      <div className={`overflow-hidden rounded-xl border ${shell}`}>
        {/* Header: filename or language, plus the controls. */}
        <div className={`flex items-center gap-2 border-b px-4 py-2.5 ${header}`}>
          <span aria-hidden className="flex items-center gap-1.5">
            <span
              className={`h-2.5 w-2.5 rounded-full ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`}
            />
            <span
              className={`h-2.5 w-2.5 rounded-full ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`}
            />
            <span
              className={`h-2.5 w-2.5 rounded-full ${darkMode ? 'bg-zinc-700' : 'bg-zinc-300'}`}
            />
          </span>

          <span className="ml-2 truncate font-mono text-xs font-medium tracking-tight">
            {headerLabel}
          </span>

          <div className="ml-auto flex items-center gap-0.5">
            <button
              type="button"
              onClick={() => setWrapped((value) => !value)}
              title={wrapped ? 'Disable soft wrap' : 'Enable soft wrap'}
              aria-pressed={wrapped}
              className={`rounded-md p-1.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100 ${iconButton} ${
                wrapped ? 'opacity-100' : ''
              }`}
            >
              <WrapText className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={handleCopy}
              title="Copy to clipboard"
              aria-label={copied ? 'Copied' : 'Copy code to clipboard'}
              className={`rounded-md p-1.5 transition ${iconButton}`}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          className={`luxid-code overflow-x-auto ${darkMode ? 'luxid-code-dark' : 'luxid-code-light'}`}
          style={compact ? { maxHeight: '22rem', overflowY: 'auto' } : undefined}
        >
          <pre className="py-4 text-[13px] leading-[1.7]">
            <code>
              {highlighted.map((line, i) => (
                <span
                  key={i}
                  className={`flex px-4 ${
                    emphasised.has(i + 1)
                      ? darkMode
                        ? 'bg-white/[0.06] shadow-[inset_2px_0_0_theme(colors.zinc.400)]'
                        : 'bg-zinc-900/[0.05] shadow-[inset_2px_0_0_theme(colors.zinc.500)]'
                      : ''
                  }`}
                >
                  {numbered && (
                    <span
                      aria-hidden
                      className={`mr-4 inline-block w-6 shrink-0 select-none text-right text-[11px] ${
                        darkMode ? 'text-zinc-700' : 'text-zinc-400'
                      }`}
                    >
                      {i + 1}
                    </span>
                  )}
                  <span
                    className={wrapped ? 'whitespace-pre-wrap break-words' : 'whitespace-pre'}
                    dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }}
                  />
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>

      {explanation && (
        <figcaption
          className={`mt-2.5 text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
        >
          {explanation}
        </figcaption>
      )}
    </figure>
  );
}
