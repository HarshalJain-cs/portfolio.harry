/**
 * EXTENDED PLACEHOLDER DATA
 * Experiences, Certifications, Volunteering, etc.
 */

import type {
  Experience,
  Volunteering,
  Certification,
  Competition,
  ResearchPaper,
  FinancialAnalysis,
  BlogPost,
  Testimonial,
  Coursework,
  TimelineEvent,
} from '@/types/database'

// ============================================================================
// EXPERIENCES (8 Total: 2 Internships, 2 Freelance, 2 Part-time, 2 Clubs)
// ============================================================================

export const PLACEHOLDER_EXPERIENCES: Experience[] = [
  // INTERNSHIPS (2)
  {
    id: 'exp1',
    position_title: 'Software Engineering Intern',
    company_name: 'TechCorp Solutions Pvt Ltd',
    company_url: 'https://techcorp.example.com',
    location: 'Bangalore, India',
    employment_type: 'Internship',
    start_date: '2023-06-01',
    end_date: '2023-08-31',
    is_current: false,
    achievements: [
      'Developed React-based admin dashboard reducing manual reporting time by 60%',
      'Implemented caching layer with Redis improving API response time from 800ms to 120ms',
      'Contributed to microservices migration handling 2M+ daily requests',
      'Mentored 2 junior interns on React best practices and git workflows',
    ],
    skills_used: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Git',
      'AWS',
    ],
    metrics:
      '60% reduction in reporting time, 85% faster API responses, handled 2M+ requests/day',
    description:
      'Worked on full-stack development for enterprise SaaS platform serving 500+ clients. Primary focus on performance optimization and admin tooling.',
    display_order: 1,
  },
  {
    id: 'exp2',
    position_title: 'Quantitative Finance Intern',
    company_name: 'Alpha Capital Markets',
    company_url: 'https://alphacapital.example.com',
    location: 'Mumbai, India',
    employment_type: 'Internship',
    start_date: '2024-01-15',
    end_date: '2024-04-30',
    is_current: false,
    achievements: [
      'Built algorithmic trading strategies achieving 22% annualized returns in paper trading',
      'Conducted equity research on 15 mid-cap technology stocks with 70% accuracy on buy recommendations',
      'Developed portfolio optimization tool using Modern Portfolio Theory reducing client portfolio risk by 18%',
      'Automated daily market report generation saving 5 hours of analyst time',
    ],
    skills_used: [
      'Python',
      'Pandas',
      'NumPy',
      'Excel',
      'Bloomberg Terminal',
      'Financial Modeling',
      'DCF Valuation',
    ],
    metrics:
      '22% returns in backtesting, 70% recommendation accuracy, 18% risk reduction',
    description:
      'Quantitative research and algorithmic trading development for proprietary trading desk. Worked on equity research and portfolio optimization.',
    display_order: 2,
  },

  // FREELANCE (2)
  {
    id: 'exp3',
    position_title: 'Full-Stack Web Developer',
    company_name: 'Freelance (Upwork/Fiverr)',
    employment_type: 'Freelance',
    start_date: '2023-03-01',
    is_current: true,
    achievements: [
      'Delivered 15+ web development projects with 5-star client ratings',
      'Built e-commerce platform for fashion brand generating ₹50L+ in sales',
      'Developed SaaS dashboard for logistics company tracking 1000+ shipments daily',
      'Maintained 98% client satisfaction rate across 20+ projects',
    ],
    skills_used: [
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Stripe API',
      'Tailwind CSS',
    ],
    metrics:
      '15+ projects completed, ₹50L+ e-commerce sales, 98% satisfaction rate',
    description:
      'Freelance web development services for startups and small businesses. Specialized in e-commerce, SaaS dashboards, and landing pages.',
    display_order: 3,
  },
  {
    id: 'exp4',
    position_title: 'AI/ML Consultant',
    company_name: 'Freelance Consulting',
    employment_type: 'Freelance',
    start_date: '2024-02-01',
    is_current: true,
    achievements: [
      'Built custom ChatGPT integration for customer support reducing ticket volume by 55%',
      'Developed predictive analytics model for e-commerce achieving 85% accuracy in demand forecasting',
      'Implemented computer vision solution for manufacturing defect detection with 92% accuracy',
      'Consulted for 8 clients across fintech, e-commerce, and healthcare domains',
    ],
    skills_used: [
      'Python',
      'OpenAI API',
      'TensorFlow',
      'LangChain',
      'FastAPI',
      'Docker',
    ],
    metrics:
      '55% ticket reduction, 85% forecasting accuracy, 92% defect detection, 8 clients',
    description:
      'AI/ML consulting services helping businesses integrate AI solutions. Focus on LLM applications, predictive analytics, and computer vision.',
    display_order: 4,
  },

  // PART-TIME (2)
  {
    id: 'exp5',
    position_title: 'Teaching Assistant - Data Structures',
    company_name: 'University Computer Science Department',
    employment_type: 'Part-time',
    start_date: '2023-08-01',
    end_date: '2023-12-15',
    is_current: false,
    achievements: [
      'Assisted professor with Data Structures course for 120 students',
      'Conducted weekly lab sessions and doubt-clearing workshops',
      'Graded assignments and exams maintaining 48-hour turnaround',
      'Mentored 5 students on final projects with 100% completion rate',
    ],
    skills_used: ['Python', 'Java', 'C++', 'Teaching', 'Mentoring'],
    metrics: '120 students assisted, 48-hour grading turnaround, 100% project completion',
    description:
      'Teaching assistant for undergraduate Data Structures and Algorithms course. Responsible for labs, grading, and student mentorship.',
    display_order: 5,
  },
  {
    id: 'exp6',
    position_title: 'Content Creator - Finance YouTube Channel',
    company_name: 'MoneyMind (Personal Brand)',
    employment_type: 'Part-time',
    start_date: '2023-09-01',
    is_current: true,
    achievements: [
      'Built YouTube channel to 5,000+ subscribers with finance education content',
      'Published 40+ videos on stock market investing, trading, and personal finance',
      'Average video engagement rate of 12% (2x industry average)',
      'Monetized through AdSense and affiliate partnerships generating ₹25K/month',
    ],
    skills_used: [
      'Content Creation',
      'Video Editing',
      'Financial Analysis',
      'Public Speaking',
      'Marketing',
    ],
    metrics: '5K+ subscribers, 40+ videos, 12% engagement, ₹25K/month revenue',
    description:
      'Finance education YouTube channel teaching stock market investing, trading strategies, and personal finance management to retail investors.',
    display_order: 6,
  },

  // COLLEGE CLUBS (2)
  {
    id: 'exp7',
    position_title: 'Technical Lead',
    company_name: 'College Coding Club',
    employment_type: 'Part-time',
    start_date: '2023-01-01',
    end_date: '2024-05-01',
    is_current: false,
    achievements: [
      'Led team of 15 developers building college event management platform',
      'Organized 8 coding workshops with 500+ total attendees',
      'Coordinated annual hackathon with 200+ participants and ₹2L prize pool',
      'Mentored 20+ juniors on web development and competitive programming',
    ],
    skills_used: [
      'Leadership',
      'Project Management',
      'React',
      'Node.js',
      'Teaching',
    ],
    metrics: '15-member team, 8 workshops, 200+ hackathon participants, 20+ mentees',
    description:
      'Leadership role in college coding club organizing technical events, workshops, and hackathons. Managed club operations and mentored junior students.',
    display_order: 7,
  },
  {
    id: 'exp8',
    position_title: 'President',
    company_name: 'Finance & Investment Club',
    employment_type: 'Part-time',
    start_date: '2023-07-01',
    is_current: true,
    achievements: [
      'Grew club membership from 30 to 150+ students in one year',
      'Organized 12 guest lectures with industry professionals from investment banks and hedge funds',
      'Launched mock stock trading competition with 80+ participants',
      'Managed club budget of ₹5L for events and activities',
    ],
    skills_used: [
      'Leadership',
      'Event Management',
      'Public Speaking',
      'Finance',
      'Networking',
    ],
    metrics: '150+ members, 12 guest lectures, 80+ trading competition participants',
    description:
      'Student club president managing all operations, events, and activities. Focus on finance education, networking, and professional development.',
    display_order: 8,
  },
]

// ============================================================================
// VOLUNTEERING (12 Total: 3 NGO, 3 Events, 3 Teaching, 3 Community)
// ============================================================================

export const PLACEHOLDER_VOLUNTEERING: Volunteering[] = [
  // NGO WORK (3)
  {
    id: 'vol1',
    role: 'Technology Volunteer',
    organization: 'Teach For India',
    category: 'NGO',
    start_date: '2023-06-01',
    end_date: '2023-12-31',
    is_ongoing: false,
    description:
      'Taught basic computer skills and coding to underprivileged students in government schools.',
    impact:
      'Trained 50+ students in computer basics. 10 students went on to pursue computer science in higher education.',
    location: 'Delhi, India',
    hours_contributed: 120,
    display_order: 1,
  },
  {
    id: 'vol2',
    role: 'Financial Literacy Educator',
    organization: 'MoneyWise Foundation',
    category: 'NGO',
    start_date: '2024-01-01',
    is_ongoing: true,
    description:
      'Conducting financial literacy workshops for low-income families teaching budgeting, saving, and basic investing.',
    impact:
      'Conducted 15 workshops reaching 300+ families. Helped participants save average ₹5,000/month through better budgeting.',
    location: 'Mumbai, India',
    hours_contributed: 80,
    display_order: 2,
  },
  {
    id: 'vol3',
    role: 'Website Developer (Pro Bono)',
    organization: 'Animal Welfare NGO',
    category: 'NGO',
    start_date: '2023-09-01',
    end_date: '2023-11-30',
    is_ongoing: false,
    description:
      'Built modern website with donation portal for animal rescue NGO. Created admin dashboard for managing rescue cases.',
    impact:
      'Website increased online donations by 150%. Helped raise ₹10L+ for animal welfare. Improved case management efficiency.',
    location: 'Remote',
    hours_contributed: 60,
    display_order: 3,
  },

  // EVENT ORGANIZING (3)
  {
    id: 'vol4',
    role: 'Event Coordinator',
    organization: 'Tech Conference 2024',
    category: 'Event Organizing',
    start_date: '2024-02-01',
    end_date: '2024-03-15',
    is_ongoing: false,
    description:
      'Coordinated technical sessions and workshops for 500-attendee technology conference. Managed speaker schedules and logistics.',
    impact:
      'Successfully organized conference with 500+ attendees, 20 speakers, and 98% satisfaction rating.',
    location: 'Bangalore, India',
    hours_contributed: 100,
    display_order: 4,
  },
  {
    id: 'vol5',
    role: 'Hackathon Organizer',
    organization: 'HackTheSystem 2023',
    category: 'Event Organizing',
    start_date: '2023-10-01',
    end_date: '2023-11-05',
    is_ongoing: false,
    description:
      'Organized 36-hour hackathon with 200 participants. Managed sponsorships, judging, and logistics.',
    impact:
      '200 participants, 40 projects built, ₹3L in prizes distributed. 5 winning projects got seed funding.',
    location: 'Hyderabad, India',
    hours_contributed: 150,
    display_order: 5,
  },
  {
    id: 'vol6',
    role: 'Workshop Lead',
    organization: 'Women in Tech Initiative',
    category: 'Event Organizing',
    start_date: '2024-01-15',
    end_date: '2024-02-28',
    is_ongoing: false,
    description:
      'Conducted coding workshops for women entering tech. Covered web development, Python, and career guidance.',
    impact:
      '80+ women attended workshops. 25 participants landed tech internships within 3 months.',
    location: 'Pune, India',
    hours_contributed: 40,
    display_order: 6,
  },

  // TEACHING/MENTORING (3)
  {
    id: 'vol7',
    role: 'Coding Mentor',
    organization: 'Code For Good',
    category: 'Teaching',
    start_date: '2023-07-01',
    is_ongoing: true,
    description:
      'One-on-one mentorship for students learning web development. Weekly sessions covering JavaScript, React, and project guidance.',
    impact:
      'Mentored 12 students. All completed portfolio projects. 8 landed their first developer jobs.',
    location: 'Remote',
    hours_contributed: 200,
    display_order: 7,
  },
  {
    id: 'vol8',
    role: 'Finance Tutor',
    organization: 'Student Finance Society',
    category: 'Teaching',
    start_date: '2023-09-01',
    end_date: '2024-04-30',
    is_ongoing: false,
    description:
      'Taught stock market basics, technical analysis, and investment strategies to 30+ college students.',
    impact:
      '30 students trained in stock market investing. 15 started their own investment portfolios.',
    location: 'College Campus',
    hours_contributed: 60,
    display_order: 8,
  },
  {
    id: 'vol9',
    role: 'Competitive Programming Coach',
    organization: 'College Programming Team',
    category: 'Teaching',
    start_date: '2024-01-01',
    is_ongoing: true,
    description:
      'Training students for ICPC, CodeChef, and Codeforces competitions. Teaching algorithms and problem-solving techniques.',
    impact:
      'Team improved from Div 3 to Div 1 on Codeforces. 3 students qualified for ICPC regionals.',
    location: 'College Campus',
    hours_contributed: 90,
    display_order: 9,
  },

  // COMMUNITY INITIATIVES (3)
  {
    id: 'vol10',
    role: 'Community Moderator',
    organization: 'Developer Discord Community',
    category: 'Community',
    start_date: '2023-05-01',
    is_ongoing: true,
    description:
      'Moderating 5,000-member developer community on Discord. Answering technical questions and organizing community events.',
    impact:
      '5,000+ community members. Answered 500+ technical questions. Organized 10 community coding challenges.',
    location: 'Remote',
    hours_contributed: 180,
    display_order: 10,
  },
  {
    id: 'vol11',
    role: 'Open Source Contributor',
    organization: 'Various Open Source Projects',
    category: 'Community',
    start_date: '2023-03-01',
    is_ongoing: true,
    description:
      'Contributing to open source projects on GitHub. Focus on React libraries, developer tools, and documentation.',
    impact:
      '50+ pull requests merged across 15 projects. Contributed to projects with 100K+ combined GitHub stars.',
    location: 'Remote',
    hours_contributed: 250,
    display_order: 11,
  },
  {
    id: 'vol12',
    role: 'Tech Blog Writer',
    organization: 'Dev.to Community',
    category: 'Community',
    start_date: '2023-08-01',
    is_ongoing: true,
    description:
      'Writing technical tutorials and articles on web development, AI/ML, and finance technology.',
    impact:
      '25+ articles published. 50,000+ total views. Helped 100+ developers solve technical problems.',
    location: 'Remote',
    hours_contributed: 120,
    display_order: 12,
  },
]

// ============================================================================
// CERTIFICATIONS (15 Total: 3 Each Category)
// ============================================================================

export const PLACEHOLDER_CERTIFICATIONS: Certification[] = [
  // ONLINE COURSES (3)
  {
    id: 'cert1',
    title: 'Full-Stack Web Development Specialization',
    issuing_organization: 'Coursera - Meta',
    category: 'Online Course',
    issue_date: '2023-06-15',
    credential_id: 'META-FULLSTACK-2023-456',
    credential_url: 'https://coursera.org/verify/META456',
    skills_gained: [
      'React',
      'Node.js',
      'MongoDB',
      'REST APIs',
      'Authentication',
    ],
    description:
      'Comprehensive specialization covering frontend, backend, databases, and deployment. Built 5 full-stack projects including e-commerce platform.',
    display_order: 1,
  },
  {
    id: 'cert2',
    title: 'Machine Learning Specialization',
    issuing_organization: 'Coursera - Stanford University',
    category: 'Online Course',
    issue_date: '2023-09-20',
    credential_id: 'STANFORD-ML-2023-789',
    credential_url: 'https://coursera.org/verify/STANFORD789',
    skills_gained: [
      'Machine Learning',
      'Python',
      'TensorFlow',
      'Neural Networks',
      'Deep Learning',
    ],
    description:
      'Andrew Ng\'s renowned ML course covering supervised learning, unsupervised learning, and neural networks. Completed 8 programming assignments.',
    display_order: 2,
  },
  {
    id: 'cert3',
    title: 'Financial Markets',
    issuing_organization: 'Coursera - Yale University',
    category: 'Online Course',
    issue_date: '2024-01-10',
    credential_id: 'YALE-FIN-2024-321',
    credential_url: 'https://coursera.org/verify/YALE321',
    skills_gained: [
      'Financial Markets',
      'Investment Theory',
      'Risk Management',
      'Portfolio Management',
    ],
    description:
      'Comprehensive overview of financial markets taught by Nobel laureate Robert Shiller. Covered stocks, bonds, derivatives, and behavioral finance.',
    display_order: 3,
  },

  // HACKATHONS (3)
  {
    id: 'cert4',
    title: 'Winner - Smart India Hackathon 2023',
    issuing_organization: 'Government of India',
    category: 'Hackathon',
    issue_date: '2023-10-15',
    credential_id: 'SIH-2023-WINNER-001',
    skills_gained: ['Problem Solving', 'Team Collaboration', 'Innovation'],
    description:
      'Won first place in Software category for building EcoTracker carbon footprint monitoring app. Competed against 500+ teams nationwide.',
    display_order: 4,
  },
  {
    id: 'cert5',
    title: 'Runner-up - ETHIndia 2024',
    issuing_organization: 'ETHIndia',
    category: 'Hackathon',
    issue_date: '2024-04-20',
    skills_gained: ['Blockchain', 'Smart Contracts', 'Web3', 'Solidity'],
    description:
      'Second place in India\'s largest Ethereum hackathon. Built HealthGuard AI medical diagnosis assistant using blockchain for data integrity.',
    display_order: 5,
  },
  {
    id: 'cert6',
    title: 'Best Web3 Project - DevFolio Hackathon',
    issuing_organization: 'DevFolio',
    category: 'Hackathon',
    issue_date: '2023-12-10',
    skills_gained: ['Web3', 'NFTs', 'Polygon', 'DeFi'],
    description:
      'Best Web3 Project award for EduChain blockchain credential verification system. Prize: $2,000 + mentorship from Polygon Labs.',
    display_order: 6,
  },

  // ACADEMIC (3)
  {
    id: 'cert7',
    title: 'Dean\'s List - Academic Excellence',
    issuing_organization: 'University',
    category: 'Academic',
    issue_date: '2023-05-30',
    description:
      'Recognized for maintaining 9.2+ GPA throughout academic year 2022-23. Top 5% of class.',
    display_order: 7,
  },
  {
    id: 'cert8',
    title: 'Best Final Year Project Award',
    issuing_organization: 'Computer Science Department',
    category: 'Academic',
    issue_date: '2024-05-15',
    skills_gained: ['Research', 'Innovation', 'Presentation'],
    description:
      'Awarded best final year project for Real-Time Collaboration Platform. Selected from 50+ projects for innovation and technical execution.',
    display_order: 8,
  },
  {
    id: 'cert9',
    title: 'Research Paper Publication Award',
    issuing_organization: 'University Research Committee',
    category: 'Academic',
    issue_date: '2024-03-20',
    description:
      'Recognized for publishing research paper in IEEE conference on AI applications in financial markets.',
    display_order: 9,
  },

  // FINANCE CERTIFICATIONS (3)
  {
    id: 'cert10',
    title: 'NISM Series VIII - Equity Derivatives',
    issuing_organization: 'National Institute of Securities Markets',
    category: 'Finance',
    issue_date: '2023-11-25',
    credential_id: 'NISM-VIII-2023-1234',
    skills_gained: [
      'Options Trading',
      'Futures',
      'Derivatives',
      'Risk Management',
    ],
    description:
      'Certified in equity derivatives trading. Covers options, futures, hedging strategies, and regulatory framework.',
    display_order: 10,
  },
  {
    id: 'cert11',
    title: 'Bloomberg Market Concepts (BMC)',
    issuing_organization: 'Bloomberg LP',
    category: 'Finance',
    issue_date: '2024-02-10',
    credential_id: 'BMC-2024-5678',
    skills_gained: [
      'Bloomberg Terminal',
      'Financial Analysis',
      'Market Data',
      'Economics',
    ],
    description:
      'Introduction to financial markets and Bloomberg Terminal. Covered economic indicators, currencies, fixed income, and equities.',
    display_order: 11,
  },
  {
    id: 'cert12',
    title: 'Technical Analysis - NSE Academy',
    issuing_organization: 'NSE Academy',
    category: 'Finance',
    issue_date: '2023-08-30',
    credential_id: 'NSE-TA-2023-9012',
    skills_gained: [
      'Technical Analysis',
      'Chart Patterns',
      'Indicators',
      'Trading Strategies',
    ],
    description:
      'Comprehensive course on technical analysis covering candlestick patterns, indicators, and trading strategies.',
    display_order: 12,
  },

  // LEADERSHIP (3)
  {
    id: 'cert13',
    title: 'Leadership Excellence Program',
    issuing_organization: 'College Leadership Institute',
    category: 'Leadership',
    issue_date: '2023-12-15',
    skills_gained: [
      'Leadership',
      'Team Management',
      'Communication',
      'Conflict Resolution',
    ],
    description:
      '3-month leadership program for student leaders covering team management, communication, and organizational skills.',
    display_order: 13,
  },
  {
    id: 'cert14',
    title: 'Entrepreneurship Bootcamp Certificate',
    issuing_organization: 'Startup Incubator',
    category: 'Leadership',
    issue_date: '2024-01-20',
    skills_gained: [
      'Entrepreneurship',
      'Business Strategy',
      'Pitching',
      'Fundraising',
    ],
    description:
      'Intensive 2-week bootcamp on startup fundamentals. Pitched business idea to investor panel and received seed funding offer.',
    display_order: 14,
  },
  {
    id: 'cert15',
    title: 'Project Management Professional (PMP) Prep',
    issuing_organization: 'PMI Chapter',
    category: 'Leadership',
    issue_date: '2024-03-05',
    skills_gained: [
      'Project Management',
      'Agile',
      'Scrum',
      'Risk Management',
    ],
    description:
      'PMP certification prep course covering project management methodologies, Agile/Scrum, and risk management.',
    display_order: 15,
  },
]

// Export all extended data
export const MOCK_EXTENDED_DATA = {
  experiences: PLACEHOLDER_EXPERIENCES,
  volunteering: PLACEHOLDER_VOLUNTEERING,
  certifications: PLACEHOLDER_CERTIFICATIONS,
}
