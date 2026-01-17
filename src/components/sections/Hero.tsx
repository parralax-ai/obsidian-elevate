import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-office.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium executive office interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Overline */}
          <p 
            className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Melbourne's Premier Workplace Partner
          </p>
          
          {/* Main Headline */}
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-cream leading-[1.1] mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Redefining the{' '}
            <span className="italic text-gold-light">in-office experience</span>
            <br />
            through precision and care
          </h1>

          {/* Supporting Text */}
          <p 
            className="font-body text-base lg:text-lg text-cream-muted max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            We partner with forward-thinking organisations to elevate workplace 
            environments - creating spaces that inspire, impress, and draw employees 
            back to the office.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Button variant="luxury" size="xl" asChild>
              <a href="#contact">Partner With Obsidian</a>
            </Button>
            <Button variant="minimal" size="lg" asChild>
              <a href="#approach">Discover Our Approach</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
