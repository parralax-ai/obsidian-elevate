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
    }, 10000); // Slower auto-advance - 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden pt-20 lg:pt-24" 
      style={{ 
        zIndex: 1, 
        minHeight: 'calc(100vh - 5rem)',
        height: 'calc(100vh - 5rem)',
      }}
    >
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
          </div>
        ))}
      </div>

      {/* Slide Indicators - Saint Haven style minimal */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-0.5 sm:h-1 transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-6 sm:w-8 bg-foreground/60'
                : 'w-1 sm:w-1.5 bg-foreground/20 hover:bg-foreground/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Saint Haven style minimal */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-foreground/40 hover:text-foreground/60 transition-colors duration-300 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
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
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-foreground/40 hover:text-foreground/60 transition-colors duration-300 group"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
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
