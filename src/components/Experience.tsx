
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
                      <h3 className="text-xl font-bold text-portfolio-navy">Embedded System Intern</h3>
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
                      <h3 className="text-xl font-bold text-portfolio-navy">Robotics Lead</h3>
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
                  <h3 className="text-xl font-bold text-portfolio-navy">7 Days Industrial Training on Analog Design</h3>
                  <div className="flex flex-wrap justify-between items-center">
                    <h4 className="text-lg font-medium">ULKASEMI PVT Limited</h4>
                    <span className="text-portfolio-accent font-medium">2024</span>
                  </div>
                  <p className="text-portfolio-light-text">
                    Intensive industrial training focused on Analog Design, IC Mask Design (Mixed-Signal Layout), and IC Physical Design. Conducted hands-on work with industry-standard tools and methodologies.
                  </p>
                  <div className="mb-3">
                    <img 
                      src="/lovable-uploads/34415cf9-ffa7-445e-ac9e-d7c51cbbc77c.png" 
                      alt="ULKASEMI Training Certificate" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      Certificate of Appreciation from ULKASEMI for completing the industrial training
                    </p>
                  </div>
                  <a 
                    href="https://drive.google.com/file/d/1I2O84TAIzwUc64hMu_hTgsM5hklZjBLS/view?usp=sharing" 
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
                  <h3 className="text-xl font-bold text-portfolio-navy">Semiconductor Fabrication 101</h3>
                  <div className="flex flex-wrap justify-between items-center">
                    <h4 className="text-lg font-medium">Purdue University Texas (Intel Sponsored)</h4>
                    <span className="text-portfolio-accent font-medium">2023</span>
                  </div>
                  <p className="text-portfolio-light-text">
                    Comprehensive training on semiconductor fabrication processes, wafer processing, and chip design fundamentals. Intel-sponsored program focused on practical industry applications.
                  </p>
                  <div className="mb-3">
                    <img 
                      src="/lovable-uploads/3517d79a-d999-4d53-9657-4b63294aff2c.png" 
                      alt="Semiconductor Fabrication Certificate" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      Certificate of Completion for Semiconductor Fabrication 101
                    </p>
                  </div>
                  <a 
                    href="https://drive.google.com/file/d/14ia5I0FDjxTf5xi-Km52sgq4yWEfW-DS/view?usp=drive_link" 
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
                  <div className="mb-3">
                    <img 
                      src="/lovable-uploads/17bb8bd3-60ac-4845-b7b6-a7873fdef2ab.png" 
                      alt="NASA TOPS Certificate" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      NASA TOPS Open Science Program Certificate of Achievement
                    </p>
                  </div>
                  <a 
                    href="https://drive.google.com/file/d/1KuzsNyLZcl4_8vKka9NezhwVf94Iz1a9/view?usp=drive_link" 
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
                  <div className="mb-3">
                    <img 
                      src="/lovable-uploads/2d8f4dce-367b-4608-a99e-691c8d31dd08.png" 
                      alt="GE Aerospace Job Simulation Certificate" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      GE Aerospace Electrical Engineering Job Simulation Certificate
                    </p>
                  </div>
                  <a 
                    href="https://drive.google.com/file/d/1XNnSxMHMGWc4CjjUxsWN4oxMW0STRNHh/view?usp=drive_link" 
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
                  <div className="mb-3">
                    <img 
                      src="/lovable-uploads/603836fa-feeb-4a00-b7fd-0bd5609a9888.png" 
                      alt="TICI Industrial Technology Certificate" 
                      className="w-full rounded-lg border border-gray-200 shadow-sm" 
                    />
                    <p className="text-sm text-portfolio-light-text mt-2 italic">
                      Certificate from Training Institute for Chemical Industries (TICI)
                    </p>
                  </div>
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
