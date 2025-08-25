
export interface Skill {
  name: string;
  level: number; // e.g., 90 for 90%
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  logoUrl?: string;
}
