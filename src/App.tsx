import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TechnologyPage from "./pages/TechnologyPage";
import ExperiencePage from "./pages/ExperiencePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'fadeOut' | 'fadeIn'>('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // Start fade out
      setTransitionStage('fadeOut');
      
      // After fade out completes, update location and fade in
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 500); // Wait for fade out to complete
      
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        transitionStage === 'fadeOut' 
          ? 'opacity-0 translate-y-4' 
          : 'opacity-100 translate-y-0'
      }`}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '500ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
