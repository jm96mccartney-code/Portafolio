import React, { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Building2, ShieldCheck } from 'lucide-react';
import { workExperiences } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(workExperiences[0].id);

  const selectedExp = workExperiences.find(exp => exp.id === selectedExpId) || workExperiences[0];

  return (
    <section id="experience" className="py-20 bg-[#0F0F0F] border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em] bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30 inline-flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-[#D4FF00]" />
            Trayectoria Profesional
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            Historial <span className="text-[#D4FF00]">Laboral.</span>
          </h2>
          <p className="text-white/60 text-sm font-normal max-w-xl mx-auto">
            Experiencia comprobada en televisión abierta de alcance nacional, agencias de marketing digital, medios digitales y voluntariados internacionales.
          </p>
        </div>

        {/* Grid Layout: Timeline List on Left, Active Position Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Job Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {workExperiences.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded border transition-all duration-200 relative group flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#141414] border-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.1)]'
                      : 'bg-[#141414]/50 border-white/10 hover:border-white/30 hover:bg-[#141414]'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Logo Avatar Badge */}
                    <div
                      className={`w-11 h-11 rounded flex items-center justify-center font-black text-xs shrink-0 border uppercase tracking-wider ${
                        isSelected
                          ? 'bg-[#D4FF00] text-black border-[#D4FF00]'
                          : 'bg-black/60 text-white border-white/10 group-hover:border-white/30'
                      }`}
                    >
                      {exp.logoText}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-black text-white text-base uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors">
                          {exp.company}
                        </span>
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-white/10 text-white/80 border border-white/10">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-xs font-bold text-[#D4FF00] mt-1 uppercase tracking-wider">
                        {exp.role}
                      </p>

                      <div className="flex items-center gap-1.5 text-[10px] text-white/40 mt-1.5 font-mono uppercase tracking-widest">
                        <Calendar className="w-3 h-3 text-[#D4FF00]" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 shrink-0 mt-2 transition-transform ${
                      isSelected ? 'translate-x-1 text-[#D4FF00]' : 'text-white/30 group-hover:translate-x-1'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#141414] border border-white/15 rounded p-6 sm:p-8 space-y-6 shadow-2xl relative">
              
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest px-2.5 py-1 rounded bg-[#D4FF00] text-black">
                      {selectedExp.type}
                    </span>
                    <span className="text-[10px] font-mono text-white/50 flex items-center gap-1 uppercase tracking-widest">
                      <Calendar className="w-3 h-3 text-[#D4FF00]" />
                      {selectedExp.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-3">
                    {selectedExp.role}
                  </h3>
                  <p className="text-sm font-black text-[#D4FF00] flex items-center gap-2 mt-1 uppercase tracking-wider">
                    <Building2 className="w-4 h-4 text-[#D4FF00]" />
                    {selectedExp.company}
                  </p>
                </div>

                <div className="w-12 h-12 rounded bg-black border border-white/10 flex items-center justify-center font-black text-[#D4FF00] text-base">
                  {selectedExp.logoText}
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D4FF00] mb-2 font-black">
                  // Resumen de la posición
                </h4>
                <p className="text-white/80 text-sm leading-relaxed font-normal">
                  {selectedExp.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D4FF00] mb-3 font-black flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4FF00]" />
                  // Responsabilidades y Logros Clave
                </h4>
                <ul className="space-y-2.5">
                  {selectedExp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <div className="w-4 h-4 rounded bg-[#D4FF00] text-black flex items-center justify-center shrink-0 mt-0.5 font-black">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Skills Used */}
              <div className="pt-2 border-t border-white/10">
                <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D4FF00] mb-3 font-black">
                  // Herramientas y Software Utilizado
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.skillsUsed.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded text-xs font-bold font-mono uppercase tracking-wider bg-black/60 text-white border border-white/10 hover:border-[#D4FF00] transition-colors"
                    >
                      {skill}
                    </span>
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
