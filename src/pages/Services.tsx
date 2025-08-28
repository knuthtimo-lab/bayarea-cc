import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Monitor, Wifi, Cloud, Shield, Database, Settings, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useEffect, useRef } from 'react';

const Services = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        imageRef.current.style.transform = `translateY(${parallax}px) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Monitor,
      title: 'Hardware & Desktop Support',
      description: 'Keep your team productive with fast, reliable devices and responsive support when you need it most.',
      problem: 'Slow computers and frequent technical issues drain productivity and frustrate employees.',
      solution: 'We provide comprehensive hardware management, from procurement to maintenance, ensuring your team has the tools they need to succeed.',
      deliverables: [
        'Hardware assessment and procurement',
        'SSD upgrades and performance optimization',
        '24/7 helpdesk support with <2min response',
        'Preventive maintenance scheduling',
        'Asset management and lifecycle planning'
      ],
      requirements: [
        'Current hardware inventory',
        'Business hour preferences',
        'Critical system identification'
      ]
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure',
      description: 'Reliable, scalable networking that grows with your business and keeps everyone connected.',
      problem: 'Unreliable networks cause dropped connections, slow file transfers, and frustrated users.',
      solution: 'We design and implement enterprise-grade network infrastructure that provides consistent performance and reliable connectivity.',
      deliverables: [
        'Network design and implementation',
        'Enterprise Wi-Fi deployment',
        'Switch and router configuration',
        'Performance monitoring and optimization',
        'Network security implementation'
      ],
      requirements: [
        'Building layout and coverage needs',
        'User count and device inventory',
        'Bandwidth requirements assessment'
      ]
    },
    {
      icon: Cloud,
      title: 'Virtualization & Cloud',
      description: 'Modern infrastructure solutions that reduce costs while improving flexibility and scalability.',
      problem: 'Physical servers are expensive to maintain and difficult to scale as business needs change.',
      solution: 'We implement virtualization and cloud solutions that reduce hardware costs while improving reliability and flexibility.',
      deliverables: [
        'Virtualization platform setup',
        'Cloud migration planning and execution',
        'Hybrid infrastructure design',
        'Resource optimization and monitoring',
        'Backup and disaster recovery planning'
      ],
      requirements: [
        'Current server and application inventory',
        'Performance requirements assessment',
        'Compliance and security requirements'
      ]
    },
    {
      icon: Shield,
      title: 'Secure Remote Access',
      description: 'Zero-drama VPN solutions with modern protocols for secure, high-speed access from anywhere.',
      problem: 'Traditional VPNs are slow, unreliable, and create security vulnerabilities for remote workers.',
      solution: 'We implement modern VPN solutions using WireGuard and other advanced protocols for fast, secure remote access.',
      deliverables: [
        'WireGuard VPN implementation',
        'Multi-factor authentication setup',
        'Endpoint security configuration',
        'Remote access policy development',
        'User training and documentation'
      ],
      requirements: [
        'Remote user count and locations',
        'Applications requiring remote access',
        'Security policy requirements'
      ]
    },
    {
      icon: Database,
      title: 'Backup & Business Continuity',
      description: 'Comprehensive protection against data loss and downtime with tested recovery procedures.',
      problem: 'Data loss from hardware failure, cyber attacks, or human error can shut down business operations.',
      solution: 'We implement robust backup systems and business continuity plans to protect your critical data and minimize downtime.',
      deliverables: [
        'Automated backup system implementation',
        'Disaster recovery planning and testing',
        'Business continuity procedures',
        'Recovery time optimization',
        'Regular backup verification and reporting'
      ],
      requirements: [
        'Critical data and system identification',
        'Recovery time objectives',
        'Compliance requirements'
      ]
    },
    {
      icon: Settings,
      title: 'Microsoft 365 Enablement',
      description: 'Maximize your M365 investment with expert migration, configuration, and user adoption support.',
      problem: 'Organizations often use only a fraction of their Microsoft 365 capabilities, missing productivity gains.',
      solution: 'We help you fully utilize your M365 investment through proper configuration, security setup, and user training.',
      deliverables: [
        'M365 migration and setup',
        'Security and compliance configuration',
        'User training and adoption programs',
        'SharePoint and Teams optimization',
        'Email security and management'
      ],
      requirements: [
        'Current email and collaboration tools',
        'User count and licensing needs',
        'Compliance and security requirements'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero section with image background */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background image with parallax */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              ref={imageRef}
              src="/service_background.png" 
              alt="IT services background" 
              className="w-full h-[110%] object-cover will-change-transform"
              style={{ transform: 'translateY(0px) scale(1.1)' }}
            />
          </div>

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 text-balance drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Complete IT solutions for{' '}
                  <span className="text-neon text-glow drop-shadow-[0_0_30px_rgba(51,102,255,0.8)]">your business</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  From desktop support to enterprise infrastructure, we provide the technology 
                  foundation your business needs to thrive in the Coastal Bend.
                </p>
                
                {/* CTA button */}
                <div className="flex justify-center">
                  <a
                    href="#services"
                    className="btn-neon group flex items-center space-x-2"
                  >
                    <span>Explore our services</span>
                    <CheckCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-neon/60 rounded-full flex justify-center drop-shadow-[0_0_10px_rgba(51,102,255,0.3)]">
              <div className="w-1 h-3 bg-neon rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Services detail */}
        <section id="services" className="py-24 bg-background-deep">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isReverse = index % 2 === 1;
                
                return (
                  <ScrollReveal key={service.title} delay={index * 100}>
                    <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16`}>
                      {/* Content */}
                      <div className="flex-1">
                        <div className="card-dark p-8 lg:p-12">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-neon/20 rounded-xl flex items-center justify-center">
                              <Icon className="w-6 h-6 text-neon" />
                            </div>
                            <h2 className="font-heading font-bold text-3xl text-foreground">
                              {service.title}
                            </h2>
                          </div>
                          
                          <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Problem */}
                          <div className="mb-6">
                            <h3 className="font-semibold text-foreground mb-3">The Challenge</h3>
                            <p className="text-foreground-muted">{service.problem}</p>
                          </div>

                          {/* Solution */}
                          <div className="mb-8">
                            <h3 className="font-semibold text-foreground mb-3">Our Approach</h3>
                            <p className="text-foreground-muted">{service.solution}</p>
                          </div>

                          {/* Deliverables */}
                          <div className="mb-8">
                            <h3 className="font-semibold text-foreground mb-4">What We Deliver</h3>
                            <ul className="space-y-2">
                              {service.deliverables.map((item) => (
                                <li key={item} className="flex items-start">
                                  <CheckCircle className="w-5 h-5 text-neon mr-3 mt-0.5 flex-shrink-0" />
                                  <span className="text-foreground-muted">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h3 className="font-semibold text-foreground mb-4">What We Need From You</h3>
                            <ul className="space-y-2">
                              {service.requirements.map((item) => (
                                <li key={item} className="flex items-start">
                                  <div className="w-2 h-2 bg-neon rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                  <span className="text-foreground-muted text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Contact card */}
                      <div className="lg:w-80">
                        <div className="card-dark p-6 sticky top-24">
                          <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                            Ready to get started?
                          </h3>
                          <p className="text-foreground-muted mb-6">
                            Let's discuss how we can help improve your {service.title.toLowerCase()}.
                          </p>
                          <div className="space-y-3">
                            <a
                              href="/contact"
                              className="block w-full btn-neon text-center"
                            >
                              Get a quote
                            </a>
                            <a
                              href="tel:+1-361-555-0123"
                              className="block w-full btn-ghost text-center"
                            >
                              Call us today
                            </a>
                          </div>
                          
                          <div className="mt-6 pt-6 border-t border-border text-center">
                            <p className="text-sm text-foreground-muted">
                              Free consultation • No obligation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;