
import { ExternalLink, Youtube, Rocket, Bot, Smartphone, Cpu, Satellite } from "lucide-react";
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
                    src="/lovable-uploads/3bdf51d8-1122-46a2-82ca-48f6ffc98de1.png" 
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
                    src="/lovable-uploads/a7b917fd-f5c0-4add-b4bc-28c1906dc326.png" 
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
                <Satellite className="h-6 w-6 text-portfolio-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">Space Weather Prediction</h3>
                <p className="text-portfolio-light-text mb-4">
                  Developed an AI-assisted advanced software system that detects faulty behavior and inconsistencies in DSCOVR's real-time data. Using historical data to train machine learning models to observe DSCOVR's data and predict occasional faults in its readings that may prevent damages from solar storms and geomagnetic disruptions on Earth.
                </p>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/b9d2c90a-71e6-4f1c-accd-de40b7a9b806.png" 
                    alt="Space Weather Prediction Dashboard" 
                    className="w-full rounded-lg border border-gray-200 shadow-sm" 
                  />
                  <p className="text-sm text-portfolio-light-text mt-2 italic">
                    RSSI - Team SolarSentinel dashboard showing solar wind and geomagnetic field data
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
                <Satellite className="h-6 w-6 text-portfolio-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">Ground Station Unit for Small Scaled Rocket</h3>
                <p className="text-portfolio-light-text mb-4">
                  LoRa based communication module and a custom GUI system integrated WebApp is developed showing real time updates of the rocket data logger. Features live telemetry monitoring, GPS tracking, altitude/velocity graphs, and 3D trajectory visualization.
                </p>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/8fe81e8c-3d39-45f9-8ea2-3707ad4088e2.png" 
                    alt="Ground Station Telemetry Interface" 
                    className="w-full rounded-lg border border-gray-200 shadow-sm" 
                  />
                  <p className="text-sm text-portfolio-light-text mt-2 italic">
                    Real-time telemetry interface showing rocket flight data and visualization
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
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">IOT Low Cost Smart Solution for Water Purifier</h3>
                <p className="text-portfolio-light-text mb-4">
                  IoT low cost smart solution for Water Purifier water flow count and cartridge replacement notifier with separate counter for each cartridge, admin panel and direct console control with HTML CSS coded user interface.
                </p>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/56392b97-45a5-4722-a185-5c4d1221044c.png" 
                    alt="Dr. Water Live Monitor Dashboard" 
                    className="w-full rounded-lg border border-gray-200 shadow-sm" 
                  />
                  <p className="text-sm text-portfolio-light-text mt-2 italic">
                    Dr. Water Live Monitor - Real-time water flow monitoring and cartridge management dashboard
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
                    src="/lovable-uploads/cacaca86-a46b-419a-bec9-5777b25a91a1.png" 
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
                <Rocket className="h-6 w-6 text-portfolio-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">DETS - Static Fire Test Unit with Thrust Measuring System for DhumketuX</h3>
                <p className="text-portfolio-light-text mb-4">
                  Designed and developed the DhumketuX Engine Telemetry System (DETS), a high-reliability, bi-directional telemetry and ignition-control system for the DhumketuX Propulsion Research Program. The system enables safe remote rocket engine testing with real-time telemetry (thrust, temperature, humidity) via a web-based mission control UI. Features custom GUI-based ground station unit, long-range communication system, data logging, and two-way data transmission with safety-first workflow for arming and remote ignition.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <img 
                      src="/lovable-uploads/dhumketux-ground-station.jpg" 
                      alt="DhumketuX Ground Station Hardware" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      Ground station unit with rugged case and long-range communication system
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/dhumketux-gui.png" 
                      alt="DhumketuX Mission Control GUI" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      Real-time mission control interface with thrust graph, video feed, and system controls
                    </p>
                  </div>
                </div>
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
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">Thesis: Active Control and Thrust Vector Control system of a Amateur Rocket Flight Stabilization using PID</h3>
                <p className="text-portfolio-light-text mb-4">
                  Research and implementation of advanced navigation and control systems for stabilizing rocket flight. The thesis explores various control methodologies including thrust vector control for achieving precise flight paths.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <img 
                      src="/lovable-uploads/9bb0f2d1-6f94-4e8c-8f1b-d67358fe2989.png" 
                      alt="Rocket Flight Simulation" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      ProjectNeal1.2 Rocket Flight Simulation showing velocity, acceleration, and trajectory data
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/f76e9520-627b-496b-b2ad-6c3ad9625331.png" 
                      alt="PID Simulation Control System" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      Thrust Vector Control System Using LTI & PID - Complete control system simulation
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/9276d9c7-e271-46ce-93a0-3812a467b57b.png" 
                      alt="Angle Degrees Simulation" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      Angular response simulation showing rocket stabilization over time
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/2af70cce-1601-40a8-a6c5-fe74bc9d42a5.png" 
                      alt="Orientation TVC Output" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      Orientation/TVC Output showing target setpoint vs actual output with PID control
                    </p>
                  </div>
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
