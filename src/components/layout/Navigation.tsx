import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import obsidianLogo from '@/assets/obsidian-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/technology', label: 'Technology' },
    { href: '/experience', label: 'Experience' },
  ];

  const shouldBlur = isScrolled || isMobileMenuOpen;

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
        backgroundColor: 'hsla(0, 0%, 100%, 0.95)'
      } : {}}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display text-2xl lg:text-3xl tracking-[0.3em] text-foreground uppercase flex items-center gap-3 hover:opacity-90 transition-opacity duration-300"
          >
            <img 
              src={obsidianLogo} 
              alt="Obsidian Commercial Logo" 
              className="h-20 w-20 lg:h-24 lg:w-24 object-contain flex-shrink-0"
              style={{ display: 'block' }}
            />
            Obsidian Commercial
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-body text-xs tracking-[0.2em] uppercase text-cream-muted hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="luxuryOutline" size="sm" asChild>
              <Link to="/#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-0 right-0 border-b border-border animate-fade-up"
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              backgroundColor: 'hsla(0, 0%, 100%, 0.98)'
            }}
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-sm tracking-[0.15em] uppercase text-cream-muted hover:text-foreground transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="luxuryOutline" size="lg" className="mt-4" asChild>
                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
