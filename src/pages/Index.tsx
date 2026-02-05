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
      
      {/* Obsidian Rock Decorative Element */}
      <div className="relative py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-center items-center">
            <div className="relative group">
              {/* Placeholder for obsidian rock - Add your obsidian rock image to /public/obsidian-rock.png or /src/assets/obsidian-rock.png */}
              <div className="w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-obsidian/30 via-obsidian/20 to-obsidian/10 flex items-center justify-center border-2 border-obsidian/20 group-hover:border-obsidian/40 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-gradient-to-br from-obsidian/50 to-obsidian/30" />
              </div>
              {/* To use an actual obsidian rock image, replace the above divs with: */}
              {/* <img 
                src="/obsidian-rock.png" 
                alt="Obsidian rock" 
                className="w-40 h-40 lg:w-56 lg:h-56 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <Hero />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
