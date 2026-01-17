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
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Add Web3Forms access key
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY || 'aeaccf19-3292-4d41-966e-20832794ae0e');
    
    // Optional: Add subject line
    const name = formData.get('name') as string;
    const organisation = formData.get('organisation') as string;
    if (name && organisation) {
      formData.append('subject', `New Contact Form Submission from ${name} - ${organisation}`);
    }
    
    try {
      // Send email using Web3Forms - emails go directly to erik.linsdell@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('Thank you for reaching out. We\'ll be in touch soon.');
        form.reset();
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Sorry, there was an error sending your message. Please try again or email us directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-obsidian relative">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-gold/40 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="w-full">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 sm:mb-6">
              Begin a Partnership
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-light text-cream leading-tight mb-4 sm:mb-6">
              Let's elevate your<br />
              <span className="italic text-cream-muted">workplace experience</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-cream-muted leading-relaxed mb-6 sm:mb-8 lg:mb-12 w-full">
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
          <div className="bg-charcoal rounded-sm p-6 sm:p-8 lg:p-12 w-full">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                <div className="space-y-2 w-full">
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-cream-muted block">
                    Your Name
                  </label>
                  <Input 
                    type="text" 
                    name="name"
                    required
                    className="bg-obsidian border-border text-cream placeholder:text-stone-light focus:border-gold transition-colors w-full"
                    placeholder="Full name"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-cream-muted block">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    required
                    className="bg-obsidian border-border text-cream placeholder:text-stone-light focus:border-gold transition-colors w-full"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 w-full">
                <label className="font-body text-xs tracking-[0.15em] uppercase text-cream-muted block">
                  Organisation
                </label>
                <Input 
                  type="text" 
                  name="organisation"
                  required
                  className="bg-obsidian border-border text-cream placeholder:text-stone-light focus:border-gold transition-colors w-full"
                  placeholder="Company name"
                />
              </div>
              
              <div className="space-y-2 w-full">
                <label className="font-body text-xs tracking-[0.15em] uppercase text-cream-muted block">
                  Your Message
                </label>
                <Textarea 
                  name="message"
                  required
                  rows={4}
                  className="bg-obsidian border-border text-cream placeholder:text-stone-light focus:border-gold transition-colors resize-none text-sm sm:text-base w-full"
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
