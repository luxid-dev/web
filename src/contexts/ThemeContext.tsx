import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const saved = localStorage.getItem('luxid-dark-mode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      // Then check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // Default to dark mode for SSR
    return true;
  });

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('luxid-dark-mode', JSON.stringify(darkMode));

    // Update document class for global theme
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }

    // Update favicon dynamically based on theme
    updateFavicon(darkMode);
  }, [darkMode]);

  // Function to update favicon
  const updateFavicon = (isDarkMode: boolean) => {
    if (typeof window === 'undefined') return;

    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      // Set based on theme:
      // dark mode -> lion7.svg
      // light mode -> lion5.svg
      favicon.href = isDarkMode ? '/lion7.svg' : '/lion5.svg';
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
