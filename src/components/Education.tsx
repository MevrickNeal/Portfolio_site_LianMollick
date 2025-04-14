
import { BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="section-container bg-gray-50">
      <h2 className="section-title">Education</h2>
      <div className="space-y-8 mt-8">
        <Card className="card-hover animate-fade-in">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-portfolio-teal/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-portfolio-teal" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-portfolio-navy">B.Sc. in Electrical and Electronic Engineering</h3>
                  <span className="text-portfolio-accent font-medium">2020 - Present</span>
                </div>
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  Mymensingh Engineering College 
                  <a href="http://mec.ac.bd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center ml-2 text-portfolio-teal hover:text-portfolio-navy">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </h4>
                <p className="text-portfolio-light-text mb-4">
                  Currently pursuing a bachelor's degree with a focus on embedded systems and electronics design.
                </p>
                <div>
                  <h5 className="font-medium mb-2">Key Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    {["VLSI Circuits", "Control Systems", "DSP", "Optical Fiber Communication", "Embedded Systems", "Digital Electronics"].map((course) => (
                      <span key={course} className="bg-portfolio-teal/10 text-portfolio-teal px-3 py-1 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover animate-fade-in delay-100">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-portfolio-teal/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-portfolio-teal" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-portfolio-navy">Higher Secondary Certificate (HSC)</h3>
                  <span className="text-portfolio-accent font-medium">2017 - 2019</span>
                </div>
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  Shaheed Police Smrity College
                  <a href="https://www.spsc.edu.bd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center ml-2 text-portfolio-teal hover:text-portfolio-navy">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </h4>
                <p className="text-portfolio-light-text mb-4">
                  Completed HSC with focus on science subjects, achieving a GPA of 4.75 out of 5.00.
                </p>
                <div>
                  <h5 className="font-medium mb-2">Achievements:</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-portfolio-teal/10 text-portfolio-teal px-3 py-1 rounded-full text-sm">
                      GPA: 4.75/5.00
                    </span>
                    <span className="bg-portfolio-teal/10 text-portfolio-teal px-3 py-1 rounded-full text-sm">
                      Science Group
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
