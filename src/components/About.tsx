import React from 'react';
import { GraduationCap, Briefcase, Heart, Users, Leaf, Search } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    { degree: "Master ESI", school: "Isitech – EDF", year: "2023-2025" },
    { degree: "Bachelor RPI", school: "Isitech", year: "2022-2023" },
    { degree: "Epitech Digital", school: "Business & SI", year: "2021-2022" },
    { degree: "Bac STI2D", school: "Développement Durable", year: "2021" }
  ];

  const experience = [
    { 
      role: "Alternant Développeur Power Platform", 
      company: "EDF", 
      period: "2023-Présent",
      description: "Développement d'applications métier avec Power Apps, automatisation des processus avec Power Automate"
    },
    { 
      role: "Chef de projet Power Platform", 
      company: "Digiuz", 
      period: "2022-2023",
      description: "Gestion de projets Power Platform, recueil de besoins clients, pilotage d'équipe"
    },
    { 
      role: "Manager & Logistique", 
      company: "Carrefour Drive", 
      period: "2020-2022",
      description: "Management d'équipe, optimisation des processus logistiques, gestion des stocks"
    }
  ];

  const qualities = [
    { icon: Search, label: "Rigoureux", desc: "Attention aux détails et qualité du code" },
    { icon: Heart, label: "Curieux", desc: "Veille technologique constante" },
    { icon: Leaf, label: "Écologique", desc: "Développement durable et responsable" },
    { icon: Users, label: "Esprit d'équipe", desc: "Collaboration et communication efficaces" }
  ];

  return (
    <section id="about" className="py-20 bg-[#1A151F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F5F5F5] mb-4">À propos de moi</h2>
          <div className="w-24 h-1 bg-[#00C897] mx-auto mb-8"></div>
          <p className="text-lg text-[#F5F5F5]/80 max-w-3xl mx-auto leading-relaxed">
            Développeur passionné avec une forte expertise en Power Platform et JavaScript, 
            je combine compétences techniques et sens du business pour créer des solutions 
            innovantes. Mon parcours diversifié me permet d'appréhender les projets avec 
            une vision globale, alliant technique et métier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#00C897] mb-6 flex items-center">
                <GraduationCap className="mr-3" size={28} />
                Parcours académique
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-[#2A2A2A] rounded-lg p-4 hover:bg-[#2A2A2A]/80 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#F5F5F5] font-semibold">{edu.degree}</h4>
                        <p className="text-[#F5F5F5]/70">{edu.school}</p>
                      </div>
                      <span className="text-[#00C897] text-sm font-medium bg-[#00C897]/20 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Qualities */}
            <div>
              <h3 className="text-2xl font-bold text-[#00C897] mb-6">Qualités personnelles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualities.map(({ icon: Icon, label, desc }, index) => (
                  <div key={index} className="bg-[#2A2A2A] rounded-lg p-4 hover:bg-[#2A2A2A]/80 transition-all duration-300 text-center">
                    <Icon className="text-[#00C897] mx-auto mb-2" size={24} />
                    <h4 className="text-[#F5F5F5] font-semibold mb-1">{label}</h4>
                    <p className="text-[#F5F5F5]/70 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-[#00C897] mb-6 flex items-center">
              <Briefcase className="mr-3" size={28} />
              Parcours professionnel
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-[#2A2A2A] rounded-lg p-6 hover:bg-[#2A2A2A]/80 transition-all duration-300 border-l-4 border-[#00C897]">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#F5F5F5] font-semibold text-lg">{exp.role}</h4>
                    <span className="text-[#00C897] text-sm font-medium bg-[#00C897]/20 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#00C897] font-medium mb-2">{exp.company}</p>
                  <p className="text-[#F5F5F5]/70 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;