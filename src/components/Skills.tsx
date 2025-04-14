
import { useState } from "react";
import { Code, Database, Cpu, Server, Terminal, Wrench, Zap, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  description: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Technical Tools",
      icon: <Wrench className="h-6 w-6 text-cyber-neon" />,
      description: "Engineering tools used for hardware and embedded design",
      skills: [
        { name: "Embedded C", level: 90 },
        { name: "Python", level: 85 },
        { name: "Arduino", level: 95 },
        { name: "ARM", level: 80 },
        { name: "KiCad", level: 90 },
        { name: "Matlab/Simulink", level: 75 },
        { name: "Microwind2", level: 70 },
        { name: "DSCH2", level: 65 },
        { name: "OpenRocket", level: 85 },
        { name: "Virtuoso", level: 60 }
      ]
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6 text-cyber-pink" />,
      description: "Code languages for embedded systems and automation",
      skills: [
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
        { name: "Bash", level: 70 }
      ]
    },
    {
      title: "Platforms",
      icon: <Server className="h-6 w-6 text-cyber-yellow" />,
      description: "Operating systems and collaboration platforms",
      skills: [
        { name: "Linux", level: 85 },
        { name: "Trello", level: 75 }
      ]
    },
    {
      title: "Domain Knowledge",
      icon: <Cpu className="h-6 w-6 text-cyber-blue" />,
      description: "Specialized technical expertise and design skills",
      skills: [
        { name: "IoT", level: 90 },
        { name: "Analog Layout Design", level: 85 },
        { name: "VLSI", level: 80 },
        { name: "Circuit Design", level: 95 },
        { name: "PCB Design", level: 90 }
      ]
    }
  ];

  const toggleCategory = (index: number) => {
    if (activeCategory === index) {
      setActiveCategory(null);
    } else {
      setActiveCategory(index);
    }
  };

  return (
    <section id="skills" className="section-container bg-cyber-dark/80 relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-30"></div>
      
      {/* Animated scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-4 bg-gradient-to-b from-cyber-neon/20 to-transparent animate-scanline"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-cyber-neon inline-block border-b-2 border-cyber-pink pb-2">
            SKILLS<span className="text-cyber-pink">_</span>
          </h2>
          <div className="flex-1 ml-4 h-px bg-gradient-to-r from-cyber-neon via-cyber-pink to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`border border-cyan-900/50 bg-cyber-black/90 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,252,0.5)] ${activeCategory === index ? 'border-cyber-neon' : ''}`}
            >
              <CardContent className="p-0">
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleCategory(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyber-dark to-black rounded-md flex items-center justify-center border border-cyber-neon/30">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cyber-neon mb-1 flex items-center">
                          {category.title}
                          <ChevronRight 
                            className={`ml-2 h-5 w-5 transition-transform duration-300 ${activeCategory === index ? 'rotate-90' : ''}`} 
                          />
                        </h3>
                        <p className="text-cyber-muted text-sm">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {activeCategory === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-cyber-neon/30 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.skills.map((skill, idx) => (
                        <div key={idx} className="group">
                          <div className="flex justify-between mb-1">
                            <span className="text-cyber-text group-hover:text-cyber-neon transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-sm text-cyber-pink">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-cyber-dark/50 rounded-full overflow-hidden border border-cyber-neon/20">
                            <div 
                              className="h-full bg-gradient-to-r from-cyber-neon to-cyber-blue transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%`, boxShadow: '0 0 10px rgba(0, 255, 252, 0.7)' }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
