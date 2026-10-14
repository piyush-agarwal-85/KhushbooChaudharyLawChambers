export type PageTab = 
  | 'home' 
  | 'about' 
  | 'practice-areas' 
  | 'legal-research' 
  | 'insights' 
  | 'contact' 
  | 'privacy-policy' 
  | 'terms' 
  | 'disclaimer'
  | '404';

export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  keySpecializations: string[];
  statutes: string[];
}

export interface ResearchService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  examples: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  type: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  matter: string;
}

export interface PolicySection {
  number: string;
  title: string;
  content: string[];
}
