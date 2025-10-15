import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Heart,
  Users,
  Leaf,
  Search,
  Brain,
  Sparkles,
  Compass,
  BarChart3,
  Rocket,
} from 'lucide-react';
import InteractiveGlowCard from './InteractiveGlowCard';

type SectionAlign = 'left' | 'center';

type SectionAccent = 'emerald' | 'violet';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  icon?: React.ComponentType<{ size?: number }>;
  align?: SectionAlign;
  accent?: SectionAccent;
}

const accentStyles: Record<SectionAccent, string> = {
  emerald: 'bg-[#00C897]/15 text-[#00C897]',
  violet: 'bg-[#7C4DFF]/15 text-[#B388FF]',
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  icon: Icon,
  align = 'left',
  accent = 'emerald',
}) => (
  <div className={`flex flex-col gap-6 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
    <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
      {Icon && (
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accentStyles[accent]}`}>
          <Icon size={24} />
        </div>
      )}
      <div className={`${align === 'center' ? 'space-y-3' : 'space-y-2'}`}>
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">{label}</p>
        <h3 className="text-3xl md:text-4xl font-semibold text-white">{title}</h3>
      </div>
    </div>
    {description && (
      <p
        className={`text-base leading-relaxed text-white/65 ${
          align === 'center' ? 'max-w-3xl' : 'max-w-2xl'
        }`}
      >
        {description}
      </p>
    )}
  </div>
);

const About: React.FC = () => {
  const experienceHighlights = [
    {
      title: 'Analyse & Résolution de Problèmes',
      description:
        'Compréhension fine des besoins métiers, conception de solutions techniques adaptées et évolutives.',
      icon: Brain,
      tag: 'Analyse',
    },
    {
      title: 'Gestion de Projet & Organisation',
      description:
        'Pilotage d’équipes pluridisciplinaires, planification des livrables et communication fluide avec les parties prenantes.',
      icon: Compass,
      tag: 'Gestion',
    },
    {
      title: 'Adaptabilité & Polyvalence',
      description:
        'Habitué aux environnements variés : apps low-code, intégrations API, expériences utilisateurs soignées.',
      icon: Sparkles,
      tag: 'Agilité',
    },
    {
      title: 'Communication & Leadership',
      description:
        'Animation d’ateliers, accompagnement au changement et vulgarisation technique auprès des équipes métiers.',
      icon: Users,
      tag: 'Leadership',
    },
  ];

  const approachPhases = [
    {
      phase: 'Phase 1',
      title: 'Planification & Stratégie',
      description:
        'Définissons les objectifs, les usages clés et l’architecture fonctionnelle pour aligner la solution avec vos enjeux métiers.',
      icon: Compass,
    },
    {
      phase: 'Phase 2',
      title: 'Design & Prototype',
      description: 'Création d’expériences centrées utilisateurs, maquettes interactives et validation rapide.',
      icon: Sparkles,
    },
    {
      phase: 'Phase 3',
      title: 'Déploiement & Suivi',
      description: 'Industrialisation, transfert de compétences et amélioration continue post-livraison.',
      icon: Rocket,
    },
  ];

  const education = [
    {
      degree: "Mastère ESI – Expert en Systèmes d'Information Innovants",
      school: 'Isitech / EDF',
      year: '2023 - 2024',
    },
    {
      degree: 'Master RPI – Responsable de Projets Informatiques',
      school: 'Isitech',
      year: '2022 - 2023',
    },
    {
      degree: 'Bachelor Business & IT',
      school: 'EM Normandie',
      year: '2021 - 2022',
    },
    {
      degree: 'BTS SIO – Solutions logicielles & applications métiers',
      school: 'Lycée Ozenne',
      year: '2019 - 2021',
    },
    {
      degree: 'Baccalauréat STMG – Gestion & Finance',
      school: 'Lycée Ozenne',
      year: '2017',
    },
  ];

  const experience = [
    {
      role: 'Chef de projet & Développeur Power Platform',
      company: 'EDF',
      period: "2023 - Aujourd'hui",
      description:
        'Pilotage de la roadmap Power Platform, animation des comités de gouvernance et industrialisation de solutions métiers.',
    },
    {
      role: 'Consultant Power Platform',
      company: 'Digiuz',
      period: '2022 - 2023',
      description:
        'Accompagnement des clients dans la conception Power Apps / Automate, cadrage fonctionnel et coordination des équipes.',
    },
    {
      role: 'Responsable logistique & management',
      company: 'Carrefour Drive',
      period: '2020 - 2022',
      description:
        "Management d'une équipe opérationnelle, suivi des indicateurs de performance et optimisation des processus logistiques.",
    },
  ];

  const qualities = [
    { icon: Search, label: 'Organisation', desc: 'Structuration des processus et priorisation des actions' },
    { icon: Heart, label: 'Leadership', desc: "Animation d'équipes et accompagnement au changement" },
    { icon: Leaf, label: 'Adaptabilité', desc: 'Capacité à évoluer dans des environnements multiples' },
    { icon: Users, label: 'Communication', desc: 'Relation client et partage des enjeux avec les parties prenantes' },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#120D18]">
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,_rgba(119,54,255,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_bottom,_rgba(0,200,151,0.12),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent,_rgba(13,13,15,0.8))]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <SectionHeader
            label="À propos"
            align="center"
            title={
              <>
                Mon parcours allie{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C4DFF] via-[#B388FF] to-[#00C897]">
                  stratégie
                </span>{' '}
                et
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C897] via-[#7C4DFF] to-[#B388FF]">
                  {' '}
                  innovation
                </span>
              </>
            }
            description="Je transforme les idées métiers en produits digitaux pérennes en orchestrant design, technologie et accompagnement du changement."
          />
        </div>

        <div className="space-y-20">
          <div className="flex flex-col gap-10">
            <SectionHeader
              label="PARCOURS"
              title={
                <>
                  Expérience{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C4DFF] to-[#00C897]">professionnelle</span>
                </>
              }
              description="Des missions transverses où je conçois, pilote et déploie des solutions Power Platform et JavaScript répondant à des enjeux concrets."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {experienceHighlights.map(({ icon: Icon, title, description, tag }) => (
                <InteractiveGlowCard key={title} className="p-6">
                  <div className="flex flex-col h-full gap-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/60">{tag}</span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00C897]/15 text-[#00C897]">
                        <Icon size={22} />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-white leading-snug">{title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </InteractiveGlowCard>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <SectionHeader
              label="Méthode"
              title={
                <>
                  Mon{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C897] to-[#7C4DFF]">approche</span>
                </>
              }
              description="Une démarche en trois temps pour cadrer, designer et déployer des solutions adoptées par les utilisateurs."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {approachPhases.map(({ phase, title, description, icon: Icon }) => (
                <InteractiveGlowCard key={phase} className="p-6">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.35em] text-white/50">{phase}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00C897]/15 text-[#00C897]">
                        <Icon size={20} />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-white">{title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </InteractiveGlowCard>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-12">
            <div>
              <div className="mb-8">
                <SectionHeader label="PARCOURS" title="Expérience professionnelle" icon={Briefcase} />
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <InteractiveGlowCard key={index} className="p-6">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/70 bg-white/10 px-3 py-1.5 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-white/65 font-medium">{exp.company}</p>
                      <p className="text-sm text-white/70 leading-relaxed">{exp.description}</p>
                    </div>
                  </InteractiveGlowCard>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <div className="mb-6">
                  <SectionHeader label="FORMATION" title="Parcours académique" icon={GraduationCap} accent="violet" />
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <InteractiveGlowCard key={index} className="p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold">{edu.degree}</h4>
                          <p className="text-white/60 text-sm">{edu.school}</p>
                        </div>
                        <span className="text-xs uppercase tracking-[0.3em] text-white/70 bg-white/10 px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                    </InteractiveGlowCard>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <SectionHeader label="SOFT SKILLS" title="Qualités personnelles" icon={BarChart3} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {qualities.map(({ icon: Icon, label, desc }, index) => (
                    <InteractiveGlowCard key={index} className="p-6 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00C897]/15 text-[#00C897]">
                          <Icon size={22} />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold">{label}</h4>
                          <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    </InteractiveGlowCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
