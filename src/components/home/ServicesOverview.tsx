import { Monitor, Wifi, Cloud, Shield, Database, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ScrollReveal';

const ServicesOverview = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Hardware & Desktop Support',
      description: 'Fast devices and responsive support that keeps your team productive.',
      features: ['SSD upgrades', 'Hardware procurement', '24/7 helpdesk']
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure',
      description: 'Reliable switching and Wi-Fi that scales with your business growth.',
      features: ['Enterprise Wi-Fi', 'Network design', 'Performance monitoring']
    },
    {
      icon: Cloud,
      title: 'Virtualization & Cloud',
      description: 'Modern infrastructure that reduces costs and improves flexibility.',
      features: ['Cloud migration', 'Hybrid solutions', 'Resource optimization']
    },
    {
      icon: Shield,
      title: 'Secure Remote Access',
      description: 'Zero-drama VPN with modern protocols for secure anywhere access.',
      features: ['WireGuard VPN', 'Multi-factor auth', 'Secure endpoints']
    },
    {
      icon: Database,
      title: 'Backup & Business Continuity',
      description: 'Comprehensive protection against data loss and downtime.',
      features: ['Automated backups', 'Disaster recovery', 'Business continuity']
    },
    {
      icon: Settings,
      title: 'Microsoft 365 Enablement',
      description: 'Full utilization of your M365 investment with expert guidance.',
      features: ['Migration services', 'Training & adoption', 'Security configuration']
    }
  ];

  return (
    <section className="py-24 bg-background-deep relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-20"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
              Complete IT solutions for{' '}
              <span className="text-neon">modern businesses</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              From desktop support to enterprise infrastructure — we've got your technology covered.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="card-dark p-8 group hover:shadow-neon transition-all duration-500 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-neon/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon/30 transition-colors">
                    <Icon className="w-6 h-6 text-neon" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-foreground-muted">
                        <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/services"
                    className="inline-flex items-center text-neon font-medium hover:text-neon/80 transition-colors group-hover:underline"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="btn-ghost text-lg px-12 py-4"
            >
              View all services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesOverview;