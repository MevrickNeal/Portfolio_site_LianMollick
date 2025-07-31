
import { ShoppingBag, Zap, Rocket, Eye, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "40kV Taser Module - Compact",
    description: "High-voltage compact taser module designed for safety and protection applications. Features adjustable voltage output and safety mechanisms.",
    image: "/lovable-uploads/d83efb7b-9341-46a3-b52a-1a99878a90bf.png",
    price: "৳899",
    category: "Security",
    icon: Zap,
    features: ["40kV Output", "Compact Design", "Safety Switch", "LED Indicator"]
  },
  {
    id: 2,
    name: "40kV Taser Module - Extended",
    description: "Extended range high-voltage taser module with enhanced power delivery system and integrated safety features for professional use.",
    image: "/lovable-uploads/0cb967a1-bb49-4f78-9c95-e8ebbb91e08d.png",
    price: "৳999",
    category: "Security",
    icon: Zap,
    features: ["40kV Output", "Extended Range", "Power Boost", "Professional Grade"]
  },
  {
    id: 3,
    name: "Thrust Vector Control Mount",
    description: "Precision thrust vectoring system for model rockets with servo-controlled gimbal mechanism for flight stabilization and control.",
    image: "/lovable-uploads/d21fa1ac-3042-4e7f-8b4c-7cfaefdf181d.png",
    price: "$199.99",
    category: "Aerospace",
    icon: Rocket,
    features: ["Servo Control", "2-Axis Gimbal", "Lightweight", "Arduino Compatible"]
  },
  {
    id: 4,
    name: "PIR Security WhatsApp Bot",
    description: "Smart home security system with PIR motion detection and WhatsApp notifications. Complete circuit board with wireless connectivity.",
    image: "/lovable-uploads/1862537b-5867-4344-a452-4883f4744a3f.png",
    price: "$79.99",
    category: "IoT Security",
    icon: Shield,
    features: ["PIR Sensor", "WhatsApp Integration", "Wireless", "Real-time Alerts"]
  }
];

export default function CoolStuffs() {
  return (
    <section id="cool-stuffs" className="section-container bg-gradient-to-br from-portfolio-cream to-white">
      <div className="text-center mb-12">
        <h2 className="section-title flex items-center justify-center gap-3">
          <ShoppingBag className="h-8 w-8 text-portfolio-accent" />
          Cool Stuffs
        </h2>
        <p className="text-portfolio-light-text text-lg mt-4 max-w-2xl mx-auto">
          Innovative electronic products and custom-built solutions for enthusiasts and professionals. 
          Each product is carefully crafted with attention to detail and functionality.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group card-hover bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                    <div className="relative">
                      <div className="aspect-square overflow-hidden bg-gradient-to-br from-portfolio-light-blue/20 to-portfolio-teal/10 p-6">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge 
                            variant="secondary" 
                            className="bg-portfolio-accent/90 text-white hover:bg-portfolio-accent"
                          >
                            {product.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 left-4 w-10 h-10 bg-portfolio-navy/90 rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-portfolio-navy group-hover:text-portfolio-accent transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-portfolio-light-text text-sm mt-2 line-clamp-3">
                            {product.description}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-1">
                            {product.features.map((feature, index) => (
                              <Badge 
                                key={index} 
                                variant="outline" 
                                className="text-xs bg-portfolio-light-blue/20 border-portfolio-teal/30 text-portfolio-navy"
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-2 border-t border-portfolio-light-blue/30">
                            <span className="text-2xl font-bold text-portfolio-accent">
                              {product.price}
                            </span>
                            <Button 
                              className="bg-portfolio-navy hover:bg-portfolio-dark-accent text-white group-hover:shadow-lg transition-all duration-300"
                              size="sm"
                            >
                              View Details
                              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 border-portfolio-teal/30 text-portfolio-navy hover:bg-portfolio-light-blue hover:text-white" />
          <CarouselNext className="hidden md:flex -right-12 bg-white/90 border-portfolio-teal/30 text-portfolio-navy hover:bg-portfolio-light-blue hover:text-white" />
        </Carousel>
      </div>

      <div className="text-center mt-12">
        <p className="text-portfolio-light-text mb-6">
          Interested in custom electronics or have a specific requirement?
        </p>
        <Button 
          size="lg" 
          className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Contact for Custom Orders
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
