const steps = [
  {
    number: '01',
    title: 'Discovery & Alignment',
    description: 'We begin with deep understanding - your culture, expectations, and what success looks like for your workplace.',
  },
  {
    number: '02',
    title: 'Tailored Partnership Design',
    description: 'No templates. We design a service framework that integrates seamlessly with your operations and standards.',
  },
  {
    number: '03',
    title: 'Consistent Excellence',
    description: 'Our dedicated teams deliver with precision. Same people, same standards, every single time.',
  },
  {
    number: '04',
    title: 'Ongoing Refinement',
    description: 'Regular reviews, open communication, and continuous improvement to evolve with your needs.',
  },
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-charcoal relative">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-gold/40 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Our Approach
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-cream leading-tight mb-6">
            Partnership, not transaction
          </h2>
          <p className="font-body text-base text-cream-muted leading-relaxed">
            We work alongside your leadership, office managers, and facilities teams 
            to create a service that feels like an extension of your own commitment 
            to excellence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border" />
              )}
              
              <div className="p-6 lg:p-8 bg-obsidian-light rounded-sm hover:bg-obsidian transition-colors duration-500 h-full">
                <span className="font-display text-5xl lg:text-6xl text-gold/20 group-hover:text-gold/30 transition-colors duration-500">
                  {step.number}
                </span>
                <h3 className="font-display text-xl text-cream mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-cream-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Values Bar */}
        <div className="mt-16 lg:mt-24 py-8 border-t border-b border-border">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {['Discretion', 'Consistency', 'Excellence', 'Partnership'].map((value, index) => (
              <span 
                key={index}
                className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
