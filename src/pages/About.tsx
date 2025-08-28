import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Users, Zap, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security-First',
      description: 'Every solution we implement prioritizes your data security and business continuity.'
    },
    {
      icon: Zap,
      title: 'Reliability',
      description: 'We build systems that work consistently, so you can depend on your technology.'
    },
    {
      icon: Users,
      title: 'Clarity',
      description: 'No tech jargon or hidden fees. We explain what we do and why it matters.'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Founded in Corpus Christi',
      description: 'Started with a mission to bring enterprise-level IT solutions to local businesses.'
    },
    {
      year: '2015',
      title: 'Expanded Service Portfolio',
      description: 'Added cloud services and advanced networking to serve growing businesses.'
    },
    {
      year: '2020',
      title: 'Remote Work Transformation',
      description: 'Helped 100+ businesses transition to secure remote work during the pandemic.'
    },
    {
      year: '2024',
      title: 'Leading the Coastal Bend',
      description: 'Now serving 150+ businesses with modern, reliable IT infrastructure.'
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
                  Local IT expertise for the{' '}
                  <span className="text-neon">Coastal Bend</span>
                </h1>
                <p className="text-xl text-foreground-muted leading-relaxed">
                  Since 2010, we've been helping businesses in Corpus Christi and surrounding 
                  communities build reliable, secure technology foundations that drive growth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Story section */}
        <section className="py-24 bg-background-deep">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="font-heading font-bold text-4xl text-foreground mb-6">
                    Our story
                  </h2>
                  <div className="space-y-6 text-foreground-muted leading-relaxed">
                    <p>
                      Bay Area Affiliates was founded with a simple belief: local businesses 
                      deserve the same level of IT expertise and reliability as large corporations, 
                      but with the personal touch that only comes from working with your neighbors.
                    </p>
                    <p>
                      Over the years, we've watched the Coastal Bend grow and change. We've helped 
                      businesses navigate technology challenges, from the transition to cloud computing 
                      to the rapid shift to remote work. Through it all, we've maintained our 
                      commitment to clear communication, reliable solutions, and exceptional service.
                    </p>
                    <p>
                      Today, we're proud to serve over 150 businesses across the region, from 
                      Corpus Christi to the smallest coastal communities. Our team combines 
                      deep technical expertise with real-world business understanding to deliver 
                      IT solutions that actually work for our clients.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="card-dark p-8">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
                    By the numbers
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="font-heading font-bold text-3xl text-neon mb-2">150+</div>
                      <div className="text-sm text-foreground-muted">Businesses served</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading font-bold text-3xl text-neon mb-2">99.9%</div>
                      <div className="text-sm text-foreground-muted">Uptime achieved</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading font-bold text-3xl text-neon mb-2">15+</div>
                      <div className="text-sm text-foreground-muted">Years of service</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading font-bold text-3xl text-neon mb-2">&lt;2min</div>
                      <div className="text-sm text-foreground-muted">Response time</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-4xl text-foreground mb-6">
                  Our values guide everything we do
                </h2>
                <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
                  These principles shape how we work with clients and build solutions.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                
                return (
                  <ScrollReveal key={value.title} delay={index * 100}>
                    <div className="card-dark p-8 text-center">
                      <div className="w-16 h-16 bg-neon/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-neon" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                        {value.title}
                      </h3>
                      <p className="text-foreground-muted leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline section */}
        <section className="py-24 bg-background-deep">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-4xl text-foreground mb-6">
                  Our journey
                </h2>
                <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
                  From a small startup to the Coastal Bend's trusted IT partner.
                </p>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const isEven = index % 2 === 0;
                  
                  return (
                    <ScrollReveal key={item.year} delay={index * 100}>
                      <div className={`relative flex flex-col md:flex-row items-center ${
                        isEven ? '' : 'md:flex-row-reverse'
                      }`}>
                        {/* Content */}
                        <div className={`flex-1 ${isEven ? 'md:pr-16' : 'md:pl-16'} ${
                          isEven ? 'md:text-right' : 'md:text-left'
                        } text-center md:text-left`}>
                          <div className="card-dark p-6 max-w-md mx-auto md:mx-0">
                            <div className="text-2xl font-heading font-bold text-neon mb-2">
                              {item.year}
                            </div>
                            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                              {item.title}
                            </h3>
                            <p className="text-foreground-muted">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Timeline dot */}
                        <div className="relative z-10 my-6 md:my-0">
                          <div className="w-4 h-4 bg-neon rounded-full border-4 border-background"></div>
                        </div>

                        {/* Spacer */}
                        <div className="flex-1 hidden md:block"></div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Local commitment */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <ScrollReveal>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-neon/10 border border-neon/30 text-neon text-sm font-medium mb-8">
                  <MapPin className="w-4 h-4 mr-2" />
                  Proudly local
                </div>
                
                <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
                  Committed to the{' '}
                  <span className="text-neon">Coastal Bend</span>
                </h2>
                
                <p className="text-xl text-foreground-muted max-w-3xl mx-auto mb-12">
                  We live and work here too. When you succeed, our community succeeds. 
                  That's why we're invested in building long-term partnerships, not just 
                  providing quick fixes.
                </p>
                
                <a href="/contact" className="btn-neon">
                  Start a conversation
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;