import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import SaffronCountryDetail from "@/components/SaffronCountryDetail";
import heroVideo from "@/assets/saffron-map-hero.mp4";
import { MapPin, TrendingUp, Globe, Sparkles } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Saffron producing countries data
const saffronCountries = [
  {
    iso: "IRN",
    name: "Iran",
    production: "430 tons/year",
    fact: "Produces over 90% of global saffron, primarily in Khorasan province",
    coordinates: [53.688, 32.4279] as [number, number]
  },
  {
    iso: "IND", 
    name: "India (Kashmir)",
    production: "20 tons/year",
    fact: "Kashmiri saffron is prized for its deep color and distinctive flavor",
    coordinates: [77.5, 34.5] as [number, number]
  },
  {
    iso: "ESP",
    name: "Spain (La Mancha)",
    production: "5 tons/year", 
    fact: "Spanish saffron has protected designation of origin status",
    coordinates: [-3.7492, 40.4637] as [number, number]
  },
  {
    iso: "AFG",
    name: "Afghanistan",
    production: "12 tons/year",
    fact: "Herat province produces some of the world's finest saffron",
    coordinates: [67.709, 33.9391] as [number, number]
  },
  {
    iso: "GRC",
    name: "Greece (Kozani)",
    production: "6 tons/year",
    fact: "Greek red gold saffron from Kozani has PDO certification",
    coordinates: [21.8243, 39.0742] as [number, number]
  },
  {
    iso: "MAR",
    name: "Morocco (Taliouine)",
    production: "2.5 tons/year",
    fact: "Grown in the Atlas Mountains at high altitude",
    coordinates: [-7.9, 30.5] as [number, number]
  },
  {
    iso: "ITA",
    name: "Italy (Abruzzo)",
    production: "0.4 tons/year",
    fact: "L'Aquila saffron is among the most expensive in the world",
    coordinates: [13.4, 42.35] as [number, number]
  },
  {
    iso: "FRA",
    name: "France (Quercy)",
    production: "0.3 tons/year",
    fact: "French saffron cultivation dates back to medieval times",
    coordinates: [1.4442, 44.4479] as [number, number]
  }
];

const SaffronMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<typeof saffronCountries[0] | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<typeof saffronCountries[0] | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  useScrollAnimation();

  const handleMouseEnter = (country: typeof saffronCountries[0], event: React.MouseEvent) => {
    setHoveredCountry(country);
    const rect = (event.currentTarget as Element).getBoundingClientRect();
    setTooltipPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredCountry) {
      setTooltipPosition({
        x: event.clientX,
        y: event.clientY
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  const handleCountryClick = (country: typeof saffronCountries[0]) => {
    setSelectedCountry(country);
    setHoveredCountry(null);
  };

  const handleCloseDetail = () => {
    setSelectedCountry(null);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-crocus-deep/80 via-crocus-purple/70 to-crocus-purple/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow animate-fade-in">
            Saffron Map
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light animate-fade-in [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
            Discover Global Saffron Production
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
            Explore the world's saffron-producing regions and learn about their unique contributions to this precious spice trade.
          </p>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-8 px-6 bg-crocus-purple/10 border-y border-crocus-light/20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center justify-center gap-3">
            <Globe className="w-8 h-8 text-crocus-purple" />
            <div>
              <p className="text-2xl font-bold text-crocus-purple">8</p>
              <p className="text-sm text-muted-foreground">Major Regions</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <TrendingUp className="w-8 h-8 text-saffron-gold" />
            <div>
              <p className="text-2xl font-bold text-saffron-gold">476+</p>
              <p className="text-sm text-muted-foreground">Tons/Year</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8 text-crocus-light" />
            <div>
              <p className="text-2xl font-bold text-crocus-light">90%</p>
              <p className="text-sm text-muted-foreground">From Iran</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-saffron-deep" />
            <div>
              <p className="text-2xl font-bold text-saffron-deep">$5K+</p>
              <p className="text-sm text-muted-foreground">Per kg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 scroll-animate bg-gradient-to-b from-background to-crocus-purple/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-saffron-gold/20 text-saffron-deep rounded-full text-sm font-medium mb-4">
              Interactive Map
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-crocus-purple text-glow mb-6">
              Explore Production Regions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Click on the <span className="text-saffron-gold font-medium">golden highlighted countries</span> or the <span className="text-crocus-purple font-medium">pulsing markers</span> to discover each region's saffron heritage.
            </p>
          </div>

          <Card className="shadow-elegant bg-gradient-card border-crocus-light/30 overflow-visible">
            <CardContent className="p-0">
              <div 
                className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]"
                onMouseMove={handleMouseMove}
              >
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    scale: isMobile ? 280 : 220,
                    center: [30, 35]
                  }}
                  width={800}
                  height={600}
                  className="w-full h-full"
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const countryCode = geo.properties.ISO_A3;
                        const saffronCountry = saffronCountries.find(c => c.iso === countryCode);
                        
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={saffronCountry ? "hsl(var(--saffron-gold))" : "hsl(var(--muted))"}
                            stroke="hsl(var(--border))"
                            strokeWidth={0.5}
                            style={{
                              default: {
                                outline: "none",
                              },
                              hover: {
                                outline: "none",
                                fill: saffronCountry ? "hsl(var(--saffron-light))" : "hsl(var(--muted))",
                                cursor: saffronCountry ? "pointer" : "default"
                              },
                              pressed: {
                                outline: "none",
                              },
                            }}
                            onMouseEnter={(event) => {
                              if (saffronCountry) {
                                handleMouseEnter(saffronCountry, event);
                              }
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => {
                              if (saffronCountry) {
                                handleCountryClick(saffronCountry);
                              }
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                  
                  {/* Pulsing markers for production centers */}
                  {saffronCountries.map((country) => (
                    <Marker 
                      key={country.iso} 
                      coordinates={country.coordinates}
                      onMouseEnter={(event) => handleMouseEnter(country, event as any)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleCountryClick(country)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Outer pulse ring */}
                      <circle 
                        r={12} 
                        fill="hsl(var(--crocus-purple))" 
                        opacity={0.3}
                        className="animate-ping"
                        style={{ animationDuration: '2s' }}
                      />
                      {/* Inner solid circle */}
                      <circle 
                        r={7} 
                        fill="hsl(var(--crocus-purple))" 
                        stroke="white" 
                        strokeWidth={2}
                        className="drop-shadow-lg"
                      />
                      {/* Center dot */}
                      <circle r={3} fill="white" />
                    </Marker>
                  ))}
                </ComposableMap>

                {/* Tooltip */}
                {hoveredCountry && (
                  <div
                    className="fixed z-50 pointer-events-none"
                    style={{
                      left: tooltipPosition.x + 12,
                      top: tooltipPosition.y + 12
                    }}
                  >
                    <Card className="shadow-glow bg-gradient-card border-crocus-light/30 max-w-xs">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-crocus-light text-lg mb-2">
                          {hoveredCountry.name}
                        </h3>
                        <p className="text-saffron-gold font-semibold text-sm mb-2">
                          {hoveredCountry.production}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {hoveredCountry.fact}
                        </p>
                        <p className="text-xs text-saffron-gold font-medium">
                          Click for detailed information
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Call to action hint */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-crocus-purple animate-bounce" />
              <span>Click any highlighted region to explore its saffron story</span>
            </p>
          </div>
        </div>
      </section>

      {/* Production Statistics */}
      <section className="py-16 px-6 bg-gradient-to-b from-crocus-purple/5 to-background scroll-animate scroll-animate-delay-1">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-crocus-purple/10 text-crocus-purple rounded-full text-sm font-medium mb-4">
              Top Producers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-crocus-purple text-glow mb-6">
              Leading Saffron Regions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the top four saffron-producing regions and their unique contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saffronCountries.slice(0, 4).map((country, index) => (
              <Card 
                key={country.iso}
                className="group shadow-elegant hover:shadow-glow transition-all duration-500 bg-gradient-card border-crocus-light/30 hover-scale cursor-pointer overflow-hidden"
                onClick={() => handleCountryClick(country)}
              >
                <CardContent className="p-6 text-center relative">
                  {/* Rank badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-saffron-gold/20 flex items-center justify-center">
                    <span className="text-saffron-deep font-bold text-sm">#{index + 1}</span>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-crocus-purple/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-crocus-purple/20 transition-colors">
                    <MapPin className="w-6 h-6 text-crocus-purple" />
                  </div>
                  
                  <h3 className="font-bold text-foreground text-lg mb-2">
                    {country.name}
                  </h3>
                  <p className="text-saffron-gold font-semibold text-xl mb-3">
                    {country.production}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {country.fact}
                  </p>
                  
                  <p className="mt-4 text-xs text-crocus-purple font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to learn more →
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Country Detail Modal */}
      <SaffronCountryDetail 
        country={selectedCountry} 
        onClose={handleCloseDetail} 
      />
    </main>
  );
};

export default SaffronMap;