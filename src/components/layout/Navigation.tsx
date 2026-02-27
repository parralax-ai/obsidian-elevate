import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import obsidianLogo from '@/assets/obsidian-logo.png';

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isSubpage = location.pathname !== '/';
  const showLogo = isScrolled || isSubpage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/technology', label: 'Technology' },
    { href: '/experience', label: 'Experience' },
  ];

  const shouldBlur = isScrolled || isDropdownOpen;

  const closeDropdown = () => setIsDropdownOpen(false);

  const DropdownContent = () => (
    <div className="container mx-auto px-6 py-8 flex flex-col items-center justify-center gap-6 text-center">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className="font-body text-sm tracking-[0.15em] uppercase text-cream-muted hover:text-foreground transition-colors duration-300"
          onClick={closeDropdown}
        >
          {link.label}
        </Link>
      ))}
      <Button variant="luxuryOutline" size="lg" className="mt-4" asChild>
        <Link to="/#contact" onClick={closeDropdown}>
          Get in Touch
        </Link>
      </Button>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        shouldBlur 
          ? 'bg-background/95 border-b border-border' 
          : 'bg-transparent'
      }`}
      style={shouldBlur ? {
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'hsla(0, 0%, 100%, 0.95)',
        borderBottom: '1px solid hsl(var(--bronze) / 0.15)'
      } : {}}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* On iPhone: 3-column grid so logo is centered; on lg: flex with logo next to hamburger */}
        <div className="grid grid-cols-3 lg:flex items-center justify-between h-20 lg:h-24">
          <div className="flex items-center gap-4 min-w-0">
            {/* 3-bar hamburger - top left, all pages */}
            <button
              className="flex flex-col justify-center gap-1.5 w-10 h-10 flex-shrink-0 text-foreground hover:opacity-80 transition-opacity touch-target"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Toggle menu"
              aria-expanded={isDropdownOpen}
            >
              {isDropdownOpen ? (
                <X size={24} className="flex-shrink-0" />
              ) : (
                <>
                  <span className="block w-6 h-0.5 bg-current" />
                  <span className="block w-6 h-0.5 bg-current" />
                  <span className="block w-6 h-0.5 bg-current" />
                </>
              )}
            </button>
            {/* Logo on desktop - next to hamburger */}
            {showLogo && (
              <Link
                to="/"
                className="hidden lg:flex items-center gap-2 hover:opacity-90 transition-opacity flex-shrink-0"
                aria-label="Obsidian Commercial - Home"
              >
                <img
                  src={obsidianLogo}
                  alt="Obsidian Commercial Logo"
                  className="h-20 w-20 object-contain"
                  style={{ display: 'block' }}
                />
              </Link>
            )}
          </div>
          {/* Logo on iPhone - centered in middle column */}
          {showLogo && (
            <div className="flex items-center justify-center min-w-0">
              <Link
                to="/"
                className="flex items-center hover:opacity-90 transition-opacity"
                aria-label="Obsidian Commercial - Home"
              >
                <img
                  src={obsidianLogo}
                  alt="Obsidian Commercial Logo"
                  className="h-16 w-16 object-contain lg:hidden"
                  style={{ display: 'block' }}
                />
              </Link>
            </div>
          )}
          {!showLogo && <div />}
          <div className="w-10 flex-shrink-0" />
        </div>

        {/* Dropdown - animates down */}
        {isDropdownOpen && (
          <div 
            className="absolute top-full left-0 right-0 border-b overflow-hidden animate-slide-down boarded-border"
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              backgroundColor: 'hsla(0, 0%, 100%, 0.98)'
            }}
          >
            <DropdownContent />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
