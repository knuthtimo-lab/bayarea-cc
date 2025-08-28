import { Shield, Zap, Users } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const ValuePillars = () => {
  const pillars = [
    {
      icon: Users,
      number: '01',
      title: 'End-to-end Managed IT',
      description: 'Comprehensive computer & networking solutions tailored to your workflows — helpdesk, proactive maintenance, and clear SLAs.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format'
    },
    {
      icon: Zap,
      number: '02',
      title: 'Faster Devices, Happier Teams',
      description: 'Practical upgrades like SSD migrations and cleanup reduce tickets and boost morale.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format'
    },
    {
      icon: Shield,
      number: '03',
      title: 'Secure Remote Access',
      description: 'Zero-drama VPN with modern protocols (e.g., WireGuard) for secure, high-speed access anywhere.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop&auto=format'
    },
  ];

  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
              Why teams choose us for{' '}
              <span className="text-neon">reliable IT</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              We handle the complexity so you can focus on what you do best.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isReverse = index % 2 === 1;
            
            return (
              <ScrollReveal key={pillar.number} delay={index * 200}>
                <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-6xl font-heading font-bold text-neon/30">
                        {pillar.number}
                      </span>
                      <div className="w-12 h-12 bg-neon/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-neon" />
                      </div>
                    </div>
                    
                    <h3 className="font-heading font-bold text-3xl text-foreground">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-lg text-foreground-muted leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    <button className="btn-ghost">
                      Learn more
                    </button>
                  </div>

                  {/* Image */}
                  <div className="flex-1 parallax">
                    <div className="card-dark p-2 group hover:shadow-neon transition-all duration-500">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-64 lg:h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;