
import { Code, Database, Cpu, Server, Terminal, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Tools",
      icon: <Wrench className="h-6 w-6 text-portfolio-teal" />,
      skills: ["Embedded C", "Python", "Arduino", "ARM", "KiCad", "Matlab/Simulink", "Microwind2", "DSCH2", "OpenRocket", "Virtuoso"]
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6 text-portfolio-teal" />,
      skills: ["C", "C++", "Bash"]
    },
    {
      title: "Platforms",
      icon: <Server className="h-6 w-6 text-portfolio-teal" />,
      skills: ["Linux", "Trello"]
    },
    {
      title: "Domain Knowledge",
      icon: <Cpu className="h-6 w-6 text-portfolio-teal" />,
      skills: ["IoT", "Analog Layout Design", "VLSI", "Circuit Design", "PCB Design"]
    }
  ];

  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-portfolio-teal/10 rounded-full flex items-center justify-center">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-portfolio-navy mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="bg-portfolio-teal/10 text-portfolio-teal px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
