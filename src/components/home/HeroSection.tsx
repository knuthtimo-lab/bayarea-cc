import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import heroNetwork from '@/assets/hero-network.jpg';

const HeroSection = () => {
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

  return (
    <section className="section-pin grid-overlay">
      <div className="relative h-full flex items-center justify-center overflow-hidden">
        {/* Background image with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            ref={imageRef}
            src={heroNetwork} 
            alt="Modern IT infrastructure with network connections" 
            className="w-full h-[110%] object-cover opacity-20 will-change-transform"
            style={{ transform: 'translateY(0px) scale(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>

        {/* Particle field effect */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-neon/10 border border-neon/30 text-neon text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-neon rounded-full mr-2 animate-glow-pulse"></span>
              Serving the Coastal Bend since 2010
            </div>

            {/* Main headline */}
            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
              Modern IT that keeps your{' '}
              <span className="text-neon text-glow">business moving</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-foreground-muted mb-12 max-w-3xl mx-auto leading-relaxed">
              From fast devices to secure remote access and resilient networks — we design, 
              run and protect your tech so you can focus on growth.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="btn-neon group flex items-center space-x-2"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="btn-ghost group flex items-center space-x-2">
                <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>See our system</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-border/30">
              <p className="text-sm text-foreground-muted mb-6">Trusted by businesses across Corpus Christi</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {['Healthcare', 'Manufacturing', 'Professional Services', 'Non-Profit'].map((industry) => (
                  <span key={industry} className="text-sm font-medium text-foreground-muted">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-neon/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;