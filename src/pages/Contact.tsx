import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, DollarSign, Headphones } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const faqs = [
    {
      icon: Clock,
      question: "How quickly can you start?",
      answer: "Most assessments can begin within 48 hours of contact. Emergency support is available 24/7."
    },
    {
      icon: DollarSign,
      question: "How do you price services?",
      answer: "Transparent monthly pricing based on devices and services needed. No hidden fees or surprise charges."
    },
    {
      icon: Headphones,
      question: "What's included in support?",
      answer: "24/7 monitoring, helpdesk, proactive maintenance, security updates, and SLA guarantees."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-16 bg-background relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-10"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl">
                <h1 className="font-heading font-bold text-5xl sm:text-6xl text-foreground mb-6">
                  Let's talk about your{' '}
                  <span className="text-neon">IT needs</span>
                </h1>
                <p className="text-xl text-foreground-muted leading-relaxed">
                  Ready to improve your technology? We're here to help. Get started with 
                  a free consultation and see how we can make your IT work better for you.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact form and info */}
        <section className="py-24 bg-background-deep">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact form */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <div className="card-dark p-8 lg:p-12">
                    <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
                      Send us a message
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-input border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent text-foreground"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-input border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent text-foreground"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-input border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent text-foreground"
                            placeholder="Your company name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-input border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent text-foreground"
                            placeholder="(361) 555-0123"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-input border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent text-foreground resize-none"
                          placeholder="Tell us about your IT needs or challenges..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-neon disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send message'}
                      </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="text-sm text-foreground-muted text-center">
                        By submitting this form, you agree to receive communications from Bay Area Affiliates. 
                        We'll never share your information with third parties.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact info and FAQ */}
              <div className="space-y-8">
                <ScrollReveal delay={200}>
                  <div className="card-dark p-6">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                      Get in touch
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-neon mt-1" />
                        <div>
                          <div className="text-foreground font-medium">Call us</div>
                          <a href="tel:+1-361-555-0123" className="text-foreground-muted hover:text-neon transition-colors">
                            (361) 555-0123
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-neon mt-1" />
                        <div>
                          <div className="text-foreground font-medium">Email us</div>
                          <a href="mailto:info@bayareaaffiliates.com" className="text-foreground-muted hover:text-neon transition-colors">
                            info@bayareaaffiliates.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-neon mt-1" />
                        <div>
                          <div className="text-foreground font-medium">Service area</div>
                          <div className="text-foreground-muted">
                            Corpus Christi & the Coastal Bend
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="text-center">
                        <div className="text-sm text-foreground-muted mb-2">
                          Business hours
                        </div>
                        <div className="text-foreground text-sm">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Emergency support: 24/7
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="card-dark p-6">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                      Quick answers
                    </h3>
                    
                    <div className="space-y-6">
                      {faqs.map((faq) => {
                        const Icon = faq.icon;
                        
                        return (
                          <div key={faq.question} className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-neon/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Icon className="w-4 h-4 text-neon" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground mb-1 text-sm">
                                {faq.question}
                              </h4>
                              <p className="text-foreground-muted text-sm">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                  What happens next?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-neon font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">We respond quickly</h3>
                    <p className="text-sm text-foreground-muted">Get a response within 24 hours, usually much faster.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-neon font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Free consultation</h3>
                    <p className="text-sm text-foreground-muted">20-minute call to understand your needs and challenges.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-neon font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Custom proposal</h3>
                    <p className="text-sm text-foreground-muted">Tailored solution with clear next steps and pricing.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;