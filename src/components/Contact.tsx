
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to a backend service in a real application
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-container bg-gray-50">
      <h2 className="section-title">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div>
          <h3 className="text-2xl font-bold text-portfolio-navy mb-6">Contact Me</h3>
          <p className="text-portfolio-light-text mb-8">
            I'm always interested in new opportunities, projects, and collaborations. 
            Feel free to reach out if you have any questions or just want to say hello!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-portfolio-accent mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-portfolio-navy mb-1">Email</h4>
                <a 
                  href="mailto:lianmollik@gmail.com" 
                  className="text-portfolio-light-text hover:text-portfolio-accent transition-colors"
                >
                  lianmollik@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-portfolio-accent mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-portfolio-navy mb-1">Phone</h4>
                <a 
                  href="tel:+8801518664917" 
                  className="text-portfolio-light-text hover:text-portfolio-accent transition-colors"
                >
                  +8801518664917
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-portfolio-accent mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-portfolio-navy mb-1">Location</h4>
                <p className="text-portfolio-light-text">
                  Eastern Housing, Rupnagar, Mirpur, Dhaka-1216, Bangladesh
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Linkedin className="h-6 w-6 text-portfolio-accent mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-portfolio-navy mb-1">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/lianmollick" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-light-text hover:text-portfolio-accent transition-colors break-words"
                >
                  linkedin.com/in/lianmollick
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Github className="h-6 w-6 text-portfolio-accent mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-portfolio-navy mb-1">GitHub</h4>
                <a 
                  href="https://github.com/MevrickNeal" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-light-text hover:text-portfolio-accent transition-colors break-words"
                >
                  github.com/MevrickNeal
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
            <div>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full min-h-[120px] md:h-32"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-portfolio-navy hover:bg-portfolio-dark-accent text-white"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
