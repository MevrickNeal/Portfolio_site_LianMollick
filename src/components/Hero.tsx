
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-portfolio-light-blue/20 to-white"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <p className="text-portfolio-accent font-medium mb-2 tracking-wider">EMBEDDED SYSTEM DESIGNER</p>
            <h1 className="text-5xl md:text-6xl font-bold text-portfolio-navy mb-4">
              Lian Mollick Nehal
            </h1>
            <p className="text-xl text-portfolio-light-text mb-8 max-w-lg">
              Passionate about rocket avionics, embedded systems, and hardware design.
              Building innovative solutions for real-world challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-portfolio-navy hover:bg-portfolio-dark-accent text-white">
                <a href="#contact" className="flex items-center">
                  Contact Me <MailIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-portfolio-navy text-portfolio-navy hover:bg-portfolio-navy hover:text-white">
                <a href="#projects" className="flex items-center">
                  View Projects <ArrowDownIcon className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex items-center mt-8 space-x-4">
              <a 
                href="https://linkedin.com/in/lianmollick" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-navy hover:text-portfolio-accent transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-navy hover:text-portfolio-accent transition-colors"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-pulse-soft">
                <img 
                  src="/lovable-uploads/97da3591-aa27-464b-b81c-c8d2f868ba6e.png" 
                  alt="Lian Mollick Nehal" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-portfolio-accent text-white py-2 px-4 rounded-lg shadow-lg">
                <p className="font-semibold">Embedded Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-portfolio-navy hover:text-portfolio-accent">
          <ArrowDownIcon className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
