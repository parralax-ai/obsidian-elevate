import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import WhyObsidian from '@/components/sections/WhyObsidian';
import Approach from '@/components/sections/Approach';
import Services from '@/components/sections/Services';
import Clients from '@/components/sections/Clients';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-obsidian">
      <Navigation />
      <Hero />
      <WhyObsidian />
      <Approach />
      <Services />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
