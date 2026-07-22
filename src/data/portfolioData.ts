import {
  PersonalInfo,
  WorkExperience,
  EducationItem,
  CertificationItem,
  TechnicalSkill,
  ProjectItem,
  VoiceDemo
} from '../types';

import profilePhoto from '../assets/images/jorge_profile_photo_1784691892716.jpg';
import projectBoliviaTv from '../assets/images/project_bolivia_tv_1784691904763.jpg';
import projectTedx from '../assets/images/project_tedx_design_1784691914763.jpg';
import projectAiJournalism from '../assets/images/project_ai_journalism_1784691925991.jpg';

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
