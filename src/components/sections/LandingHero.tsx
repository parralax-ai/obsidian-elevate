import { useState } from 'react';
import obsidianLogo from '@/assets/obsidian-logo.png';

const obsidianFacets = [
  {
    title: 'Protection',
    desc: 'Obsidian is believed to absorb and dissolve negative energy, creating a shield around the wearer or space and deflecting harm from the outside.',
  },
  {
    title: 'Grounding',
    desc: 'The stone anchors the spirit to the earth, helping to stabilise emotions and bring a sense of safety and presence in the here and now.',
  },
  {
    title: 'Clarity',
    desc: 'Obsidian is said to clear mental fog and sharpen focus, revealing the truth of a situation and supporting honest self-reflection.',
  },
  {
    title: 'Emotional Healing',
    desc: 'It is thought to release deep tension, stress, and emotional blockages, allowing old wounds to surface and be released with greater ease.',
  },
];

const LandingHero = () => {
  const [showFacets, setShowFacets] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-visible pt-20 lg:pt-24">
      {/* Boarded aesthetic - subtle metallic gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal/30" />
      <div className="absolute inset-0 metallic-gradient opacity-30" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Logo area - fixed layout, no shift on hover */}
        <div
          className="relative flex items-center justify-center mb-8 w-[25rem] h-[25rem] max-w-[90vw] max-h-[70vh] sm:max-w-none sm:max-h-none sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
          onMouseEnter={() => setShowFacets(true)}
          onMouseLeave={() => setShowFacets(false)}
          onClick={() => setShowFacets(!showFacets)}
        >
          {/* Logo - no box; hover uses subtle glow that follows logo shape */}
          <img
            src={obsidianLogo}
            alt="Obsidian Commercial Logo"
            className="w-full h-full object-contain opacity-0 animate-fade-up cursor-pointer relative z-10 transition-all duration-300"
            style={{
              animationDelay: '0.2s',
              animationFillMode: 'forwards',
              filter: showFacets ? 'drop-shadow(0 0 12px hsl(var(--bronze) / 0.2))' : 'none',
            }}
          />

          {/* Four arms: start at logo edge, angle toward each card, horizontal at card (desktop only) */}
          {showFacets && (
            <svg
              className="hidden lg:block absolute pointer-events-none z-[15] animate-fade-up"
              style={{
                animationFillMode: 'forwards',
                width: '280%',
                height: '280%',
                left: '-90%',
                top: '-90%',
              }}
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Logo 38–62; arms end at card edge (just next to), not inside */}
              <path d="M 38 38 L 28 28 L 26 28" fill="none" stroke="hsl(var(--bronze) / 0.3)" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
              <path d="M 62 38 L 72 28 L 74 28" fill="none" stroke="hsl(var(--bronze) / 0.3)" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
              <path d="M 38 62 L 28 72 L 26 72" fill="none" stroke="hsl(var(--bronze) / 0.3)" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
              <path d="M 62 62 L 72 72 L 74 72" fill="none" stroke="hsl(var(--bronze) / 0.3)" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
            </svg>
          )}

          {/* 4 branches - much more vertical spread, larger headings */}
          {showFacets && (
            <>
              {/* Desktop: top-left (well above logo to avoid overlap) */}
              <div className="hidden lg:block absolute right-full top-0 mr-12 w-72 text-right animate-fade-up z-20 -translate-y-full -mt-24" style={{ animationFillMode: 'forwards' }}>
                <div className="bg-background/98 backdrop-blur-md border border-bronze/20 rounded-sm p-5 shadow-lg">
                  <p className="font-display text-xl font-semibold text-foreground mb-3">{obsidianFacets[0].title}</p>
                  <p className="font-body text-sm text-cream-muted leading-relaxed">{obsidianFacets[0].desc}</p>
                </div>
              </div>
              {/* Desktop: top-right */}
              <div className="hidden lg:block absolute left-full top-0 ml-12 w-72 text-left animate-fade-up z-20 -translate-y-full -mt-24" style={{ animationFillMode: 'forwards' }}>
                <div className="bg-background/98 backdrop-blur-md border border-bronze/20 rounded-sm p-5 shadow-lg">
                  <p className="font-display text-xl font-semibold text-foreground mb-3">{obsidianFacets[1].title}</p>
                  <p className="font-body text-sm text-cream-muted leading-relaxed">{obsidianFacets[1].desc}</p>
                </div>
              </div>
              {/* Desktop: bottom-left (at logo bottom, extends up only; -mt-24 on top cards gives clear vertical gap) */}
              <div className="hidden lg:block absolute right-full bottom-0 mr-12 w-72 text-right animate-fade-up z-20" style={{ animationFillMode: 'forwards' }}>
                <div className="bg-background/98 backdrop-blur-md border border-bronze/20 rounded-sm p-5 shadow-lg">
                  <p className="font-display text-xl font-semibold text-foreground mb-3">{obsidianFacets[2].title}</p>
                  <p className="font-body text-sm text-cream-muted leading-relaxed">{obsidianFacets[2].desc}</p>
                </div>
              </div>
              {/* Desktop: bottom-right */}
              <div className="hidden lg:block absolute left-full bottom-0 ml-12 w-72 text-left animate-fade-up z-20" style={{ animationFillMode: 'forwards' }}>
                <div className="bg-background/98 backdrop-blur-md border border-bronze/20 rounded-sm p-5 shadow-lg">
                  <p className="font-display text-xl font-semibold text-foreground mb-3">{obsidianFacets[3].title}</p>
                  <p className="font-body text-sm text-cream-muted leading-relaxed">{obsidianFacets[3].desc}</p>
                </div>
              </div>
              {/* Mobile: fixed overlay so no overlap, no layout shift */}
              <div className="lg:hidden fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/10" onClick={() => setShowFacets(false)}>
                <div className="grid grid-cols-2 gap-6 max-w-lg w-full animate-fade-up" onClick={(e) => e.stopPropagation()} style={{ animationFillMode: 'forwards' }}>
                  {obsidianFacets.map((facet, i) => (
                    <div key={i} className="bg-background/98 backdrop-blur-md border border-bronze/20 rounded-sm p-4 shadow-lg text-left">
                      <p className="font-display text-lg font-semibold text-foreground mb-2">{facet.title}</p>
                      <p className="font-body text-xs text-cream-muted leading-relaxed line-clamp-4">{facet.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        {/* Company name - large typography (always below branches, no overlap) */}
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
