import { Building2, Briefcase, GraduationCap, ShoppingBag, Factory, Landmark, Heart, Trophy } from 'lucide-react';

const industries = [
  {
    icon: Heart,
    title: 'Healthcare and aged care',
  },
  {
    icon: GraduationCap,
    title: 'Education and training facilities',
  },
  {
    icon: ShoppingBag,
    title: 'Retail and shopping centres',
  },
  {
    icon: Factory,
    title: 'Industrial facilities and warehousing',
  },
  {
    icon: Landmark,
    title: 'Government and public sector',
  },
  {
    icon: Building2,
    title: 'Corporate offices and commercial buildings',
  },
];

const clients = [
  'Western Melbourne Group (Western United Stadium)',
  'Lactalis Group',
  'Tritech Refrigeration',
  'Giorgio Dental Laboratory',
  'Melbourne Hand Rehab',
  'Norman Carriers',
  'Wellcom Worldwide',
];

const Clients = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Industries We Serve */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted mb-6">
              Industries We Serve
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-foreground leading-tight mb-6">
              Supporting clients across diverse industries
            </h2>
            <p className="font-body text-base text-cream-muted leading-relaxed">
              We proudly support clients across a diverse range of industries, delivering 
              tailored solutions that meet the unique needs of each sector.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group p-8 bg-background rounded-sm border border-border hover:border-obsidian/30 transition-all duration-500 hover-lift"
              >
                <div className="w-12 h-12 rounded-sm bg-obsidian/10 flex items-center justify-center mb-6 group-hover:bg-obsidian/20 transition-colors duration-300">
                  <industry.icon className="w-6 h-6 text-obsidian" />
                </div>
                <h3 className="font-display text-xl text-foreground">
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Our Experience */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted mb-6">
              Our Experience
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-foreground leading-tight mb-6">
              Trusted by leading organisations
            </h2>
            <p className="font-body text-base text-cream-muted leading-relaxed">
              We have successfully delivered and continue to manage contracts for organisations 
              across professional services, medical and allied health, fitness, manufacturing, 
              entertainment, retail, beauty, childcare, and education.
            </p>
          </div>

          {/* Clients List */}
          <div className="grid md:grid-cols-2 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="p-6 bg-background rounded-sm border border-border hover:border-obsidian/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-obsidian flex-shrink-0" />
                  <p className="font-body text-base text-foreground">
                    {client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Responsibility */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
          <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-8">
            Community & Responsibility
          </h3>
          <div className="space-y-6 font-body text-base text-cream-muted leading-relaxed">
            <p>
              At Obsidian Commercial, we believe our responsibility extends beyond the spaces we clean. 
              We proudly support charitable organisations, community groups, and grassroots initiatives 
              focused on health, youth development, and social inclusion.
            </p>
            <p>
              We are proud supporters of the Essendon Royals and the Western United men's and women's 
              teams, recognising the role of sport in building confidence, connection, and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
