import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  
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

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-hero text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow">
            Saffron Map
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Discover Global Saffron Production
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Explore the world's saffron-producing regions and learn about their unique contributions to this precious spice trade.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 scroll-animate">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-crocus-purple text-glow mb-6">
              Global Saffron Production
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hover over highlighted countries to discover their saffron production details and unique qualities.
            </p>
          </div>

          <Card className="shadow-elegant bg-gradient-card border-crocus-light/30 overflow-visible">
            <CardContent className="p-0">
              <div 
                className="relative w-full h-[600px] md:h-[700px]"
                onMouseMove={handleMouseMove}
              >
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    scale: 220,
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
                          />
                        );
                      })
                    }
                  </Geographies>
                  
                  {/* Optional: Add markers for better visibility */}
                  {saffronCountries.map((country) => (
                    <Marker 
                      key={country.iso} 
                      coordinates={country.coordinates}
                      onMouseEnter={(event) => handleMouseEnter(country, event as any)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <circle r={3} fill="hsl(var(--crocus-purple))" stroke="white" strokeWidth={1} />
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
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {hoveredCountry.fact}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Legend */}
          <div className="mt-8 text-center">
            <Card className="inline-block shadow-elegant bg-gradient-card border-crocus-light/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-crocus-light text-lg mb-4">Legend</h3>
                <div className="flex items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-saffron-gold"></div>
                    <span className="text-muted-foreground">Saffron Producing Countries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-muted"></div>
                    <span className="text-muted-foreground">Other Countries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-crocus-purple border border-white"></div>
                    <span className="text-muted-foreground">Production Centers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Statistics */}
      <section className="py-16 px-6 bg-gradient-card scroll-animate scroll-animate-delay-1">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-crocus-purple text-glow mb-6">
              Production Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Global saffron production statistics by region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saffronCountries.slice(0, 4).map((country, index) => (
              <Card 
                key={country.iso}
                className="shadow-elegant hover:shadow-glow transition-all duration-500 bg-white/80 backdrop-blur-sm border-crocus-light/30 hover-scale"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-foreground text-lg mb-2">
                    {country.name}
                  </h3>
                  <p className="text-saffron-gold font-semibold text-xl mb-3">
                    {country.production}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {country.fact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SaffronMap;