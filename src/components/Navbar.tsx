import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Briefcase, User, Wrench, FolderGit2, GraduationCap, Mail, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero', icon: User },
    { name: 'Historial', href: '#experience', icon: Briefcase },
    { name: 'Habilidades', href: '#skills', icon: Wrench },
    { name: 'Proyectos', href: '#projects', icon: FolderGit2 },
    { name: 'Locución', href: '#voiceover', icon: Sparkles },
    { name: 'Formación', href: '#education', icon: GraduationCap },
    { name: 'Contacto', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Electric Lime Status Dot */}
          <a href="#hero" className="group flex items-center gap-2.5">
            <div className="w-3 h-3 bg-[#D4FF00] rounded-full shadow-[0_0_10px_#D4FF00] group-hover:scale-125 transition-transform" />
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black uppercase tracking-tighter text-white">
                Jorge <span className="text-[#D4FF00]">Martin.</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase hidden sm:inline">
                / BOLIVIA
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Bold Uppercase Tracking) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                    isActive
                      ? 'bg-[#D4FF00] text-black shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: CV Modal CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCV}
              className="px-4 py-2 rounded-lg bg-[#D4FF00] text-black hover:bg-[#c2eb00] font-black text-[11px] uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2 hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Ver CV Original</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCV}
              className="px-3 py-1.5 rounded bg-[#D4FF00] text-black font-black text-[10px] uppercase tracking-wider flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-white/10 text-white hover:bg-white/20"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4FF00]" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F0F] border-b border-white/10 px-4 pt-3 pb-5 mt-3 space-y-2">
          {navLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded text-xs font-black uppercase tracking-[0.2em] text-white/80 hover:bg-white/10 hover:text-[#D4FF00] transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
