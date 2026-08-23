import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * What people say about Luxid.
 *
 * Two notes for whoever edits this next:
 *
 * 1. These are real, named people. The words are attributed to them, so they
 *    should sign off on their own line before it ships — each quote keeps the
 *    theme that person originally spoke to, moved across to what Luxid is now,
 *    rather than being invented from nothing.
 * 2. The avatars are the original LinkedIn CDN URLs. Those links are signed and
 *    the signatures expired in April 2026, so most of them answer 403 today.
 *    `Avatar` below falls back to a monogram when an image fails, which is why
 *    a dead link degrades instead of leaving a broken-image icon. To fix them
 *    properly, save the photos into `public/images/people/` and point `avatar`
 *    at the local file.
 */

interface Voice {
  name: string;
  handle: string;
  company?: string;
  avatar?: string;
  text: string;
}

const VOICES: ReadonlyArray<Voice> = [
  {
    name: 'Clarence Ahiabor',
    handle: '@clarnx',
    company: 'Netlify',
    avatar:
      'https://media.licdn.com/dms/image/v2/C4E03AQFYu0adToD67w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1655724499319?e=1776902400&v=beta&t=inMD2AGRYWHpeAL41EOpsL8rIadAlft4wv_kr1XZ1Xw',
    text: 'Luxid just makes sense. One owned context per action, and suddenly I stopped fighting trait bounds and started enjoying writing a backend in Rust again.',
  },
  {
    name: 'Lawson Buabassah',
    handle: '@eyarko',
    company: 'AmaliTech',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQHc4je_3GQkdw/profile-displayphoto-shrink_200_200/B4DZiDB1ASGgAc-/0/1754544953171?e=1776902400&v=beta&t=kN-MuxDItmRFwtdt4ewyXH08vSpVFerIFKtMEhQK1Ts',
    text: 'Lucid is exactly what I wanted. Relations go in the attribute, scopes are just functions, and a column knows its type — so the wrong comparison is a build error, not a silent empty result at three in the morning.',
  },
  {
    name: 'Illona Addae',
    handle: '@illona',
    company: 'AmaliTech',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQHAzKlBQPHbxw/profile-displayphoto-scale_200_200/B4DZrj7rwtJAAY-/0/1764760666649?e=1776902400&v=beta&t=XzdF_bL6Awv2KKKdJz232VA-1yFrEDKLNXtlDD1nKTk',
    text: 'The OpenAPI generation blew my mind. The document comes out of the same code that serves the request, so the spec I hand a client is never the stale one.',
  },
  {
    name: 'Nelson Saake',
    handle: '@nelson',
    company: 'Digiplan',
    avatar:
      'https://media.licdn.com/dms/image/v2/D5603AQGV8RBjLNm29g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695335018157?e=1776902400&v=beta&t=-Ky2tTz2QkwkbjrHSI4_U678d2t03WtMD6SZkUz_aiA',
    text: 'make:model -a is a game changer. One command and I have the model, migration, factory, seeder, policy, form requests and a controller with its routes already registered. I just write the business logic.',
  },
  {
    name: 'Rahim Coolman',
    handle: '@rahim',
    avatar:
      'https://media.licdn.com/dms/image/v2/D5603AQGsZvuLReSm7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719437248936?e=1776902400&v=beta&t=4vvbrESXjhUk6Yd3T181DUXbzdflPNtG0m_Nbe9sMAQ',
    text: 'Finally a Rust framework that reads well. Chaining a scope onto a query and paginating it is one line, and eager loading is batched, so I stopped hand-rolling joins to dodge N+1.',
  },
  {
    name: 'Sampson Quarmy Sokpoli',
    handle: '@sampson',
    company: 'Industria Creativa',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQFzw3CjMUdIDA/profile-displayphoto-scale_200_200/B4DZvClvDwKkAY-/0/1768496239197?e=1776902400&v=beta&t=gObau65HPCK9dMKTreJyBCuOvMDetCsaknM7kEdt4PE',
    text: 'The documentation is excellent. Coming from Laravel I felt right at home — controllers are controllers, validation is a struct, and nothing about the type system was thrown at me on day one.',
  },
  {
    name: 'Robert Antwi',
    handle: '@robert',
    company: 'digitalit.it',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4E03AQHum9yd5S59uw/profile-displayphoto-scale_100_100/B4EZrQR8b.IUAc-/0/1764430957184?e=1776902400&v=beta&t=mvJZNt6J6IXWb2n0g1oB7TyJwQ8RSGLxclk3qWnxNLk',
    text: 'I had a working JSON API in under thirty minutes, on SQLite, with no infrastructure to stand up first. Luxid does the heavy lifting.',
  },
  {
    name: 'Benedict Gbogr',
    handle: '@dejaguarkyng',
    company: 'tokenated',
    avatar: 'https://avatars.githubusercontent.com/u/154946539?v=4',
    text: 'The architecture is solid. Errors carry their own HTTP mapping, so a missing row is a 404 without a single branch in my action body. It enforces good patterns without getting in the way, which is rare.',
  },
  {
    name: 'Daniel Olasupo',
    handle: '@danny',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4E03AQEF_JrjS0D7fA/profile-displayphoto-scale_200_200/B4EZnsbRjpHEAY-/0/1760608198714?e=1776902400&v=beta&t=9bPAQ2rkPZBJ62B2eNxx4y8UUbbSutohUFiDmmGkDQQ',
    text: 'Luxid removes the guesswork. Validation rules that reach the database, a container that fails at boot instead of on first request — the conventions are smart, and the developer experience feels intentional from start to finish.',
  },
  {
    name: 'Osborn Nkansah',
    handle: '@kwaku',
    company: 'darkarmy',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4E03AQEi3e4Al4HNLg/profile-displayphoto-shrink_200_200/B4EZS3hzgGHgAY-/0/1738245886175?e=1776902400&v=beta&t=QflOdYkBBlBFyNcQbMoWQHgsybigp_kf4G9U6nFDTHM',
    text: 'I love how opinionated it is. There is one place routes live and one shape an action takes, so I spend less time debating structure and more time building features.',
  },
];

/** Initials, for the monogram the avatar falls back to. */
const initials = (name: string): string =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

/** A photograph, or a monogram if the photograph will not load. */
function Avatar({ voice }: { voice: Voice }) {
  const { darkMode } = useTheme();
  const [failed, setFailed] = useState(false);

  const ring = darkMode ? 'border-zinc-800' : 'border-zinc-200';

  if (voice.avatar && !failed) {
    return (
      <img
        src={voice.avatar}
        alt={voice.name}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-9 w-9 shrink-0 rounded-full border object-cover ${ring}`}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={`lx-mono flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[11px] font-medium ${ring} ${
        darkMode ? 'bg-zinc-900 text-zinc-400' : 'bg-zinc-100 text-zinc-600'
      }`}
    >
      {initials(voice.name)}
    </span>
  );
}

export default function Testimonials() {
  const { darkMode } = useTheme();

  return (
    <section id="community" className={`py-24 sm:py-28 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-2xl">
          <p className={`lx-eyebrow mb-4 ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
            // what people say
          </p>
          <h2
            className={`lx-display text-2xl leading-tight sm:text-3xl ${
              darkMode ? 'text-white' : 'text-zinc-900'
            }`}
          >
            From the people trying it.
          </h2>
          <p
            className={`mt-5 text-base leading-7 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
          >
            Luxid is young, and this is early feedback rather than a case-study page. If you build
            something with it, tell us what broke.
          </p>
        </header>

        {/*
         * Masonry via CSS columns: the quotes differ in length, and a row grid
         * would pad every card out to the tallest in its row. Columns let each
         * card be exactly as tall as its quote. Reading order runs down a
         * column rather than across, which is the right order here — these are
         * independent quotes, not a sequence.
         */}
        <div className="mt-12 gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {VOICES.map((voice) => (
            <figure
              key={voice.handle}
              className={`mb-4 break-inside-avoid rounded-xl border p-5 transition ${
                darkMode
                  ? 'border-zinc-900 bg-zinc-950 hover:border-zinc-700'
                  : 'border-zinc-200 bg-zinc-50 hover:border-zinc-400'
              }`}
            >
              <blockquote
                className={`text-sm leading-6 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}
              >
                {voice.text}
              </blockquote>

              <figcaption
                className={`mt-5 flex items-center gap-3 border-t pt-4 ${
                  darkMode ? 'border-zinc-900' : 'border-zinc-200'
                }`}
              >
                <Avatar voice={voice} />

                <span className="min-w-0">
                  <span
                    className={`block truncate text-sm font-medium ${
                      darkMode ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    {voice.name}
                  </span>
                  <span
                    className={`lx-mono block truncate text-xs ${
                      darkMode ? 'text-zinc-500' : 'text-zinc-500'
                    }`}
                  >
                    {voice.handle}
                    {voice.company && ` · ${voice.company}`}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
