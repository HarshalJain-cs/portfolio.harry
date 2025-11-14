/**
 * Database Types for Harshal Jain Portfolio
 * Auto-generated types matching Supabase schema
 */

export interface Project {
  id: string
  ticker: string
  title: string
  tagline?: string
  description: string
  category: 'tech' | 'finance' | 'college' | 'personal' | 'hackathon' | 'learning'
  problem?: string
  solution?: string
  key_features?: string[]
  technologies?: string[]
  market_cap?: string
  roi?: string
  growth_rate?: 'High' | 'Medium' | 'Low'
  risk_level?: 'Low' | 'Medium' | 'High'
  status: 'LIVE' | 'BETA' | 'DEVELOPMENT' | 'ARCHIVED'
  launch_date?: string
  volume?: string
  image_url?: string
  github_url?: string
  live_demo_url?: string
  project_type: 'tech' | 'finance'
  impact?: string
  created_at?: string
  updated_at?: string
  display_order?: number
  is_featured?: boolean
}

export interface Skill {
  id: string
  name: string
  category: string
  subcategory?: string
  proficiency?: number
  years_of_experience?: number
  icon_name?: string
  color?: string
  projects_count?: number
  allocation_percentage?: number
  created_at?: string
  updated_at?: string
  display_order?: number
}

export interface Experience {
  id: string
  position_title: string
  company_name: string
  company_url?: string
  company_logo_url?: string
  location?: string
  employment_type?: 'Internship' | 'Full-time' | 'Part-time' | 'Freelance'
  start_date: string
  end_date?: string
  is_current?: boolean
  achievements?: string[]
  skills_used?: string[]
  metrics?: string
  description?: string
  created_at?: string
  updated_at?: string
  display_order?: number
}

export interface Volunteering {
  id: string
  role: string
  organization: string
  category?: 'NGO' | 'Event Organizing' | 'Teaching' | 'Community'
  start_date: string
  end_date?: string
  is_ongoing?: boolean
  description?: string
  impact?: string
  location?: string
  hours_contributed?: number
  created_at?: string
  updated_at?: string
  display_order?: number
}

export interface Certification {
  id: string
  title: string
  issuing_organization: string
  category?: 'Online Course' | 'Hackathon' | 'Academic' | 'Finance' | 'Leadership'
  issue_date?: string
  expiry_date?: string
  credential_id?: string
  credential_url?: string
  certificate_file_url?: string
  logo_url?: string
  skills_gained?: string[]
  description?: string
  created_at?: string
  updated_at?: string
  display_order?: number
}

export interface Competition {
  id: string
  name: string
  organizer?: string
  type?: 'Hackathon' | 'Case Competition' | 'Trading Competition'
  level?: 'National' | 'International' | 'Regional'
  date?: string
  position?: string
  team_size?: number
  project_built?: string
  technologies_used?: string[]
  achievement?: string
  certificate_url?: string
  created_at?: string
  updated_at?: string
  display_order?: number
}

export interface ResearchPaper {
  id: string
  title: string
  abstract?: string
  publication_date?: string
  publication_venue?: string
  authors?: string[]
  coauthors?: string[]
  paper_url?: string
  pdf_url?: string
  doi?: string
  citation_count?: number
  keywords?: string[]
  category?: 'Tech' | 'Finance' | 'Research'
  created_at?: string
  updated_at?: string
  display_order?: number
}

export interface FinancialAnalysis {
  id: string
  ticker: string
  company_name: string
  analysis_title: string
  executive_summary: string
  investment_thesis?: string
  methodology?: string
  key_findings?: string[]
  recommendation?: 'BUY' | 'HOLD' | 'SELL'
  target_price?: number
  current_price?: number
  data_metrics?: Record<string, any>
  technologies_used?: string[]
  analysis_date?: string
  chart_image_url?: string
  report_pdf_url?: string
  impact?: string
  created_at?: string
  updated_at?: string
  display_order?: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  cover_image_url?: string
  category?: 'Tech' | 'Finance' | 'Trading' | 'Personal'
  tags?: string[]
  published_date?: string
  is_published?: boolean
  views_count?: number
  reading_time_minutes?: number
  author?: string
  created_at?: string
  updated_at?: string
}

export interface Testimonial {
  id: string
  name: string
  designation?: string
  organization?: string
  testimonial_text: string
  rating?: number
  photo_url?: string
  linkedin_url?: string
  relationship?: 'Professor' | 'Mentor' | 'Colleague' | 'Client'
  date_given?: string
  is_featured?: boolean
  created_at?: string
  updated_at?: string
  display_order?: number
}

export interface Coursework {
  id: string
  course_name: string
  institution?: string
  category?: string
  grade?: string
  credit_hours?: number
  semester?: string
  year?: number
  skills_learned?: string[]
  description?: string
  created_at?: string
  updated_at?: string
  display_order?: number
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject?: string
  inquiry_type?: 'Project Inquiry' | 'Job Opportunity' | 'Collaboration'
  message: string
  is_read?: boolean
  replied?: boolean
  ip_address?: string
  user_agent?: string
  created_at?: string
}

export interface TimelineEvent {
  id: string
  title: string
  event_type?: 'Education' | 'Work' | 'Achievement' | 'Milestone'
  description?: string
  date: string
  icon?: string
  color?: string
  related_entity_type?: 'project' | 'experience' | 'certification'
  related_entity_id?: string
  created_at?: string
  updated_at?: string
  display_order?: number
}

// Stock Market Data Types (from APIs)
export interface StockData {
  symbol: string
  price: number
  change: number
  changePercent: number
  volume?: number
  marketCap?: string
}

export interface CryptoData {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  market_cap?: number
  total_volume?: number
}

// GitHub Stats Types
export interface GitHubStats {
  username: string
  name: string
  avatar_url: string
  bio?: string
  public_repos: number
  followers: number
  following: number
  total_stars: number
  total_commits: number
  account_age_days: number
  most_used_languages: LanguageStats[]
}

export interface LanguageStats {
  language: string
  percentage: number
  color: string
}
