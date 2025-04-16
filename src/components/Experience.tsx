
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-white">
      <h2 className="section-title">Experience</h2>
      
      <Tabs defaultValue="work" className="mt-8">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="work" className="text-base">Work Experience</TabsTrigger>
          <TabsTrigger value="training" className="text-base">Training</TabsTrigger>
        </TabsList>
        
        {/* Work Experience Tab */}
        <TabsContent value="work" className="animate-fade-in">
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-portfolio-accent/10 rounded-full flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-portfolio-accent" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-portfolio-navy">Embedded System Designer</h3>
                      <span className="text-portfolio-accent font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> Feb 2021 - Present
                      </span>
                    </div>
                    <h4 className="text-lg font-medium mb-4">DhumketuX, Mymensingh</h4>
                    <ul className="space-y-2 list-disc list-inside text-portfolio-light-text">
                      <li>Designed and assembled rocket avionics circuits for multiple projects</li>
                      <li>Integrated various sensors including accelerometers, gyroscopes, and GPS modules</li>
                      <li>Conducted research and development on telemetry and tracking systems</li>
                      <li>Coordinated avionics and live feedback systems during test launches</li>
                      <li>Performed hardware testing and troubleshooting for mission-critical systems</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-portfolio-accent/10 rounded-full flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-portfolio-accent" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-portfolio-navy">Head of Robotics</h3>
                      <span className="text-portfolio-accent font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> 2022 - Present
                      </span>
                    </div>
                    <h4 className="text-lg font-medium mb-4">Alpha Science Lab</h4>
                    <ul className="space-y-2 list-disc list-inside text-portfolio-light-text">
                      <li>Mentored junior engineers on robotics design principles and practices</li>
                      <li>Led multiple robotics projects including competition robots</li>
                      <li>Organized workshops and training sessions on robotics and electronics</li>
                      <li>Managed a team of student engineers for various technical competitions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-portfolio-accent/10 rounded-full flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-portfolio-accent" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-portfolio-navy">Event Organizer</h3>
                      <span className="text-portfolio-accent font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> 2023 - Present
                      </span>
                    </div>
                    <h4 className="text-lg font-medium mb-4">Alpha Science Lab & Devsphear</h4>
                    <ul className="space-y-2 list-disc list-inside text-portfolio-light-text">
                      <li>Organized technical seminars on engineering career paths</li>
                      <li>Coordinated "Cha Adda with Uddokta" entrepreneur story sharing events</li>
                      <li>Managed .NET video conferences for technology enthusiasts</li>
                      <li>Leading organization of Devsphear Hackathon 2025 focused on AI and prompt engineering challenges</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Training Tab */}
        <TabsContent value="training" className="animate-fade-in">
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-portfolio-navy">Semiconductor Fabrication 101</h3>
                  <div className="flex flex-wrap justify-between items-center">
                    <h4 className="text-lg font-medium">Purdue University Texas (Intel Sponsored)</h4>
                    <span className="text-portfolio-accent font-medium">2023</span>
                  </div>
                  <p className="text-portfolio-light-text">
                    Comprehensive training on semiconductor fabrication processes, wafer processing, and chip design fundamentals. Intel-sponsored program focused on practical industry applications.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-portfolio-navy">Advanced Hardware & PCB Design Masterclass</h3>
                  <div className="flex flex-wrap justify-between items-center">
                    <h4 className="text-lg font-medium">Industry Program</h4>
                    <span className="text-portfolio-accent font-medium">2022</span>
                  </div>
                  <p className="text-portfolio-light-text">
                    Intensive hands-on training on advanced PCB design techniques, including high-speed design considerations, impedance control, and manufacturing processes for complex electronic systems.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-portfolio-navy">NASA TOPS Open Science Program</h3>
                  <div className="flex flex-wrap justify-between items-center">
                    <h4 className="text-lg font-medium">NASA</h4>
                    <span className="text-portfolio-accent font-medium">2023</span>
                  </div>
                  <p className="text-portfolio-light-text">
                    Training on NASA's Transform to Open Science (TOPS) program, focusing on open science principles, collaborative research methodologies, and data sharing practices in aerospace technology.
                  </p>
                  <a 
                    href="https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-teal hover:text-portfolio-accent transition-colors inline-flex items-center"
                  >
                    View Certificate <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-portfolio-navy">Electrical Engineering Job Simulation</h3>
                  <div className="flex flex-wrap justify-between items-center">
                    <h4 className="text-lg font-medium">GE Aerospace (Forage)</h4>
                    <span className="text-portfolio-accent font-medium">2025</span>
                  </div>
                  <p className="text-portfolio-light-text">
                    Virtual job simulation focused on aerospace electrical engineering practices, system design, and troubleshooting. Industry-relevant training covering real-world aerospace engineering challenges.
                  </p>
                  <a 
                    href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ay2tsYxaTif7Nt6z7/ntFrRvKxX5AmquXRr_ay2tsYxaTif7Nt6z7_RAZA8nua5RLumyJpu_1740978804858_completion_certificate.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-teal hover:text-portfolio-accent transition-colors inline-flex items-center"
                  >
                    View Certificate <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-portfolio-navy">Industrial Technology on Electrical Engineering</h3>
                  <div className="flex flex-wrap justify-between items-center">
                    <h4 className="text-lg font-medium">Training Institute for Chemical Industries (TICI)</h4>
                    <span className="text-portfolio-accent font-medium">May 2025</span>
                  </div>
                  <p className="text-portfolio-light-text">
                    Specialized training on industrial electrical systems, focusing on implementation and maintenance of electrical infrastructure in chemical and manufacturing environments.
                  </p>
                  <a 
                    href="https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m?usp=drive_link" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-teal hover:text-portfolio-accent transition-colors inline-flex items-center"
                  >
                    View Certificate <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
