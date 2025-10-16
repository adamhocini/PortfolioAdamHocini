import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectsPage from './components/ProjectsPage';
import Skills from './components/Skills';
import Future from './components/Future';
import Contact from './components/Contact';
import CvPage from './components/CvPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showProjectsPage, setShowProjectsPage] = useState(false);
  const [showCvPage, setShowCvPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (showProjectsPage || showCvPage) return; // Don't update active section when on dedicated pages
      
      const sections = ['home', 'about', 'projects', 'skills', 'future', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showProjectsPage, showCvPage]);

  const scrollToSection = (sectionId: string) => {
    if (showProjectsPage) {
      setShowProjectsPage(false);
      // Wait for the page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
  };

  const handleViewAllProjects = () => {
    setShowProjectsPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromProjects = () => {
    setShowProjectsPage(false);
    // Scroll to projects section after returning
    setTimeout(() => {
      scrollToSection('projects');
    }, 100);
  };

  const handleOpenCv = () => {
    setShowCvPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromCv = () => {
    setShowCvPage(false);
    setTimeout(() => {
      scrollToSection('about');
    }, 100);
  };

  if (showProjectsPage) {
    return <ProjectsPage onBack={handleBackFromProjects} />;
  }

  if (showCvPage) {
    return <CvPage onBack={handleBackFromCv} />;
  }

  return (
    <div className="min-h-screen bg-[#1A151F] text-[#F5F5F5]">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenCv={handleOpenCv}
      />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Projects onViewAllProjects={handleViewAllProjects} />
        <Skills />
        <Future />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#F5F5F5]/60 mb-4">
              © 2025 Adam Hocini. Développé avec React & Tailwind CSS.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="text-[#00C897]">Développeur Power Platform</span>
              <span className="text-[#F5F5F5]/40">•</span>
              <span className="text-[#00C897]">JavaScript</span>
              <span className="text-[#F5F5F5]/40">•</span>
              <span className="text-[#00C897]">Lyon, France</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
