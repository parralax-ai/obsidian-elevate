const LandingStats = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="font-display text-4xl lg:text-5xl text-foreground mb-2">15+</div>
            <p className="font-body text-sm text-cream-muted">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl lg:text-5xl text-foreground mb-2">30+</div>
            <p className="font-body text-sm text-cream-muted">Employees</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl lg:text-5xl text-foreground mb-2">4,500+</div>
            <p className="font-body text-sm text-cream-muted">Site Visits/Year</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl lg:text-5xl text-foreground mb-2">95+</div>
            <p className="font-body text-sm text-cream-muted">Active Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingStats;
