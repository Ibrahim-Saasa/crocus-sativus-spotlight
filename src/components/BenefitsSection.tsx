const BenefitsSection = () => {
  const benefits = [
    {
      title: "Culinary Excellence",
      description: "Distinctive flavor and golden color for paella, risotto, and rice dishes.",
      icon: "🍽️"
    },
    {
      title: "Antioxidant Properties",
      description: "Rich in crocin and safranal compounds with powerful antioxidant benefits.",
      icon: "💊"
    },
    {
      title: "Mood Enhancement",
      description: "Studies suggest saffron may support positive mood and emotional well-being.",
      icon: "😊"
    },
    {
      title: "Natural Beauty",
      description: "Anti-inflammatory properties promote radiant, healthy-looking skin.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-20 px-6 bg-crocus-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crocus-deep mb-6">
            The Golden Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beyond its culinary fame, saffron offers numerous benefits that have been treasured 
            throughout history and validated by modern research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-2xl">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-crocus-deep mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;