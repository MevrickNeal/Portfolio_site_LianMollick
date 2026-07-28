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
    toast({
      title: "Message Transmitted",
      description: "Thank you for reaching out. I'll get back to you shortly!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-container">
      <span className="section-subtitle font-mono">GET IN TOUCH</span>
      <h2 className="section-title mb-3">Contact & Collaboration</h2>
      <p className="text-slate-400 mb-10 max-w-xl text-sm">
        Open for rocket avionics, GNC research, embedded engineering roles, and technical inquiries.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="tech-card border border-slate-800 space-y-5">
            <h3 className="text-lg font-bold text-white mb-4">Direct Channels</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Email</h4>
                <a href="mailto:lianmollik@gmail.com" className="text-white hover:text-cyan-400 font-mono text-sm font-semibold transition-colors">
                  lianmollik@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Phone</h4>
                <a href="tel:+8801518664917" className="text-white hover:text-cyan-400 font-mono text-sm font-semibold transition-colors">
                  +880 1518 664917
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Location</h4>
                <p className="text-slate-300 text-sm">
                  Dhaka / Mymensingh, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-2">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">LinkedIn</h4>
                <a href="https://linkedin.com/in/lianmollick" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 font-mono text-xs font-semibold">
                  linkedin.com/in/lianmollick
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="tech-card border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2">Send Message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-mono font-bold text-slate-400 uppercase block mb-1">Your Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-950 border-slate-800 text-white focus:border-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="text-[11px] font-mono font-bold text-slate-400 uppercase block mb-1">Your Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-950 border-slate-800 text-white focus:border-cyan-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono font-bold text-slate-400 uppercase block mb-1">Subject</label>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-slate-950 border-slate-800 text-white focus:border-cyan-400"
                required
              />
            </div>

            <div>
              <label className="text-[11px] font-mono font-bold text-slate-400 uppercase block mb-1">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-950 border-slate-800 text-white focus:border-cyan-400 min-h-[120px]"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/20"
            >
              TRANSMIT MESSAGE <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
}
