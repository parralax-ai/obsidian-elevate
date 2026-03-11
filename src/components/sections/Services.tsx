import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { serviceCategories } from '@/data/services';

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto mb-16 lg:mb-20 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted">
            Services
          </p>
        </div>

        {/* Mobile / tablet: original minimal tappable cards linking to subpages */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto lg:hidden">
          {serviceCategories.map((category) => (
            <Link
              key={category.slug}
              to={`/services/${category.slug}`}
              className="group flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-between md:gap-4 bg-card rounded-sm px-6 py-5 border border-border hover:border-bronze/40 transition-all duration-300 text-center md:text-left"
            >
              <span className="font-display text-lg text-foreground group-hover:text-bronze transition-colors duration-300">
                {category.title}
              </span>
              <ArrowUpRight className="w-5 h-5 text-cream-muted group-hover:text-bronze flex-shrink-0 transition-colors duration-300" />
            </Link>
          ))}
        </div>

        {/* Laptop and up: standalone descriptive cards (no navigation) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-10 max-w-5xl lg:max-w-7xl mx-auto">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            const bullets = category.services.slice(0, 5);
            return (
              <div
                key={category.slug}
                className="group flex flex-col bg-card rounded-sm px-6 py-5 lg:px-10 lg:py-9 border border-border hover:border-bronze/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 lg:mb-4">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-sm bg-background/80 border border-border flex items-center justify-center text-bronze group-hover:border-bronze/40 transition-colors duration-300">
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <h3 className="font-display text-lg lg:text-2xl text-foreground group-hover:text-bronze transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                {category.shortDesc && (
                  <p className="font-body text-sm text-cream-muted mb-3 lg:mb-4">
                    {category.shortDesc}
                  </p>
                )}
                <ul className="list-none space-y-1.5 lg:space-y-2">
                  {bullets.map((item, i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-foreground/90 flex items-start gap-2"
                    >
                      <span className="text-bronze mt-1.5 w-1 h-1 rounded-full bg-bronze flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
