import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ValuePillars from '@/components/home/ValuePillars';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProofSection from '@/components/home/ProofSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ValuePillars />
        <ProcessTimeline />
        <ServicesOverview />
        <ProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
