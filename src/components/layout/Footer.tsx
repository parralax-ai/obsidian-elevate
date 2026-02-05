import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 lg:py-20 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl tracking-[0.3em] text-foreground uppercase mb-4 flex items-center gap-3">
              {/* Obsidian Logo with Shine */}
              <div 
                className="relative h-10 w-10 flex-shrink-0 rounded-sm overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #0d0d0d 50%, #1a1a1a 75%, #000000 100%)',
                  boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {/* Obsidian texture - multiple layers */}
                <div 
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: 'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 40%)',
                  }}
                />
                {/* Shine effect */}
                <div 
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.2) 50%, transparent 60%)',
                    transform: 'translateX(-100%) translateY(-100%)',
                    animation: 'shine 4s infinite',
                  }}
                />
                {/* Glassy reflection */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1/3 opacity-30"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent)',
                  }}
                />
              </div>
              Obsidian Commercial
            </h3>
            <p className="font-body text-sm text-cream-muted leading-relaxed max-w-md mb-6">
              Australian-owned commercial cleaning and facilities management company dedicated 
              to creating cleaner, safer, and more welcoming workplaces across metropolitan 
              and regional Australia.
            </p>
            <p className="font-body text-xs text-cream-muted">
              Melbourne, Victoria, Australia
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/technology', label: 'Technology' },
                { href: '/experience', label: 'Experience' },
                { href: '/#contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-sm text-cream-muted hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@obsidian.com.au"
                className="block font-body text-sm text-cream-muted hover:text-foreground transition-colors duration-300"
              >
                hello@obsidian.com.au
              </a>
              <p className="font-body text-sm text-cream-muted">
                Melbourne, Victoria, Australia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream-muted">
            © {new Date().getFullYear()} Obsidian Commercial. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="font-body text-xs text-cream-muted hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="font-body text-xs text-cream-muted hover:text-foreground transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
