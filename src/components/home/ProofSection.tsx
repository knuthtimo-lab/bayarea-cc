import { MapPin, Star, Users } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const ProofSection = () => {
  const stats = [
    { value: '150+', label: 'Local businesses served' },
    { value: '99.9%', label: 'Network uptime achieved' },
    { value: '15+', label: 'Years in Coastal Bend' },
    { value: '<2min', label: 'Average response time' }
  ];

  const testimonial = {
    quote: "Bay Area Affiliates transformed our IT infrastructure completely. Their proactive approach means we rarely have downtime, and when issues do arise, they're resolved quickly. Our team can focus on patient care instead of tech problems.",
    author: "Sarah Martinez",
    title: "Operations Manager",
    company: "Coastal Medical Group"
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-10"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-neon/10 border border-neon/30 text-neon text-sm font-medium mb-8">
              <MapPin className="w-4 h-4 mr-2" />
              Proudly serving the Coastal Bend
            </div>
            
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
              Local expertise for{' '}
              <span className="text-neon">Corpus Christi</span>{' '}
              and surrounding communities
            </h2>
            
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              We understand the unique challenges of businesses in our region and provide 
              tailored solutions that work in the real world.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-4xl lg:text-5xl text-neon mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground-muted text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonial */}
        <ScrollReveal delay={400}>
          <div className="card-dark p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Quote */}
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-neon fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neon/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-foreground-muted text-sm">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Service area */}
        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Serving businesses throughout the Coastal Bend
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-foreground-muted">
              {[
                'Corpus Christi', 'Portland', 'Ingleside', 'Aransas Pass', 
                'Rockport', 'Fulton', 'Sinton', 'Mathis'
              ].map((city) => (
                <span key={city} className="flex items-center text-sm">
                  <MapPin className="w-3 h-3 mr-1 text-neon" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProofSection;