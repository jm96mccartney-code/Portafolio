import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10 text-white/50 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter">
              JORGE MARTIN <span className="text-[#D4FF00]">CARITAS ROCHA.</span>
            </h3>
            <p className="text-[10px] text-[#D4FF00] font-mono uppercase tracking-[0.2em] font-black">
              {personalData.title}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-white/70 font-mono font-bold uppercase tracking-widest">
            <a href="#hero" className="hover:text-[#D4FF00] transition-colors">Inicio</a>
            <a href="#experience" className="hover:text-[#D4FF00] transition-colors">Experiencia</a>
            <a href="#skills" className="hover:text-[#D4FF00] transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-[#D4FF00] transition-colors">Proyectos</a>
            <a href="#voiceover" className="hover:text-[#D4FF00] transition-colors">Locución</a>
            <a href="#education" className="hover:text-[#D4FF00] transition-colors">Estudios</a>
            <a href="#contact" className="hover:text-[#D4FF00] transition-colors">Contacto</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded bg-black text-white border border-white/15 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all group"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/40 font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Jorge Martin Caritas Rocha. Portafolio Profesional.</p>
          <p className="flex items-center gap-2">
            <span className="text-[#D4FF00]">La Paz, Bolivia</span>
            <span>•</span>
            <span>Tel: 60678584</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
