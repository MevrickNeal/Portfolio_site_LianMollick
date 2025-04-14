
import { Award, Trophy, Medal, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Awards() {
  return (
    <section id="awards" className="section-container bg-white">
      <h2 className="section-title">Competitions & Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card className="card-hover bg-gradient-to-br from-white to-amber-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Trophy className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-portfolio-navy">Winner</h3>
                  <span className="ml-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs">1st Place</span>
                </div>
                <h4 className="text-lg text-portfolio-light-text mb-1">Rocketry Innovation Challenge 2022</h4>
                <p className="text-sm text-portfolio-light-text mb-2">
                  Organized by a2i & Bangabandhu Aviation and Aerospace University
                </p>
                <a 
                  href="https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-teal hover:text-portfolio-accent transition-colors inline-flex items-center text-sm"
                >
                  View Certificate <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <Medal className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-portfolio-navy">1st Runners-Up</h3>
                  <span className="ml-2 bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">2nd Place</span>
                </div>
                <h4 className="text-lg text-portfolio-light-text mb-1">NASA Space Apps Challenge 2023</h4>
                <p className="text-sm text-portfolio-light-text mb-2">
                  Team Solar Sentinel
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <Medal className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-portfolio-navy">1st Runners-Up</h3>
                  <span className="ml-2 bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">2nd Place</span>
                </div>
                <h4 className="text-lg text-portfolio-light-text mb-1">3rd National Science Fest</h4>
                <p className="text-sm text-portfolio-light-text mb-2">
                  Project: Wireless Energy Transmission
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-portfolio-teal/10 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-portfolio-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">Competition Participation</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-portfolio-teal rounded-full mr-2"></span>
                    <span className="text-portfolio-light-text">IIT Techfest (IUBAT) - Combat Robotics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-portfolio-teal rounded-full mr-2"></span>
                    <span className="text-portfolio-light-text">Technoxian 2023 - Battle Bot Competition</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-portfolio-teal rounded-full mr-2"></span>
                    <span className="text-portfolio-light-text">World Robotics Championship 2024</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
