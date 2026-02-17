import { useState, useEffect } from 'react';

// High-resolution 4K corporate office images matching the provided descriptions
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=3840&q=95&auto=format&fit=crop',
    alt: 'Modern corporate office reception with warm wood tones, gold accents, and contemporary design',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=3840&q=95&auto=format&fit=crop',
    alt: 'Industrial-chic multi-level office space with exposed beams and high ceilings',
  },
  {
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=3840&q=95&auto=format&fit=crop',
    alt: 'Modern office with reception area, open-plan workspace, and glass-enclosed meeting rooms',
  },
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=3840&q=95&auto=format&fit=crop',
    alt: 'Spacious open-plan office workspace with natural light and modern furniture',
  },
  {
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=3840&q=95&auto=format&fit=crop',
    alt: 'Elegant corporate workspace with premium finishes and sophisticated design',
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 15000); // Longer display time - 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden pt-20 lg:pt-24 boarded-frame" 
      style={{ 
        zIndex: 1, 
        minHeight: 'calc(100vh - 5rem)',
        height: 'calc(100vh - 5rem)',
      }}
    >
      {/* Boarded metallic inner frame */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ padding: '1px' }}>
        <div className="absolute inset-2 sm:inset-4 lg:inset-6 border border-bronze/30" />
        <div className="absolute inset-4 sm:inset-6 lg:inset-8 border border-bronze/15" />
      </div>

      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[5000ms] ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              transition: 'opacity 5s ease-in-out, transform 5s ease-in-out',
            }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center',
              }}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
            {/* Dark vignette overlay - Saint Haven style */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Overlay text - Saint Haven "Choose your sanctuary" style */}
      <div className="absolute bottom-24 sm:bottom-28 left-6 lg:left-12 z-20 flex items-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
        <p className="font-display text-lg sm:text-xl lg:text-2xl text-white/95 tracking-[0.15em] uppercase">
          Elevate your workplace
        </p>
        <a href="#hero-content" className="text-white/80 hover:text-white transition-colors" aria-label="Scroll down">
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      {/* Slide Indicators - Saint Haven style minimal */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-0.5 sm:h-1 transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-6 sm:w-8 bg-bronze/80'
                : 'w-1 sm:w-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - More visible */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white/90 hover:text-white transition-all duration-300 group rounded-full border border-bronze/30 hover:border-bronze/50"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white/90 hover:text-white transition-all duration-300 group rounded-full border border-bronze/30 hover:border-bronze/50"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
};

export default Slideshow;
