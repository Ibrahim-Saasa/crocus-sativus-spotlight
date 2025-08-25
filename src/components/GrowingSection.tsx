import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GrowingSection = () => {
  const growingSteps = [
    {
      step: "1",
      title: "Planting Season",
      description: "Plant bulbs in late summer with well-draining soil and full sun."
    },
    {
      step: "2", 
      title: "Soil Preparation",
      description: "pH 6.0-8.0 with excellent drainage and rich organic matter."
    },
    {
      step: "3",
      title: "Flowering Period",
      description: "Autumn blooms with 1-7 flowers per plant each season."
    },
    {
      step: "4",
      title: "Harvesting Time",
      description: "Hand-pick stigmas at dawn when flowers first open."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crocus-purple shadow-glow mb-6">
            Growing Crocus Sativus
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            While challenging, growing your own saffron crocus can be incredibly rewarding. 
            Here's what you need to know about cultivating these precious flowers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {growingSteps.map((item, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-white/70 backdrop-blur-sm border-crocus-light/30">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <CardTitle className="text-lg text-crocus-deep">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-center leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-saffron-light/30 rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-semibold text-crocus-deep mb-4 text-center">
            Growing Conditions
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🌡️</div>
              <h4 className="font-semibold text-crocus-deep mb-2">Climate</h4>
              <p className="text-muted-foreground">Mediterranean climate with hot, dry summers and cool, wet winters</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💧</div>
              <h4 className="font-semibold text-crocus-deep mb-2">Water</h4>
              <p className="text-muted-foreground">Minimal water during dormancy, moderate during growing season</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-semibold text-crocus-deep mb-2">Yield</h4>
              <p className="text-muted-foreground">Each bulb produces 1-3 flowers, each with 3 precious stigmas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowingSection;