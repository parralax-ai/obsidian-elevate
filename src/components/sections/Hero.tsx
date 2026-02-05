import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-office.jpg';

const spiritualQuotes = [
  "How we maintain our spaces mirrors how we value our people.",
  "Care is most powerful when it is continuous.",
  "Strong foundations are felt, not seen.",
  "The space between effort and ease is where good work lives.",
  "When a place is in balance, everything else finds its place.",
];

const Hero = () => {
  const currentQuote = spiritualQuotes[Math.floor(Math.random() * spiritualQuotes.length)];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with white overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium executive office interior"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Overline */}
          <p 
            className="font-body text-xs tracking-[0.4em] uppercase text-cream-muted mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Australian-Owned Commercial Cleaning & Facilities Management
          </p>
          
          {/* Main Headline */}
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-foreground leading-[1.1] mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Creating cleaner, safer, and more{' '}
            <span className="italic text-cream-muted">welcoming workplaces</span>
          </h1>

          {/* Supporting Text */}
          <p 
            className="font-body text-base lg:text-lg text-cream-muted max-w-2xl mx-auto mb-8 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            Obsidian Commercial is a long-term partner, supporting clients across 
            metropolitan and regional Australia with tailored solutions that align with 
            their operational needs, brand standards, and workplace culture.
          </p>

          {/* Spiritual Quote */}
          <blockquote 
            className="font-display text-lg lg:text-xl italic text-foreground/70 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            "{currentQuote}"
          </blockquote>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Button variant="luxury" size="xl" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="minimal" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Tagline */}
          <p 
            className="font-body text-sm tracking-[0.3em] uppercase text-cream-muted mt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            Elevating your experience.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-obsidian/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
