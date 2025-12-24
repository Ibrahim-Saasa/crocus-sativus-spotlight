import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/crocus-sativus-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful Crocus Sativus flowers in bloom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-crocus-deep/80 via-crocus-purple/60 to-saffron-gold/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow animate-fade-in">
          Crocus Sativus
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light animate-fade-in [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
          The Source of Precious Saffron
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
          Discover the extraordinary flower that produces the world's most precious spice,
          cultivated for over 3,000 years and worth more than gold.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about#saffron-timeline" className="animate-fade-in [animation-delay:450ms] opacity-0 [animation-fill-mode:forwards]">
            <Button 
              variant="default"
              size="lg" 
              className="bg-saffron-gold hover:bg-saffron-gold/90 text-white font-semibold px-8 py-3 rounded-full shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </Link>
          <Link to="/growing-guide" className="animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Growing Guide
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;