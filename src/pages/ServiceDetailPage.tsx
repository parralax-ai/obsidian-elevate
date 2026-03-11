import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { serviceCategories } from '@/data/services';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <main className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
        <Navigation />
        <div className="pt-32 pb-20 container mx-auto px-6 text-center">
          <h1 className="font-display text-2xl text-foreground mb-4">Service not found</h1>
          <Link to="/services" className="font-body text-cream-muted hover:text-foreground underline">
            Back to Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = category.icon;

  return (
    <main className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      <Navigation />
      <div className="pt-28 lg:pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center md:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-cream-muted hover:text-foreground mb-12 transition-colors"
            >
              Services
            </Link>
            <div className="w-12 h-12 rounded-sm bg-bronze/10 flex items-center justify-center mb-8">
              <Icon className="w-6 h-6 text-bronze" />
            </div>
          </div>
          <h1 className="font-display text-3xl lg:text-4xl font-light text-foreground mb-6">
            {category.title}
          </h1>
          <p className="font-body text-base text-cream-muted leading-relaxed mb-12">
            {category.description}
          </p>
          <ul className="space-y-3 text-left list-none pl-0">
            {category.services.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-bronze mt-0.5 flex-shrink-0" />
                <span className="font-body text-cream-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-16 pt-8 border-t border-border flex justify-center md:justify-start">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 font-body text-sm tracking-[0.15em] uppercase text-foreground hover:text-bronze transition-colors"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ServiceDetailPage;
