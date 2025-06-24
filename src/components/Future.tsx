import React from 'react';
import { Target, TrendingUp, Lightbulb, Star, Zap, BookOpen } from 'lucide-react';

const Future: React.FC = () => {
  const ambitions = [
    {
      icon: BookOpen,
      title: "Node.js Avancé",
      description: "Approfondir mes connaissances en développement back-end avec Node.js, Express et les bases de données NoSQL.",
      timeline: "6 mois",
      status: "En cours"
    },
    {
      icon: Zap,
      title: "DevOps & Automatisation",
      description: "Maîtriser les pipelines CI/CD, Docker, Kubernetes et l'automatisation des déploiements.",
      timeline: "12 mois",
      status: "Planifié"
    },
    {
      icon: Star,
      title: "Architecte Power Platform",
      description: "Devenir expert en architecture Power Platform avec une vision globale des écosystèmes d'entreprise.",
      timeline: "18 mois",
      status: "Objectif"
    }
  ];

  const upcomingProjects = [
    {
      title: "Plateforme E-commerce",
      description: "Développement d'une plateforme e-commerce complète avec React, Node.js et intégration Power Platform.",
      technologies: ["React", "Node.js", "Power Platform", "Stripe"]
    },
    {
      title: "Dashboard IoT",
      description: "Interface de monitoring pour objets connectés avec visualisations temps réel et alertes intelligentes.",
      technologies: ["React", "Power BI", "Azure IoT", "WebSockets"]
    },
    {
      title: "App Mobile Hybride",
      description: "Application mobile cross-platform intégrée à l'écosystème Power Platform pour la gestion terrain.",
      technologies: ["React Native", "Power Apps", "Dataverse"]
    }
  ];

  const learningGoals = [
    "Certification Microsoft Power Platform Developer Associate",
    "Maîtrise de l'architecture microservices",
    "Expertise en cybersécurité applicative",
    "Leadership technique et mentoring d'équipe"
  ];

  return (
    <section id="future" className="py-20 bg-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F5F5F5] mb-4">Projets & Ambitions</h2>
          <div className="w-24 h-1 bg-[#00C897] mx-auto mb-8"></div>
          <p className="text-lg text-[#F5F5F5]/80 max-w-3xl mx-auto">
            Ma vision pour l'avenir : devenir un développeur fullstack hybride avec une expertise unique en Power Platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Ambitions de carrière */}
          <div>
            <h3 className="text-2xl font-bold text-[#00C897] mb-8 flex items-center">
              <Target className="mr-3" size={28} />
              Objectifs de carrière
            </h3>
            <div className="space-y-6">
              {ambitions.map((ambition, index) => {
                const IconComponent = ambition.icon;
                return (
                  <div key={index} className="bg-[#1A151F] rounded-lg p-6 hover:bg-[#1A151F]/80 transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="bg-[#00C897]/20 p-3 rounded-lg mr-4">
                        <IconComponent className="text-[#00C897]" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-[#F5F5F5] font-semibold text-lg">{ambition.title}</h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-[#00C897] text-sm font-medium bg-[#00C897]/20 px-3 py-1 rounded-full">
                              {ambition.timeline}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              ambition.status === 'En cours' ? 'bg-green-500/20 text-green-400' :
                              ambition.status === 'Planifié' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-blue-500/20 text-blue-400'
                            }`}>
                              {ambition.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-[#F5F5F5]/70 leading-relaxed">{ambition.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Objectifs d'apprentissage */}
          <div>
            <h3 className="text-2xl font-bold text-[#00C897] mb-8 flex items-center">
              <Lightbulb className="mr-3" size={28} />
              Apprentissages ciblés
            </h3>
            <div className="bg-[#1A151F] rounded-lg p-6 mb-8">
              <ul className="space-y-4">
                {learningGoals.map((goal, index) => (
                  <li key={index} className="flex items-center text-[#F5F5F5]">
                    <div className="w-2 h-2 bg-[#00C897] rounded-full mr-4"></div>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#00C897]/20 to-[#00A082]/20 rounded-lg p-6 border border-[#00C897]/30">
              <h4 className="text-[#00C897] font-semibold mb-3 flex items-center">
                <TrendingUp className="mr-2" size={20} />
                Vision long terme
              </h4>
              <p className="text-[#F5F5F5]/80 leading-relaxed">
                Devenir un <strong className="text-[#00C897]">architecte technique</strong> capable de concevoir 
                des solutions complètes alliant Power Platform et développement traditionnel, 
                tout en encadrant des équipes de développement.
              </p>
            </div>
          </div>
        </div>

        {/* Projets futurs */}
        <div>
          <h3 className="text-2xl font-bold text-[#00C897] mb-8 text-center">Projets en préparation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="bg-[#1A151F] rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                <h4 className="text-[#F5F5F5] font-semibold text-lg mb-3">{project.title}</h4>
                <p className="text-[#F5F5F5]/70 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#00C897]/20 text-[#00C897] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-[#1A151F] rounded-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-[#F5F5F5] mb-4">Intéressé par mes projets futurs ?</h4>
            <p className="text-[#F5F5F5]/70 mb-6">
              Discutons de vos besoins et voyons comment mes compétences en évolution peuvent vous aider.
            </p>
            <button className="bg-[#00C897] hover:bg-[#00A082] text-[#1A151F] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Commençons à collaborer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;