const steps = [
  {
    number: '01',
    title: 'Plan',
    description: 'We begin with a detailed understanding of client needs, site risks, compliance obligations, and operational goals.',
  },
  {
    number: '02',
    title: 'Perform',
    description: 'Services are delivered with trained staff, efficient workflows, and environmentally responsible products.',
  },
  {
    number: '03',
    title: 'Monitor',
    description: 'We use Lighthouse Software to maintain real-time visibility across performance, compliance, and service delivery.',
  },
  {
    number: '04',
    title: 'Improve',
    description: 'Data, audits, and client feedback drive continuous improvement and service refinement.',
  },
];

const pillars = ['Connect', 'Sustain', 'Adapt', 'Optimise', 'Shine'];

const Approach = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-background relative">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-obsidian/40 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted mb-6">
            Integrated Management Plan
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-foreground leading-tight mb-6">
            Plan-Do-Check-Act Methodology
          </h2>
          <p className="font-body text-base text-cream-muted leading-relaxed">
            Our service delivery is guided by an Integrated Management Plan based on the globally 
            recognised Plan-Do-Check-Act (PDCA) methodology, translated into four practical stages: 
            Plan, Perform, Monitor, and Improve.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border" />
              )}
              
              <div className="p-6 lg:p-8 bg-card rounded-sm border border-border hover:border-obsidian/30 transition-colors duration-500 h-full">
                <span className="font-display text-5xl lg:text-6xl text-obsidian/20 group-hover:text-obsidian/30 transition-colors duration-500">
                  {step.number}
                </span>
                <h3 className="font-display text-xl text-foreground mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-cream-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Pillars */}
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted mb-6 text-center">
            Five Operational Pillars
          </p>
          <div className="py-8 border-t border-b border-border">
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {pillars.map((pillar, index) => (
                <span 
                  key={index}
                  className="font-body text-xs tracking-[0.3em] uppercase text-foreground"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
