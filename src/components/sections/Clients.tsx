import { Building2, Briefcase, Scale, Code, Landmark } from 'lucide-react';

const clientTypes = [
  {
    icon: Landmark,
    title: 'Corporate Headquarters',
    description: 'Enterprise organisations requiring consistent, high-standard workplace environments.',
  },
  {
    icon: Scale,
    title: 'Professional Services',
    description: 'Law firms, consulting firms, and advisory practices where presentation matters.',
  },
  {
    icon: Briefcase,
    title: 'Financial Services',
    description: 'Investment firms, banks, and financial institutions with exacting standards.',
  },
  {
    icon: Code,
    title: 'Technology Companies',
    description: 'Growing tech companies creating compelling spaces for hybrid workforces.',
  },
  {
    icon: Building2,
    title: 'Premium Commercial',
    description: 'High-end commercial environments that demand an elevated level of care.',
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 lg:py-32 bg-obsidian relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16 lg:mb-20">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Who We Work With
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-cream leading-tight">
              Selective partnerships<br />
              <span className="italic text-cream-muted">with aligned organisations</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-body text-base text-cream-muted leading-relaxed">
              We partner with organisations that share our commitment to excellence. 
              Our selective approach ensures we can deliver the consistent, personalised 
              service that every client deserves.
            </p>
          </div>
        </div>

        {/* Client Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <div 
              key={index}
              className="group p-8 bg-charcoal/50 rounded-sm border border-border hover:border-gold/30 transition-all duration-500 hover-lift"
            >
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <client.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl text-cream mb-3">
                {client.title}
              </h3>
              <p className="font-body text-sm text-cream-muted leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="group p-8 bg-gold/10 rounded-sm border border-gold/30 hover:bg-gold/15 transition-all duration-500">
            <h3 className="font-display text-xl text-gold mb-3">
              Is Obsidian right for you?
            </h3>
            <p className="font-body text-sm text-cream-muted leading-relaxed mb-6">
              If your organisation values excellence and you're looking for a true 
              workplace partner, we'd love to hear from you.
            </p>
            <a 
              href="#contact" 
              className="font-body text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors duration-300"
            >
              Start a Conversation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
