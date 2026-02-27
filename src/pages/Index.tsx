import Navigation from '@/components/layout/Navigation';
import LandingHero from '@/components/sections/LandingHero';
import Slideshow from '@/components/sections/Slideshow';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <main className="bg-background w-full overflow-x-hidden">
      <Navigation />
      <LandingHero />
      <Slideshow />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
