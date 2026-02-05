import { MapPin, Users, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Who We Are */}
        <div className="max-w-4xl mx-auto mb-24">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted mb-6 text-center">
            Who We Are
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-foreground leading-tight mb-8 text-center">
            Australian-Owned Commercial Cleaning & Facilities Management
          </h2>
          
          <div className="space-y-6 font-body text-base text-cream-muted leading-relaxed">
            <p>
              Obsidian Commercial specialises in commercial cleaning and integrated facilities 
              management, supporting clients across a wide range of industries. Proudly 
              Australian-owned, we bring hands-on experience, flexibility, and a genuine 
              commitment to quality across every site we manage.
            </p>
            <p>
              Our teams deliver daily cleaning, hygiene services, waste management, specialist 
              cleaning, project-based works, and workplace experience enhancements. Every 
              service is designed around consistency, accountability, and care; ensuring spaces 
              are safe, functional, and professionally presented.
            </p>
            <p>
              We operate across metropolitan and regional Australia, supported by a strong 
              operational structure, experienced leadership, and a culture of continuous improvement.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <div className="bg-card rounded-sm p-8 lg:p-12 border border-border">
            <div className="w-12 h-12 rounded-sm bg-obsidian/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-obsidian" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
              Our Mission
            </h3>
            <p className="font-body text-base text-cream-muted leading-relaxed">
              To deliver premium, people-focused facility and wellness solutions that go beyond 
              cleaning; building safe, inspiring, and sustainable spaces that strengthen 
              partnerships and help communities thrive.
            </p>
          </div>

          <div className="bg-card rounded-sm p-8 lg:p-12 border border-border">
            <div className="w-12 h-12 rounded-sm bg-obsidian/10 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-obsidian" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
              Our Vision
            </h3>
            <p className="font-body text-base text-cream-muted leading-relaxed">
              To redefine facilities management by integrating cleaning, care, and wellbeing; 
              becoming the trusted partner for organisations seeking high-performing workplaces 
              where people connect and thrive.
            </p>
          </div>
        </div>

        {/* Leadership & Culture */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-8 text-center">
            Leadership & Culture
          </h3>
          <div className="space-y-6 font-body text-base text-cream-muted leading-relaxed mb-12">
            <p>
              Obsidian Commercial is led by founders and directors Dominic Grech and Shane Ali, 
              supported by an experienced operational team.
            </p>
            <p>
              With over 15 years of industry experience, 30+ engaged employees, more than 4,500 
              site visits annually, and 95+ active clients, our leadership team brings a practical, 
              hands-on approach to service delivery.
            </p>
            <p>
              Our flat operational structure enables responsiveness, transparency, and accountability, 
              ensuring every client relationship is supported with clarity and care.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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

        {/* What Sets Us Apart */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-8 text-center">
            What Sets Us Apart
          </h3>
          <div className="space-y-6 font-body text-base text-cream-muted leading-relaxed">
            <p>
              In a competitive cleaning and facilities industry, Obsidian Commercial stands apart 
              through a combination of personalised service, technology-led delivery, and a 
              people-first mindset.
            </p>
            <p>
              Unlike traditional contractors focused solely on volume and routine tasks, we operate 
              as a strategic facilities partner; responsive, digitally enabled, and experience-driven. 
              Our services are designed to reduce friction within the workplace, creating order, 
              consistency, and confidence for the people who use the space every day.
            </p>
            <p>
              By combining strong service values with modern systems and transparency, we deliver 
              smarter, safer, and more reliable outcomes across every site we manage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
