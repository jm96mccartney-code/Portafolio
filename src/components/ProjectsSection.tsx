import React, { useState } from 'react';
import { FolderGit2, Eye, X, Check } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'postproduction', label: 'Postproducción TV' },
    { id: 'design', label: 'Diseño Gráfico' },
    { id: 'journalism', label: 'Periodismo & IA' },
    { id: 'voiceover', label: 'Locución & Audio' },
  ];

  const filteredProjects = activeTab === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-[#0F0F0F] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em] bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30 inline-flex items-center gap-1.5">
            <FolderGit2 className="w-3.5 h-3.5 text-[#D4FF00]" />
            Portafolio Seleccionado
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            Muestras de <span className="text-[#D4FF00]">Trabajo.</span>
          </h2>
          <p className="text-white/60 text-sm font-normal max-w-xl mx-auto">
            Selección de piezas destacadas producidas para televisión abierta, campañas publicitarias de marketing, branding de conferencias y cobertura digital.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                activeTab === tab.id
                  ? 'bg-[#D4FF00] text-black border-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.2)]'
                  : 'bg-[#141414] text-white/70 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#141414] border border-white/10 rounded overflow-hidden shadow-2xl hover:border-[#D4FF00]/60 transition-all duration-300 flex flex-col group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded bg-[#0F0F0F]/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-[#D4FF00] border border-[#D4FF00]/40">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#0F0F0F]/90 backdrop-blur-md text-[10px] font-mono text-white/70 border border-white/10 uppercase tracking-widest">
                    {project.organization}
                  </span>
                </div>

                {/* Quick Overlay Action */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-2.5 rounded bg-[#D4FF00] text-black font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl hover:bg-[#c2eb00] transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver Detalles</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-white/40 font-mono uppercase tracking-widest">
                    <span>{project.date}</span>
                    <span className="text-[#D4FF00] font-bold">{project.mediaType.toUpperCase()}</span>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-[#D4FF00] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-xs line-clamp-2 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tools Chips & CTA */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {project.tools.slice(0, 3).map((tool, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 text-white/80 border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-[9px] text-[#D4FF00] font-mono font-bold">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[#D4FF00] text-xs font-black uppercase tracking-wider hover:underline flex items-center gap-1 shrink-0"
                  >
                    <span>Ver más</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
            <div className="bg-[#141414] border border-white/20 rounded max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="relative aspect-video w-full rounded overflow-hidden bg-black border border-white/10">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded bg-[#D4FF00] text-black text-xs font-black uppercase tracking-wider">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded bg-black text-white/70 text-xs font-mono border border-white/10 uppercase tracking-widest">
                    {selectedProject.organization} ({selectedProject.date})
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D4FF00] font-black">
                  // Descripción Detallada
                </h4>
                <p className="text-white/80 text-sm leading-relaxed font-normal">
                  {selectedProject.fullDetails}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D4FF00] font-black">
                  // Aspectos Destacados
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/90">
                      <Check className="w-3.5 h-3.5 text-[#D4FF00] shrink-0 font-black" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <h4 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D4FF00] font-black">
                  // Herramientas y Tecnologías
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider bg-black text-white border border-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded bg-[#D4FF00] text-black font-black text-xs uppercase tracking-widest hover:bg-[#c2eb00] transition-colors"
                >
                  Cerrar Vista
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
