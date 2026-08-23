import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SearchProvider } from "@/contexts/SearchContext";

/**
 * Routes are split so a page only downloads what it renders. It matters here:
 * the marketing pages pull in three.js for the globe and a Monaco editor for
 * the code showcase, neither of which the documentation uses.
 */
const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("@/pages/About"));
const Docs = lazy(() => import("@/docs/Docs"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

/** Shown while a route chunk loads. Deliberately quiet — chunks are small. */
function RouteFallback() {
  return (
    <div className="min-h-screen bg-white dark:bg-black" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading…</span>
    </div>
  );
}

const App = () => (
  <ThemeProvider>
    <SearchProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutPage />} />
                {/* A bare /docs visit lands on the first chapter. */}
                <Route path="/docs" element={<Navigate to="/docs/introduction" replace />} />
                <Route path="/docs/:chapter" element={<Docs />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </SearchProvider>
  </ThemeProvider>
);

export default App;
