const Footer = () => {
  return (
    <footer className="py-16 lg:py-20 bg-obsidian border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl tracking-[0.3em] text-cream uppercase mb-4">
              Obsidian
            </h3>
            <p className="font-body text-sm text-cream-muted leading-relaxed max-w-md mb-6">
              Melbourne's premier workplace experience partner. Elevating 
              corporate environments through precision, care, and an unwavering 
              commitment to excellence.
            </p>
            <p className="font-body text-xs text-cream-muted">
              Melbourne, Victoria, Australia
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: '#approach', label: 'Our Approach' },
                { href: '#services', label: 'Services' },
                { href: '#clients', label: 'Who We Work With' },
                { href: '#about', label: 'About' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-cream-muted hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@obsidian.com.au"
                className="block font-body text-sm text-cream-muted hover:text-cream transition-colors duration-300"
              >
                hello@obsidian.com.au
              </a>
              <p className="font-body text-sm text-cream-muted">
                ABN: XX XXX XXX XXX
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-stone-light">
            © {new Date().getFullYear()} Obsidian. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="font-body text-xs text-stone-light hover:text-cream transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="font-body text-xs text-stone-light hover:text-cream transition-colors duration-300"
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
