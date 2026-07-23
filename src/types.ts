export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  civilStatus: string;
  identityDoc: string;
  bio: string;
  avatarUrl: string;
  availability: string;
  personality: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  type: 'Trabajo' | 'Pasantía' | 'Voluntariado';
  description: string;
  responsibilities: string[];
  skillsUsed: string[];
  logoText: string;
  badgeColor: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  description?: string;
  type: 'Formal' | 'Complementaria';
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  dates: string;
  year: number;
  description: string;
  category: string;
}

export interface TechnicalSkill {
  name: string;
  level: number; // 0 to 100
  category: 'audiovisual' | 'graphic_design' | 'journalism' | 'voiceover' | 'marketing';
  iconName?: string;
  tools?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'postproduction' | 'design' | 'journalism' | 'voiceover' | 'illustration';
  categoryLabel: string;
  organization: string;
  date: string;
  thumbnail: string;
  description: string;
  fullDetails: string;
  tools: string[];
  mediaType: 'video' | 'image' | 'audio';
  audioUrl?: string;
  videoAspect?: string;
  highlights: string[];
}

export interface VoiceDemo {
  id: string;
  title: string;
  category: string;
  duration: string;
  script: string;
  tone: string;
  audioFrequencyData?: number[];
}
