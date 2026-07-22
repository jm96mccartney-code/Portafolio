import React from 'react';
import { Mail, Phone, MapPin, Sparkles, Tv, FileText, CheckCircle2, ChevronRight, MessageSquare, Video, Mic, Award } from 'lucide-react';
import { personalData } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0F0F0F] text-white">
      {/* Bold Typography Background Watermark Overlay */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl flex justify-between items-center pointer-events-none select-none opacity-[0.03] overflow-hidden">
        <span className="text-[180px] sm:text-[240px] font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap">
          JMC
        </span>
        <span className="text-[180px] sm:text-[240px] font-black uppercase tracking-tighter leading-none text-[#D4FF00] hidden md:block whitespace-nowrap">
          2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bold Typography & Core Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badges in Electric Lime and High Contrast */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#D4FF00] text-black text-[11px] font-black uppercase tracking-wider shadow-[0_0_12px_rgba(212,255,0,0.25)]">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                Disponible para trabajo
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-white text-[11px] font-mono uppercase tracking-widest border border-white/15">
                <Tv className="w-3.5 h-3.5 text-[#D4FF00]" />
                Bolivia Tv & ATB Digital
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 text-white/70 text-[11px] font-mono uppercase tracking-widest border border-white/10">
                UMSA (Egresado)
              </span>
            </div>

            {/* Main Bold Headline */}
            <div className="border-b border-white/15 pb-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                Jorge Martin <br />
                <span className="text-[#D4FF00]">Caritas.</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold uppercase tracking-widest text-white/80 mt-4 flex items-center gap-2">
                <span className="w-3 h-0.5 bg-[#D4FF00]" />
                {personalData.title}
              </p>
            </div>

            {/* Bio summary */}
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalData.bio}
            </p>

            {/* Quick Contact Info Chips (Bold Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3 p-3 rounded bg-[#141414] border border-white/10 hover:border-[#D4FF00] transition-all group"
              >
                <div className="w-9 h-9 rounded bg-[#D4FF00] text-black flex items-center justify-center shrink-0 font-black group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 block font-mono">Correo Electrónico</span>
                  <span className="font-bold text-xs text-white group-hover:text-[#D4FF00] truncate block">{personalData.email}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/591${personalData.phone}?text=Hola%20Jorge%20Martin,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded bg-[#141414] border border-white/10 hover:border-[#D4FF00] transition-all group"
              >
                <div className="w-9 h-9 rounded bg-[#D4FF00] text-black flex items-center justify-center shrink-0 font-black group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 block font-mono">WhatsApp Directo</span>
                  <span className="font-bold text-xs text-white group-hover:text-[#D4FF00]">{personalData.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded bg-[#141414] border border-white/10">
                <div className="w-9 h-9 rounded bg-white/10 text-[#D4FF00] flex items-center justify-center shrink-0 font-black">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 block font-mono">Ubicación</span>
                  <span className="font-bold text-xs text-white uppercase tracking-wider">La Paz, Bolivia</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded bg-[#141414] border border-white/10">
                <div className="w-9 h-9 rounded bg-white/10 text-[#D4FF00] flex items-center justify-center shrink-0 font-black">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 block font-mono">Disponibilidad</span>
                  <span className="font-bold text-xs text-white uppercase tracking-wider">{personalData.availability}</span>
                </div>
              </div>
            </div>

            {/* CTAs in High Contrast Bold Style */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded bg-[#D4FF00] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(212,255,0,0.2)] hover:bg-[#c2eb00] transition-all flex items-center gap-2 group hover:scale-105"
              >
                <span>Explorar Proyectos</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCV}
                className="px-6 py-3.5 rounded bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#D4FF00]" />
                <span>Ver CV / Exportar PDF</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded bg-[#141414] hover:bg-white/5 text-white/80 font-bold text-xs uppercase tracking-wider border border-white/10 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#D4FF00]" />
                <span>Contacto</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Portrait Frame in Bold Style */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Corner Framing Elements in Electric Lime */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4FF00]" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4FF00]" />

              <div className="relative rounded bg-[#141414] border border-white/15 p-5 shadow-2xl overflow-hidden space-y-5">
                
                {/* Photo Frame */}
                <div className="relative aspect-square w-full rounded overflow-hidden bg-black border border-white/10 group">
                  <img
                    src={personalData.avatarUrl}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-90" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-[#0F0F0F]/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#D4FF00] border border-[#D4FF00]/40 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#D4FF00]" />
                      Postproducción TV
                    </span>
                    <span className="px-3 py-1 rounded bg-[#0F0F0F]/90 backdrop-blur-md text-[10px] font-mono text-white/70 border border-white/10 uppercase tracking-widest">
                      La Paz, Bolivia
                    </span>
                  </div>
                </div>

                {/* Quick Roles Pills (Bold Typography Grid) */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded bg-black/60 border border-white/10 hover:border-[#D4FF00]/50 transition-colors">
                    <Video className="w-4 h-4 text-[#D4FF00] mx-auto mb-1" />
                    <span className="text-white block font-black text-xs uppercase tracking-wider">Video</span>
                    <span className="text-[9px] text-white/50 uppercase font-mono">Edición & Color</span>
                  </div>
                  <div className="p-2.5 rounded bg-black/60 border border-white/10 hover:border-[#D4FF00]/50 transition-colors">
                    <Mic className="w-4 h-4 text-[#D4FF00] mx-auto mb-1" />
                    <span className="text-white block font-black text-xs uppercase tracking-wider">Locución</span>
                    <span className="text-[9px] text-white/50 uppercase font-mono">Voz Institucional</span>
                  </div>
                  <div className="p-2.5 rounded bg-black/60 border border-white/10 hover:border-[#D4FF00]/50 transition-colors">
                    <Sparkles className="w-4 h-4 text-[#D4FF00] mx-auto mb-1" />
                    <span className="text-white block font-black text-xs uppercase tracking-wider">Diseño</span>
                    <span className="text-[9px] text-white/50 uppercase font-mono">Branding & RRSS</span>
                  </div>
                </div>

                {/* Key Summary Stat Card */}
                <div className="p-3.5 rounded bg-[#1A1A1A] border border-white/10 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[9px] text-white/50 block font-mono uppercase tracking-widest">Experiencia acumulada</span>
                    <span className="text-xs font-black text-white uppercase tracking-wider">Bolivia Tv, ATB & TEDx</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#D4FF00] text-black text-xs font-black font-mono">
                    2021–2026
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
