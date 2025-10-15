import React from 'react';
import {
  ArrowLeft,
  Award,
  Brain,
  Briefcase,
  Calendar,
  Car,
  ClipboardList,
  Code,
  GraduationCap,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
  Target,
  User,
  UserCheck,
  Globe,
} from 'lucide-react';

interface CvPageProps {
  onBack: () => void;
}

const CvPage: React.FC<CvPageProps> = ({ onBack }) => {
  const headerRoles = 'Chef de projet IT | Product Owner | Consultant Power Platform';

  const profileDetails = [
    { icon: User, label: 'Nom', value: 'Hocini Adam' },
    { icon: Calendar, label: 'Date de naissance', value: '21/02/2000' },
    { icon: Car, label: 'Permis', value: 'Permis B – véhicule personnel' },
  ];

  const experiences = [
    {
      role: 'Chef de projet & Développeur Power Platform',
      company: 'EDF',
      period: "2023 - Aujourd'hui",
      location: 'Lyon, France',
      description:
        'Assistant chef de projet IT en alternance au sein de la DSI EDF, responsable de la gouvernance et du delivery Power Platform.',
      achievements: [
        'Pilotage d’un portefeuille de 8 solutions Power Platform et animation des comités de gouvernance',
        'Industrialisation d’applications métiers (Power Apps, Power Automate, Power BI) pour optimiser les processus opérationnels',
        'Accompagnement des équipes métiers sur les bonnes pratiques et la conduite du changement',
      ],
      tech: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse', 'Azure DevOps'],
    },
    {
      role: 'Consultant Power Platform',
      company: 'Digiuz',
      period: '2022 - 2023',
      location: 'Lyon, France',
      description:
        'Consultant pour des clients grands comptes et ETI sur la conception et le déploiement de solutions Power Platform.',
      achievements: [
        'Cadrage des besoins et rédaction des spécifications fonctionnelles',
        'Conception de solutions Power Apps / Automate intégrées à Microsoft 365 et Dataverse',
        'Planification agile et coordination des équipes projet avec reporting régulier',
      ],
      tech: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint', 'Gestion de projet'],
    },
    {
      role: 'Responsable logistique & management',
      company: 'Carrefour Drive',
      period: '2020 - 2022',
      location: 'Toulouse, France',
      description:
        'Responsable d’une équipe opérationnelle au sein d’un drive alimentaire à fort volume.',
      achievements: [
        'Management et montée en compétences d’une équipe de 12 collaborateurs',
        'Optimisation des tournées et des flux logistiques pour réduire les délais de préparation',
        'Suivi des indicateurs qualité et relation client au quotidien',
      ],
      tech: ['Management', 'Logistique', 'Lean', 'Relation client'],
    },
  ];

  const education = [
    {
      degree: 'Mastère ESI – Expert en Systèmes d’Information Innovants',
      school: 'Isitech / EDF',
      period: '2023 - 2024',
      details: [
        'Pilotage de projets digitaux et gouvernance SI',
        'Spécialisation Power Platform & Microsoft 365',
      ],
    },
    {
      degree: 'Master RPI – Responsable de Projets Informatiques',
      school: 'Isitech',
      period: '2022 - 2023',
      details: ['Conduite de projet, innovation et accompagnement du changement'],
    },
    {
      degree: 'Bachelor Business & IT',
      school: 'EM Normandie',
      period: '2021 - 2022',
      details: ['Management digital et pilotage de l’expérience client'],
    },
    {
      degree: 'BTS SIO – Solutions logicielles & applications métiers',
      school: 'Lycée Ozenne',
      period: '2019 - 2021',
      details: ['Développement applicatif et administration systèmes'],
    },
    {
      degree: 'Baccalauréat STMG – Gestion & Finance',
      school: 'Lycée Ozenne',
      period: '2017',
      details: ['Spécialisation gestion et finance'],
    },
  ];

  const skills = [
    {
      title: 'Gestion de projet',
      icon: Target,
      items: ['Cadrage & expression des besoins', 'Roadmap, budgets et indicateurs', 'Animation d’ateliers & reporting'],
    },
    {
      title: 'Power Platform',
      icon: Brain,
      items: ['Power Apps (Canvas & Model-driven)', 'Power Automate cloud & desktop', 'Power BI & Dataverse'],
    },
    {
      title: 'Développement & Cloud',
      icon: Code,
      items: ['React & TypeScript', 'Intégrations Microsoft 365 & Azure', 'Conception API & CI/CD'],
    },
    {
      title: 'Méthodes & Qualité',
      icon: ClipboardList,
      items: ['Agile / Scrum & Kanban', 'Tests automatisés & documentation', 'Conduite du changement'],
    },
  ];

  const languagesData = [
    { label: 'Français', level: 'Langue maternelle' },
    { label: 'Anglais', level: 'Professionnel (B2)' },
  ];

  const softSkills = [
    'Management d’équipe',
    'Communication & pédagogie',
    'Sens de l’organisation',
    'Autonomie & proactivité',
    'Résolution de problèmes',
    'Curiosité technologique',
  ];

  const projects = [
    {
      name: 'GGA – Gestion des Garanties Automobiles',
      period: '2023',
      role: 'Chef de projet Power Platform',
      description:
        'Plateforme Power Apps pour centraliser le suivi des garanties automobiles du groupe EDF.',
      highlights: [
        'Construction du cahier des charges et du backlog fonctionnel',
        'Animation des ateliers utilisateurs et conduite des tests d’acceptation',
        'Déploiement progressif auprès de 200 utilisateurs métiers',
      ],
    },
    {
      name: 'Solar Experience',
      period: '2022',
      role: 'Product Owner',
      description:
        'Solution Power Platform pour piloter les installations photovoltaïques et la maintenance associée.',
      highlights: [
        'Modélisation Dataverse et automatisation des workflows de maintenance',
        'Suivi des performances énergétiques via tableaux de bord Power BI',
        'Structuration du support et du plan de formation utilisateurs',
      ],
    },
    {
      name: 'SportUnity',
      period: '2021',
      role: 'Chef de projet digital',
      description:
        'Application mobile communautaire favorisant la pratique sportive collaborative.',
      highlights: [
        'Pilotage d’une équipe pluridisciplinaire (design, développement, marketing)',
        'Définition du parcours utilisateur et des fonctionnalités différenciantes',
        'Mise en place des indicateurs de suivi et du plan de lancement',
      ],
    },
  ];

  const interests = ['Innovation', 'Technologie', 'Musique', 'Voyages', 'Smart home & IoT'];

  const certifications = [
    'Microsoft PL-900: Power Platform Fundamentals',
    'Scrum Fundamentals Certified',
    'Azure AZ-900 (en cours)',
  ];

  return (
    <div className="min-h-screen bg-[#1A151F] text-[#F5F5F5] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-[#00C897] hover:text-[#00A082] transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="mr-2" size={20} />
          Retour au portfolio
        </button>

        <div className="bg-[#221B29] rounded-2xl shadow-xl border border-[#2F2F3A] overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#00C897]/10 text-[#00C897] text-sm font-medium mb-4">
                  <UserCheck className="mr-2" size={16} />
                  Disponible pour de nouvelles opportunités
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F5F5] mb-4">
                  Adam Hocini
                </h1>
                <p className="text-xl text-[#F5F5F5]/80 mb-4">{headerRoles}</p>
                <p className="text-[#F5F5F5]/70 max-w-2xl">
                  Assistant chef de projet IT en alternance chez EDF, spécialisé dans la conception et la gestion de solutions Microsoft Power Platform.
                  J’accompagne les équipes métiers pour transformer leurs processus en produits digitaux performants, gouvernés et orientés expérience utilisateur.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-[#F5F5F5]/75">
                  {profileDetails.map(detail => {
                    const Icon = detail.icon;
                    return (
                      <div
                        key={detail.label}
                        className="flex items-center gap-3 rounded-lg border border-[#363646] bg-[#2A2433] px-4 py-3"
                      >
                        <Icon size={18} className="text-[#00C897]" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-[#F5F5F5]/50">{detail.label}</p>
                          <p className="font-medium text-[#F5F5F5]">{detail.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-[#2A2433] rounded-xl p-6 border border-[#363646] w-full lg:w-80">
                <h2 className="text-lg font-semibold text-[#F5F5F5] mb-4">Coordonnées</h2>
                <div className="space-y-3 text-sm text-[#F5F5F5]/80">
                  <div className="flex items-center">
                    <Mail size={18} className="mr-3 text-[#00C897]" />
                    <a href="mailto:adam.hocini@icloud.com" className="hover:text-[#00C897] transition-colors duration-200">
                      adam.hocini@icloud.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="mr-3 text-[#00C897]" />
                    <span>+33 6 51 57 03 02</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-3 text-[#00C897]" />
                    <span>Lyon, France</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin size={18} className="mr-3 text-[#00C897]" />
                    <a
                      href="https://www.linkedin.com/in/adam-hocini"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00C897] transition-colors duration-200"
                    >
                      linkedin.com/in/adam-hocini
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-10">
                <section>
                  <div className="flex items-center mb-6">
                    <Briefcase className="text-[#00C897] mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Expériences Professionnelles</h2>
                  </div>
                  <div className="space-y-6">
                    {experiences.map(experience => (
                      <div key={experience.role} className="bg-[#2A2433] border border-[#363646] rounded-xl p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-[#F5F5F5]">{experience.role}</h3>
                            <p className="text-[#F5F5F5]/70">{experience.company} • {experience.location}</p>
                          </div>
                          <span className="mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full bg-[#00C897]/10 text-[#00C897] text-sm">
                            {experience.period}
                          </span>
                        </div>
                        <p className="text-[#F5F5F5]/70 mb-4">{experience.description}</p>
                        <ul className="space-y-2 text-sm text-[#F5F5F5]/80 list-disc list-inside">
                          {experience.achievements.map(achievement => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {experience.tech.map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-full bg-[#1A151F] text-[#F5F5F5]/80 text-xs border border-[#363646]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-6">
                    <GraduationCap className="text-[#00C897] mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Formation</h2>
                  </div>
                  <div className="space-y-6">
                    {education.map(item => (
                      <div key={item.degree} className="bg-[#2A2433] border border-[#363646] rounded-xl p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-[#F5F5F5]">{item.degree}</h3>
                            <p className="text-[#F5F5F5]/70">{item.school}</p>
                          </div>
                          <span className="mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full bg-[#00C897]/10 text-[#00C897] text-sm">
                            {item.period}
                          </span>
                        </div>
                        <ul className="space-y-2 text-sm text-[#F5F5F5]/80 list-disc list-inside">
                          {item.details.map(detail => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-6">
                    <Rocket className="text-[#00C897] mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Projets professionnels</h2>
                  </div>
                  <div className="space-y-6">
                    {projects.map(project => (
                      <div key={project.name} className="bg-[#2A2433] border border-[#363646] rounded-xl p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-[#F5F5F5]">{project.name}</h3>
                            <p className="text-[#F5F5F5]/70">{project.role}</p>
                          </div>
                          <span className="mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full bg-[#00C897]/10 text-[#00C897] text-sm">
                            {project.period}
                          </span>
                        </div>
                        <p className="text-[#F5F5F5]/70 mb-3">{project.description}</p>
                        <ul className="space-y-2 text-sm text-[#F5F5F5]/80 list-disc list-inside">
                          {project.highlights.map(highlight => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <section className="bg-[#2A2433] border border-[#363646] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Target className="text-[#00C897] mr-3" size={22} />
                    <h3 className="text-xl font-semibold">Compétences clés</h3>
                  </div>
                  <div className="space-y-6">
                    {skills.map(skill => {
                      const Icon = skill.icon;
                      return (
                        <div key={skill.title}>
                          <div className="flex items-center mb-2">
                            <Icon className="text-[#00C897] mr-3" size={20} />
                            <h4 className="font-semibold text-[#F5F5F5]">{skill.title}</h4>
                          </div>
                          <ul className="space-y-1 text-sm text-[#F5F5F5]/80 list-disc list-inside">
                            {skill.items.map(item => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="bg-[#2A2433] border border-[#363646] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Sparkles className="text-[#00C897] mr-3" size={22} />
                    <h3 className="text-xl font-semibold">Soft skills</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#F5F5F5]/80 list-disc list-inside">
                    {softSkills.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </section>

                <section className="bg-[#2A2433] border border-[#363646] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Award className="text-[#00C897] mr-3" size={22} />
                    <h3 className="text-xl font-semibold">Certifications</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#F5F5F5]/80 list-disc list-inside">
                    {certifications.map(certification => (
                      <li key={certification}>{certification}</li>
                    ))}
                  </ul>
                </section>

                <section className="bg-[#2A2433] border border-[#363646] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="text-[#00C897] mr-3" size={22} />
                    <h3 className="text-xl font-semibold">Langues</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#F5F5F5]/80">
                    {languagesData.map(language => (
                      <li key={language.label} className="flex items-center justify-between">
                        <span>{language.label}</span>
                        <span className="text-[#F5F5F5]/60">{language.level}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-[#2A2433] border border-[#363646] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="text-[#00C897] mr-3" size={22} />
                    <h3 className="text-xl font-semibold">Centres d’intérêt</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {interests.map(interest => (
                      <span
                        key={interest}
                        className="px-3 py-1 rounded-full border border-[#363646] bg-[#1A151F] text-xs text-[#F5F5F5]/80"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvPage;
