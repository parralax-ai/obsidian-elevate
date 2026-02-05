import Navigation from '@/components/layout/Navigation';
import About from '@/components/sections/About';
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      <Navigation />
      <About />
      <Footer />
    </main>
  );
};

export default AboutPage;
