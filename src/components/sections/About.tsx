import { MapPin, Users, Target, Eye } from 'lucide-react';
import domPhoto from '@/assets/dom-photo.jpg';
import shanePhoto from '@/assets/shane-photo.jpg';
import togetherPhoto from '@/assets/together.jpg';

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

        {/* Co-Founders Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-cream-muted mb-6 text-center">
            Our Founders
          </p>
          <h3 className="font-display text-3xl lg:text-4xl font-light text-foreground mb-12 text-center">
            Co-Founders & Directors
          </h3>
          
          {/* Together Photo */}
          <div className="mb-16 max-w-2xl mx-auto">
            <div className="aspect-[4/3] w-full rounded-sm overflow-hidden bg-background">
              <img 
                src={togetherPhoto} 
                alt="Dominic Grech and Shane Ali, Co-Founders of Obsidian Commercial" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-12">
            {/* Dom */}
            <div className="bg-card rounded-sm p-8 lg:p-12 border border-border">
              <div className="aspect-[3/4] w-full max-w-xs mx-auto mb-8 rounded-sm overflow-hidden bg-background">
                <img 
                  src={domPhoto} 
                  alt="Dominic Grech, Co-Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-display text-2xl lg:text-3xl text-foreground mb-3 text-center">
                Dominic Grech
              </h4>
              <p className="font-body text-sm text-cream-muted tracking-wider uppercase text-center mb-6">
                Co-Founder & Director
              </p>
              <p className="font-body text-base text-cream-muted leading-relaxed text-center">
                Dom brings extensive experience in commercial cleaning to Obsidian Commercial. 
                His hands-on background in the industry, combined with a deep understanding of 
                operational excellence, drives our commitment to delivering exceptional service 
                standards across every site we manage.
              </p>
            </div>

            {/* Shane */}
            <div className="bg-card rounded-sm p-8 lg:p-12 border border-border">
              <div className="aspect-[3/4] w-full max-w-xs mx-auto mb-8 rounded-sm overflow-hidden bg-background">
                <img 
                  src={shanePhoto} 
                  alt="Shane Ali, Co-Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-display text-2xl lg:text-3xl text-foreground mb-3 text-center">
                Shane Ali
              </h4>
              <p className="font-body text-sm text-cream-muted tracking-wider uppercase text-center mb-6">
                Co-Founder & Director
              </p>
              <p className="font-body text-base text-cream-muted leading-relaxed text-center">
                Shane's background in legal costing brings a unique perspective to Obsidian Commercial. 
                With a vision to bring people back into the office, he understands that exceptional 
                workplace experiences are fundamental to attracting and retaining talent. His dedication 
                to creating spaces that inspire and engage drives our mission forward.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-body text-base text-cream-muted leading-relaxed max-w-3xl mx-auto">
              Together, Dom and Shane are dedicated to transforming how organisations think about 
              their workplace environments. Their combined expertise and shared commitment to excellence 
              form the foundation of Obsidian Commercial's approach to commercial cleaning and 
              facilities management.
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
