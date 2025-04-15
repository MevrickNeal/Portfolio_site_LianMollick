
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_qeh2lsb";
const EMAILJS_TEMPLATE_ID = "template_k1lcz7j";
const EMAILJS_PUBLIC_KEY = "N6ZKoGLg0GUovM1at";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    try {
      setIsSubmitting(true);
      
      // Send the email using EmailJS
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      // Show success message
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          </div>
        </div>
        
        <div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-white p-4 md:p-6 rounded-lg shadow-sm">
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
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
