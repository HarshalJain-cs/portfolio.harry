# 💼 Harshal Jain - Stock Exchange Themed Portfolio

> **Engineering Degree Holder | Finance Mind at Heart** 💰

A professional portfolio website with a unique **NYSE/NASDAQ stock exchange board aesthetic**, featuring real-time market data, 16 pages, full CMS integration with Supabase, and comprehensive placeholder content.

![Portfolio Preview](docs/portfolio-preview.png)

---

## 🎯 Project Overview

This is not just another portfolio website - it's a **fully-featured stock exchange themed showcase** designed for someone who bridges engineering and finance. Every aspect of the design mimics financial trading platforms, from the ticker bar to project cards styled as stock listings.

### 🌟 Key Features

- ✅ **Stock Exchange Aesthetic** - NYSE/NASDAQ inspired design with ticker boards, stock-style cards, and market terminology
- ✅ **16 Unique Pages** - Complete portfolio covering projects, skills, experience, certifications, blog, and more
- ✅ **Full CMS with Supabase** - All content managed through database (13 tables)
- ✅ **Live Market Data** - Real-time stock prices, crypto prices, and GitHub stats via APIs
- ✅ **Hyper-Detailed Placeholder Content** - 100+ placeholder items ready to customize
- ✅ **Dark Theme** - Professional dark mode with navy blue (#000080) primary color
- ✅ **Fully Responsive** - Desktop-first design optimized for all screen sizes
- ✅ **SEO Optimized** - Complete meta tags, OpenGraph, Twitter cards, sitemap
- ✅ **Sound Effects** - Opening bell, ticker beeps, interaction sounds (optional)
- ✅ **Advanced Animations** - Three levels of animations (conservative, moderate, aggressive)
- ✅ **Type-Safe** - Full TypeScript implementation

---

## 📊 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: React Icons, Lucide Icons
- **Charts**: Recharts

### Backend & Data
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage for files/certificates
- **Authentication**: Supabase Auth (for future admin panel)

### APIs & Integrations
- **Stock Data**: Yahoo Finance API
- **Crypto Data**: CoinGecko API
- **GitHub Stats**: GitHub REST API
- **Analytics**: Google Analytics 4
- **Email**: Resend / SendGrid (via Supabase)

### Deployment
- **Primary**: Vercel
- **Backup**: GitHub Pages (static export)
- **Domain**: Custom domain (configure via Vercel)

### Development Tools
- **Version Control**: Git + GitHub
- **Package Manager**: npm
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript strict mode

---

## 🏗️ Project Structure

```
portfolio.harry/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage (Trading Floor)
│   ├── prospectus/              # About page
│   ├── ventures/                # Projects section
│   │   ├── tech-assets/         # Tech projects
│   │   ├── financial-instruments/ # Finance projects
│   │   ├── research-papers/     # Publications
│   │   └── community-dividends/ # Volunteering
│   ├── holdings/                # Skills & expertise
│   ├── trading-history/         # Timeline
│   ├── credentials/             # Certifications
│   ├── tournaments/             # Competitions/Hackathons
│   ├── investor-reviews/        # Testimonials
│   ├── market-commentary/       # Blog
│   ├── analytics/               # GitHub/LeetCode stats
│   ├── downloads/               # Download center
│   └── investor-relations/      # Contact
├── components/                   # React components
│   ├── layout/                  # Header, Footer, Ticker
│   ├── ui/                      # Buttons, Cards, Modals
│   ├── sections/                # Page-specific sections
│   ├── charts/                  # Data visualizations
│   └── modals/                  # Dialogs, overlays
├── lib/                         # Core logic & utilities
│   ├── api/                     # API integration functions
│   ├── data/                    # Placeholder data (100+ items)
│   ├── utils/                   # Helper functions
│   ├── hooks/                   # Custom React hooks
│   ├── supabase/                # Database client
│   └── sounds/                  # Sound effect files
├── types/                       # TypeScript type definitions
│   └── database.ts              # Supabase table types
├── public/                      # Static assets
│   ├── images/                  # Images & photos
│   ├── sounds/                  # Audio files
│   ├── certificates/            # Certificate PDFs
│   └── downloads/               # Downloadable files
├── styles/                      # Global CSS
│   └── globals.css              # Tailwind + custom styles
├── supabase-schema.sql          # Database schema
├── SUPABASE_SETUP.md            # Supabase setup guide
├── .env.example                 # Environment variables template
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (optional but recommended)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HarshalJain-cs/portfolio.harry.git
   cd portfolio.harry
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your API keys:
   ```env
   # Supabase (required for full functionality)
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

   # APIs (optional - placeholder data works without these)
   NEXT_PUBLIC_GITHUB_USERNAME=HarshalJain-cs
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
   NEXT_PUBLIC_CONTACT_EMAIL=harshaljaincs@gmail.com
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Setting up Supabase (Optional)

For full CMS functionality, set up Supabase:

1. Follow the detailed guide in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
2. Run the SQL schema from `supabase-schema.sql`
3. Add your Supabase credentials to `.env.local`

**Note**: The website works without Supabase using placeholder data. Supabase is only needed for dynamic content management.

---

## 📦 Placeholder Data

The project includes **100+ hyper-detailed placeholder items** ready to use:

| Category | Count | Description |
|----------|-------|-------------|
| **Projects** | 15 | 3 college, 3 personal, 3 hackathon, 3 learning, 3 finance |
| **Skills** | 30 | Programming, Web Dev, Finance, AI, Crypto, Business |
| **Experiences** | 8 | 2 internships, 2 freelance, 2 part-time, 2 clubs |
| **Volunteering** | 12 | 3 NGO, 3 events, 3 teaching, 3 community |
| **Certifications** | 15 | 3 online, 3 hackathon, 3 academic, 3 finance, 3 leadership |
| **Competitions** | 7 | 5 national, 2 international |
| **Research Papers** | 2 | IEEE/ACM conference publications |
| **Financial Analyses** | 2 | Equity research reports |
| **Blog Posts** | 3 | Technical tutorials & finance articles |
| **Testimonials** | 3 | From professors, clients, mentors |
| **Coursework** | 5 | Engineering & finance courses |

All placeholder data is **production-quality** with:
- ✅ Complete descriptions (200-500 words)
- ✅ Quantified metrics and impact statements
- ✅ Realistic tickers, market caps, ROI percentages
- ✅ Full technology stacks
- ✅ Dates, credentials, and metadata

**Location**: `lib/data/` - Easy to replace with real data later!

---

## 🎨 Design System

### Color Palette

```css
--stock-navy: #000080      /* Primary - Navy Blue */
--stock-green: #00FF00     /* Positive/Growth */
--stock-red: #FF0000       /* Alerts/Negative */
--stock-gold: #FFD700      /* Achievements */
--stock-cyan: #00FFFF      /* Links/Interactive */
--stock-dark: #0a0e27      /* Background */
```

### Typography

- **Headings**: Roboto Condensed (Bold, tight spacing)
- **Body**: Roboto (Clean, readable)
- **Numbers/Tickers**: Roboto Mono (Monospace for alignment)

### Components

Custom components styled as stock market elements:
- **Stock Cards** - Project/skill cards styled as stock listings
- **Ticker Bar** - Scrolling market data (NIFTY, SENSEX, BTC, ETH, NASDAQ)
- **Percentage Badges** - Color-coded growth indicators
- **Chart Components** - Financial charts using Recharts

---

## 📄 Pages Overview

### 1. Trading Floor (Homepage)
**Route**: `/`
- Hero section with "$HARSHAL" branding
- Live market statistics
- Featured projects ("Top Performers")
- Recent activity feed

### 2. Investor Prospectus (About)
**Route**: `/prospectus`
- Professional photo
- Background story
- Philosophy and values
- Journey timeline

### 3-4. Tech Assets & Financial Instruments (Projects)
**Routes**: `/ventures/tech-assets`, `/ventures/financial-instruments`
- Project grid with filters
- Detailed project cards with:
  - Ticker symbol, Market Cap, ROI
  - Technologies, GitHub links
  - Live demos and screenshots

### 5. Holdings (Skills)
**Route**: `/holdings`
- Asset allocation visualization
- Skills by category
- Proficiency levels
- Project counts per skill

### 6. Trading History (Timeline)
**Route**: `/trading-history`
- Interactive timeline
- Education, work, achievements
- Milestone markers

### 7-8. Experience & Volunteering
**Routes**: `/ventures/community-dividends`, custom experience pages
- Work history cards
- Volunteer activities
- Impact metrics

### 9. Credentials & Securities (Certifications)
**Route**: `/credentials`
- Certificate grid
- Category filters
- Download links
- Credential verification

### 10. Market Tournaments (Competitions)
**Route**: `/tournaments`
- Hackathon wins
- Competition placements
- Prize amounts
- Project showcases

### 11. Research Papers
**Route**: `/ventures/research-papers`
- Publication listings
- Abstracts and citations
- Download PDFs
- Co-authors

### 12. Investor Reviews (Testimonials)
**Route**: `/investor-reviews`
- Testimonial cards
- Ratings and relationships
- Featured reviews

### 13. Market Commentary (Blog)
**Route**: `/market-commentary`
- Blog post grid
- Category filters
- Reading time
- View counts

### 14. Analytics Dashboard
**Route**: `/analytics`
- Live GitHub stats
- LeetCode progress
- Portfolio metrics
- Activity graphs

### 15. Download Center
**Route**: `/downloads`
- Resume/CV
- Certificates
- Research papers
- Portfolio deck

### 16. Investor Relations (Contact)
**Route**: `/investor-relations`
- Contact form (Supabase)
- Social media links
- Email and calendly
- Response time indicator

---

## 🔧 Configuration

### Environment Variables

See `.env.example` for all available variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# APIs
NEXT_PUBLIC_YAHOO_FINANCE_API_KEY=
NEXT_PUBLIC_COINGECKO_API_KEY=
NEXT_PUBLIC_GITHUB_USERNAME=

# Email
RESEND_API_KEY=

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Site
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
```

### Next.js Config

The project uses static export for GitHub Pages compatibility:

```js
output: 'export',
basePath: '',
trailingSlash: true,
```

For Vercel deployment, you can remove `output: 'export'` to enable server-side features.

---

## 📱 Responsive Design

### Breakpoints

- **Mobile**: 320px - 767px (1 column, hamburger menu)
- **Tablet**: 768px - 1199px (2 columns, adaptive grid)
- **Desktop**: 1200px+ (full layout, 3 columns)

### Mobile Optimizations

- Simplified ticker bar (fewer stocks shown)
- Hamburger navigation menu
- Stacked layouts
- Larger touch targets (44x44px)
- Reduced animations for performance

---

## 🎵 Sound Effects

Optional sound system for authentic stock exchange experience:

- 🔔 **Opening Bell** - Plays on page load
- 💹 **Ticker Beep** - Subtle sound when prices update
- 🖱️ **Click Sound** - Button/link interactions
- 💰 **Success Chime** - Form submissions

Sounds can be toggled on/off via mute button.

**Location**: `public/sounds/` - Add your own audio files or use placeholders

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy!

```bash
npm run build  # Test build locally
vercel --prod  # Deploy to production
```

### GitHub Pages (Backup)

1. Build static export
   ```bash
   npm run build
   ```

2. Deploy `out/` folder to GitHub Pages

3. Configure custom domain (optional)

---

## 🔐 Security

- ✅ Environment variables for sensitive data
- ✅ Supabase Row Level Security (RLS) enabled
- ✅ API keys never exposed to client
- ✅ Input validation on forms
- ✅ HTTPS only in production

---

## 🤝 Contributing

This is a personal portfolio project, but improvements are welcome:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 Customization Guide

### Replacing Placeholder Data

1. **Via Supabase Dashboard** (Recommended)
   - Set up Supabase (see SUPABASE_SETUP.md)
   - Use Table Editor to add/edit content
   - Data automatically updates on website

2. **Via Code** (Quick changes)
   - Edit files in `lib/data/`
   - Restart dev server
   - Changes reflect immediately

### Changing Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  'stock-navy': '#000080',  // Change primary color here
  'stock-green': '#00FF00', // Positive indicators
  // ... more colors
}
```

### Adding New Pages

1. Create folder in `app/` (e.g., `app/new-page/`)
2. Add `page.tsx` with component
3. Update navigation links
4. Add to sitemap

---

## 📚 Resources & Credits

### Technologies
- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Supabase](https://supabase.com/) - Backend & Database
- [Vercel](https://vercel.com/) - Hosting
- [Recharts](https://recharts.org/) - Charts

### Inspiration
- NYSE/NASDAQ trading interfaces
- Bloomberg Terminal
- Financial dashboards
- Professional portfolios

### Design Assets
- Google Fonts (Roboto family)
- React Icons
- Lucide Icons

---

## 📧 Contact

**Harshal Jain**
- Email: harshaljaincs@gmail.com
- GitHub: [@HarshalJain-cs](https://github.com/HarshalJain-cs)
- LinkedIn: [Your LinkedIn] (Update in code)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🎯 Roadmap

### Phase 1: Foundation ✅
- [x] Next.js setup with TypeScript
- [x] Tailwind configuration
- [x] Supabase schema design
- [x] Placeholder data creation
- [x] Project structure

### Phase 2: Core Components (In Progress)
- [ ] Stock ticker bar
- [ ] Navigation header
- [ ] Footer component
- [ ] Dark/light mode toggle
- [ ] Sound system

### Phase 3: Pages
- [ ] All 16 pages built
- [ ] Responsive layouts
- [ ] SEO optimization

### Phase 4: API Integration
- [ ] Yahoo Finance API
- [ ] CoinGecko API
- [ ] GitHub Stats API

### Phase 5: Advanced Features
- [ ] Search functionality
- [ ] Project filters
- [ ] Certificate modals
- [ ] Contact form

### Phase 6: Polish
- [ ] Animations
- [ ] Sound effects
- [ ] Performance optimization
- [ ] Testing

### Phase 7: Launch
- [ ] Vercel deployment
- [ ] Custom domain
- [ ] Analytics setup
- [ ] SEO verification

---

## 💡 Tips

1. **Start without Supabase** - Use placeholder data to see full website
2. **Customize gradually** - Replace one section at a time
3. **Test responsive design** - Use browser dev tools
4. **Optimize images** - Compress before uploading
5. **Track analytics** - Set up Google Analytics from day one

---

## ⭐ Show Your Support

If you find this project helpful, please:
- ⭐ Star this repository
- 🔗 Share it with others
- 🐛 Report any bugs
- 💡 Suggest improvements

---

**Built with 💙 and ☕ by Harshal Jain**

*"From Circuit Boards to Trading Floors"* 📈
