import { ArrowUpRight, Sparkles, Building2, Wrench, TreePine, Gem, Heart, Car } from 'lucide-react';

const serviceCategories = [
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    description: 'We provide professional commercial cleaning services for office buildings, corporate headquarters, shared workspaces, and multi-site operations.',
    services: [
      'Daily or scheduled cleaning',
      'High-touch surface disinfection',
      'Kitchen, bathroom, and common area cleaning',
      'Waste and recycling management',
      'Specialist floor and carpet care',
      'Meeting room refresh services',
      'Post-event and function cleaning',
    ],
  },
  {
    icon: Wrench,
    title: 'Industrial & Specialist Cleaning',
    description: 'We deliver reliable and compliant cleaning solutions across industrial, logistics, and warehouse environments.',
    services: [
      'Warehouse and distribution centre cleaning',
      'Hardstand, loading dock, and car park cleaning',
      'High-pressure washing',
      'Equipment degreasing',
      'Scheduled deep cleans',
      'Fleet wash bay management',
      'GMP pharmaceutical and cleanroom facilities',
      'Laboratories and X-ray rooms',
      'Server rooms and data centres',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Projects',
    description: 'Our project-based services support clients through transitions, upgrades, and refurbishments.',
    services: [
      'Office fit-outs',
      'Retail and hospitality make-goods',
      'Refurbishments and extensions',
      'Change-of-use projects',
      'Commercial accommodation upgrades',
      'Aged care and healthcare fit-outs',
    ],
  },
  {
    icon: TreePine,
    title: 'Grounds & External Services',
    description: 'We support the presentation and safety of external environments through comprehensive grounds and building services.',
    services: [
      'Landscaping and garden maintenance',
      'Pest control',
      'Roof and gutter cleaning',
      'Pressure and soft washing',
      'External rectification works',
      'Line marking',
      'Building signage installation and make-good',
    ],
  },
  {
    icon: Gem,
    title: 'Luxury & Premium Spaces',
    description: 'Luxury environments require a higher standard of care. We specialise in discreet, white-glove cleaning for high-end workplaces.',
    services: [
      'High-shine surface and glass detailing',
      'Designer fixture and furnishing care',
      'Aromatic scenting and ambient presentation',
      'Boardroom and bathroom refresh services',
    ],
  },
  {
    icon: Heart,
    title: 'Workplace Experience & Wellness',
    description: 'We believe wellbeing is a foundation of workplace performance. Our integrated experience and wellness services help create environments that feel inviting, balanced, and energising.',
    services: [
      'Workplace scenting and air quality services',
      'Indoor plant care and floral styling',
      'Towel services and locker room presentation',
      'Onsite grooming and beauty activations',
      'Seasonal wellness activations (flu shots, hydration stations)',
      'In-house yoga, mat pilates, breathwork, and meditation',
    ],
  },
  {
    icon: Car,
    title: 'Car & Fleet Services',
    description: 'We bring convenience directly to your people with on-site vehicle care solutions.',
    services: [
      'Onsite car washing for staff and executives',
      'Fleet cleaning and detailing',
      'Mobile detailing for VIP or showroom vehicles',
      'Eco-friendly water-saving options',
      'Scheduled or on-demand services',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 lg:mb-24 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted mb-6">
            Services Overview
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-foreground leading-tight mb-6">
            We do more than clean — we help curate the workplace experience
          </h2>
          <p className="font-body text-base text-cream-muted leading-relaxed">
            Our services are tailored to each client's environment, people, and objectives, 
            with flexibility, discretion, and quality at the core of everything we do.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-card rounded-sm p-8 border border-border hover:border-obsidian/30 transition-all duration-500 hover-lift"
            >
              <div className="w-12 h-12 rounded-sm bg-obsidian/10 flex items-center justify-center mb-6 group-hover:bg-obsidian/20 transition-colors duration-300">
                <category.icon className="w-6 h-6 text-obsidian" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl text-foreground mb-4 group-hover:text-obsidian transition-colors duration-300">
                {category.title}
              </h3>
              <p className="font-body text-sm text-cream-muted leading-relaxed mb-6">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 text-obsidian/60 mt-1 flex-shrink-0" />
                    <span className="font-body text-xs text-cream-muted leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
