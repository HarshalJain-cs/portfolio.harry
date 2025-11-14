-- ============================================================================
-- HARSHAL JAIN PORTFOLIO - SUPABASE DATABASE SCHEMA
-- Stock Exchange Themed Portfolio Website
-- Full CMS with Projects, Skills, Experience, Blog, and more
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- 1. PROJECTS TABLE (Tech & Finance Projects)
-- ============================================================================
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ticker VARCHAR(10) UNIQUE NOT NULL, -- e.g., 'CRYPT', 'ECOM'
  title VARCHAR(255) NOT NULL,
  tagline TEXT,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL, -- 'tech', 'finance', 'college', 'personal', 'hackathon', 'learning'
  problem TEXT,
  solution TEXT,
  key_features JSONB, -- Array of feature strings
  technologies JSONB, -- Array of technology strings
  market_cap VARCHAR(50), -- e.g., '$2.5M'
  roi VARCHAR(50), -- e.g., '+145%'
  growth_rate VARCHAR(50), -- e.g., 'High', 'Medium', 'Low'
  risk_level VARCHAR(50), -- e.g., 'Low', 'Medium', 'High'
  status VARCHAR(50) NOT NULL, -- 'LIVE', 'BETA', 'DEVELOPMENT', 'ARCHIVED'
  launch_date DATE,
  volume VARCHAR(100), -- e.g., '10,000+ users'
  image_url TEXT,
  github_url TEXT,
  live_demo_url TEXT,
  project_type VARCHAR(50) NOT NULL, -- 'tech' or 'finance'
  impact TEXT, -- Results/impact description
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE
);

-- ============================================================================
-- 2. SKILLS TABLE
-- ============================================================================
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL, -- 'Programming', 'Web Dev', 'Finance', 'AI Tools', etc.
  subcategory VARCHAR(100), -- 'Frontend', 'Backend', 'Trading', etc.
  proficiency INTEGER CHECK (proficiency >= 0 AND proficiency <= 100), -- 0-100%
  years_of_experience DECIMAL(3,1), -- e.g., 2.5 years
  icon_name VARCHAR(100), -- Icon identifier for frontend
  color VARCHAR(50), -- Hex color for visualization
  projects_count INTEGER DEFAULT 0,
  allocation_percentage DECIMAL(5,2), -- For portfolio allocation viz
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- ============================================================================
-- 3. EXPERIENCES TABLE (Work & Internships)
-- ============================================================================
CREATE TABLE experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  position_title VARCHAR(255) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  company_url TEXT,
  company_logo_url TEXT,
  location VARCHAR(255),
  employment_type VARCHAR(50), -- 'Internship', 'Full-time', 'Part-time', 'Freelance'
  start_date DATE NOT NULL,
  end_date DATE, -- NULL if current
  is_current BOOLEAN DEFAULT FALSE,
  achievements JSONB, -- Array of achievement strings
  skills_used JSONB, -- Array of skill strings
  metrics TEXT, -- Quantified results
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- ============================================================================
-- 4. VOLUNTEERING TABLE
-- ============================================================================
CREATE TABLE volunteering (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  role VARCHAR(255) NOT NULL,
  organization VARCHAR(255) NOT NULL,
  category VARCHAR(100), -- 'NGO', 'Event Organizing', 'Teaching', 'Community'
  start_date DATE NOT NULL,
  end_date DATE,
  is_ongoing BOOLEAN DEFAULT FALSE,
  description TEXT,
  impact TEXT, -- Impact/results achieved
  location VARCHAR(255),
  hours_contributed INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- ============================================================================
-- 5. CERTIFICATIONS TABLE
-- ============================================================================
CREATE TABLE certifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  issuing_organization VARCHAR(255) NOT NULL,
  category VARCHAR(100), -- 'Online Course', 'Hackathon', 'Academic', 'Finance', 'Leadership'
  issue_date DATE,
  expiry_date DATE,
  credential_id VARCHAR(255),
  credential_url TEXT,
  certificate_file_url TEXT, -- Supabase storage URL
  logo_url TEXT,
  skills_gained JSONB, -- Array of skills
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- ============================================================================
-- 6. COMPETITIONS TABLE (Hackathons & Tournaments)
-- ============================================================================
CREATE TABLE competitions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  organizer VARCHAR(255),
  type VARCHAR(50), -- 'Hackathon', 'Case Competition', 'Trading Competition'
  level VARCHAR(50), -- 'National', 'International', 'Regional'
  date DATE,
  position VARCHAR(100), -- 'Winner', 'Runner-up', 'Finalist', 'Participant'
  team_size INTEGER,
  project_built TEXT,
  technologies_used JSONB,
  achievement TEXT,
  certificate_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- ============================================================================
-- 7. RESEARCH PAPERS TABLE
-- ============================================================================
CREATE TABLE research_papers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  abstract TEXT,
  publication_date DATE,
  publication_venue VARCHAR(255), -- Journal, Conference, etc.
  authors JSONB, -- Array of author names
  coauthors JSONB,
  paper_url TEXT,
  pdf_url TEXT,
  doi VARCHAR(255),
  citation_count INTEGER DEFAULT 0,
  keywords JSONB,
  category VARCHAR(100), -- 'Tech', 'Finance', 'Research'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- ============================================================================
-- 8. FINANCIAL ANALYSIS TABLE
-- ============================================================================
CREATE TABLE financial_analyses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ticker VARCHAR(10) NOT NULL, -- Stock ticker for the analysis
  company_name VARCHAR(255) NOT NULL,
  analysis_title VARCHAR(255) NOT NULL,
  executive_summary TEXT NOT NULL,
  investment_thesis TEXT,
  methodology TEXT,
  key_findings JSONB, -- Array of findings
  recommendation VARCHAR(50), -- 'BUY', 'HOLD', 'SELL'
  target_price DECIMAL(10,2),
  current_price DECIMAL(10,2),
  data_metrics JSONB, -- P/E, Revenue, etc.
  technologies_used JSONB,
  analysis_date DATE,
  chart_image_url TEXT,
  report_pdf_url TEXT,
  impact TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- ============================================================================
-- 9. BLOG POSTS TABLE
-- ============================================================================
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image_url TEXT,
  category VARCHAR(100), -- 'Tech', 'Finance', 'Trading', 'Personal'
  tags JSONB, -- Array of tags
  published_date TIMESTAMP WITH TIME ZONE,
  is_published BOOLEAN DEFAULT FALSE,
  views_count INTEGER DEFAULT 0,
  reading_time_minutes INTEGER,
  author VARCHAR(255) DEFAULT 'Harshal Jain',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- 10. TESTIMONIALS TABLE
-- ============================================================================
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  designation VARCHAR(255),
  organization VARCHAR(255),
  testimonial_text TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  photo_url TEXT,
  linkedin_url TEXT,
  relationship VARCHAR(100), -- 'Professor', 'Mentor', 'Colleague', 'Client'
  date_given DATE,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- ============================================================================
-- 11. COURSEWORK TABLE
-- ============================================================================
CREATE TABLE coursework (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_name VARCHAR(255) NOT NULL,
  institution VARCHAR(255),
  category VARCHAR(100), -- 'Engineering', 'Finance', 'Business', etc.
  grade VARCHAR(50),
  credit_hours INTEGER,
  semester VARCHAR(50),
  year INTEGER,
  skills_learned JSONB,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- ============================================================================
-- 12. CONTACT FORM SUBMISSIONS TABLE
-- ============================================================================
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  inquiry_type VARCHAR(100), -- 'Project Inquiry', 'Job Opportunity', 'Collaboration'
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  replied BOOLEAN DEFAULT FALSE,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- 13. TIMELINE EVENTS TABLE (For Trading History Timeline)
-- ============================================================================
CREATE TABLE timeline_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  event_type VARCHAR(100), -- 'Education', 'Work', 'Achievement', 'Milestone'
  description TEXT,
  date DATE NOT NULL,
  icon VARCHAR(100),
  color VARCHAR(50),
  related_entity_type VARCHAR(50), -- 'project', 'experience', 'certification'
  related_entity_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  display_order INTEGER DEFAULT 0
);

-- ============================================================================
-- INDEXES for Performance
-- ============================================================================
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_featured ON projects(is_featured);
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_experiences_current ON experiences(is_current);
CREATE INDEX idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_contact_submissions_created ON contact_submissions(created_at DESC);
CREATE INDEX idx_timeline_events_date ON timeline_events(date DESC);

-- ============================================================================
-- STORAGE BUCKETS (Run this in Supabase Dashboard or via API)
-- ============================================================================
-- INSERT INTO storage.buckets (id, name, public) VALUES ('certificates', 'certificates', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('project-images', 'project-images', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('downloads', 'downloads', true);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteering ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE competitions ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE coursework ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE timeline_events ENABLE ROW LEVEL SECURITY;

-- Public read access for portfolio data
CREATE POLICY "Allow public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON skills FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON experiences FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON volunteering FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON certifications FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON competitions FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON research_papers FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON financial_analyses FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "Allow public read access" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON coursework FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON timeline_events FOR SELECT USING (true);

-- Allow anyone to insert contact submissions
CREATE POLICY "Allow public insert" ON contact_submissions FOR INSERT WITH CHECK (true);

-- ============================================================================
-- SAMPLE DATA (For Testing - Remove in Production)
-- ============================================================================
-- Note: This will be filled by a separate seed file with placeholder data

-- ============================================================================
-- UPDATED_AT TRIGGER FUNCTION
-- ============================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers to all tables
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_skills_updated_at BEFORE UPDATE ON skills FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_experiences_updated_at BEFORE UPDATE ON experiences FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_volunteering_updated_at BEFORE UPDATE ON volunteering FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_certifications_updated_at BEFORE UPDATE ON certifications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_competitions_updated_at BEFORE UPDATE ON competitions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_research_papers_updated_at BEFORE UPDATE ON research_papers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_financial_analyses_updated_at BEFORE UPDATE ON financial_analyses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_coursework_updated_at BEFORE UPDATE ON coursework FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_timeline_events_updated_at BEFORE UPDATE ON timeline_events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- END OF SCHEMA
-- ============================================================================
