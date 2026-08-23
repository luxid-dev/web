import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useSearch } from '@/contexts/SearchContext';
import Header from '@/components/Header';
import SpotlightSearch from '@/components/SpotlightSearch';
import Hero from '@/components/Hero';
import TypeSystem from '@/components/TypeSystem';
import CodeShowcase from '@/components/CodeShowcase';
import Features from '@/components/Features';
import Cli from '@/components/Cli';
import Benchmarks from '@/components/Benchmarks';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

/**
 * The landing page, in the order the argument is made:
 *
 *   Hero        — one command, six routes: what the framework does for you.
 *   TypeSystem  — the compiler diagnostic: what it does *to* you, on purpose.
 *   CodeShowcase— the whole surface you write against.
 *   Features    — what is built, and what is not.
 *   Cli         — how you drive it.
 *   Benchmarks  — what it costs, measured.
 *   Testimonials— what people who have tried it say.
 *   CTASection  — the command again.
 *
 * The sections alternate surfaces (page / raised) so the seams read without
 * needing dividers.
 */
export default function AppLayout() {
  const { searchOpen, setSearchOpen } = useSearch();
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-zinc-900'}>
      <Header onSearchClick={() => setSearchOpen(true)} />
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <main>
        <Hero />
        <TypeSystem />
        <CodeShowcase />
        <Features />
        <Cli />
        <Benchmarks />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
