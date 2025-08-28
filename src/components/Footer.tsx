import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Hardware & Desktop Support',
    'Network Infrastructure',
    'Virtualization & Cloud',
    'Secure Remote Access',
    'Backup & Continuity',
    'Microsoft 365',
  ];

  return (
    <footer className="bg-background-deep border-t border-border relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-neon rounded-full flex items-center justify-center text-neon-foreground hover:shadow-neon transition-all duration-300 hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-neon rounded-lg flex items-center justify-center">
                <span className="text-neon-foreground font-bold text-sm">BA</span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                Bay Area Affiliates, Inc.
              </span>
            </div>
            
            <p className="text-foreground-muted mb-6 leading-relaxed max-w-md">
              Top-notch Computer & Networking solutions for the Coastal Bend. 
              We design, run and protect your IT so you can focus on growth.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-foreground-muted">
                <MapPin className="w-4 h-4 mr-3 text-neon" />
                <span>Serving Corpus Christi & the Coastal Bend</span>
              </div>
              <div className="flex items-center text-foreground-muted">
                <Phone className="w-4 h-4 mr-3 text-neon" />
                <a href="tel:+1-361-555-0123" className="hover:text-neon transition-colors">
                  (361) 555-0123
                </a>
              </div>
              <div className="flex items-center text-foreground-muted">
                <Mail className="w-4 h-4 mr-3 text-neon" />
                <a href="mailto:info@bayareaaffiliates.com" className="hover:text-neon transition-colors">
                  info@bayareaaffiliates.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-foreground-muted hover:text-neon transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-foreground-muted hover:text-neon transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <div className="text-foreground-muted text-sm mb-4 sm:mb-0">
            © 2024 Bay Area Affiliates, Inc. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/privacy" className="text-foreground-muted hover:text-neon transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-foreground-muted hover:text-neon transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;