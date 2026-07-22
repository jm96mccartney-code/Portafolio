import React, { useState } from 'react';
import { Wrench, Video, Palette, Mic, FileText, Sparkles, CheckCircle, Cpu } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas las Habilidades', icon: Wrench },
    { id: 'audiovisual', label: 'Edición & Postproducción', icon: Video },
    { id: 'graphic_design', label: 'Diseño Gráfico & Branding', icon: Palette },
    { id: 'voiceover', label: 'Locución & Voz', icon: Mic },
    { id: 'journalism', label: 'Periodismo & IA', icon: FileText },
    { id: 'marketing', label: 'Marketing Digital', icon: Sparkles },
  ];

  const filteredSkills = activeCategory === 'all'
    ? technicalSkills
    : technicalSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-[#0F0F0F] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em] bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30 inline-flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#D4FF00]" />
            Dominio Técnico
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            Habilidades <span className="text-[#D4FF00]">Técnicas.</span>
          </h2>
          <p className="text-white/60 text-sm font-normal max-w-xl mx-auto">
            Combinación estratégica de herramientas de edición broadcast, software de diseño vectorial, locución profesional e Inteligencia Artificial generativa.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#D4FF00] text-black border-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.2)]'
                    : 'bg-[#141414] text-white/70 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-[#D4FF00]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded bg-[#141414] border border-white/10 hover:border-[#D4FF00]/50 transition-all space-y-4 shadow-xl group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-[#D4FF00] group-hover:scale-125 transition-transform" />
                  <h3 className="font-black text-white text-base uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-black font-mono px-2.5 py-1 rounded bg-[#D4FF00] text-black">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-black rounded h-2 overflow-hidden border border-white/10">
                <div
                  className="bg-[#D4FF00] h-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Specific Tools / Features Chips */}
              {skill.tools && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skill.tools.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-black/60 text-white/80 border border-white/10 flex items-center gap-1"
                    >
                      <CheckCircle className="w-3 h-3 text-[#D4FF00]" />
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Technical Summary Banner */}
        <div className="mt-12 p-6 rounded bg-[#141414] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2 justify-center md:justify-start">
              <Sparkles className="w-4 h-4 text-[#D4FF00]" />
              Adaptabilidad e Innovación Continua
            </h4>
            <p className="text-xs text-white/70 max-w-2xl font-normal">
              Dominio fluido de flujos de trabajo tradicionales de prensa y televisión combinados con integración de herramientas de IA generativa (Gemini, ChatGPT) para acelerar tiempos de producción manteniendo rigor periodístico.
            </p>
          </div>
          <span className="px-4 py-2 rounded bg-[#D4FF00] text-black font-black text-xs uppercase tracking-wider whitespace-nowrap">
            Capacitado en UNIFRANZ & IPICOM
          </span>
        </div>

      </div>
    </section>
  );
};
