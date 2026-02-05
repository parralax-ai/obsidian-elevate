import { useState, useEffect } from 'react';

// High-resolution 4K corporate office images
// Using Unsplash direct links with 4K resolution (3840px width) and high quality
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=3840&q=95&auto=format&fit=crop',
    alt: 'Modern corporate office reception with warm wood tones, gold accents, and contemporary design',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=3840&q=95&auto=format&fit=crop',
    alt: 'Spacious open-plan office workspace with natural light and modern furniture',
  },
  {
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=3840&q=95&auto=format&fit=crop',
    alt: 'Professional executive office with modern furniture and clean minimalist design',
  },
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=3840&q=95&auto=format&fit=crop',
    alt: 'Contemporary office space with glass partitions, collaborative areas, and natural lighting',
  },
  {
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=3840&q=95&auto=format&fit=crop',
    alt: 'Elegant corporate workspace with premium finishes and sophisticated design',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=3840&q=95&auto=format&fit=crop',
    alt: 'Industrial-chic office space with high ceilings and modern collaborative work areas',
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" style={{ position: 'relative' }}>
      {/* Slides Container with smooth horizontal sliding effect */}
      <div className="relative h-full w-full" style={{ overflow: 'hidden' }}>
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-full"
              style={{
                width: `${100 / slides.length}%`,
                flexShrink: 0,
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
              <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/15 to-background/40" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs text-foreground/70 uppercase tracking-wider">Scroll</span>
          <svg
            className="w-6 h-6 text-foreground/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === currentIndex
                ? 'w-12 bg-obsidian'
                : 'w-1.5 bg-obsidian/30 hover:bg-obsidian/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center bg-background/30 backdrop-blur-md hover:bg-background/40 transition-all duration-300 rounded-full border border-obsidian/10 hover:border-obsidian/20 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-7 h-7 text-foreground group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center bg-background/30 backdrop-blur-md hover:bg-background/40 transition-all duration-300 rounded-full border border-obsidian/10 hover:border-obsidian/20 group"
        aria-label="Next slide"
      >
        <svg
          className="w-7 h-7 text-foreground group-hover:scale-110 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default Slideshow;
