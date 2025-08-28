import { useEffect, useRef, useState } from 'react';
import { Search, Shield, Cog, Zap } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Search,
      title: 'Assess',
      description: 'Discovery, inventory, quick wins report',
      details: 'We start with a comprehensive assessment of your current IT infrastructure, identifying immediate opportunities for improvement and creating a roadmap for optimization.'
    },
    {
      icon: Cog,
      title: 'Stabilize',
      description: 'Patching, backups, device hygiene, ticket triage',
      details: 'Foundation work to ensure your systems are secure, backed up, and running smoothly. We address critical vulnerabilities and establish reliable backup procedures.'
    },
    {
      icon: Shield,
      title: 'Harden',
      description: 'MFA, endpoint security, VPN, network segmentation',
      details: 'Implementation of robust security measures including multi-factor authentication, endpoint protection, secure remote access, and network isolation strategies.'
    },
    {
      icon: Zap,
      title: 'Automate',
      description: 'Monitoring, updates, reporting, playbooks',
      details: 'Deploy automated monitoring systems, update management, comprehensive reporting, and documented procedures to maintain peak performance with minimal intervention.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
      
      // Determine active step based on scroll progress
      const newActiveStep = Math.min(steps.length - 1, Math.floor(scrollProgress * steps.length));
      setActiveStep(newActiveStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-overlay opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
              How we <span className="text-neon">transform</span> your IT
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Our proven four-phase methodology ensures systematic improvement and lasting results.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-px bg-border">
            <div 
              className="absolute top-0 left-0 w-full bg-neon transition-all duration-500 ease-out"
              style={{ height: `${(activeStep + 1) * 25}%` }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              const isEven = index % 2 === 0;
              
              return (
                <ScrollReveal key={step.title} delay={index * 100}>
                  <div className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Step content */}
                    <div className={`flex-1 ${isEven ? 'lg:pr-16' : 'lg:pl-16'} ${
                      isEven ? 'lg:text-right' : 'lg:text-left'
                    } text-center lg:text-left`}>
                      <div className="card-dark p-8 max-w-lg mx-auto lg:mx-0">
                        <div className="mb-4">
                          <span className="text-sm font-medium text-neon uppercase tracking-wider">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-foreground-muted mb-4">
                          {step.description}
                        </p>
                        <p className="text-sm text-foreground-muted">
                          {step.details}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="relative z-10 my-8 lg:my-0">
                      <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'border-neon bg-neon text-neon-foreground shadow-neon' 
                          : 'border-border bg-background text-foreground-muted'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Spacer for layout */}
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;