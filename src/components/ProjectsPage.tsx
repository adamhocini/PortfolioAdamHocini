import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Target, Smartphone, Globe, Database, Shield, TrendingUp, Activity, Zap, Leaf } from 'lucide-react';

interface ProjectsPageProps {
  onBack: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allProjects = [
    // Projets existants
    {
      id: 1,
      title: "Gestion des Droits d'Accès",
      description: "Application complète de gestion des permissions utilisateurs avec workflow d'approbation automatisé.",
      longDescription: "Cette application Power Platform permet aux entreprises de gérer efficacement les droits d'accès de leurs employés. Elle automatise le processus de demande, d'approbation et de révocation des permissions, tout en maintenant un audit trail complet.",
      technologies: ["Power Apps", "Power Automate", "SharePoint", "Dataverse"],
      features: [
        "Interface utilisateur intuitive pour les demandes d'accès",
        "Workflow d'approbation automatisé avec Power Automate",
        "Intégration SharePoint pour la gestion documentaire",
        "Tableau de bord temps réel des permissions actives"
      ],
      icon: Shield,
      color: "from-blue-500 to-purple-600",
      category: "power-platform",
      year: "2024",
      type: "Projet professionnel",
      status: "Déployé",
      client: "EDF"
    },
    {
      id: 2,
      title: "Suivi des Financements",
      description: "Plateforme de tracking et analyse des financements avec tableaux de bord dynamiques.",
      longDescription: "Solution complète de suivi budgétaire permettant aux équipes financières de monitorer en temps réel l'utilisation des budgets, avec des alertes automatiques et des rapports détaillés.",
      technologies: ["Power Platform", "Power BI", "Excel", "Teams"],
      features: [
        "Suivi en temps réel des budgets et dépenses",
        "Alertes automatiques sur les seuils de financement",
        "Rapports visuels avec Power BI",
        "Intégration Teams pour notifications collaboratives"
      ],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
      category: "power-platform",
      year: "2024",
      type: "Projet professionnel",
      status: "En production",
      client: "EDF"
    },
    {
      id: 3,
      title: "Dashboard Soignant",
      description: "Tableau de bord médical avec scraping de données et visualisations avancées.",
      longDescription: "Interface de monitoring médical permettant aux professionnels de santé de visualiser les données patients en temps réel, avec des alertes intelligentes et des rapports automatisés.",
      technologies: ["Python", "Power BI", "Web Scraping", "APIs REST"],
      features: [
        "Scraping automatique de données médicales",
        "Visualisations interactives des indicateurs de santé",
        "Alertes en temps réel sur les paramètres critiques",
        "Export automatique de rapports personnalisés"
      ],
      icon: Activity,
      color: "from-red-500 to-pink-600",
      category: "data-viz",
      year: "2023",
      type: "Projet personnel",
      status: "Prototype",
      client: "Personnel"
    },
    // Nouveaux projets
    {
      id: 4,
      title: "GymUnity",
      description: "Application mobile de réseau social dédiée aux passionnés de sport. Permet aux utilisateurs de partager leurs entraînements, routines, photos, suivre d'autres athlètes, organiser des sessions sportives locales.",
      longDescription: "GymUnity est une application mobile complète qui connecte les passionnés de sport dans une communauté dynamique. L'app permet de partager ses performances, découvrir de nouveaux exercices, et organiser des sessions d'entraînement collaboratives.",
      technologies: ["React Native", "Firebase", "Node.js", "Google Maps API"],
      features: [
        "Création de profil sportif personnalisé",
        "Fil d'actualité personnalisé avec algorithme de recommandation",
        "Chat privé et messagerie de groupe",
        "Carte interactive des lieux d'entraînement à proximité",
        "Système de suivi des performances et statistiques",
        "Organisation d'événements sportifs locaux",
        "Partage de photos et vidéos d'entraînement",
        "Système de badges et récompenses"
      ],
      icon: Smartphone,
      color: "from-orange-500 to-red-600",
      category: "mobile",
      year: "2024",
      type: "Projet de fin d'études Bachelor (Bac+3)",
      status: "Terminé",
      client: "Isitech",
      role: "Co-développement + UI/UX + intégration API",
      teamSize: "4 développeurs"
    },
    {
      id: 5,
      title: "Maat – Diagnostic RSE pour PME",
      description: "Application web destinée aux PME afin d'évaluer et d'améliorer leurs performances RSE (Responsabilité Sociétale des Entreprises). La plateforme propose un questionnaire intelligent, un dashboard, des recommandations personnalisées et un export de rapports.",
      longDescription: "Maat est une plateforme innovante qui démocratise l'accès au diagnostic RSE pour les PME. Elle propose une approche structurée et personnalisée pour évaluer l'impact environnemental et social des entreprises, avec des recommandations concrètes pour améliorer leurs pratiques.",
      technologies: ["Blazor WebAssembly", ".NET 8", "PostgreSQL", "gRPC", "API REST"],
      features: [
        "Questionnaire dynamique avec filtrage intelligent des axes RSE",
        "Recommandations RSE personnalisées basées sur le secteur d'activité",
        "Dashboard de pilotage avec KPI et indicateurs ESG",
        "Génération automatique de rapports PDF conformes aux standards",
        "Système de scoring et benchmarking sectoriel",
        "Suivi de l'évolution des performances dans le temps",
        "Intégration avec les référentiels RSE existants",
        "Interface d'administration pour la gestion des questionnaires"
      ],
      icon: Leaf,
      color: "from-green-600 to-teal-600",
      category: "web-app",
      year: "2025",
      type: "Projet de fin d'études Master (Bac+5)",
      status: "En développement",
      client: "Isitech - EDF",
      role: "Développement front + structuration BDD + gestion de projet (méthodo agile)",
      teamSize: "3 développeurs"
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', count: allProjects.length },
    { id: 'power-platform', label: 'Power Platform', count: allProjects.filter(p => p.category === 'power-platform').length },
    { id: 'web-app', label: 'Applications Web', count: allProjects.filter(p => p.category === 'web-app').length },
    { id: 'mobile', label: 'Mobile', count: allProjects.filter(p => p.category === 'mobile').length },
    { id: 'data-viz', label: 'Data & BI', count: allProjects.filter(p => p.category === 'data-viz').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Déployé':
      case 'En production':
      case 'Terminé':
        return 'bg-green-500/20 text-green-400';
      case 'En développement':
        return 'bg-blue-500/20 text-blue-400';
      case 'Prototype':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#1A151F] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center text-[#00C897] hover:text-[#00A082] transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour au portfolio
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#F5F5F5] mb-4">Tous mes projets</h1>
            <div className="w-24 h-1 bg-[#00C897] mx-auto mb-8"></div>
            <p className="text-lg text-[#F5F5F5]/80 max-w-3xl mx-auto">
              Découvrez l'ensemble de mes réalisations, des projets académiques aux solutions professionnelles déployées en entreprise.
            </p>
          </div>
        </div>

        {/* Filtres */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#00C897] text-[#1A151F]'
                    : 'bg-[#2A2A2A] text-[#F5F5F5] hover:bg-[#3A3A3A]'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="group">
                <div className="bg-[#2A2A2A] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl h-full">
                  {/* Header avec icône et statut */}
                  <div className={`bg-gradient-to-r ${project.color} p-6 relative`}>
                    <div className="flex justify-between items-start mb-4">
                      <IconComponent className="text-white" size={40} />
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className="text-white/80 text-sm">{project.year}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.type}</p>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <p className="text-[#F5F5F5]/80 mb-6 leading-relaxed">{project.description}</p>

                    {/* Informations du projet */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h5 className="text-[#00C897] font-semibold mb-2 flex items-center">
                          <Calendar className="mr-2" size={16} />
                          Client
                        </h5>
                        <p className="text-[#F5F5F5]/70 text-sm">{project.client}</p>
                      </div>
                      {project.teamSize && (
                        <div>
                          <h5 className="text-[#00C897] font-semibold mb-2 flex items-center">
                            <Users className="mr-2" size={16} />
                            Équipe
                          </h5>
                          <p className="text-[#F5F5F5]/70 text-sm">{project.teamSize}</p>
                        </div>
                      )}
                    </div>

                    {/* Rôle */}
                    {project.role && (
                      <div className="mb-6">
                        <h5 className="text-[#00C897] font-semibold mb-2 flex items-center">
                          <Target className="mr-2" size={16} />
                          Mon rôle
                        </h5>
                        <p className="text-[#F5F5F5]/70 text-sm">{project.role}</p>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-[#00C897] font-semibold mb-3 flex items-center">
                        <Code className="mr-2" size={16} />
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-[#1A151F] text-[#F5F5F5] px-3 py-1 rounded-full text-sm font-medium hover:bg-[#00C897] hover:text-[#1A151F] transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Fonctionnalités clés (limitées à 4 pour l'affichage) */}
                    <div className="mb-6">
                      <h5 className="text-[#00C897] font-semibold mb-3">Fonctionnalités principales</h5>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-[#F5F5F5]/70 text-sm flex items-start">
                            <span className="text-[#00C897] mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 4 && (
                          <li className="text-[#00C897] text-sm font-medium">
                            +{project.features.length - 4} autres fonctionnalités...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                      <button className="flex-1 bg-[#00C897] hover:bg-[#00A082] text-[#1A151F] font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center">
                        <ExternalLink size={16} className="mr-2" />
                        Voir les détails
                      </button>
                      <button className="bg-[#1A151F] hover:bg-[#0A0A0A] text-[#F5F5F5] font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center">
                        <Github size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-[#2A2A2A] rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#F5F5F5] mb-8 text-center">Statistiques des projets</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00C897] mb-2">{allProjects.length}</div>
              <div className="text-[#F5F5F5]/70">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00C897] mb-2">
                {allProjects.filter(p => p.category === 'power-platform').length}
              </div>
              <div className="text-[#F5F5F5]/70">Power Platform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00C897] mb-2">
                {allProjects.filter(p => p.status === 'Déployé' || p.status === 'En production').length}
              </div>
              <div className="text-[#F5F5F5]/70">En production</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00C897] mb-2">2024-2025</div>
              <div className="text-[#F5F5F5]/70">Période active</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#00C897]/20 to-[#00A082]/20 rounded-lg p-8 border border-[#00C897]/30">
            <h4 className="text-xl font-bold text-[#F5F5F5] mb-4">Un projet en tête ?</h4>
            <p className="text-[#F5F5F5]/70 mb-6 max-w-2xl mx-auto">
              Ces réalisations vous donnent un aperçu de mes compétences. Discutons de votre projet et voyons comment je peux vous aider à le concrétiser.
            </p>
            <button
              onClick={onBack}
              className="bg-[#00C897] hover:bg-[#00A082] text-[#1A151F] font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;