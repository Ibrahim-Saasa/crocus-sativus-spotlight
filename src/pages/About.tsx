import Navigation from "@/components/Navigation";
import Timeline from "@/components/Timeline";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    id: "mission",
    title: "Our Mission",
    content: [
      "We are dedicated to sharing the fascinating world of Crocus Sativus, the remarkable flower that produces saffron - the world's most precious spice. Our goal is to educate and inspire others about this extraordinary plant and its cultivation.",
      "With over 3,000 years of history, saffron has been treasured by civilizations across the globe. From ancient Persia to modern kitchens, this \"red gold\" continues to captivate with its unique flavor, aroma, and vibrant color."
    ]
  },
  {
    id: "flower",
    title: "The Flower Behind the Spice",
    content: [
      "Crocus Sativus is no ordinary flower. Each delicate purple bloom contains just three precious crimson stigmas that must be hand-harvested at dawn during a brief flowering period in autumn.",
      "It takes approximately 150 flowers to produce just one gram of saffron, making it more valuable than gold by weight. This labor-intensive process has remained unchanged for millennia, preserving the traditional methods that ensure saffron's exceptional quality."
    ]
  },
  {
    id: "journey",
    title: "Join Our Journey",
    content: [
      "Whether you're a gardening enthusiast, a culinary artist, or simply curious about this magnificent flower, we invite you to explore the world of Crocus Sativus with us.",
      "Discover growing techniques, learn about its rich history, and understand why this humble flower has captured hearts and palates for thousands of years."
    ]
  }
];

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
        root: null
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={(el) => (sectionRefs.current[0] = el)}
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-crocus-deep via-crocus-purple to-saffron-gold/30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(245,158,11,0.2),transparent_50%)]" />
        
        <div 
          className={`text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
            activeSection === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow">
            About Crocus Sativus
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Discover the story behind the world's most precious spice
          </p>
          <div className="animate-bounce mt-12">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => (sectionRefs.current[index + 1] = el)}
          className={`min-h-screen flex items-center justify-center relative px-6 py-20 ${
            index % 2 === 0 
              ? 'bg-gradient-to-br from-background via-secondary/20 to-crocus-purple/10' 
              : 'bg-gradient-to-bl from-background via-saffron-gold/5 to-crocus-light/10'
          }`}
        >
          <div 
            className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              activeSection === index + 1 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-95'
            }`}
          >
            <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-saffron-gold to-crocus-light rounded-full" />
                <span className="text-saffron-gold font-medium text-sm uppercase tracking-widest">
                  0{index + 1}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                {section.title}
              </h2>
              
              <div className="space-y-6">
                {section.content.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex}
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                    style={{
                      transitionDelay: `${pIndex * 150}ms`
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-saffron-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-crocus-purple/10 rounded-full blur-3xl" />
        </section>
      ))}

      {/* Timeline Section */}
      <section 
        id="saffron-timeline"
        ref={(el) => (sectionRefs.current[sections.length + 1] = el)}
        className="min-h-screen py-20 px-6 bg-gradient-to-b from-background to-secondary/20"
      >
        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            activeSection === sections.length + 1 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <Timeline />
        </div>
      </section>

      {/* Section Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {[0, ...sections.map((_, i) => i + 1), sections.length + 1].map((index) => (
          <button
            key={index}
            onClick={() => {
              sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index 
                ? 'bg-saffron-gold scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
};

export default About;