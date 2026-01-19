import { Shield, Eye, Sparkles, Users } from 'lucide-react';
import detailImage from '@/assets/detail-surfaces.jpg';

const features = [
  {
    icon: Eye,
    title: 'Precision in Every Detail',
    description: 'We obsess over the details others overlook - from perfectly aligned chairs to immaculate surfaces that reflect your standards.',
  },
  {
    icon: Shield,
    title: 'Discreet Professionalism',
    description: 'Our teams work seamlessly within your environment, maintaining confidentiality and minimal disruption to your operations.',
  },
  {
    icon: Sparkles,
    title: 'Experience, Not Just Service',
    description: 'Beyond cleaning, we curate workplace moments - from ambient touches to seasonal details that elevate the everyday.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description: 'We align with your leadership, HR, and facilities teams to ensure our service reflects your company culture and values.',
  },
];

const WhyObsidian = () => {
  return (
    <section className="py-24 lg:py-32 bg-obsidian-light relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian-light to-charcoal opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Why Obsidian
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-cream leading-tight mb-8">
              A different standard<br />
              <span className="italic text-cream-muted">of workplace care</span>
            </h2>
            <p className="font-body text-base text-cream-muted leading-relaxed mb-12 max-w-xl">
              We understand that your workplace is more than a building - it's where 
              culture lives, deals are made, and talent is nurtured. Obsidian exists 
              to ensure that environment always reflects your highest standards. Discover our <a href="#approach" className="text-gold hover:text-gold-light underline">workplace cleaning approach</a> and explore our <a href="#services" className="text-gold hover:text-gold-light underline">premium cleaning services</a>.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <feature.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-display text-lg text-cream">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-cream-muted leading-relaxed pl-14">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src={detailImage}
                alt="Premium office detail - black marble with gold accents"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-gold/20 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyObsidian;
