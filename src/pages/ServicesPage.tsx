import Navigation from '@/components/layout/Navigation';
import Services from '@/components/sections/Services';
import Footer from '@/components/layout/Footer';

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      <Navigation />
      <Services />
      <Footer />
    </main>
  );
};

export default ServicesPage;
