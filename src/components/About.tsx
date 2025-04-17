
import { Calendar, Globe, Mail, MapPin, Phone, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-container bg-white">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <p className="text-lg text-portfolio-light-text mb-6">
            Passionate about electronics, robotics, rocketry, and all things that fly, I am an Electrical and Electronic Engineering graduate with hands-on experience in embedded systems, rocket telemetry, and guidance systems.
          </p>
          <p className="text-lg text-portfolio-light-text mb-6">
            At DhumketuX, I work on rocket avionics circuit assembly, sensor integration, and telemetry systems. My focus is on creating reliable electronic systems that can withstand the extreme conditions of rocket launches.
          </p>
          <p className="text-lg text-portfolio-light-text">
            I aim to dive deeper into Guidance, Navigation, and Control (GNC) to ensure that rockets find their way—because getting lost in space isn't an option!
          </p>
        </div>
        <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-portfolio-navy mb-4">Personal Information</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <User className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
              <div>
                <p className="font-medium">Full Name</p>
                <p className="text-portfolio-light-text">Lian Mollick Nehal</p>
              </div>
            </li>
            <li className="flex items-start">
              <Calendar className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
              <div>
                <p className="font-medium">Date of Birth</p>
                <p className="text-portfolio-light-text">19 November 2000</p>
              </div>
            </li>
            <li className="flex items-start">
              <Globe className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
              <div>
                <p className="font-medium">Nationality</p>
                <p className="text-portfolio-light-text">Bangladeshi</p>
              </div>
            </li>
            <li className="flex items-start">
              <Mail className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-portfolio-light-text">lianmollik@gmail.com</p>
              </div>
            </li>
            <li className="flex items-start">
              <Phone className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-portfolio-light-text">+8801518664917</p>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-portfolio-accent mr-3 mt-1" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-portfolio-light-text">Eastern Housing, Rupnagar, Mirpur, Dhaka-1216, Bangladesh</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Project NealDX Logo */}
      <div className="flex justify-center mt-12">
        <div className="max-w-md">
          <img 
            src="/lovable-uploads/1f0035ab-5c37-4af5-bc47-f963b943b90e.png" 
            alt="Project NealDX" 
            className="w-full" 
          />
        </div>
      </div>
    </section>
  );
}
