import obsidianLogo from '@/assets/obsidian-logo.png';

const LandingHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Boarded aesthetic - subtle metallic gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal/30" />
      <div className="absolute inset-0 metallic-gradient opacity-30" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Logo - large and prominent */}
        <img
          src={obsidianLogo}
          alt="Obsidian Commercial Logo"
          className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-contain mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        />
        {/* Company name - large typography */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground tracking-[0.2em] uppercase leading-none mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          Obsidian
        </h1>
        <p
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream-muted tracking-[0.35em] uppercase font-extralight opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          Commercial
        </p>
        {/* Subtitle - refined */}
        <p
          className="font-body text-xs sm:text-sm tracking-[0.25em] uppercase text-cream-muted/80 mt-12 max-w-md opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          Commercial cleaning & facilities management
        </p>
      </div>

      {/* Scroll indicator - metallic accent */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-up"
        style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-bronze/60 to-transparent" />
      </div>
    </section>
  );
};

export default LandingHero;
