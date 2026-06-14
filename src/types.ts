export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
  technologies: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  mastery: number; // 0-100
  color: string; // Tailwind glow color (e.g., 'cyan', 'magenta', 'emerald', etc.)
  icon: string; // Lucide icon name or emoji or path
}

export interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
