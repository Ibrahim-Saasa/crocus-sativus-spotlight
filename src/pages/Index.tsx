import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import GrowingSection from "@/components/GrowingSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Spline from "@splinetool/react-spline";

const Index = () => {
  useScrollAnimation();
  
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Spline Background */}
      <div className="fixed inset-0 z-0">
        <Spline 
          scene="https://prod.spline.design/IrSwzsExCWbZzG9VKBXjM4Hz/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Navigation />
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
      </div>
    </main>
  );
};

export default Index;
