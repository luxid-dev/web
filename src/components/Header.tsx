import React, { useState, useEffect } from 'react';
import {
  Search, Github, Sun, Moon,
  Menu, X, Home, BookOpen, User
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

interface Props {
  onSearchClick?: () => void;
}

export default function Header({ onSearchClick }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
    ? darkMode
      ? 'bg-black/60 backdrop-blur-xl border-b border-zinc-800'
      : 'bg-white/80 backdrop-blur-xl border-b border-zinc-200'
    : 'bg-transparent'
    }`;

  const logoClass = darkMode
    ? "text-white"
    : "text-zinc-900";

  const searchButtonClass = darkMode
    ? "flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-full transition-all text-sm"
    : "flex items-center gap-2 px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 backdrop-blur-xl border border-zinc-300 rounded-full transition-all text-sm";

  const navContainerClass = darkMode
    ? "hidden md:flex items-center gap-1 px-2 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
    : "hidden md:flex items-center gap-1 px-2 py-1.5 bg-zinc-100 backdrop-blur-xl border border-zinc-300 rounded-full";

  const navLinkClass = darkMode
    ? "px-3 py-1 text-zinc-300 hover:text-white hover:bg-white/10 transition-all text-sm rounded-full"
    : "px-3 py-1 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 transition-all text-sm rounded-full";

  const iconButtonClass = darkMode
    ? "p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
    : "p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded-full transition-all";

  const routes = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Docs', path: '/docs', icon: BookOpen },
    { label: 'About', path: '/about', icon: User },
  ];

  const handleNavigation = (path: string, label: string) => {
    navigate(path);
  };

  return (
    <>
      <header className={headerClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Left section - Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`text-lg font-semibold ${logoClass}`}>Luxid</span>
            <img
              src={darkMode ? "/lion7.svg" : "/lion5.svg"}
              alt="Luxid"
              className="w-7 h-7 group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Right section - Search and Navigation group */}
          <div className="flex items-center gap-3">
            {/* Search button - standalone with glossy effect */}
            <button
              onClick={onSearchClick}
              className={searchButtonClass}
            >
              <Search className={`w-4 h-4 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`} />
              <span className={`hidden sm:inline text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Search</span>
              <kbd className={`hidden lg:inline px-1.5 py-0.5 rounded text-xs border ${darkMode
                ? 'bg-black/20 text-zinc-500 border-white/10'
                : 'bg-white/50 text-zinc-600 border-zinc-300'
                }`}>
                Ctrl K
              </kbd>
            </button>

            {/* Desktop Navigation and icons group - glossy rounded container */}
            <div className={navContainerClass}>
              {/* Desktop Navigation links */}
              <nav className="flex items-center gap-1">
                {routes.map(({ label, path }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleNavigation(path, label)}
                    className={navLinkClass}
                  >
                    {label}
                  </button>
                ))}
              </nav>

              {/* Divider */}
              <div className={`w-px h-4 mx-1 ${darkMode ? 'bg-white/10' : 'bg-zinc-300'
                }`} />

              {/* Icon buttons */}
              <a
                href="https://github.com/luxid-dev/luxid"
                target="_blank"
                rel="noopener noreferrer"
                className={iconButtonClass}
                aria-label="GitHub"
              >
                <Github className="w-[18px] h-[18px]" />
              </a>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={iconButtonClass}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all ${darkMode
                ? 'hover:bg-white/10 text-zinc-400 hover:text-white'
                : 'hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900'
                }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}>
                  <Menu className="w-6 h-6" />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}>
                  <X className="w-6 h-6" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen
        ? 'opacity-100 visible'
        : 'opacity-0 invisible delay-300'
        }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${darkMode ? 'bg-black/80' : 'bg-white/80'
            } ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-full transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } ${darkMode ? 'bg-black' : 'bg-white'}`}>
          {/* Menu Header */}
          <div className={`flex items-center justify-between p-6 border-b ${darkMode ? 'border-zinc-800' : 'border-zinc-200'
            }`}>

          </div>

          {/* Menu Content */}
          <div className="p-6">
            {/* Navigation Links */}
            <nav className="space-y-1 mb-8">
              {routes.map(({ label, path, icon: Icon }) => (
                <Link
                  key={label}
                  to={path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${darkMode
                    ? 'hover:bg-white/5 text-zinc-300 hover:text-white'
                    : 'hover:bg-zinc-100 text-zinc-700 hover:text-black'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={`p-2 rounded-lg transition-colors ${darkMode
                    ? 'group-hover:bg-white/10 bg-white/5'
                    : 'group-hover:bg-zinc-200 bg-zinc-100'
                    }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className={`h-px my-6 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-200'
              }`} />

            {/* Search Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSearchClick?.();
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all mb-4 ${darkMode
                ? 'hover:bg-white/5 text-zinc-300 hover:text-white'
                : 'hover:bg-zinc-100 text-zinc-700 hover:text-black'
                }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-zinc-100'
                  }`}>
                  <Search className="w-4 h-4" />
                </div>
                <span>Search</span>
              </div>
              <kbd className={`px-2 py-1 rounded text-xs border ${darkMode
                ? 'bg-white/5 text-zinc-500 border-white/10'
                : 'bg-zinc-100 text-zinc-600 border-zinc-300'
                }`}>
                Ctrl K
              </kbd>
            </button>

            {/* Social Links & Theme Toggle */}
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-white/5' : 'bg-zinc-100'
              }`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Connect with us
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/luxid-dev/luxid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${darkMode
                      ? 'hover:bg-white/10 text-zinc-400 hover:text-white'
                      : 'hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900'
                      }`}
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-lg transition-colors ${darkMode
                      ? 'hover:bg-white/10 text-zinc-400 hover:text-white'
                      : 'hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900'
                      }`}
                    aria-label="Toggle theme"
                  >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Creator Credit */}
              <div className={`pt-4 border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-200'
                }`}>
                <p className={`text-xs text-center ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
                  Created by ~
                  <a
                    href="https://jhayonline.dev"
                    className={`underline font-semibold transition-colors duration-200 ml-1 ${darkMode ? 'text-white hover:text-zinc-300' : 'text-zinc-900 hover:text-zinc-600'
                      }`}
                  >
                    jhayonline.dev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
