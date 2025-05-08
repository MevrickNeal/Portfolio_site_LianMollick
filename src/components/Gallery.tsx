
import { Image, Camera } from "lucide-react";

export default function Gallery() {
  return (
    <section id="gallery" className="section-container bg-white">
      <h2 className="section-title">Gallery</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {/* Image placeholders that will be populated later */}
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <img 
            src="/lovable-uploads/c7364aa4-f619-4066-8c11-4af77564283c.png" 
            alt="Award ceremony photo" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-3 bg-white">
            <p className="text-portfolio-light-text text-sm">Award ceremony at the Rocketry Innovation Challenge 2022</p>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <img 
            src="/lovable-uploads/e00a481e-4e06-4e62-b409-b39661c31fcd.png" 
            alt="NASA Space Apps Challenge" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-3 bg-white">
            <p className="text-portfolio-light-text text-sm">Award ceremony at NASA Space Apps Challenge 2023</p>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <img 
            src="/lovable-uploads/ecf8b8e8-f9be-4a89-9b69-a4578f9ba6df.png" 
            alt="National STEAM Olympiad" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-3 bg-white">
            <p className="text-portfolio-light-text text-sm">Receiving recognition at the National STEAM Olympiad</p>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <img 
            src="/lovable-uploads/98808512-2995-4e9b-822e-702b4422ce82.png" 
            alt="3rd National Science Fest" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-3 bg-white">
            <p className="text-portfolio-light-text text-sm">Award ceremony at 3rd National Science Fest</p>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <img 
            src="/lovable-uploads/01c1360a-62bc-4bad-996f-e32d933b1d48.png" 
            alt="Technoxian WRC" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-3 bg-white">
            <p className="text-portfolio-light-text text-sm">Team presentation at Technoxian World Robotics Championship 2024</p>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <img 
            src="/lovable-uploads/34415cf9-ffa7-445e-ac9e-d7c51cbbc77c.png" 
            alt="ULKASEMI Training" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-3 bg-white">
            <p className="text-portfolio-light-text text-sm">Certificate of Appreciation from ULKASEMI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
