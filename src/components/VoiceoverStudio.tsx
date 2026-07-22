import React, { useState } from 'react';
import { Mic, Play, Pause, Volume2, Award, FileText, CheckCircle2 } from 'lucide-react';
import { voiceDemos } from '../data/portfolioData';

export const VoiceoverStudio: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  return (
    <section id="voiceover" className="py-20 bg-[#0F0F0F] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="px-3.5 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em] bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30 inline-flex items-center gap-1.5">
            <Mic className="w-3.5 h-3.5 text-[#D4FF00]" />
            Certificado Xperticia (2025)
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            Muestras de <span className="text-[#D4FF00]">Locución.</span>
          </h2>
          <p className="text-white/60 text-sm font-normal max-w-xl mx-auto">
            Demostración de registros vocales en español neutro para spots publicitarios, voz institucional, noticieros y narraciones documentales.
          </p>
        </div>

        {/* Studio Player Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {voiceDemos.map((demo) => {
            const isPlaying = playingId === demo.id;
            return (
              <div
                key={demo.id}
                className={`p-6 rounded border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  isPlaying
                    ? 'bg-[#141414] border-[#D4FF00] shadow-[0_0_20px_rgba(212,255,0,0.15)]'
                    : 'bg-[#141414] border-white/10 hover:border-white/30'
                }`}
              >
                {/* Header info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-[#D4FF00] text-black text-[10px] font-black uppercase tracking-wider">
                      {demo.category}
                    </span>
                    <span className="text-[10px] font-mono text-white/50 flex items-center gap-1 uppercase tracking-widest">
                      <Volume2 className="w-3.5 h-3.5 text-[#D4FF00]" />
                      {demo.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight">
                    {demo.title}
                  </h3>

                  <p className="text-xs text-white/60 font-mono">
                    <strong className="text-[#D4FF00] uppercase font-bold">Intención:</strong> {demo.tone}
                  </p>
                </div>

                {/* Animated Sound Waveforms */}
                <div className="p-4 rounded bg-black border border-white/10 space-y-3">
                  <div className="flex items-center justify-between gap-1 h-10 px-2">
                    {[40, 70, 30, 90, 60, 100, 45, 80, 65, 30, 85, 95, 50, 70, 40, 85, 60, 90, 35, 75].map((height, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isPlaying
                            ? 'bg-[#D4FF00] animate-pulse'
                            : 'bg-white/20'
                        }`}
                        style={{
                          height: isPlaying ? `${Math.max(15, (height * (i % 2 === 0 ? 1 : 0.7)))}%` : '20%',
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    ))}
                  </div>

                  {/* Play / Pause Toggle button */}
                  <button
                    onClick={() => togglePlay(demo.id)}
                    className={`w-full py-3 rounded font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md ${
                      isPlaying
                        ? 'bg-red-500 text-white'
                        : 'bg-[#D4FF00] text-black hover:bg-[#c2eb00]'
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span>Pausar Muestra</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-black" />
                        <span>Escuchar Muestra de Voz</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Script snippet */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#D4FF00] block flex items-center gap-1 font-bold">
                    <FileText className="w-3 h-3 text-[#D4FF00]" />
                    // Guion / Texto de Muestra
                  </span>
                  <p className="text-xs text-white/80 italic leading-relaxed bg-black/60 p-3 rounded border border-white/10 font-normal">
                    "{demo.script}"
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Micro Features Banner */}
        <div className="mt-12 p-6 rounded bg-[#141414] border border-white/15 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#D4FF00] text-black flex items-center justify-center shrink-0 font-black">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-wider">Certificación Xperticia</h4>
              <p className="text-[11px] text-white/50">Técnica vocal y micrófono en cabina</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#D4FF00] text-black flex items-center justify-center shrink-0 font-black">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-wider">Español Neutro Latino</h4>
              <p className="text-[11px] text-white/50">Dicción, modulación e intencionalidad</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#D4FF00] text-black flex items-center justify-center shrink-0 font-black">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-wider">Postproducción Audio</h4>
              <p className="text-[11px] text-white/50">Adobe Audition & edición broadcast</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
