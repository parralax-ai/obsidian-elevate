import { Link } from 'react-router-dom';
import obsidianLogo from '@/assets/obsidian-logo.png';

const Footer = () => {
  return (
    <footer className="py-16 lg:py-20 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl tracking-[0.3em] text-foreground uppercase mb-4 flex items-center gap-3">
              <img 
                src={obsidianLogo} 
                alt="Obsidian Commercial Logo" 
                className="h-25 w-25 object-contain flex-shrink-0"
                style={{ display: 'block', height: '62.5px', width: '62.5px' }}
              />
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
