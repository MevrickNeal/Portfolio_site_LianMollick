import { Award as AwardIcon } from "lucide-react";

export default function Awards() {
  return (
    <section id="awards" className="section-container">
      <h2 className="section-title">Awards & Recognition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Award 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
              <AwardIcon className="h-6 w-6 text-portfolio-navy" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-portfolio-navy">Technoxian WRC National Finalist 2024 (Top 3)</h3>
              <p className="text-portfolio-light-text">
                Recognized as a national finalist in the World Robotics Championship 2024 for innovative robot design and functionality.
              </p>
            </div>
          </div>
        </div>
        
        {/* Award 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
              <AwardIcon className="h-6 w-6 text-portfolio-navy" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-portfolio-navy">NASA Space Apps Challenge 2023</h3>
              <p className="text-portfolio-light-text">
                Won the NASA Space Apps Challenge 2023 for developing an innovative solution to space weather prediction using AI.
              </p>
            </div>
          </div>
        </div>

        {/* Award 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
              <AwardIcon className="h-6 w-6 text-portfolio-navy" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-portfolio-navy">IIT Techfest 2024</h3>
              <p className="text-portfolio-light-text">
                Secured a position in the top 10 in the IIT Techfest 2024, showcasing advanced technical skills and project execution.
              </p>
            </div>
          </div>
        </div>

        {/* Award 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-portfolio-navy/10 rounded-full flex items-center justify-center">
              <AwardIcon className="h-6 w-6 text-portfolio-navy" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-portfolio-navy">Technoxian 2023</h3>
              <p className="text-portfolio-light-text">
                Achieved a top rank in Technoxian 2023, demonstrating expertise in robotics and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
