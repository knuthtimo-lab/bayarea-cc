import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Upgrade your HDD to SSD for a big speed boost',
      excerpt: 'A practical checklist for business owners considering SSD upgrades, including before/after performance comparisons and cost analysis.',
      content: `
        <h2>Why SSD upgrades matter for business computers</h2>
        <p>If your business computers are still running traditional hard disk drives (HDDs), you're likely experiencing slower boot times, delayed file access, and frustrated employees. Solid State Drives (SSDs) can transform your computing experience dramatically.</p>
        
        <h3>The performance difference</h3>
        <p>Here's what you can expect when upgrading from HDD to SSD:</p>
        <ul>
          <li><strong>Boot time:</strong> From 2-3 minutes to 15-30 seconds</li>
          <li><strong>Application loading:</strong> 50-70% faster startup times</li>
          <li><strong>File transfers:</strong> 3-5x faster copying and moving files</li>
          <li><strong>Overall responsiveness:</strong> Instant access to documents and programs</li>
        </ul>
        
        <h3>Real-world impact</h3>
        <p>For a typical office worker who starts their computer 2-3 times per day and opens multiple applications, an SSD upgrade can save 15-30 minutes daily. Over a year, that's 65-130 hours of increased productivity per employee.</p>
        
        <h3>Implementation checklist</h3>
        <p>Before upgrading your business computers:</p>
        <ol>
          <li>Audit current hardware (age, compatibility, warranty status)</li>
          <li>Identify priority machines (key employees, frequently used computers)</li>
          <li>Plan data migration strategy (clone drives or fresh installs)</li>
          <li>Budget for professional installation vs. DIY approach</li>
          <li>Schedule upgrades during off-hours to minimize disruption</li>
        </ol>
        
        <h3>Cost considerations</h3>
        <p>SSD prices have dropped significantly. A typical business-grade 500GB SSD costs $60-100, with installation running $50-150 per machine if done professionally. For a computer that's 2-4 years old, this upgrade often provides better ROI than buying new hardware.</p>
        
        <p>If you're ready to boost your team's productivity with SSD upgrades, <a href="/contact">contact us</a> for a free assessment of your current hardware.</p>
      `,
      author: 'Technical Team',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Hardware',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=400&fit=crop&auto=format'
    },
    {
      id: 2,
      title: 'Secure your corporate network access with WireGuard VPN',
      excerpt: 'Learn why modern businesses are switching to WireGuard VPN for faster, more secure remote access, and how to implement it properly.',
      content: `
        <h2>Why traditional VPNs are holding your business back</h2>
        <p>If your remote workers complain about slow, unreliable VPN connections, you're not alone. Traditional VPN protocols like OpenVPN and IPSec were designed decades ago and struggle with modern internet conditions.</p>
        
        <h3>What makes WireGuard different</h3>
        <p>WireGuard is a modern VPN protocol that's faster, more secure, and easier to manage than traditional solutions:</p>
        <ul>
          <li><strong>Speed:</strong> Up to 5x faster than OpenVPN in real-world tests</li>
          <li><strong>Security:</strong> Modern cryptography with smaller attack surface</li>
          <li><strong>Reliability:</strong> Seamless roaming between networks (WiFi to cellular)</li>
          <li><strong>Battery life:</strong> More efficient on mobile devices</li>
        </ul>
        
        <h3>Business benefits</h3>
        <p>Beyond technical advantages, WireGuard delivers real business value:</p>
        <ul>
          <li>Remote workers stay productive with fast, reliable connections</li>
          <li>Reduced support tickets related to VPN issues</li>
          <li>Better security posture with modern encryption</li>
          <li>Easier management and troubleshooting for IT teams</li>
        </ul>
        
        <h3>Implementation considerations</h3>
        <p>While WireGuard is more straightforward than traditional VPNs, proper implementation requires planning:</p>
        <ol>
          <li><strong>Network design:</strong> Plan IP address ranges and routing</li>
          <li><strong>Certificate management:</strong> Secure key distribution strategy</li>
          <li><strong>Client configuration:</strong> Standardized setup for all devices</li>
          <li><strong>Monitoring:</strong> Track usage and performance metrics</li>
          <li><strong>Training:</strong> Ensure users understand the new system</li>
        </ol>
        
        <h3>Security best practices</h3>
        <p>A WireGuard VPN is only as secure as its implementation. Key security measures include:</p>
        <ul>
          <li>Regular key rotation and revocation procedures</li>
          <li>Network segmentation to limit access scope</li>
          <li>Multi-factor authentication for administrative access</li>
          <li>Logging and monitoring for unusual activity</li>
          <li>Regular security audits and penetration testing</li>
        </ul>
        
        <p>Ready to give your team faster, more secure remote access? <a href="/contact">Contact us</a> to discuss WireGuard implementation for your business.</p>
      `,
      author: 'Security Team',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=400&fit=crop&auto=format'
    },
    {
      id: 3,
      title: 'What comprehensive IT support looks like for SMBs',
      excerpt: 'Understanding the full scope of managed IT services: from hardware and network infrastructure to virtualization and helpdesk support.',
      content: `
        <h2>Beyond break-fix: The modern approach to IT support</h2>
        <p>Many small and medium businesses still operate on a "break-fix" model—calling for help only when something stops working. But comprehensive IT support takes a proactive approach that prevents problems before they impact your business.</p>
        
        <h3>The four pillars of comprehensive IT support</h3>
        
        <h4>1. Hardware and Desktop Support</h4>
        <p>This goes beyond fixing broken computers:</p>
        <ul>
          <li>Proactive hardware monitoring and maintenance</li>
          <li>Planned hardware refresh cycles to avoid unexpected failures</li>
          <li>Performance optimization (SSD upgrades, memory increases)</li>
          <li>24/7 helpdesk for user support and troubleshooting</li>
          <li>Asset management and warranty tracking</li>
        </ul>
        
        <h4>2. Network Infrastructure</h4>
        <p>Your network is the foundation of modern business operations:</p>
        <ul>
          <li>Enterprise-grade switching and routing equipment</li>
          <li>Reliable, secure wireless networks that scale</li>
          <li>Network monitoring and performance optimization</li>
          <li>Redundancy planning to minimize downtime</li>
          <li>Regular security audits and updates</li>
        </ul>
        
        <h4>3. Virtualization and Cloud Services</h4>
        <p>Modern infrastructure that grows with your business:</p>
        <ul>
          <li>Server virtualization to reduce hardware costs</li>
          <li>Cloud migration strategy and implementation</li>
          <li>Hybrid solutions that balance performance and cost</li>
          <li>Resource scaling based on business needs</li>
          <li>Backup and disaster recovery in the cloud</li>
        </ul>
        
        <h4>4. Security and Compliance</h4>
        <p>Protecting your business from ever-evolving threats:</p>
        <ul>
          <li>Multi-layered security strategy (endpoint, network, email)</li>
          <li>Regular security training for employees</li>
          <li>Compliance management for industry regulations</li>
          <li>Incident response planning and testing</li>
          <li>Security monitoring and threat detection</li>
        </ul>
        
        <h3>What this means for your business</h3>
        <p>Comprehensive IT support transforms technology from a business constraint into a competitive advantage:</p>
        <ul>
          <li><strong>Increased uptime:</strong> Proactive monitoring prevents 80% of potential issues</li>
          <li><strong>Predictable costs:</strong> Monthly service fees instead of emergency repair bills</li>
          <li><strong>Enhanced security:</strong> Professional-grade protection without dedicated IT staff</li>
          <li><strong>Scalable growth:</strong> Technology that adapts as your business evolves</li>
          <li><strong>Peace of mind:</strong> Focus on your core business while experts handle IT</li>
        </ul>
        
        <h3>Choosing the right IT partner</h3>
        <p>Not all managed service providers offer truly comprehensive support. Look for:</p>
        <ul>
          <li>Local presence and understanding of your market</li>
          <li>Transparent pricing with clear service level agreements</li>
          <li>Proactive approach, not just reactive support</li>
          <li>Experience with businesses similar to yours</li>
          <li>Strong references and proven track record</li>
        </ul>
        
        <p>Ready to move beyond break-fix IT support? <a href="/contact">Schedule a consultation</a> to learn how comprehensive IT support can benefit your business.</p>
      `,
      author: 'Strategy Team',
      date: '2024-01-01',
      readTime: '15 min read',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop&auto=format'
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
                  IT insights for{' '}
                  <span className="text-neon">your business</span>
                </h1>
                <p className="text-xl text-foreground-muted leading-relaxed">
                  Practical advice, industry insights, and technical guides to help 
                  your business make better technology decisions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog posts */}
        <section className="py-24 bg-background-deep">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16">
              {posts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 100}>
                  <article className="card-dark overflow-hidden group hover:shadow-neon transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-neon text-neon-foreground text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col">
                        <div className="flex items-center space-x-4 text-sm text-foreground-muted mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>

                        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-neon transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-foreground-muted leading-relaxed mb-6 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-foreground-muted">
                            By {post.author}
                          </span>
                          
                          <Link
                            to={`/blog/${post.id}`}
                            className="inline-flex items-center text-neon font-medium hover:text-neon/80 transition-colors group"
                          >
                            Read article
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {/* Newsletter signup */}
            <ScrollReveal delay={400}>
              <div className="mt-20">
                <div className="card-dark p-8 lg:p-12 text-center">
                  <h3 className="font-heading font-bold text-3xl text-foreground mb-4">
                    Stay updated with IT insights
                  </h3>
                  <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
                    Get practical tips, industry updates, and technology guidance 
                    delivered to your inbox monthly.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-input border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent text-foreground"
                    />
                    <button className="btn-neon whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                  
                  <p className="text-xs text-foreground-muted mt-4">
                    No spam, unsubscribe anytime.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;