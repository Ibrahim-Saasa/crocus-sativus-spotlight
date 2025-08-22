import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import GrowingSection from "@/components/GrowingSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="scroll-animate">
        <AboutSection />
      </div>
      <div className="scroll-animate scroll-animate-delay-1">
        <BenefitsSection />
      </div>
      <div className="scroll-animate scroll-animate-delay-2">
        <GrowingSection />
      </div>
      <div className="scroll-animate scroll-animate-delay-3">
        <Footer />
      </div>
    </main>
  );
};

export default Index;
