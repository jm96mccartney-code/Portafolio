import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download } from 'lucide-react';
import { personalData, workExperiences, formalEducation, certifications } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVExportModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const fullCVText = `
CURRICULUM VITAE - ${personalData.name.toUpperCase()}

DATOS PERSONALES
Nombre y Apellidos: ${personalData.name}
Dirección: ${personalData.address}
Teléfono: ${personalData.phone}
E-mail: ${personalData.email}
Fecha de nacimiento: ${personalData.birthDate}
Estado civil: ${personalData.civilStatus}
Cédula de identidad: ${personalData.identityDoc}

EDUCACIÓN Y FORMACIÓN
${formalEducation.map(e => `- ${e.degree} | ${e.institution} (${e.period})`).join('\n')}

FORMACIÓN COMPLEMENTARIA
${certifications.map(c => `- ${c.title} | ${c.institution} (${c.dates})`).join('\n')}

EXPERIENCIA LABORAL
${workExperiences.map(w => `- ${w.company} | ${w.role} (${w.period})\n  ${w.description}`).join('\n\n')}

OTROS DATOS DE INTERÉS
- ${personalData.personality}
- ${personalData.availability}
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCVText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Jorge Martin Caritas Rocha
TITLE:Comunicador Social y Editor Audiovisual
TEL:${personalData.phone}
EMAIL:${personalData.email}
ADR:;;Av. Burgaleta #996, Z. Villa Copacabana;La Paz;;;Bolivia
NOTE:Editor de Postproducción Audiovisual, Diseñador Gráfico y Locutor.
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Jorge_Martin_Caritas_Rocha.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#141414] border border-white/20 rounded max-w-4xl w-full my-8 shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-black">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#D4FF00]" />
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Documento CV Hoja de Vida Original</h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded bg-[#D4FF00] text-black font-black text-xs uppercase tracking-widest hover:bg-[#c2eb00] transition-colors flex items-center gap-1.5 shadow"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-[#D4FF00]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>

            <button
              onClick={handleDownloadVCard}
              className="px-3.5 py-2 rounded bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-[#D4FF00]" />
              <span>vCard</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-900 font-sans leading-relaxed print:p-0 print:bg-white" id="cv-print-area">
          
          {/* Header */}
          <div className="text-center border-b-2 border-slate-900 pb-4">
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-slate-900">
              Curriculum Vitae
            </h1>
            <p className="text-lg font-bold text-amber-800 mt-1 uppercase">
              {personalData.name}
            </p>
          </div>

          {/* DATOS PERSONALES */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 bg-slate-100 p-1.5 px-3 border-l-4 border-slate-900">
              Datos Personales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 text-xs sm:text-sm">
              <p><strong className="font-bold text-slate-900">Nombre y Apellidos:</strong> {personalData.name}</p>
              <p><strong className="font-bold text-slate-900">Dirección:</strong> {personalData.address}</p>
              <p><strong className="font-bold text-slate-900">Teléfono:</strong> {personalData.phone}</p>
              <p><strong className="font-bold text-slate-900">E-mail:</strong> {personalData.email}</p>
              <p><strong className="font-bold text-slate-900">Fecha de nacimiento:</strong> {personalData.birthDate}</p>
              <p><strong className="font-bold text-slate-900">Estado civil:</strong> {personalData.civilStatus}</p>
              <p><strong className="font-bold text-slate-900">Cédula de identidad:</strong> {personalData.identityDoc}</p>
            </div>
          </div>

          {/* EDUCACION Y FORMACION */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 bg-slate-100 p-1.5 px-3 border-l-4 border-slate-900">
              Educación y Formación
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <p className="font-bold text-slate-900">Bachiller en Humanidades</p>
                <p className="text-slate-700 font-mono text-xs">2000 - 2013 : Unidad Educativa Particular La Paz</p>
              </div>

              <div>
                <p className="font-bold text-slate-900">Licenciatura en Comunicación Social (Egresado)</p>
                <p className="text-slate-700 font-mono text-xs">2015 – Actualidad : Universidad Mayor de San Andrés</p>
              </div>
            </div>
          </div>

          {/* FORMACION COMPLEMENTARIA */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 bg-slate-100 p-1.5 px-3 border-l-4 border-slate-900">
              Formación Complementaria
            </h2>

            <div className="space-y-2 text-xs sm:text-sm">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-1.5">
                  <div>
                    <span className="font-bold text-slate-900">{cert.title}</span>
                    <span className="text-slate-600"> — {cert.institution}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 whitespace-nowrap">{cert.dates}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCIA LABORAL */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 bg-slate-100 p-1.5 px-3 border-l-4 border-slate-900">
              Experiencia Laboral
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              {workExperiences.map((exp) => (
                <div key={exp.id} className="space-y-1 border-b border-slate-200 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <p className="font-bold text-slate-900">{exp.company} <span className="font-normal text-slate-700">: {exp.role}</span></p>
                    <p className="font-mono text-xs text-slate-600">{exp.period}</p>
                  </div>
                  <p className="text-xs text-slate-700 italic">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OTROS DATOS DE INTERES */}
          <div className="space-y-2 pt-2 border-t border-slate-300">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900">
              Otros Datos de Interés
            </h2>
            <p className="text-xs sm:text-sm text-slate-800">
              Me considero una persona amable, responsable y enfocada en la superación constante.
            </p>
            <p className="text-xs sm:text-sm text-slate-800 font-bold">
              Poseo disponibilidad absoluta para trabajar.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
