# Portfolio Setup Guides

This document provides step-by-step instructions for completing the remaining setup tasks for your portfolio website.

---

## 1. Form Backend Integration Setup

### Option A: Using FormSpree (Recommended - Free & Easy)

1. **Create a FormSpree Account**
   - Visit https://formspree.io/
   - Sign up for a free account (allows 50 submissions/month)

2. **Create a New Form**
   - Click "New Form"
   - Name it "Portfolio Contact Form"
   - Copy the form endpoint ID (e.g., `abc123xyz`)

3. **Configure Your Portfolio**
   - Create a `.env.local` file in the root directory
   - Add the following line:
     ```
     NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT=abc123xyz
     ```
   - Replace `abc123xyz` with your actual endpoint ID

4. **Test the Form**
   - Restart your development server: `npm run dev`
   - Navigate to `/investor-relations`
   - Submit a test message
   - Check your FormSpree dashboard to confirm receipt

### Option B: Using a Custom API Endpoint

1. **Set up your backend API** (Node.js/Express example):
   ```javascript
   app.post('/api/contact', async (req, res) => {
     const { name, email, subject, message, inquiry_type } = req.body

     // Send email using nodemailer, SendGrid, etc.
     // Or save to database

     res.json({ success: true, message: 'Message received!' })
   })
   ```

2. **Configure Your Portfolio**
   - Create a `.env.local` file
   - Add:
     ```
     NEXT_PUBLIC_CONTACT_API_ENDPOINT=https://your-api.com/api/contact
     ```

3. **Test the Integration**
   - Restart dev server
   - Submit test message
   - Verify backend receives the data

---

## 2. Media Files Setup

### Video Background Setup

**Required File:** `/public/videos/trading-screens.mp4`

1. **Source a Video**
   - Free sources:
     - Pexels: https://www.pexels.com/videos/
     - Pixabay: https://pixabay.com/videos/
     - Unsplash: https://unsplash.com/videos

   - Search keywords: "stock market", "trading screens", "data visualization", "financial charts"

2. **Download & Optimize**
   - Download your chosen video
   - Recommended specs:
     - Resolution: 1920x1080 (Full HD)
     - Duration: 10-30 seconds (will loop)
     - File size: < 5MB for performance
   - Use HandBrake or similar to compress if needed

3. **Add to Project**
   - Create directory: `mkdir -p public/videos`
   - Place video as: `public/videos/trading-screens.mp4`

4. **Video is Already Integrated**
   - The home page hero section already has video background code
   - It will automatically display once you add the file

### Sound Effects Setup (Optional)

**Required Files:** (in `/public/sounds/`)
- `opening-bell.mp3` - Market opening bell sound
- `ticker-beep.mp3` - Quick ticker sound
- `click.mp3` - Click/button sound
- `hover.mp3` - Subtle hover sound
- `success.mp3` - Success notification
- `error.mp3` - Error notification

1. **Source Sounds**
   - Free sources:
     - Freesound: https://freesound.org/
     - Zapsplat: https://www.zapsplat.com/
     - Free Music Archive: https://freemusicarchive.org/

   - Search terms: "click", "beep", "success", "notification", "bell"

2. **Audio Specifications**
   - Format: MP3
   - Bitrate: 128kbps
   - Duration: 0.5-2 seconds per sound
   - File size: < 50KB each

3. **Add to Project**
   ```bash
   mkdir -p public/sounds
   # Place all 6 MP3 files in this directory
   ```

4. **Note on Web Audio API Fallback**
   - If you don't add sound files, the app uses Web Audio API to generate synthetic beeps
   - This is already implemented and working
   - Real sound files will override the synthetic sounds

---

## 3. Replace Sample Data with Real Data

### Data Files to Update

#### A. Projects (`/app/ventures/tech-assets/page.tsx`)

**Current Sample Data:** Lines 23-117

**Replace with your real projects:**
```typescript
const projects = [
  {
    id: 1,
    name: 'Your Actual Project Name',
    description: 'Real description of what you built',
    category: 'Web3' | 'FinTech' | 'AI/ML' | 'Full-Stack',
    status: 'LIVE' | 'IN_DEVELOPMENT' | 'COMPLETED',
    tech: ['Next.js', 'TypeScript', 'etc'],
    github_url: 'https://github.com/yourusername/project',
    live_url: 'https://yourproject.com',
    features: [
      'Real feature 1',
      'Real feature 2',
    ],
  },
  // Add more projects...
]
```

#### B. Certifications (`/app/credentials/page.tsx`)

**Current Sample Data:** Lines 23-82

**Replace with your real certifications:**
```typescript
const certifications = [
  {
    id: 1,
    title: 'Your Actual Certification',
    issuing_organization: 'AWS/Google/Microsoft/etc',
    credential_id: 'Your actual credential ID',
    issue_date: '2024-01-15',
    expiry_date: '2027-01-15', // or null for lifetime
    verification_url: 'https://verify-url.com',
    category: 'Cloud' | 'Security' | 'Development' | 'Finance',
    skills_gained: ['Skill 1', 'Skill 2'],
  },
  // Add more certifications...
]
```

#### C. Work Experience (`/app/trading-history/page.tsx`)

**Current Sample Data:** Lines 22-62

**Replace with your real experience:**
```typescript
const experiences = [
  {
    id: 1,
    position_title: 'Your Actual Job Title',
    company_name: 'Real Company Name',
    location: 'City, Country',
    start_date: '2023-01',
    end_date: null, // null for current position
    achievements: [
      'Real achievement with metrics',
      'Another real achievement',
    ],
    skills_used: ['Tech 1', 'Tech 2'],
  },
  // Add more positions...
]
```

#### D. Testimonials (`/app/investor-reviews/page.tsx`)

**Current Sample Data:** Lines 23-96

**Replace with real testimonials:**
```typescript
const testimonials = [
  {
    id: 1,
    name: 'Real Person Name',
    designation: 'Their Job Title',
    organization: 'Their Company',
    relationship: 'Client' | 'Colleague' | 'Manager' | 'Mentee',
    rating: 5,
    testimonial_text: 'Actual testimonial text from the person',
    linkedin_url: 'https://linkedin.com/in/their-profile',
    is_featured: true,
    date: '2024-11-10',
  },
  // Add more testimonials...
]
```

#### E. Blog Posts (`/app/market-commentary/page.tsx`)

**Current Sample Data:** Lines 22-83

**Replace with your real blog posts:**
```typescript
const blogPosts = [
  {
    id: 1,
    title: 'Your Actual Blog Post Title',
    excerpt: 'Real excerpt from your post',
    content: 'Full content (for reading time calculation)',
    featured: true, // Feature one post
    publish_date: '2024-11-15',
    views_count: 100, // Use real metrics if available
    tags: ['Real', 'Tags'],
  },
  // Add more posts...
]
```

#### F. Research Papers (`/app/ventures/research-papers/page.tsx`)

**Current Sample Data:** Lines 22-56

**Replace with your real publications:**
```typescript
const researchPapers = [
  {
    id: 1,
    title: 'Your Actual Paper Title',
    authors: ['Your Name', 'Co-author'],
    publication: 'Journal/Conference Name',
    year: 2024,
    abstract: 'Real abstract from your paper',
    keywords: ['Keyword1', 'Keyword2'],
    pdf_url: '/papers/your-paper.pdf', // Upload PDF to /public/papers/
    doi: '10.1000/actual.doi',
  },
  // Add more papers...
]
```

#### G. Competitions/Tournaments (`/app/tournaments/page.tsx`)

**Current Sample Data:** Lines 22-72

**Replace with real competitions:**
```typescript
const competitions = [
  {
    id: 1,
    name: 'Actual Hackathon/Competition Name',
    position: 'Winner' | 'Runner-up' | 'Finalist',
    project_built: 'Your Actual Project',
    description: 'Real description',
    technologies_used: ['Tech 1', 'Tech 2'],
    date: '2024-09-15',
    prize: 'Actual prize details',
  },
  // Add more competitions...
]
```

#### H. GitHub Stats (`/app/analytics/page.tsx`)

**Current Sample Data:** Lines 23-38

**To get real GitHub stats**, use the GitHub API:
```typescript
// Fetch real data
const response = await fetch('https://api.github.com/users/HarshalJain-cs')
const userData = await response.json()

const githubStats = {
  public_repos: userData.public_repos,
  followers: userData.followers,
  following: userData.following,
  // Calculate other stats from repositories
}
```

Or use a service like:
- https://github-readme-stats.vercel.app/
- Manual calculation from your repos

#### I. Contact Information (`/app/investor-relations/page.tsx`)

**Lines to Update:**
- Line 127: Update email to your actual email
- Line 141: Update location to your actual location
- Line 151: Update availability hours
- Line 165: Update GitHub URL
- Line 183: Update LinkedIn URL

### Quick Find & Replace Guide

1. **Email Addresses**
   - Find: `harshaljaincs@gmail.com`
   - Replace: Your actual email

2. **GitHub Username**
   - Find: `HarshalJain-cs`
   - Replace: Your actual GitHub username

3. **LinkedIn Profile**
   - Find: `harshal-jain`
   - Replace: Your actual LinkedIn username

4. **Name References**
   - Find: `Harshal Jain`
   - Replace: Your actual name (in testimonials, papers, etc.)

---

## 4. Environment Variables Checklist

Create a `.env.local` file with these variables:

```bash
# Required for form submissions
NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT=your_endpoint_here

# Optional: Newsletter integration
NEXT_PUBLIC_NEWSLETTER_API_KEY=your_key_here
NEXT_PUBLIC_NEWSLETTER_API_ENDPOINT=https://your-service.com/api

# Optional: Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Important:** Never commit `.env.local` to Git!
(Already in .gitignore)

---

## 5. Testing Checklist

After completing the above steps:

- [ ] Test contact form submission
- [ ] Verify video background displays on homepage
- [ ] Check all personal information is updated
- [ ] Test settings menu (theme, sounds, animations)
- [ ] Verify all external links work (GitHub, LinkedIn)
- [ ] Check mobile responsiveness
- [ ] Test all page transitions and animations
- [ ] Verify all project links work
- [ ] Test download links (if real files added)
- [ ] Check newsletter subscription (if configured)

---

## 6. Deployment Checklist

Before deploying to production:

- [ ] All sample data replaced with real data
- [ ] Environment variables configured in hosting platform
- [ ] Media files (video, sounds) uploaded
- [ ] Form backend tested and working
- [ ] Analytics configured (if using)
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Social media meta tags updated with real info
- [ ] Sitemap.xml generated
- [ ] 404 page tested

---

## Need Help?

If you encounter issues:

1. Check the browser console for errors
2. Verify all environment variables are set correctly
3. Ensure all files are in the correct directories
4. Run `npm run build` to check for TypeScript errors
5. Check the Next.js documentation: https://nextjs.org/docs

---

**Last Updated:** 2025-01-18
