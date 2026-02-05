import Navigation from '@/components/layout/Navigation';
import Slideshow from '@/components/sections/Slideshow';
import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      <Navigation />
      <Slideshow />
      <Hero />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
