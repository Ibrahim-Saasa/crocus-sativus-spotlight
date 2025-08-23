import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Spline from "@splinetool/react-spline";

const About = () => {
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
        
        <div className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-animate">
              <h1 className="text-4xl md:text-6xl font-bold text-crocus-light mb-8 text-center">
                About Crocus Sativus
              </h1>
            </div>
            
            <div className="scroll-animate scroll-animate-delay-1">
              <div className="bg-card/70 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-saffron-gold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are dedicated to sharing the fascinating world of Crocus Sativus, the remarkable flower 
                  that produces saffron - the world's most precious spice. Our goal is to educate and inspire 
                  others about this extraordinary plant and its cultivation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 3,000 years of history, saffron has been treasured by civilizations across the globe. 
                  From ancient Persia to modern kitchens, this "red gold" continues to captivate with its unique 
                  flavor, aroma, and vibrant color.
                </p>
              </div>
            </div>

            <div className="scroll-animate scroll-animate-delay-2">
              <div className="bg-card/70 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-saffron-gold mb-4">The Flower Behind the Spice</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Crocus Sativus is no ordinary flower. Each delicate purple bloom contains just three precious 
                  crimson stigmas that must be hand-harvested at dawn during a brief flowering period in autumn.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  It takes approximately 150 flowers to produce just one gram of saffron, making it more valuable 
                  than gold by weight. This labor-intensive process has remained unchanged for millennia, 
                  preserving the traditional methods that ensure saffron's exceptional quality.
                </p>
              </div>
            </div>

            <div className="scroll-animate scroll-animate-delay-3">
              <div className="bg-card/70 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-saffron-gold mb-4">Join Our Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a gardening enthusiast, a culinary artist, or simply curious about this 
                  magnificent flower, we invite you to explore the world of Crocus Sativus with us. 
                  Discover growing techniques, learn about its rich history, and understand why this 
                  humble flower has captured hearts and palates for thousands of years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;