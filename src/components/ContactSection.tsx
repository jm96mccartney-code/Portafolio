import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, Copy, Check } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'Postproducción de Video',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola Jorge Martin, mi nombre es ${formData.name || 'un interesado'}${
        formData.organization ? ` de ${formData.organization}` : ''
      }.\n\nServicio de interés: ${formData.service}\n\nMensaje: ${formData.message || 'Me gustaría conversar sobre un proyecto.'}`
    );
    window.open(`https://wa.me/59160678584?text=${text}`, '_blank');
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('60678584');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0F0F0F] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em] bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30 inline-flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#D4FF00]" />
            Contacto Directo
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
            ¿Hablamos sobre tu <span className="text-[#D4FF00]">Proyecto?</span>
          </h2>
          <p className="text-white/60 text-sm font-normal max-w-xl mx-auto">
            Estoy disponible para contrataciones, consultorías de contenido, postproducción audiovisual, diseño gráfico y locución profesional en La Paz o remoto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <div className="p-6 rounded bg-[#141414] border border-white/15 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-black text-black px-2.5 py-1 rounded bg-[#D4FF00] uppercase tracking-widest">
                  Respuesta Inmediata
                </span>
                <button
                  onClick={copyPhone}
                  className="text-xs text-white/50 hover:text-[#D4FF00] flex items-center gap-1 font-mono uppercase tracking-wider"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#D4FF00]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copiado!' : 'Copiar 60678584'}</span>
                </button>
              </div>

              <div>
                <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">// Teléfono / WhatsApp Directo</p>
                <h3 className="text-3xl font-black text-white mt-1">
                  60678584
                </h3>
              </div>

              <a
                href="https://wa.me/59160678584?text=Hola%20Jorge%20Martin,%20vi%20tu%20portafolio%20y%20deseo%20contactarte."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded bg-[#D4FF00] text-black font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 hover:bg-[#c2eb00]"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Abrir Chat de WhatsApp</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded bg-[#141414] border border-white/10 space-y-3 shadow-xl">
              <div className="w-10 h-10 rounded bg-[#D4FF00] text-black flex items-center justify-center font-black">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">// Correo Electrónico</p>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-base font-black text-white hover:text-[#D4FF00] transition-colors block truncate uppercase tracking-tight"
                >
                  {personalData.email}
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded bg-[#141414] border border-white/10 space-y-3 shadow-xl">
              <div className="w-10 h-10 rounded bg-[#D4FF00] text-black flex items-center justify-center font-black">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">// Ubicación Residencial</p>
                <p className="text-sm font-black text-white uppercase tracking-wider">
                  {personalData.address}
                </p>
                <span className="text-xs text-white/50 uppercase tracking-widest font-mono">La Paz, Bolivia</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded bg-[#141414] border border-white/15 shadow-2xl space-y-6">
              
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  Enviar Mensaje Directo
                </h3>
                <p className="text-xs text-white/60 mt-1 font-normal">
                  Completa los datos para generar un mensaje personalizado directo a mi WhatsApp o correo.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded bg-black border border-[#D4FF00]/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded bg-[#D4FF00] text-black flex items-center justify-center mx-auto font-black">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-black text-white uppercase tracking-tight">¡Mensaje Preparado!</h4>
                    <p className="text-xs text-white/70">
                      Puedes enviarlo ahora directamente a través de WhatsApp o usar tu correo habitual.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={openWhatsApp}
                      className="px-5 py-2.5 rounded bg-[#D4FF00] text-black font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#c2eb00]"
                    >
                      <MessageSquare className="w-4 h-4 fill-black" />
                      <span>Enviar por WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20"
                    >
                      Editar Mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1 font-bold">
                        Tu Nombre / Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. María López"
                        className="w-full px-4 py-2.5 rounded bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4FF00]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1 font-bold">
                        Correo de Contacto *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-4 py-2.5 rounded bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4FF00]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1 font-bold">
                        Organización / Medio
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Ej. Canal de TV, Agencia, Productora"
                        className="w-full px-4 py-2.5 rounded bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4FF00]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1 font-bold">
                        Servicio Requerido
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4FF00]"
                      >
                        <option value="Postproducción de Video">Postproducción de Video</option>
                        <option value="Diseño Gráfico & Branding">Diseño Gráfico & Branding</option>
                        <option value="Locución & Voz en Off">Locución & Voz en Off</option>
                        <option value="Periodismo & IA Digital">Periodismo & IA Digital</option>
                        <option value="Estrategia de Marketing">Estrategia de Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1 font-bold">
                      Detalle del Proyecto / Consulta *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escribe brevemente los detalles o fecha estimada de trabajo..."
                      className="w-full px-4 py-2.5 rounded bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4FF00]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded bg-[#D4FF00] text-black font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 hover:bg-[#c2eb00]"
                    >
                      <Send className="w-4 h-4 fill-black" />
                      <span>Generar y Enviar</span>
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="text-xs text-[#D4FF00] hover:underline flex items-center gap-1 font-black uppercase tracking-wider"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Directo</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
