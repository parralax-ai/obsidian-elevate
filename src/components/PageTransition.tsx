import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
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
      className={`min-h-screen transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
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
      {children}
    </div>
  );
};

export default PageTransition;
