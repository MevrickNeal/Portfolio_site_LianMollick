
import { ExternalLink, Youtube, Rocket, Bot, Smartphone, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-gray-50">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
                <Rocket className="h-6 w-6 text-portfolio-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">PUTIMACH - Bangladesh's First Sounding Rocket</h3>
                <p className="text-portfolio-light-text mb-4">
                  Contributed to the design and implementation of avionics systems for Bangladesh's first sounding rocket. The project included telemetry systems, sensor integration, and flight control mechanisms.
                </p>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/97da3591-aa27-464b-b81c-c8d2f868ba6e.png" 
                    alt="PUTIMACH Rocket Launch" 
                    className="w-full rounded-lg border border-gray-200 shadow-sm" 
                  />
                  <p className="text-sm text-portfolio-light-text mt-2 italic">
                    PUTIMACH rocket launch during test flight
                  </p>
                </div>
                <a 
                  href="https://www.youtube.com/watch?v=CuOzP50KKY4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-accent hover:text-portfolio-navy transition-colors"
                >
                  <Youtube className="h-5 w-5 mr-1" /> Watch Video
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
                <Rocket className="h-6 w-6 text-portfolio-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">Rocket Avionics Testing & Video Transmission</h3>
                <p className="text-portfolio-light-text mb-4">
                  Designed and implemented a complete avionics testing platform with real-time video transmission capabilities for rocket flight tests. The system provides critical flight data and live video feed during test launches.
                </p>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/3bdf51d8-1122-46a2-82ca-48f6ffc98de1.png" 
                    alt="Rocket Avionics Testing" 
                    className="w-full rounded-lg border border-gray-200 shadow-sm" 
                  />
                  <p className="text-sm text-portfolio-light-text mt-2 italic">
                    Testing rocket avionics and telemetry systems in the field
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-portfolio-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">Smart Home Automation & Anti Power Theft System</h3>
                <p className="text-portfolio-light-text mb-4">
                  Developed an IoT-based smart home system with integrated power theft detection capabilities. The system includes remote monitoring, automated control, and security features to prevent unauthorized electricity usage.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6 text-portfolio-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">Combat Robot (15kg Battle Bot)</h3>
                <p className="text-portfolio-light-text mb-4">
                  Designed and built a 15kg combat robot for various national and international competitions, including IIT Techfest, Technoxian 2023, and World Robotics Championship 2024.
                </p>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/a7b917fd-f5c0-4add-b4bc-28c1906dc326.png" 
                    alt="Combat Robot Team" 
                    className="w-full rounded-lg border border-gray-200 shadow-sm" 
                  />
                  <p className="text-sm text-portfolio-light-text mt-2 italic">
                    Team Alpha Science Lab with the combat robot at Technoxian World Robotics Championship
                  </p>
                </div>
                <a 
                  href="https://www.facebook.com/photo/?fbid=122153093834048239&set=pcb.122153094566048239" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-accent hover:text-portfolio-navy transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-1" /> View Project
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
                <Cpu className="h-6 w-6 text-portfolio-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">Thesis: Guided Rocket Flight Stabilization using Navigation and Control</h3>
                <p className="text-portfolio-light-text mb-4">
                  Research and implementation of advanced navigation and control systems for stabilizing rocket flight. The thesis explores various control methodologies including thrust vector control for achieving precise flight paths.
                </p>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/9bb0f2d1-6f94-4e8c-8f1b-d67358fe2989.png" 
                    alt="Rocket Flight Simulation" 
                    className="w-full rounded-lg border border-gray-200 shadow-sm" 
                  />
                  <p className="text-sm text-portfolio-light-text mt-2 italic">
                    ProjectNeal1.2 Rocket Flight Simulation showing velocity, acceleration, and trajectory data
                  </p>
                </div>
                <a 
                  href="https://www.linkedin.com/posts/lianmollick_rocketry-thesisdefense-thrustvectorcontrol-activity-7290674776816173056-7DhU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-accent hover:text-portfolio-navy transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-1" /> LinkedIn Post
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
