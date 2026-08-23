import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useSearch } from '@/contexts/SearchContext';
import Header from '@/components/Header';
import SpotlightSearch from '@/components/SpotlightSearch';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { searchOpen, setSearchOpen } = useSearch();
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "min-h-screen bg-black text-white" : "min-h-screen bg-white text-zinc-900"}>
      <Header onSearchClick={() => setSearchOpen(true)} />
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <About />
      <Footer />
    </div>
  );
}
