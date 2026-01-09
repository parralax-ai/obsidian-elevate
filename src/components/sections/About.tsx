import { MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-obsidian-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Brand Story */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
              About Obsidian
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-cream leading-tight mb-8">
              Built on the belief that<br />
              <span className="italic text-cream-muted">workplaces matter</span>
            </h2>
            
            <div className="space-y-6 font-body text-base text-cream-muted leading-relaxed">
              <p>
                Obsidian was founded with a singular vision: to transform how 
                organisations think about their workplace environments. We believe 
                that the spaces where people work should inspire, not merely function.
              </p>
              <p>
                In an era where attracting talent back to the office is a genuine 
                challenge, the quality of the workplace experience has never mattered 
                more. Obsidian exists to help forward-thinking organisations meet 
                this moment.
              </p>
              <p>
                We are not a cleaning company in the traditional sense. We are a 
                workplace experience partner—integrating precision service with 
                thoughtful touches that make employees want to be in the office.
              </p>
            </div>

            {/* Philosophy Points */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { label: 'Precision', value: 'In every detail' },
                { label: 'Consistency', value: 'Every single day' },
                { label: 'Discretion', value: 'Seamless presence' },
                { label: 'Partnership', value: 'Long-term alignment' },
              ].map((item, index) => (
                <div key={index} className="py-4 border-t border-border">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-1">
                    {item.label}
                  </p>
                  <p className="font-display text-lg text-cream">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Section */}
          <div className="lg:pl-8">
            <div className="bg-charcoal rounded-sm p-8 lg:p-12">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8">
                Leadership
              </p>
              
              {/* Founder Info */}
              <div className="mb-8">
                <h3 className="font-display text-2xl lg:text-3xl text-cream mb-2">
                  Shane Ali
                </h3>
                <p className="font-body text-sm text-cream-muted tracking-wider uppercase">
                  Founder
                </p>
              </div>

              <div className="space-y-4 font-body text-base text-cream-muted leading-relaxed mb-8">
                <p>
                  Shane founded Obsidian with a clear conviction: that Melbourne's 
                  most discerning organisations deserve a workplace partner that 
                  matches their own standards of excellence.
                </p>
                <p>
                  With deep experience in premium service delivery and a commitment 
                  to building genuine partnerships, Shane leads Obsidian with a 
                  hands-on approach that ensures every client relationship reflects 
                  the company's founding principles.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-gold pl-6 my-8">
                <p className="font-display text-lg italic text-cream leading-relaxed">
                  "Excellence isn't a service level—it's a standard we maintain 
                  every single day, in every single space."
                </p>
              </blockquote>

              {/* Location */}
              <div className="flex items-center gap-3 pt-8 border-t border-border">
                <MapPin className="w-4 h-4 text-gold" />
                <p className="font-body text-sm text-cream-muted">
                  Melbourne, Victoria, Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
