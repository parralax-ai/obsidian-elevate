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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {serviceCategories.map((category) => (
            <Link
              key={category.slug}
              to={`/services/${category.slug}`}
              className="group flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-between md:gap-4 bg-card rounded-sm px-6 py-5 border border-border hover:border-bronze/40 transition-all duration-300 text-center md:text-left"
            >
              <span className="font-display text-lg lg:text-xl text-foreground group-hover:text-bronze transition-colors duration-300">
                {category.title}
              </span>
              <ArrowUpRight className="w-5 h-5 text-cream-muted group-hover:text-bronze flex-shrink-0 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
