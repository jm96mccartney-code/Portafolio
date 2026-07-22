import React from 'react';
import { GraduationCap, Award, Calendar, Building2 } from 'lucide-react';
import { formalEducation, certifications } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0F0F0F] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em] bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30 inline-flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#D4FF00]" />
            Educación & Capacitación
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            Estudios y <span className="text-[#D4FF00]">Cursos.</span>
          </h2>
          <p className="text-white/60 text-sm font-normal max-w-xl mx-auto">
            Sólida formación universitaria en Comunicación Social complementada con cursos especializados en locución, inteligencia artificial, edición audiovisual y periodismo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Formal Education Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/15">
              <GraduationCap className="w-5 h-5 text-[#D4FF00]" />
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Educación Formal</h3>
            </div>

            <div className="space-y-4">
              {formalEducation.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded bg-[#141414] border border-white/10 hover:border-[#D4FF00] transition-all space-y-3 shadow-xl relative group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="px-2.5 py-1 rounded bg-[#D4FF00] text-black font-black font-mono text-[10px] uppercase tracking-wider">
                      {edu.status}
                    </span>
                    <span className="text-[10px] font-mono text-white/50 flex items-center gap-1 uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5 text-[#D4FF00]" />
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-bold text-[#D4FF00] flex items-center gap-1.5 mt-1 uppercase tracking-wider">
                      <Building2 className="w-4 h-4 text-[#D4FF00]" />
                      {edu.institution}
                    </p>
                  </div>

                  {edu.description && (
                    <p className="text-xs text-white/70 leading-relaxed pt-1 font-normal">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Courses Timeline Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/15">
              <Award className="w-5 h-5 text-[#D4FF00]" />
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Formación Complementaria & Certificados</h3>
            </div>

            <div className="relative border-l-2 border-white/10 ml-3 pl-6 space-y-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#D4FF00] group-hover:bg-[#D4FF00] transition-all" />

                  <div className="p-5 rounded bg-[#141414] border border-white/10 hover:border-[#D4FF00] transition-all space-y-2 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-black text-[#D4FF00] text-[10px] font-mono font-black border border-white/10 uppercase tracking-widest">
                        {cert.year} — {cert.category}
                      </span>
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                        {cert.dates}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-white uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-xs font-bold text-[#D4FF00] uppercase tracking-wider">
                      {cert.institution}
                    </p>

                    <p className="text-xs text-white/70 leading-relaxed pt-1 font-normal">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
