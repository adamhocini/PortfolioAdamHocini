import React from 'react';
import { ChevronDown, MapPin, Mail, Languages } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#1A151F] via-[#1A151F] to-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Photo/Avatar placeholder */}
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-[#00C897] to-[#00A082] rounded-full flex items-center justify-center mb-8 transform hover:scale-105 transition-transform duration-300">
            <span className="text-4xl font-bold text-[#1A151F]">AH</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5F5]">
              Bonjour, je suis <span className="text-[#00C897]">Adam</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#F5F5F5]/80 font-light">
              Développeur Power Platform & JavaScript
            </h2>
            <p className="text-lg sm:text-xl text-[#F5F5F5]/70 max-w-3xl mx-auto leading-relaxed">
              Passionné par la tech, l'UX et les solutions Power Platform. 
              Je transforme vos besoins métier en applications performantes et intuitives.
            </p>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8">
            <div className="bg-[#2A2A2A]/50 backdrop-blur-sm rounded-lg p-4 hover:bg-[#2A2A2A]/70 transition-all duration-300">
              <MapPin className="text-[#00C897] mx-auto mb-2" size={24} />
              <p className="text-[#F5F5F5] text-sm">Reventin-Vaugris / Lyon</p>
            </div>
            <div className="bg-[#2A2A2A]/50 backdrop-blur-sm rounded-lg p-4 hover:bg-[#2A2A2A]/70 transition-all duration-300">
              <Mail className="text-[#00C897] mx-auto mb-2" size={24} />
              <p className="text-[#F5F5F5] text-sm">adam.hocini.ah@icloud.com</p>
            </div>
            <div className="bg-[#2A2A2A]/50 backdrop-blur-sm rounded-lg p-4 hover:bg-[#2A2A2A]/70 transition-all duration-300">
              <Languages className="text-[#00C897] mx-auto mb-2" size={24} />
              <p className="text-[#F5F5F5] text-sm">FR / EN / ES</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-[#00C897] hover:bg-[#00A082] text-[#1A151F] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Voir mes projets
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[#00C897] text-[#00C897] hover:bg-[#00C897] hover:text-[#1A151F] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Me contacter
            </button>
          </div>

          <div className="text-[#F5F5F5]/60 text-sm mt-8">
            <p>Disponible pour alternance • freelance • missions Power Platform & JS</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#00C897] animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;