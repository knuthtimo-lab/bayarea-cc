import { ArrowRight, Clock, DollarSign, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ScrollReveal';

const CTASection = () => {
  const faqs = [
    {
      icon: Clock,
      question: "How quickly can you start?",
      answer: "Most assessments can begin within 48 hours of contact."
    },
    {
      icon: DollarSign,
      question: "How do you price services?",
      answer: "Transparent monthly pricing based on devices and services needed."
    },
    {
      icon: Phone,
      question: "What's included in support?",
      answer: "24/7 monitoring, helpdesk, proactive maintenance, and SLA guarantees."
    }
  ];

  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              Ready for <span className="text-neon text-glow">reliable IT?</span>
            </h2>
            
            <p className="text-xl text-foreground-muted mb-12 leading-relaxed">
              Join 150+ Coastal Bend businesses that trust us with their technology. 
              Get started with a free 20-minute assessment.
            </p>
          </ScrollReveal>

          {/* Primary CTAs */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/contact"
                className="btn-neon group flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Book a 20-minute assessment</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/contact"
                className="btn-ghost group flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Send a message</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Micro FAQ */}
          <ScrollReveal delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                
                return (
                  <div key={faq.question} className="text-left">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-neon/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-4 h-4 text-neon" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-foreground-muted">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={600}>
            <div className="mt-16 pt-8 border-t border-border/30">
              <p className="text-sm text-foreground-muted mb-4">
                Ready to talk? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a 
                  href="tel:+1-361-555-0123" 
                  className="text-neon hover:text-neon/80 transition-colors flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (361) 555-0123
                </a>
                <span className="hidden sm:block text-border">|</span>
                <a 
                  href="mailto:info@bayareaaffiliates.com" 
                  className="text-neon hover:text-neon/80 transition-colors"
                >
                  info@bayareaaffiliates.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;