import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-office.jpg';
import meetingRoomImage from '@/assets/meeting-room.jpg';
import detailImage from '@/assets/detail-surfaces.jpg';

const slides = [
  {
    image: heroImage,
    alt: 'Premium executive office interior',
  },
  {
    image: meetingRoomImage,
    alt: 'Professional meeting room',
  },
  {
    image: detailImage,
    alt: 'Immaculate office surfaces',
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds for smoother experience

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              transition: 'opacity 2s ease-in-out, transform 2s ease-in-out',
            }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/15 to-background/40" />
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
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
        onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
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
        onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
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
