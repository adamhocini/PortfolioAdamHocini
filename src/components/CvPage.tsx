import React from 'react';
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Wrench,
  Award,
  Mail,
  Phone,
  MapPin,
  Languages,
  UserCheck,
  Brain,
  Workflow,
  Rocket
} from 'lucide-react';

interface CvPageProps {
  onBack: () => void;
}

const CvPage: React.FC<CvPageProps> = ({ onBack }) => {
  const experiences = [
    {
      role: 'Consultant Power Platform',
      company: 'EDF',
      period: '2024 - Aujourd\'hui',
      location: 'Lyon, France',
      description:
        'Conception et déploiement de solutions Power Platform à forte valeur ajoutée pour les métiers.',
      achievements: [
        'Industrialisation d\'applications métiers avec automatisations Power Automate',
        'Mise en place de tableaux de bord Power BI pour le suivi des indicateurs clés',
        'Formation et accompagnement des équipes sur les bonnes pratiques Power Platform'
      ],
      tech: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse', 'SharePoint']
    },
    {
      role: 'Développeur Full Stack',
      company: 'Isitech',
      period: '2023 - 2024',
      location: 'Lyon, France',
      description:
        'Développement d\'applications web et mobiles dans le cadre de projets académiques et professionnels.',
      achievements: [
        'Co-conception de GymUnity, application mobile sociale pour sportifs',
        'Participation au développement de Maat, plateforme de diagnostic RSE',
        'Mise en place de pipelines CI/CD et intégration de services cloud'
      ],
      tech: ['React', 'React Native', 'Node.js', '.NET', 'PostgreSQL', 'Firebase']
    }
  ];

  const education = [
    {
      degree: 'Mastère Expert en Développement Web',
      school: 'Isitech',
      period: '2023 - 2025',
      details: ['Spécialisation Power Platform', 'Architecture logicielle', 'Management de projet']
    },
    {
      degree: 'Bachelor Développement Web',
      school: 'Isitech',
      period: '2020 - 2023',
      details: ['Développement full stack', 'UI/UX', 'Méthodes agiles']
    }
  ];

  const skills = [
    {
      title: 'Power Platform',
      icon: Brain,
      items: ['Power Apps Canvas & Model-Driven', 'Power Automate (cloud & desktop)', 'Power BI', 'Dataverse']
    },
    {
      title: 'Développement Web',
      icon: Workflow,
      items: ['React & TypeScript', 'Node.js / Express', 'Tailwind CSS', 'Blazor WebAssembly']
    },
    {
      title: 'DevOps & Outils',
      icon: Wrench,
      items: ['Azure DevOps', 'GitHub Actions', 'CI/CD', 'Docker & conteneurisation']
    }
  ];

  const languagesData = [
    { label: 'Français', level: 'Langue maternelle' },
    { label: 'Anglais', level: 'Professionnel (B2)' }
  ];

  const certifications = [
    'Microsoft PL-900: Power Platform Fundamentals',
    'Scrum Fundamentals Certified',
    'Azure AZ-900 (en cours)'
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
                <p className="text-xl text-[#F5F5F5]/80 mb-6">
                  Développeur Power Platform & Full Stack
                </p>
                <p className="text-[#F5F5F5]/70 max-w-2xl">
                  Passionné par la création de solutions business performantes et intuitives, j\'accompagne les organisations dans leur transformation digitale grâce à la Power Platform et aux technologies web modernes.
                </p>
              </div>
              <div className="bg-[#2A2433] rounded-xl p-6 border border-[#363646] w-full lg:w-80">
                <h2 className="text-lg font-semibold text-[#F5F5F5] mb-4">Coordonnées</h2>
                <div className="space-y-3 text-sm text-[#F5F5F5]/80">
                  <div className="flex items-center">
                    <Mail size={18} className="mr-3 text-[#00C897]" />
                    <a href="mailto:adam.hocini@outlook.fr" className="hover:text-[#00C897] transition-colors duration-200">
                      adam.hocini@outlook.fr
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="mr-3 text-[#00C897]" />
                    <span>+33 6 12 34 56 78</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-3 text-[#00C897]" />
                    <span>Lyon, France</span>
                  </div>
                  <div className="flex items-center">
                    <Languages size={18} className="mr-3 text-[#00C897]" />
                    <span>
                      {languagesData.map(lang => lang.label).join(' • ')}
                    </span>
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
              </div>

              <div className="space-y-8">
                <section className="bg-[#2A2433] border border-[#363646] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Rocket className="text-[#00C897] mr-3" size={22} />
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
                    <Languages className="text-[#00C897] mr-3" size={22} />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvPage;
