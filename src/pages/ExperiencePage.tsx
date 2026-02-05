import Navigation from '@/components/layout/Navigation';
import Clients from '@/components/sections/Clients';
import Footer from '@/components/layout/Footer';

const ExperiencePage = () => {
  return (
    <main className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      <Navigation />
      <Clients />
      <Footer />
    </main>
  );
};

export default ExperiencePage;
