export enum ToolCategory {
  ALL = 'All',
  TEXT = 'Text & Writing',
  IMAGE = 'Image Generation',
  VIDEO = 'Video Creation',
  AUDIO = 'Audio & Music',
  CODING = 'Programming',
  PRODUCTIVITY = 'Productivity',
  BUSINESS = 'Business & Marketing',
  CHATBOTS = 'Chatbots & Assistants',
  AI_SEARCH = 'AI Search',
  MARKETING = 'Marketing & SEO',
  DESIGN = 'Design & UI/UX',
  EDUCATION = 'Education & Learning',
  CONTENT = 'Content Creation',
  DETECTORS = 'AI Detectors',
  AVATARS = 'Avatars & Characters',
  PRESENTATIONS = 'Presentations',
  DATA = 'Data & Analytics',
  SOCIAL_MEDIA = 'Social Media',
  EMAIL = 'Email & Communication',
  VIDEO_EDITING = 'Video Editing',
  LOGO_BRANDING = 'Logo & Branding',
  RESUME_CV = 'Resume & CV',
  TRANSLATION = 'Translation'
}

export enum PricingModel {
  FREE = 'Free',
  FREEMIUM = 'Freemium',
  PAID = 'Paid',
  TRIAL = 'Free Trial'
}

export type Language = 'en' | 'zh' | 'ja' | 'es' | 'tk' | 'uz' | 'tg' | 'hy' | 'ro';

export interface Tool {
  id: string;
  name: string;
  description: string;
  descriptions?: Record<string, string>; // Localized descriptions
  category: ToolCategory | string; // Allow string for AI-discovered categories
  pricing: PricingModel | string;
  url: string;
  affiliateUrl?: string;
  tags: string[];
  isAiDiscovered?: boolean; // To highlight tools found via dynamic search
  featured?: boolean; // To highlight high-intent tools
  createdAt?: number; // Unix epoch ms, used for sorting Newest/Recently added
  scenarios?: string[]; 
  apiDocUrl?: string; 
  hasStableApi?: boolean; 
  developerDocsUrl?: string; 
  integrationStatus?: 'planned' | 'candidate' | 'integrated' | 'testing';
  responseTimeMsAvg?: number; 
  errorHandlingNotes?: string; 
  releasedAt?: number;
  features?: string[];
  tutorials?: { title: string; steps: string[]; videoUrl?: string }[];
  technicalSpecs?: Record<string, string>;
  userReviews?: { author: string; rating: number; text: string; date?: string }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SearchState {
  isSearching: boolean;
  query: string;
  results: Tool[];
  error?: string;
}
