import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

interface Props {
  /** Re-scan when the rendered chapter changes. */
  contentKey: string;
  className?: string;
  onNavigate?: () => void;
}

/**
 * Builds the "On this page" list by reading the headings the chapter actually
 * rendered, so a content page never has to declare its own outline. The active
 * entry is tracked with an IntersectionObserver rather than scroll maths.
 */
export default function TableOfContents({ contentKey, className = '', onNavigate }: Props) {
  const { darkMode } = useTheme();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const scan = () => {
      // Every h2/h3 in the chapter, not only those that already carry an id.
      // Pages written with the Prose helpers set their own; older pages use
      // plain headings, and get one derived from their text here so the
      // outline works everywhere without editing the content.
      const nodes = Array.from(
        document.querySelectorAll<HTMLHeadingElement>('.docs-prose h2, .docs-prose h3'),
      );

      const used = new Set<string>();

      setHeadings(
        nodes.map((node, index) => {
          // The anchor link inside a Prose heading contributes no text, so the
          // first child span carries the label when one is present.
          const text =
            node.querySelector('span')?.textContent?.trim() || node.textContent?.trim() || '';

          let id = node.id;

          if (!id) {
            const base =
              text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .trim()
                .replace(/\s+/g, '-') || `section-${index}`;

            // Two headings can share a title; keep the ids unique so the
            // anchors and the scroll spy do not collide.
            id = base;
            let suffix = 2;
            while (used.has(id)) {
              id = `${base}-${suffix}`;
              suffix += 1;
            }

            node.id = id;
            node.classList.add('scroll-mt-28');
          }

          used.add(id);

          return { id, text, level: node.tagName === 'H3' ? 3 : 2 };
        }),
      );
    };

    // Content pages render synchronously, but a frame of slack keeps this
    // correct if one ever suspends.
    const frame = requestAnimationFrame(scan);
    return () => cancelAnimationFrame(frame);
  }, [contentKey]);

  useEffect(() => {
    if (headings.length === 0) return;

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the topmost heading currently inside the reading band.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
          return;
        }

        // Nothing in the band: fall back to the last heading scrolled past.
        const above = elements.filter((element) => element.getBoundingClientRect().top < 120);
        if (above.length > 0) {
          setActiveId(above[above.length - 1].id);
        }
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page" className={className}>
      <p
        className={`mb-3 text-[11px] font-semibold uppercase tracking-wider ${
          darkMode ? 'text-zinc-500' : 'text-zinc-500'
        }`}
      >
        On this page
      </p>

      <ul className={`space-y-0.5 border-l ${darkMode ? 'border-zinc-800' : 'border-zinc-200'}`}>
        {headings.map((heading) => {
          const active = heading.id === activeId;

          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={onNavigate}
                aria-current={active ? 'location' : undefined}
                className={`-ml-px block border-l py-1.5 text-[13px] leading-5 transition ${
                  heading.level === 3 ? 'pl-6' : 'pl-3'
                } ${
                  active
                    ? darkMode
                      ? 'border-zinc-100 font-medium text-white'
                      : 'border-zinc-900 font-medium text-zinc-900'
                    : darkMode
                      ? 'border-transparent text-zinc-500 hover:border-zinc-600 hover:text-zinc-300'
                      : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-800'
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
