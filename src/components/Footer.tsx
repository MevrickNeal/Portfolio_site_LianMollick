
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-portfolio-navy text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              Lian<span className="text-portfolio-accent">.</span>
            </h3>
            <p className="mt-2 text-gray-300">Embedded System Designer</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <a 
                href="mailto:lianmollik@gmail.com"
                className="text-gray-300 hover:text-white block mb-2"
              >
                lianmollik@gmail.com
              </a>
              <a 
                href="tel:+8801518664917"
                className="text-gray-300 hover:text-white block"
              >
                +8801518664917
              </a>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/lianmollick" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:lianmollik@gmail.com"
                  className="text-gray-300 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Lian Mollick Nehal. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-gray-300 hover:text-white transition-colors"
          >
            Back to top <ArrowUp className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
