import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crocus-purple text-glow mb-6">
            About Crocus Sativus
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The saffron crocus is an autumn-flowering perennial plant that produces the world's most valuable spice by weight.
            Each flower yields only three precious stigmas that must be hand-harvested at dawn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-white/70 backdrop-blur-sm border-crocus-light/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🌸</span>
              </div>
              <h3 className="text-xl font-semibold text-crocus-deep mb-4">Precious Flowers</h3>
              <p className="text-gray-700 leading-relaxed">
                Brief autumn blooms require immediate harvest to preserve delicate threads.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-white/70 backdrop-blur-sm border-crocus-light/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-crocus-deep mb-4">Worth More Than Gold</h3>
              <p className="text-gray-700 leading-relaxed">
                More valuable than gold, costing $500-$5000 per pound.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-white/70 backdrop-blur-sm border-crocus-light/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏺</span>
              </div>
              <h3 className="text-xl font-semibold text-crocus-deep mb-4">Ancient Heritage</h3>
              <p className="text-gray-700 leading-relaxed">
                Treasured for 3,000+ years for culinary, medicinal, and dyeing uses.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;