import obsidianLogo from '@/assets/obsidian-logo.png';

const LandingHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-visible pt-[max(2.75rem,env(safe-area-inset-top))] sm:pt-20 lg:pt-24">
      {/* Boarded aesthetic - subtle metallic gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal/30" />
      <div className="absolute inset-0 metallic-gradient opacity-30" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-full mx-auto">
        {/* Logo */}
        <div className="relative flex items-center justify-center mb-4 sm:mb-8 w-[25rem] h-[25rem] max-w-[90vw] max-h-[55vh] sm:max-w-none sm:max-h-none sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <img
            src={obsidianLogo}
            alt="Obsidian Commercial Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Company name - larger on iPhone, then scale up */}
        <h1
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground tracking-[0.2em] uppercase leading-none mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          Obsidian
        </h1>
        {/* Subtitle */}
        <p
          className="font-body text-xs sm:text-sm tracking-[0.25em] uppercase text-cream-muted/80 mt-8 sm:mt-12 max-w-md opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          Commercial cleaning & facilities management
        </p>

        {/* Scroll indicator - clear gap below subheading so no overlap on iPhone */}
        <div
          className="mt-12 sm:mt-16 min-h-[4rem] opacity-0 animate-fade-up z-10 flex items-end justify-center pb-2"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-bronze/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
