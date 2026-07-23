import {
  PersonalInfo,
  WorkExperience,
  EducationItem,
  CertificationItem,
  TechnicalSkill,
  ProjectItem,
  VoiceDemo
} from '../types';

import profilePhoto from '../assets/images/profile_photo_new.jpg';
import projectBoliviaTv from '../assets/images/project_bolivia_tv_1784691904763.jpg';
import projectTedx from '../assets/images/project_tedx_design_1784691914763.jpg';
import projectAiJournalism from '../assets/images/project_ai_journalism_1784691925991.jpg';
import ill1 from '../assets/images/illustrations/ill_1.png';
import ill2 from '../assets/images/illustrations/ill_2.png';
import ill3 from '../assets/images/illustrations/ill_3.png';
import ill4 from '../assets/images/illustrations/ill_4.png';
import ill5 from '../assets/images/illustrations/ill_5.png';
import ill6 from '../assets/images/illustrations/ill_6.png';
import ill7 from '../assets/images/illustrations/ill_7.png';
import ill8 from '../assets/images/illustrations/ill_8.png';
import ill9 from '../assets/images/illustrations/ill_9.png';
import ill10 from '../assets/images/illustrations/ill_10.png';
import ill11 from '../assets/images/illustrations/ill_11.png';
import ill12 from '../assets/images/illustrations/ill_12.png';
import ill13 from '../assets/images/illustrations/ill_13.png';
import ill14 from '../assets/images/illustrations/ill_14.png';
import ill15 from '../assets/images/illustrations/ill_15.png';
import ill16 from '../assets/images/illustrations/ill_16.png';
import ill17 from '../assets/images/illustrations/ill_17.jpg';

export const personalData: PersonalInfo = {
  name: "Jorge Martin Caritas Rocha",
  title: "Comunicador Social & Editor Audiovisual",
  subtitle: "Postproducción de Video | Diseño Gráfico | Locución | Periodismo Digital con IA",
  email: "jm96mccartney@gmail.com",
  phone: "60678584",
  address: "Z. Villa Copacabana, Av. Burgaleta #996, La Paz, Bolivia",
  birthDate: "27/05/1996",
  civilStatus: "Soltero",
  identityDoc: "6868938 LP",
  bio: "Comunicador Social egresado de la Universidad Mayor de San Andrés (UMSA), especializado en postproducción de video, edición audiovisual, diseño gráfico y locución. Con sólida trayectoria en medios de alcance nacional como Bolivia Tv, ATB Digital y proyectos internacionales como TEDxUMSA. Profesional proactivo, responsable y apasionado por la innovación narrativa y la inteligencia artificial aplicada al periodismo.",
  avatarUrl: profilePhoto,
  availability: "Disponibilidad absoluta para trabajar",
  personality: "Persona amable, responsable y enfocada en la superación constante"
};

export const workExperiences: WorkExperience[] = [
  {
    id: "exp-red-uno",
    company: "Red Uno de Bolivia S.A.",
    role: "Consultor Externo",
    period: "15/04/26 al 22/06/26",
    startDate: "2026-04-15",
    endDate: "2026-06-22",
    type: "Trabajo",
    description: "Consultoría externa en producción audiovisual y postproducción para el área de contenidos del canal de televisión de alcance nacional.",
    responsibilities: [
      "Edición y postproducción de piezas audiovisuales para programación informativa y de entretenimiento.",
      "Asesoría en flujos de trabajo de edición y optimización de recursos técnicos.",
      "Color grading, mezcla de audio y motion graphics para reportajes especiales.",
      "Coordinación directa con el equipo de producción para cumplimiento de entregas en deadline."
    ],
    skillsUsed: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Postproducción", "Asesoría Técnica"],
    logoText: "UNO",
    badgeColor: "bg-red-700/10 text-red-700 border-red-600/20"
  },
  {
    id: "exp-bolivia-tv",
    company: "Bolivia Tv",
    role: "Editor de Post Producción",
    period: "21/11/23 al 09/03/26",
    startDate: "2023-11-21",
    endDate: "2026-03-09",
    type: "Trabajo",
    description: "Responsable de la edición, montaje y postproducción de piezas informativas, reportajes especiales y cápsulas televisivas para el canal estatal de emisión nacional.",
    responsibilities: [
      "Edición de video de alta precisión en tiempo real para informativos en vivo y grabados.",
      "Postproducción de audio, mezcla de ambiente, sonorización y nivelación de diálogos broadcast.",
      "Corrección de color (Color Grading) y empaquetado gráfico acorde a las normas de línea gráfica del canal.",
      "Coordinación técnica con periodistas, realizadores y jefes de prensa para entregas contra reloj."
    ],
    skillsUsed: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Postproducción Audio", "Edición Noticias"],
    logoText: "BTV",
    badgeColor: "bg-red-600/10 text-red-600 border-red-500/20"
  },
  {
    id: "exp-grupo-alfa",
    company: "Grupo Alfa",
    role: "Pasantía en Marketing",
    period: "14/07/23 al 15/11/23",
    startDate: "2023-07-14",
    endDate: "2023-11-15",
    type: "Pasantía",
    description: "Desarrollo de estrategias de contenidos digitales, diseño de campañas promocionales e investigación de mercado para posicionamiento de marca.",
    responsibilities: [
      "Diseño de piezas publicitarias gráficas y audiovisuales para redes sociales (Meta, TikTok, YouTube).",
      "Planificación y calendarización de contenido multiplataforma.",
      "Análisis de métricas de alcance, interacción y rendimiento de campañas.",
      "Redacción creativa de copies para banners, mailing y posts orgánicos."
    ],
    skillsUsed: ["Marketing Digital", "Estrategia de Contenidos", "Diseño Publicitario", "Copywriting", "Redes Sociales"],
    logoText: "GA",
    badgeColor: "bg-amber-600/10 text-amber-600 border-amber-500/20"
  },
  {
    id: "exp-atb-digital",
    company: "ATB Digital",
    role: "Pasantía en Diseño Gráfico",
    period: "11/07/22 al 11/07/23",
    startDate: "2022-07-11",
    endDate: "2023-07-11",
    type: "Pasantía",
    description: "Diseño de identidad visual informativa, miniatura de videos, infografías y material gráfico para el área digital del medio de comunicación ATB.",
    responsibilities: [
      "Creación de plantillas e infografías para noticias de actualidad de última hora.",
      "Diseño de miniaturas y portadas optimizadas para YouTube, Facebook y portal web.",
      "Retoque fotográfico, fotomontaje y adaptación de formatos para plataformas móviles.",
      "Soporte gráfico al equipo periodístico para transmisiones digitales."
    ],
    skillsUsed: ["Adobe Photoshop", "Adobe Illustrator", "Diseño Editorial", "Infografías", "Prensa Digital"],
    logoText: "ATB",
    badgeColor: "bg-blue-600/10 text-blue-600 border-blue-500/20"
  },
  {
    id: "exp-tedx-umsa",
    company: "TEDxUMSA",
    role: "Voluntariado en Diseño Gráfico",
    period: "21/07/21 al 19/12/21",
    startDate: "2021-07-21",
    endDate: "2021-12-19",
    type: "Voluntariado",
    description: "Co-creación de la identidad gráfica y material promocional para el evento de conferencias TEDxUMSA en La Paz.",
    responsibilities: [
      "Diseño de piezas visuales para la presentación de conferencistas y programa oficial.",
      "Creación de recursos gráficos para banners de escenario, acreditaciones y merchandise.",
      "Diseño de publicaciones para campaña de expectativa en Instagram y Facebook.",
      "Alineación estricta con la guía internacional de marca TEDx."
    ],
    skillsUsed: ["Branding", "Identidad Visual", "Ilustración Digital", "Diseño de Eventos", "Diseño Social Media"],
    logoText: "TEDx",
    badgeColor: "bg-rose-600/10 text-rose-600 border-rose-500/20"
  }
];

export const formalEducation: EducationItem[] = [
  {
    id: "edu-umsa",
    degree: "Licenciatura en Comunicación Social (Egresado)",
    institution: "Universidad Mayor de San Andrés (UMSA)",
    period: "2015 – Actualidad",
    status: "Egresado",
    description: "Formación integral en teoría de la comunicación, investigación periodística, producción audiovisual, comunicación organizacional y medios masivos.",
    type: "Formal"
  },
  {
    id: "edu-colegio",
    degree: "Bachiller en Humanidades",
    institution: "Unidad Educativa Particular La Paz",
    period: "2000 - 2013",
    status: "Concluido",
    description: "Formación secundaria orientada en áreas cualitativas, desarrollo crítico y redacción.",
    type: "Formal"
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-locucion",
    title: "Curso de Locución",
    institution: "Xperticia",
    dates: "11 de enero al 5 de abril de 2025",
    year: 2025,
    description: "Técnicas de modulación de voz, respiración diafragmática, dicción, intención dramática, locución comercial e institucional.",
    category: "Locución & Audio"
  },
  {
    id: "cert-ia",
    title: "Curso 'Inteligencia Artificial Aplicada al Periodismo'",
    institution: "UNIFRANZ",
    dates: "21 de agosto al 23 de agosto de 2024",
    year: 2024,
    description: "Uso de herramientas de IA generativa para asistencia en curaduría periodística, verificación de hechos, automatización de transcripciones e ilustración de noticias.",
    category: "Nuevas Tecnologías & Periodismo"
  },
  {
    id: "cert-ipicom",
    title: "Taller de Edición y Postproducción Audiovisual",
    institution: "IPICOM",
    dates: "09 de noviembre al 21 de diciembre de 2022",
    year: 2022,
    description: "Técnicas avanzadas de montaje, compresión de video, diseño sonoro, motion graphics y composición en After Effects y Premiere Pro.",
    category: "Edición Audiovisual"
  },
  {
    id: "cert-periodismo",
    title: "Ciclo de Seminarios Virtuales sobre Periodismo",
    institution: "UMSA - Carrera de Comunicación Social",
    dates: "22 de octubre al 29 de octubre de 2021",
    year: 2021,
    description: "Nuevas tendencias periodísticas, ética en medios digitales, cobertura de emergencias e investigación periodística contemporánea.",
    category: "Periodismo"
  }
];

export const technicalSkills: TechnicalSkill[] = [
  {
    name: "Adobe Premiere Pro (Edición de Video)",
    level: 95,
    category: "audiovisual",
    tools: ["Montaje broadcast", "Corte rítmico", "Sincronización multi-cámara"]
  },
  {
    name: "After Effects (Motion Graphics & Postproducción)",
    level: 88,
    category: "audiovisual",
    tools: ["Lower thirds", "Animación de logos", "Efectos visuales", "Keying"]
  },
  {
    name: "DaVinci Resolve (Color Grading)",
    level: 82,
    category: "audiovisual",
    tools: ["Corrección primaria/secundaria", "LUTs", "Normalización REC.709"]
  },
  {
    name: "Adobe Audition (Edición y Limpieza de Audio)",
    level: 85,
    category: "audiovisual",
    tools: ["Reducción de ruido", "Mezcla estéreo", "Masterización de voz"]
  },
  {
    name: "Adobe Photoshop (Edición Fotográfica)",
    level: 90,
    category: "graphic_design",
    tools: ["Fotomontaje", "Portadas de noticias", "Miniaturas YouTube"]
  },
  {
    name: "Adobe Illustrator (Diseño Vectorial & Branding)",
    level: 92,
    category: "graphic_design",
    tools: ["Logotipos", "Infografías", "Material impreso", "Vectores"]
  },
  {
    name: "Locución y Manejo de Voz",
    level: 88,
    category: "voiceover",
    tools: ["Voz en off institucional", "Spots comerciales", "Noticieros", "Dicción"]
  },
  {
    name: "IA Aplicada al Periodismo",
    level: 85,
    category: "journalism",
    tools: ["Gemini AI", "Transcripción automática", "Verificación de fuentes", "Generación de imágenes"]
  },
  {
    name: "Redacción Periodística y Curaduría",
    level: 90,
    category: "journalism",
    tools: ["Redacción de noticias", "Entrevistas", "Titulares atractivos", "Nota de prensa"]
  },
  {
    name: "Marketing Digital & Campañas",
    level: 80,
    category: "marketing",
    tools: ["Estrategia de redes", "Copywriting", "Calendario editorial", "Métricas"]
  }
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Edición y Postproducción de Reportaje Central",
    category: "postproduction",
    categoryLabel: "Postproducción TV",
    organization: "Bolivia Tv",
    date: "2024 - 2025",
    thumbnail: projectBoliviaTv,
    description: "Edición integral de notas de prensa y reportajes de investigación con gráfica en movimiento, empaquetado visual y mezcla sonora broadcast.",
    fullDetails: "Trabajo realizado en el máster de edición de Bolivia Tv. Incluyó el tratamiento técnico del material raw, aplicación de colorimetría para uniformar tomas de distintas cámaras, limpieza de sonido directo en Adobe Audition, e inclusión de animaciones de nombres e infografías animadas en After Effects.",
    tools: ["Adobe Premiere Pro", "After Effects", "Audition", "Color Grading"],
    mediaType: "video",
    highlights: [
      "Emisión en señal abierta de alcance nacional",
      "Cumplimiento de tiempos de entrega en vivo (Breaking News)",
      "Normalización de audio según estándares EBU R128"
    ]
  },
  {
    id: "proj-2",
    title: "Identidad Gráfica & Branding Oficial",
    category: "design",
    categoryLabel: "Diseño Gráfico",
    organization: "TEDxUMSA",
    date: "2021",
    thumbnail: projectTedx,
    description: "Desarrollo del paquete gráfico completo para conferencias, credenciales, banners publicitarios y piezas de redes sociales.",
    fullDetails: "Diseño de la estrategia visual y gráfica para el evento TEDxUMSA. Creación de plantillas vectoriales en Illustrator para presentación de ponentes, reticulación de publicaciones para Instagram y diseño de credenciales de alta visibilidad para staff y público.",
    tools: ["Adobe Illustrator", "Photoshop", "Branding", "Social Media"],
    mediaType: "image",
    highlights: [
      "Alineado con manuales globales de marca TEDx",
      "Más de 30 piezas gráficas publicitarias creadas",
      "Excelente impacto de marca en comunidad universitaria"
    ]
  },
  {
    id: "proj-3",
    title: "Cobertura Digital e Infografías Periodísticas",
    category: "journalism",
    categoryLabel: "Periodismo & IA",
    organization: "ATB Digital / UNIFRANZ",
    date: "2023 - 2024",
    thumbnail: projectAiJournalism,
    description: "Línea de piezas gráficas e informes interactivos adaptados a plataformas digitales utilizando IA como asistente de síntesis.",
    fullDetails: "Diseño de carruseles informativos de lectura rápida para redes sociales. Integración de flujos de IA generativa para síntesis de textos largos y generación de conceptos gráficos para notas explicativas de economía y cultura.",
    tools: ["IA Generativa", "Illustrator", "Photoshop", "Copywriting Periodístico"],
    mediaType: "image",
    highlights: [
      "Sintetizado de datos complejos en infografías de 1 minuto",
      "Optimización del tiempo de creación en un 40% mediante IA",
      "Formato adaptable para pantallas verticales"
    ]
  },
  {
    id: "proj-4",
    title: "Demostración de Locución & Voz Institucional",
    category: "voiceover",
    categoryLabel: "Locución & Audio",
    organization: "Xperticia / Proyectos Independientes",
    date: "2025",
    thumbnail: projectBoliviaTv,
    description: "Grabaciones de muestra de locución en off para promocionales de televisión, spots de radio y narración documental.",
    fullDetails: "Muestra de registro vocal neutro y expresivo con dicción clara, intencionalidad versátil y calidad de micrófono de estudio con procesamiento de audio limpio.",
    tools: ["Adobe Audition", "Procesamiento Dinámico", "Técnica Vocal Diafragmática"],
    mediaType: "audio",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    highlights: [
      "Registro modulado para documental y noticias",
      "Tonalidad cálida y clara en español neutro",
      "Dominio de intenciones comerciales e institucionales"
    ]
  },
  {
    id: "ill-1",
    title: "Composición con Monedas y Elementos Financieros",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill1,
    description: "Ilustración vectorial conceptual sobre economía y finanzas, aplicable a campañas de comunicación corporativa y contenido digital para medios.",
    fullDetails: "Composición digital creada con técnicas de ilustración vectorial, combinando elementos simbólicos del ámbito financiero. Apta para piezas gráficas de prensa económica, reportajes de actualidad y diseño de infografías interactivas. Estilo limpio con paleta de colores contrastantes y sombreado suave para profundidad visual.",
    tools: ["Adobe Illustrator", "Diseño Vectorial", "Composición Digital", "Paleta Corporativa"],
    mediaType: "image",
    highlights: [
      "Ilustración vectorial scalable a cualquier formato",
      "Composición equilibrada con jerarquía visual clara",
      "Apto para medios impresos y digitales"
    ]
  },
  {
    id: "ill-2",
    title: "Icono de Claqueta Cinematográfica",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill2,
    description: "Ilustración minimalista de claqueta de cine, representativa del branding para productoras audiovisuales y estudios de postproducción.",
    fullDetails: "Diseño vectorial de claqueta cinematográfica con líneas definidas y ángulos precisos. Elaborada bajo principios de diseño minimalista con enfoque en la simetría y el contraste visual. Ideal como isotipo o elemento gráfico para marcas del sector audiovisual.",
    tools: ["Illustrator", "Diseño de Iconos", "Vectorización", "Branding"],
    mediaType: "image",
    highlights: [
      "Estilo minimalista profesional",
      "Alta legibilidad en escala reducida",
      "Versátil para aplicaciones de branding"
    ]
  },
  {
    id: "ill-3",
    title: "Tira de Película y Rodillo de Cine",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill3,
    description: "Ilustración clásica de cinta cinematográfica con fotogramas, representativa de la industria del cine y la producción audiovisual.",
    fullDetails: "Ilustración detallada de carrete y tira de película con fotogramas secuenciales. Técnica de sombreado por capas para lograr efecto tridimensional. Utilizada como referencia visual para diseños de estudio de filmación, salas de cine y contenido relacionado con la cinematografía.",
    tools: ["Photoshop", "Ilustración Digital", "Sombreado por Capas", "Texturizado"],
    mediaType: "image",
    highlights: [
      "Detalle realista con texturas analógicas",
      "Efecto de profundidad tridimensional",
      "Representación icónica del séptimo arte"
    ]
  },
  {
    id: "ill-4",
    title: "Kit de Herramientas de Oficina y Diseño",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill4,
    description: "Ilustración de conjunto de herramientas de oficina y diseño gráfico, aplicable a contenido sobre productividad y estaciones de trabajo creativas.",
    fullDetails: "Composición de iconos y herramientas de diseño gráfico y papelería organizacional, incluyendo elementos como lápices, reglas y dispositivos. Ilustración plana con paleta de colores armónica. Adecuada como imagen conceptual para artículos sobre diseño, comunicación visual y branding personal.",
    tools: ["Illustrator", "Diseño Plano", "Composición Modular", "Paleta Cromática"],
    mediaType: "image",
    highlights: [
      "Estilo flat design moderno",
      "Composición modular reutilizable",
      "Aplicable a contenido de diseño editorial"
    ]
  },
  {
    id: "ill-5",
    title: "Cámara con Cinta de Película",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill5,
    description: "Ilustración conceptual que fusiona una cámara fotográfica con un rodillo de película, simbolizando la narrativa visual en la era digital.",
    fullDetails: "Composición ilustrativa que integra una cámara réflex con una cinta de película emergente, creando una metáfora visual entre la fotografía clásica y la producción de contenido moderna. Técnica de ilustración híbrida entre vectorial y pintura digital.",
    tools: ["Photoshop", "Illustrator", "Fotomontaje", "Composición Híbrida"],
    mediaType: "image",
    highlights: [
      "Metáfora visual entre fotografía análoga y digital",
      "Fusión de técnicas vectoriales y rasterizadas",
      "Alto impacto conceptual para portafolio"
    ]
  },
  {
    id: "ill-6",
    title: "Correo Electrónico y Comunicación Digital",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill6,
    description: "Ilustración conceptual de comunicación digital centrada en el correo electrónico como herramienta de contacto profesional y networking.",
    fullDetails: "Diseño vectorial que representa el ecosistema de la comunicación digital con énfasis en plataformas de mensajería y correo corporativo. Aplicable como imagen complementaria en secciones de contacto profesional, servicios de consultoría en comunicación y diseño de landing pages para portafolio digital.",
    tools: ["Illustrator", "Diseño de Interfaz", "Iconografía Digital", "UX Conceptual"],
    mediaType: "image",
    highlights: [
      "Iconografía clara de comunicación digital",
      "Diseño adaptable a UI/UX",
      "Representación visual de networking profesional"
    ]
  },
  {
    id: "ill-7",
    title: "Notificaciones y Alertas Visuales",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill7,
    description: "Ilustración de sistema de notificaciones y alertas para plataformas digitales, aplicable a diseño UX/UI y gestión de contenidos.",
    fullDetails: "Representación vectorial de una campana de notificaciones con ondas de señal, diseñada bajo principios de comunicación visual efectiva. Forma parte de una serie de iconografía para interfaces digitales de medios de comunicación y redes informativas. Incluye estudio de legibilidad en diferentes escalas y resolución.",
    tools: ["Illustrator", "Diseño UX/UI", "Sistema de Iconos", "Escalabilidad Vectorial"],
    mediaType: "image",
    highlights: [
      "Optimizado para interfaces digitales",
      "Alta legibilidad en múltiples resoluciones",
      "Consistente con sistemas de diseño modernos"
    ]
  },
  {
    id: "ill-8",
    title: "Proyector Audiovisual y Sala de Cine",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill8,
    description: "Ilustración de proyector cinematográfico en sala oscura, representación icónica de la proyección audiovisual en medios y eventos.",
    fullDetails: "Composición digital de un proyector de cine en funcionamiento con haz de luz y partículas en suspensión. Técnica de capas de luz y sombra para recrear ambiente de sala de proyección. Adecuada como imagen conceptual para servicios de postproducción, creación de contenido multimedia y organización de eventos audiovisuales.",
    tools: ["Photoshop", "After Effects", "Composición Lumínica", "Atmósfera Digital"],
    mediaType: "image",
    highlights: [
      "Efecto de iluminación atmosférica realista",
      "Ambientación cinematográfica profesional",
      "Simboliza producción y proyección de contenido"
    ]
  },
  {
    id: "ill-9",
    title: "Fotógrafo Profesional en Estudio",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill9,
    description: "Ilustración de fotógrafo profesional con equipo de cámara, representativa del servicio de fotografía corporativa y sesiones de retrato.",
    fullDetails: "Ilustración vectorial de un fotógrafo en acción con cámara réflex digital. Diseñada con curvas suaves y paleta de colores equilibrada para transmitir profesionalismo. Referencia visual para servicios de fotografía publicitaria, retrato corporativo y cobertura de eventos. Incluye estudio de proporciones anatómicas y composición de la figura en movimiento.",
    tools: ["Illustrator", "Figura Humana Vectorial", "Estudio de Proporciones", "Diseño de Personajes"],
    mediaType: "image",
    highlights: [
      "Figura humana estilizada con movimiento natural",
      "Paleta de colores corporativa profesional",
      "Representación dinámica del oficio fotográfico"
    ]
  },
  {
    id: "ill-10",
    title: "Mascota Editorial para Revista Infantil",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill10,
    description: "Ilustración estilo cartoon de felino, aplicable al diseño editorial de secciones infantiles y contenido educativo en medios de comunicación.",
    fullDetails: "Ilustración vectorial de personaje felino en estilo cartoon, desarrollada con capas de color plano y delineado suave. Orientada al diseño editorial de suplementos infantiles en periódicos y revistas digitales. Técnica de vectorización con simplificación de formas para garantizar reconocibilidad a diferentes escalas de impresión.",
    tools: ["Illustrator", "Diseño de Personajes", "Color Plano", "Delineado Vectorial"],
    mediaType: "image",
    highlights: [
      "Estilo cartoon amigable para audiencia infantil",
      "Formas simplificadas para alta escalabilidad",
      "Aplicable a contenido editorial y redes sociales"
    ]
  },
  {
    id: "ill-11",
    title: "Perfil Femenino Corporativo",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill11,
    description: "Ilustración conceptual de perfil femenino profesional, aplicable a diseño de marca personal, portafolios digitales y contenido de recursos humanos.",
    fullDetails: "Ilustración de perfil femenino estilizado con elementos decorativos de comunicación visual. Diseñada para secciones de 'sobre mí', biografías profesionales y páginas de equipo en sitios corporativos. Técnica mixta de silhouette con acentos de color que dirigen la atención visual hacia el área de comunicación.",
    tools: ["Illustrator", "Silueta Vectorial", "Composición Decorativa", "Diseño Corporativo"],
    mediaType: "image",
    highlights: [
      "Estilo elegante con acentos cromáticos",
      "Orientado a marca personal y corporativa",
      "Equilibrio entre figura y espacio negativo"
    ]
  },
  {
    id: "ill-12",
    title: "Plataforma de Comunicación Empresarial",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill12,
    description: "Ilustración de ecosistema de comunicación empresarial con múltiples canales, representativa del trabajo en medios y agencias de comunicación.",
    fullDetails: "Composición de iconos y elementos visuales que representan un ecosistema completo de comunicación empresarial: correo, mensajería, videollamadas y notificaciones. Diseñada bajo sistema de grilla y consistencia estilística. Referencia para diseño de intranets, plataformas de comunicación interna y landing pages de agencias de comunicación.",
    tools: ["Illustrator", "Sistema de Diseño", "Grid Visual", "Comunicación Visual"],
    mediaType: "image",
    highlights: [
      "Sistema de iconos consistente",
      "Representación de multicanalidad",
      "Aplicable a plataformas empresariales"
    ]
  },
  {
    id: "ill-13",
    title: "Industria Cinematográfica y Producción",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill13,
    description: "Ilustración conceptual de la industria del cine, integrando elementos clásicos y modernos de producción audiovisual.",
    fullDetails: "Composición ilustrativa que integra simbología clásica del cine (claqueta, película, reflector) con elementos contemporáneos de producción digital. Técnica de capas superpuestas para crear sensación de profundidad y dinamismo. Adecuada para catálogos de servicios de producción audiovisual, escuelas de cine y agencias creativas.",
    tools: ["Photoshop", "Composición Digital", "Fotomontaje Creativo", "Teoría del Color"],
    mediaType: "image",
    highlights: [
      "Fusión de simbología clásica y moderna",
      "Jerarquía visual dinámica",
      "Profundidad mediante capas superpuestas"
    ]
  },
  {
    id: "ill-14",
    title: "Arte Digital y Estilo Manga",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill14,
    description: "Ilustración estilo anime/manga, demostrando versatilidad en técnicas de ilustración digital para contenido juvenil y entretenimiento.",
    fullDetails: "Ilustración digital con influencias del estilo anime japonés, desarrollada con técnicas de pintura digital y difuminado. Aplicable a diseño de personajes para animación 2D, contenido interactivo y campañas dirigidas a público juvenil. Demuestra dominio de proporciones estilizadas y narrativa visual a través de la expresión del personaje.",
    tools: ["Clip Studio Paint", "Photoshop", "Pintura Digital", "Diseño de Personajes Anime"],
    mediaType: "image",
    highlights: [
      "Técnica de difuminado y pintura digital",
      "Estilo de ilustración internacional (manga/anime)",
      "Versatilidad para contenido de entretenimiento"
    ]
  },
  {
    id: "ill-15",
    title: "Estación de Trabajo Digital Creativa",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill15,
    description: "Ilustración de setup de trabajo digital con laptop y elementos multimedia, representativa de espacios de creación de contenido y home office.",
    fullDetails: "Composición vectorial de una estación de trabajo digital completa con laptop, dispositivos móviles y elementos de papelería. Diseñada con perspectiva isométrica que permite visualizar el espacio de trabajo desde un ángulo dinámico. Ideal para contenido sobre trabajo remoto, productividad creativa y diseño de espacios de creación audiovisual.",
    tools: ["Illustrator", "Perspectiva Isométrica", "Diseño de Espacios", "Illustración Técnica"],
    mediaType: "image",
    highlights: [
      "Perspectiva isométrica detallada",
      "Representación de ecosistema creativo digital",
      "Alto nivel de detalle en elementos tecnológicos"
    ]
  },
  {
    id: "ill-16",
    title: "Cuadrícula Abstracta y Branding",
    category: "illustration",
    categoryLabel: "Ilustración Vectorial",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill16,
    description: "Composición abstracta geométrica sobre cuadrícula, demostrando principios de diseño gráfico aplicados a fondos visuales y branding.",
    fullDetails: "Composición abstracta desarrollada sobre una retícula geométrica con patrones repetitivos y degradados. Explora principios de diseño como ritmo visual, equilibrio asimétrico y profundidad mediante superposición de elementos. Orientada a la creación de fondos visuales corporativos, texturas digitales y elementos de identidad visual para marcas tecnológicas y creativas.",
    tools: ["Illustrator", "Diseño Geométrico", "Patrones Vectoriales", "Degradados", "Composición Abstracta"],
    mediaType: "image",
    highlights: [
      "Estudio avanzado de retículas y patrones",
      "De gradados y transparencias complejas",
      "Aplicable a branding corporativo moderno"
    ]
  },
  {
    id: "ill-17",
    title: "Fotografía Astronómica y Edición Nocturna",
    category: "illustration",
    categoryLabel: "Fotografía de Paisaje",
    organization: "Pixabay (Ejemplo Visual)",
    date: "2024",
    thumbnail: ill17,
    description: "Composición de cielo estrellado con elementos naturales, demostrando técnicas de fotografía de larga exposición y postproducción nocturna.",
    fullDetails: "Captura fotográfica de cielo nocturno con galaxia y siluetas de árboles, procesada con técnicas de edición avanzada en Lightroom y Photoshop. El trabajo incluye ajuste selectivo de temperaturas de color, reducción de ruido digital en altos ISO y realce de la Vía Láctea mediante máscaras de luminosidad. Demuestra competencia en fotografía de paisaje nocturno y postproducción especializada.",
    tools: ["Lightroom", "Photoshop", "Fotografía Nocturna", "Larga Exposición", "Máscaras de Luminosidad"],
    mediaType: "image",
    highlights: [
      "Fotografía de larga exposición en condiciones de baja luz",
      "Edición avanzada de astrofotografía",
      "Reducción de ruido y realce selectivo de constelaciones"
    ]
  }
];

export const voiceDemos: VoiceDemo[] = [
  {
    id: "voice-1",
    title: "Spot Institucional - Promocional Cultural",
    category: "Voz Institucional / Promocional",
    duration: "0:30",
    tone: "Solemne, Cálido, Convincente",
    script: "Bolivia, tierra de diversidad, cultura y tradición viva. Descubre la riqueza de nuestro patrimonio en un recorrido inolvidable. Televisión Boliviana, la señal que nos une."
  },
  {
    id: "voice-2",
    title: "Avance Informativo - Noticiero Express",
    category: "Periodístico / Noticias",
    duration: "0:25",
    tone: "Dinámico, Serio, Fluido",
    script: "Buenas tardes. Bienvenidos al avance informativo. En los titulares de hoy: nuevas medidas económicas benefician a productores locales, mientras el reporte del clima prevé precipitaciones en el oriente."
  },
  {
    id: "voice-3",
    title: "Narración Documental - Historia & Ciencia",
    category: "Documental / Educativo",
    duration: "0:40",
    tone: "Pausado, Enigmático, Informativo",
    script: "A más de 3.600 metros sobre el nivel del mar, la cordillera de Los Andes custodia secretos milenarios que hoy la ciencia empieza a descifrar a través de la inteligencia artificial."
  }
];
