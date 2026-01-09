import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you for reaching out. We\'ll be in touch soon.');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-obsidian relative">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-gold/40 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Begin a Partnership
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-light text-cream leading-tight mb-6">
              Let's elevate your<br />
              <span className="italic text-cream-muted">workplace experience</span>
            </h2>
            <p className="font-body text-base text-cream-muted leading-relaxed mb-12 max-w-lg">
              We approach every inquiry as the beginning of a potential partnership. 
              Tell us about your organisation and your workplace vision—we'd love to 
              explore how Obsidian might serve you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-cream">Melbourne, Victoria</p>
                  <p className="font-body text-xs text-cream-muted">Australia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-cream">hello@obsidian.com.au</p>
                  <p className="font-body text-xs text-cream-muted">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal rounded-sm p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-cream-muted">
                    Your Name
                  </label>
                  <Input 
                    type="text" 
                    required
                    className="bg-obsidian border-border text-cream placeholder:text-stone-light focus:border-gold transition-colors"
                    placeholder="Full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-cream-muted">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    required
                    className="bg-obsidian border-border text-cream placeholder:text-stone-light focus:border-gold transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-body text-xs tracking-[0.15em] uppercase text-cream-muted">
                  Organisation
                </label>
                <Input 
                  type="text" 
                  required
                  className="bg-obsidian border-border text-cream placeholder:text-stone-light focus:border-gold transition-colors"
                  placeholder="Company name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-body text-xs tracking-[0.15em] uppercase text-cream-muted">
                  Your Message
                </label>
                <Textarea 
                  required
                  rows={5}
                  className="bg-obsidian border-border text-cream placeholder:text-stone-light focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your workplace and what you're looking for..."
                />
              </div>

              <Button 
                type="submit" 
                variant="luxury" 
                size="xl" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Start the Conversation'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="font-body text-xs text-center text-cream-muted">
                All inquiries are treated with complete confidentiality.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
