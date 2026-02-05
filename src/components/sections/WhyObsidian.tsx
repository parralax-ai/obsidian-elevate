import { Monitor, Shield, CheckCircle2, BarChart3, Clock, FileText, Users, AlertCircle } from 'lucide-react';

const technologyFeatures = [
  {
    icon: CheckCircle2,
    title: 'Smart Digital Checklists',
    description: 'With photos, notes, signatures, and timestamps for complete accountability.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Dashboards',
    description: 'Live performance dashboards and audit-ready reporting for full visibility.',
  },
  {
    icon: Clock,
    title: 'Time & Attendance',
    description: 'KPI reporting and workforce visibility across all sites.',
  },
  {
    icon: AlertCircle,
    title: 'Issue Tracking',
    description: 'Rapid response and resolution tracking with verified completion.',
  },
];

const Technology = () => {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Technology Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted mb-6 text-center">
            Technology & Compliance
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-foreground leading-tight mb-8 text-center">
            Technology – Lighthouse Software
          </h2>
          <div className="space-y-6 font-body text-base text-cream-muted leading-relaxed mb-12">
            <p>
              Our service delivery is supported by Lighthouse Software, a real-time operations 
              and compliance management system that provides full visibility across all sites.
            </p>
            <p>
              Through Lighthouse, we plan, deliver, and verify services with complete transparency, 
              ensuring accountability and consistency at every level.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {technologyFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-sm bg-obsidian/10 flex items-center justify-center group-hover:bg-obsidian/20 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-obsidian" />
                  </div>
                  <h3 className="font-display text-lg text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-cream-muted leading-relaxed pl-14">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-sm p-8 border border-border">
            <h3 className="font-display text-xl text-foreground mb-4">Key Capabilities</h3>
            <ul className="space-y-2 font-body text-sm text-cream-muted">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-obsidian mt-1 flex-shrink-0" />
                <span>Customised task requirements by site and zone</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-obsidian mt-1 flex-shrink-0" />
                <span>Verified task completion with digital proof</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-obsidian mt-1 flex-shrink-0" />
                <span>Real-time task updates and notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-obsidian mt-1 flex-shrink-0" />
                <span>Client access to dashboards showing completed tasks, service gaps, incident logs, and resolution timelines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* HR, Safety & Compliance */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 rounded-sm bg-obsidian/10 flex items-center justify-center mb-6">
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
            <div className="bg-background rounded-sm p-8 border border-border">
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
