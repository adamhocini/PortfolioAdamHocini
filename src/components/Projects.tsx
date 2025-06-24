import React from 'react';
import { ExternalLink, Github, Shield, Smartphone, Leaf } from 'lucide-react';

interface ProjectsProps {
  onViewAllProjects: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAllProjects }) => {
  const projects = [
    {
      title: "Gestion des Droits d'Accès",
      description: "Application complète de gestion des permissions utilisateurs avec workflow d'approbation automatisé.",
      technologies: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
      features: [
        "Interface utilisateur intuitive pour les demandes d'accès",
        "Workflow d'approbation automatisé avec Power Automate",
        "Intégration SharePoint pour la gestion documentaire",
        "Tableau de bord temps réel des permissions actives"
      ],
      icon: Shield,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "GymUnity",
      description: "Application mobile de réseau social dédiée au sport, conçue lors d'un projet de fin d'études de Bachelor.",
      technologies: ["React Native", "Firebase", "Node.js", "Google Maps API"],
      features: [
        "Création de profil sportif personnalisé avec statistiques",
        "Fil d'actualité personnalisé avec partage d'entraînements",
        "Chat privé et messagerie de groupe pour les sportifs",
        "Carte interactive des lieux d'entraînement à proximité"
      ],
      icon: Smartphone,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "MAAT = Mesure, Analyse, Action, Trajectoire",
      description: "Application web destinée aux PME pour évaluer, piloter et améliorer leur performance RSE, réalisée dans le cadre d'un projet de fin de Master.",
      technologies: ["Blazor WebAssembly", ".NET 8", "PostgreSQL", "gRPC"],
      features: [
        "Questionnaire dynamique avec filtrage intelligent des axes RSE",
        "Recommandations RSE personnalisées basées sur le secteur",
        "Dashboard de pilotage avec KPI et indicateurs ESG",
        "Génération automatique de rapports PDF conformes"
      ],
      icon: Leaf,
      color: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F5F5F5] mb-4">Mes Projets</h2>
          <div className="w-24 h-1 bg-[#00C897] mx-auto mb-8"></div>
          <p className="text-lg text-[#F5F5F5]/80 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations, alliant innovation technique et besoins métier concrets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="group">
                <div className="bg-[#1A151F] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full">
                  {/* Header with icon */}
                  <div className={`bg-gradient-to-r ${project.color} p-6`}>
                    <IconComponent className="text-white mb-4" size={40} />
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-[#F5F5F5]/80 mb-6 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-[#00C897] font-semibold mb-3">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-[#2A2A2A] text-[#F5F5F5] px-3 py-1 rounded-full text-sm font-medium hover:bg-[#00C897] hover:text-[#1A151F] transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-[#00C897] font-semibold mb-3">Fonctionnalités clés</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-[#F5F5F5]/70 text-sm flex items-start">
                            <span className="text-[#00C897] mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                      <button className="flex-1 bg-[#00C897] hover:bg-[#00A082] text-[#1A151F] font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center">
                        <ExternalLink size={16} className="mr-2" />
                        Voir le projet
                      </button>
                      <button className="bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#F5F5F5] font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center">
                        <Github size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#F5F5F5]/70 mb-4">Intéressé par mes réalisations ?</p>
          <button 
            onClick={onViewAllProjects}
            className="bg-transparent border-2 border-[#00C897] text-[#00C897] hover:bg-[#00C897] hover:text-[#1A151F] font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Voir tous mes projets
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;