import { Shield, CheckCircle2 } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Technology Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted mb-6 text-center">
            Technology & Compliance
          </p>
          <p className="font-body text-base text-cream-muted leading-relaxed text-center md:text-left">
            Our service delivery is supported by real-time operations and compliance management.
          </p>
        </div>

        {/* HR, Safety & Compliance */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="w-12 h-12 rounded-sm bg-obsidian/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Shield className="w-6 h-6 text-obsidian" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                HR, Safety & Compliance
              </h3>
              <div className="space-y-4 font-body text-base text-cream-muted leading-relaxed">
                <p>
                  Obsidian Commercial partners with Peninsula, a leading Australian provider of 
                  workplace relations and health and safety compliance support.
                </p>
                <p>
                  This partnership ensures our employment practices, onboarding, WHS documentation, 
                  and workplace policies align with Fair Work obligations and current legislation. 
                  Peninsula provides proactive HR guidance, training, and real-time advice — reducing 
                  risk and supporting a safe, compliant workplace.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-sm p-8 border border-border text-center md:text-left">
              <h4 className="font-display text-lg text-foreground mb-4">Compliance Coverage</h4>
              <ul className="space-y-2 font-body text-sm text-cream-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-obsidian mt-1 flex-shrink-0" />
                  <span>Fair Work compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-obsidian mt-1 flex-shrink-0" />
                  <span>WHS documentation and policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-obsidian mt-1 flex-shrink-0" />
                  <span>Proactive HR guidance and training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-obsidian mt-1 flex-shrink-0" />
                  <span>Real-time compliance advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
