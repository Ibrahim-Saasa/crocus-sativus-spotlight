import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import GrowingSection from "@/components/GrowingSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


const Index = () => {
  useScrollAnimation();
  
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 3D Background (Spline embed) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <iframe
          src="https://my.spline.design/scrollflower-IrSwzsExCWbZzG9VKBXjM4Hz/"
          title="Crocus Spline Background"
          className="w-full h-full"
          loading="lazy"
          aria-hidden="true"
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
