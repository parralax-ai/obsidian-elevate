import { ArrowUpRight } from 'lucide-react';
import meetingRoomImage from '@/assets/meeting-room.jpg';

const services = [
  {
    number: '01',
    title: 'Premium Workplace Cleaning',
    description: 'Comprehensive cleaning programs tailored to high-standard corporate environments. Daily, weekly, or bespoke schedules designed around your operations.',
  },
  {
    number: '02',
    title: 'Office Presentation & Readiness',
    description: 'Ensuring your spaces are impeccable for client visits, board meetings, and everyday excellence. Every surface, every detail, every time.',
  },
  {
    number: '03',
    title: 'Executive & Client-Facing Spaces',
    description: 'Specialized care for boardrooms, executive suites, and reception areas that demand an elevated standard of presentation.',
  },
  {
    number: '04',
    title: 'Specialised Detail Services',
    description: 'Deep cleaning, fabric care, window treatments, and material-specific services that preserve and protect your workplace investments.',
  },
  {
    number: '05',
    title: 'Custom Workplace Experiences',
    description: 'Curated solutions beyond cleaning - ambient enhancements, seasonal touches, and thoughtful details that elevate the employee experience.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-obsidian">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Our Services
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-cream leading-tight mb-6">
            Experiences, not line items
          </h2>
          <p className="font-body text-base text-cream-muted leading-relaxed">
            Each engagement is tailored to your organisation's unique needs, culture, 
            and expectations. We don't offer packages - we create partnerships. Learn about <a href="#approach" className="text-gold hover:text-gold-light underline">our approach</a> and <a href="#contact" className="text-gold hover:text-gold-light underline">contact us</a> to discuss your workplace needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Services List */}
          <div className="order-2 lg:order-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="group py-8 border-b border-border hover:border-gold/30 transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <span className="font-body text-xs text-gold tracking-wider">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-xl lg:text-2xl text-cream group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="font-body text-sm text-cream-muted leading-relaxed pr-8">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 mb-12 lg:mb-0 lg:pl-16">
            <div className="lg:sticky lg:top-32">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src={meetingRoomImage}
                  alt="Premium executive meeting room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 p-6 bg-charcoal rounded-sm">
                <p className="font-display text-lg text-cream italic mb-2">
                  "Every space tells a story about your organisation."
                </p>
                <p className="font-body text-xs text-cream-muted tracking-wider uppercase">
                  Obsidian Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
