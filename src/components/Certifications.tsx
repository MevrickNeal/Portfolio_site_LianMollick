
import { FileCheck, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Certifications() {
  const certifications = [
    {
      title: "Semiconductor Fabrication 101",
      issuer: "Purdue University Texas (Intel Sponsored)",
      year: "2023",
      link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m"
    },
    {
      title: "Advanced Hardware & PCB Design Masterclass",
      issuer: "Industry Program",
      year: "2022",
      link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m"
    },
    {
      title: "NASA TOPS Open Science Program",
      issuer: "NASA",
      year: "2023",
      link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m"
    },
    {
      title: "Electrical Engineering Job Simulation",
      issuer: "GE Aerospace (Forage)",
      year: "2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ay2tsYxaTif7Nt6z7/ntFrRvKxX5AmquXRr_ay2tsYxaTif7Nt6z7_RAZA8nua5RLumyJpu_1740978804858_completion_certificate.pdf"
    },
    {
      title: "Industrial Technology on Electrical Engineering",
      issuer: "Training Institute for Chemical Industries (TICI)",
      year: "May 2025",
      link: "https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m?usp=drive_link"
    }
  ];

  return (
    <section id="certifications" className="section-container bg-white">
      <h2 className="section-title">Training and Certified Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {certifications.map((cert, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-portfolio-navy/10 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="h-8 w-8 text-portfolio-navy" />
                </div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-2">{cert.title}</h3>
                <p className="text-portfolio-light-text mb-1">{cert.issuer}</p>
                <p className="text-portfolio-accent font-medium mb-4">{cert.year}</p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-teal hover:text-portfolio-accent transition-colors"
                >
                  View Certificate <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <a 
          href="https://drive.google.com/drive/folders/1cE9iPPTE2vz2R7t6SNu08gT15XpSTB5m" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-portfolio-navy hover:text-portfolio-accent transition-colors font-medium"
        >
          View All Certificates <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
