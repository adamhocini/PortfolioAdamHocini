import React from 'react';
import { Server, Smartphone, BarChart3, GitBranch, ClipboardList } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Power Platform",
      icon: Smartphone,
      color: "text-purple-400",
      skills: [
        { name: "Power Apps", level: 90 },
        { name: "Power Automate", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Dataverse", level: 85 },
        { name: "SharePoint", level: 75 }
      ]
    },
    {
      category: "Front-end & JavaScript",
      icon: Smartphone,
      color: "text-blue-400",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "ViteJS", level: 75 },
        { name: "TypeScript", level: 70 }
      ]
    },
    {
      category: "Back-end & API",
      icon: Server,
      color: "text-green-400",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "Database Management", level: 75 },
        { name: "JSON/XML", level: 90 }
      ]
    },
    {
      category: "Data & Visualisation", 
      icon: BarChart3,
      color: "text-orange-400",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Excel Avancé", level: 90 },
        { name: "DAX", level: 75 },
        { name: "Data Modeling", level: 80 }
      ]
    },
    {
      category: "DevOps & Outils",
      icon: GitBranch,
      color: "text-red-400",
      skills: [
        { name: "GitHub", level: 80 },
        { name: "CI/CD Basics", level: 60 },
        { name: "Docker", level: 50 },
        { name: "Azure DevOps", level: 65 }
      ]
    },
    {
      category: "Gestion de Projet",
      icon: ClipboardList,
      color: "text-yellow-400",
      skills: [
        { name: "Cahier des charges", level: 90 },
        { name: "Recueil de besoins", level: 95 },
        { name: "Suivi de projet", level: 85 },
        { name: "Méthodologie Agile", level: 75 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return 'bg-[#00C897]';
    if (level >= 60) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <section id="skills" className="py-20 bg-[#1A151F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F5F5F5] mb-4">Compétences</h2>
          <div className="w-24 h-1 bg-[#00C897] mx-auto mb-8"></div>
          <p className="text-lg text-[#F5F5F5]/80 max-w-3xl mx-auto">
            Un éventail de compétences techniques et méthodologiques acquises au fil de mes expériences et projets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-[#2A2A2A] rounded-xl p-6 hover:bg-[#2A2A2A]/80 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <IconComponent className={`${category.color} mr-3`} size={28} />
                  <h3 className="text-xl font-bold text-[#F5F5F5]">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[#F5F5F5] font-medium">{skill.name}</span>
                        <span className="text-[#00C897] text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#1A151F] rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-[#2A2A2A] rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-4 h-2 bg-[#00C897] rounded mr-2"></div>
              <span className="text-[#F5F5F5] text-sm">Expert (80%+)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-2 bg-yellow-500 rounded mr-2"></div>
              <span className="text-[#F5F5F5] text-sm">Avancé (60-79%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-2 bg-orange-500 rounded mr-2"></div>
              <span className="text-[#F5F5F5] text-sm">Intermédiaire (40-59%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;