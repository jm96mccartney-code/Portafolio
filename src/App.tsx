import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { VoiceoverStudio } from './components/VoiceoverStudio';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVExportModal } from './components/CVExportModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'skills', 'projects', 'voiceover', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Navigation Bar */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <VoiceoverStudio />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Full Document Printable Modal */}
      <CVExportModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />

    </div>
  );
}
