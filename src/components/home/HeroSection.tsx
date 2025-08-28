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
    <section className="section-pin">
      <div className="relative h-full flex items-center justify-center overflow-hidden">
        {/* Background image with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            ref={imageRef}
            src="/serverroom.png" 
            alt="Modern IT infrastructure with network connections" 
            className="w-full h-[110%] object-cover will-change-transform"
            style={{ transform: 'translateY(0px) scale(1.1)' }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src="/logo_bayarea.svg" 
                alt="Bay Area Affiliates Logo" 
                className="w-20 h-20 sm:w-24 sm:h-24 opacity-95 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              />
            </div>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-neon/20 border border-neon/40 text-neon text-sm font-medium mb-8 drop-shadow-[0_0_10px_rgba(51,102,255,0.5)]">
              <span className="w-2 h-2 bg-neon rounded-full mr-2 animate-glow-pulse"></span>
              Serving the Coastal Bend since 2010
            </div>

            {/* Main headline */}
            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 text-balance drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Modern IT that keeps your{' '}
              <span className="text-neon text-glow drop-shadow-[0_0_30px_rgba(51,102,255,0.8)]">business moving</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
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
            <div className="mt-16 pt-8 border-t border-white/30">
              <p className="text-sm text-white/90 mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Trusted by businesses across Corpus Christi</p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {['Healthcare', 'Manufacturing', 'Professional Services'].map((industry) => (
                  <span key={industry} className="text-base font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-neon/60 rounded-full flex justify-center drop-shadow-[0_0_10px_rgba(51,102,255,0.3)]">
            <div className="w-1 h-3 bg-neon rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;