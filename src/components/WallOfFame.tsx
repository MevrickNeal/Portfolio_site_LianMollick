
import { Award, Trophy, Medal, Star, Zap, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function WallOfFame() {
  return (
    <section id="wall-of-fame" className="section-container bg-gray-50">
      <h2 className="section-title">Wall of Fame</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <Card className="card-hover bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-portfolio-navy">Galactic Problem Solver</h3>
              </div>
              
              <p className="text-portfolio-light-text">
                Awarded at NASA Space Apps Challenge 2023 for outstanding participation and efforts to solve challenges on Earth and in space.
              </p>
              
              <div className="mb-3">
                <img 
                  src="/lovable-uploads/2ab5c8fd-6973-401f-af1d-14d4d177c442.png" 
                  alt="Galactic Problem Solver Certificate" 
                  className="w-full rounded-lg border border-gray-200 shadow-sm" 
                />
                <p className="text-sm text-portfolio-light-text mt-2 italic">
                  Awarded Galactic Problem Solver at NASA Space Apps Challenge 2023
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover bg-gradient-to-br from-indigo-50 to-blue-50">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-portfolio-navy">Planetary Defender</h3>
              </div>
              
              <p className="text-portfolio-light-text">
                Official recognition from NASA for contributions to the Double Asteroid Redirection Test (DART) mission.
              </p>
              
              <div className="mb-3">
                <img 
                  src="/lovable-uploads/8c15f52e-3b9c-4253-8c71-1d62bf2ba066.png" 
                  alt="Planetary Defender Certificate" 
                  className="w-full rounded-lg border border-gray-200 shadow-sm" 
                />
                <p className="text-sm text-portfolio-light-text mt-2 italic">
                  Planetary Defender on NASA's Double Asteroid Redirection Test
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-portfolio-navy">International Asteroid Search Collaboration</h3>
              </div>
              
              <p className="text-portfolio-light-text">
                Contributed to asteroid discovery as part of Team MeteoriteX under the NASA-supported IASC program. One of our findings, P129NRx, was recorded as a preliminary discovery.
              </p>
              
              <div className="mb-3">
                <img 
                  src="/lovable-uploads/7d87ae07-384d-4b6f-8329-c6d75a883dc4.png" 
                  alt="International Astronomical Search Collaboration Certificate" 
                  className="w-full rounded-lg border border-gray-200 shadow-sm" 
                />
                <p className="text-sm text-portfolio-light-text mt-2 italic">
                  Certificate from the International Astronomical Search Collaboration (IASC)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Medal className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-portfolio-navy">1st Runner Up - NASA Space Apps Challenge</h3>
              </div>
              
              <p className="text-portfolio-light-text">
                Achieved 1st Runner Up position (Mymensingh) at NASA Space Apps Challenge Bangladesh 2023 as part of Team SolarSentinel for outstanding participation and efforts to solve challenges on Earth and in space.
              </p>
              
              <div className="mb-3">
                <img 
                  src="/lovable-uploads/429deff5-c417-48f8-8aed-2b208ab805ac.png" 
                  alt="NASA Space Apps Challenge 1st Runner Up Certificate" 
                  className="w-full rounded-lg border border-gray-200 shadow-sm" 
                />
                <p className="text-sm text-portfolio-light-text mt-2 italic">
                  1st Runner Up at NASA Space Apps Challenge Bangladesh 2023
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover bg-gradient-to-br from-red-50 to-orange-50">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-portfolio-navy">Technoxian National Round 2024</h3>
              </div>
              
              <p className="text-portfolio-light-text">
                Certificate of participation in the 1st Technoxian Bangladesh National Round 2024, entering into the world's largest robotics competition organized by Bangladesh Open Source Network and Frontiers Limited.
              </p>
              
              <div className="mb-3">
                <img 
                  src="/lovable-uploads/1e267b93-7f22-4576-954d-f6f8c53ad535.png" 
                  alt="Technoxian National Round 2024 Certificate" 
                  className="w-full rounded-lg border border-gray-200 shadow-sm" 
                />
                <p className="text-sm text-portfolio-light-text mt-2 italic">
                  Certificate of Participation in Technoxian Bangladesh National Round 2024
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover bg-gradient-to-br from-cyan-50 to-teal-50">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-portfolio-navy">Xylem Global Student Innovation Challenge 2025</h3>
              </div>
              
              <p className="text-portfolio-light-text">
                Completion of project submission for the 2025 Xylem Global Student Innovation Challenge, focusing on innovative solutions for water and environmental challenges.
              </p>
              
              <div className="mb-3">
                <img 
                  src="/lovable-uploads/4110bdb4-908d-4993-ba9d-6df3c08c8453.png" 
                  alt="Xylem Global Student Innovation Challenge 2025 Certificate" 
                  className="w-full rounded-lg border border-gray-200 shadow-sm" 
                />
                <p className="text-sm text-portfolio-light-text mt-2 italic">
                  Project Submission Certificate for Xylem Global Student Innovation Challenge 2025
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
