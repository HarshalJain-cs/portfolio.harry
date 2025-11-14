/**
 * FINAL PLACEHOLDER DATA
 * Competitions, Research, Blog, Testimonials, Coursework, Timeline
 */

import type {
  Competition,
  ResearchPaper,
  FinancialAnalysis,
  BlogPost,
  Testimonial,
  Coursework,
  TimelineEvent,
} from '@/types/database'

// ============================================================================
// COMPETITIONS (7 Total: 5 National, 2 International)
// ============================================================================

export const PLACEHOLDER_COMPETITIONS: Competition[] = [
  // NATIONAL (5)
  {
    id: 'comp1',
    name: 'Smart India Hackathon 2023',
    organizer: 'Government of India, AICTE',
    type: 'Hackathon',
    level: 'National',
    date: '2023-10-15',
    position: 'Winner',
    team_size: 6,
    project_built:
      'EcoTracker - Carbon Footprint Monitoring App using transaction analysis and GPS tracking',
    technologies_used: ['React', 'Node.js', 'MongoDB', 'Plaid API', 'ML'],
    achievement:
      'First place out of 500+ teams nationwide. Prize: ₹1L + incubation support',
    display_order: 1,
  },
  {
    id: 'comp2',
    name: 'HackerEarth India Hackathon 2024',
    organizer: 'HackerEarth',
    type: 'Hackathon',
    level: 'National',
    date: '2024-03-20',
    position: 'Runner-up',
    team_size: 4,
    project_built:
      'AI-powered recruitment platform with automated candidate screening',
    technologies_used: ['Python', 'FastAPI', 'React', 'OpenAI API'],
    achievement:
      'Second place. Built AI recruiter analyzing 1000+ resumes in <1 minute',
    display_order: 2,
  },
  {
    id: 'comp3',
    name: 'NSE-IIT Bombay Trading Challenge',
    organizer: 'NSE & IIT Bombay',
    type: 'Trading Competition',
    level: 'National',
    date: '2023-11-10',
    position: 'Top 10 Finalist',
    team_size: 1,
    achievement:
      'Ranked 8th out of 2,000+ participants. Achieved 45% returns in 3-month paper trading',
    display_order: 3,
  },
  {
    id: 'comp4',
    name: 'Code For Good - JP Morgan Hackathon',
    organizer: 'JP Morgan Chase',
    type: 'Hackathon',
    level: 'National',
    date: '2024-01-15',
    position: 'Finalist',
    team_size: 5,
    project_built:
      'NGO donation platform with transparency tracking using blockchain',
    technologies_used: ['React', 'Solidity', 'Ethereum', 'Node.js'],
    achievement:
      'Top 20 teams selected from 500+. Built during 24-hour hackathon',
    display_order: 4,
  },
  {
    id: 'comp5',
    name: 'Google Cloud Hackathon India',
    organizer: 'Google Cloud',
    type: 'Hackathon',
    level: 'National',
    date: '2023-09-05',
    position: 'Participant',
    team_size: 3,
    project_built:
      'Healthcare data analytics platform using GCP services',
    technologies_used: [
      'Google Cloud',
      'BigQuery',
      'Cloud Functions',
      'React',
    ],
    achievement:
      'Showcased project to Google engineers. Received GCP credits worth $500',
    display_order: 5,
  },

  // INTERNATIONAL (2)
  {
    id: 'comp6',
    name: 'ETHIndia 2024',
    organizer: 'Devfolio & Ethereum Foundation',
    type: 'Hackathon',
    level: 'International',
    date: '2024-04-20',
    position: 'Runner-up',
    team_size: 4,
    project_built:
      'HealthGuard AI - Decentralized medical diagnosis assistant with blockchain data integrity',
    technologies_used: [
      'Solidity',
      'Python',
      'TensorFlow',
      'IPFS',
      'Polygon',
    ],
    achievement:
      'Second place in India\'s largest ETH hackathon. Prize: $5,000 + mentorship',
    display_order: 6,
  },
  {
    id: 'comp7',
    name: 'Global FinTech Challenge 2023',
    organizer: 'FinTech Association of Hong Kong',
    type: 'Case Competition',
    level: 'International',
    date: '2023-12-08',
    position: 'Semi-Finalist',
    team_size: 3,
    achievement:
      'Top 50 teams globally. Presented digital banking solution to industry judges',
    display_order: 7,
  },
]

// ============================================================================
// RESEARCH PAPERS (2)
// ============================================================================

export const PLACEHOLDER_RESEARCH: ResearchPaper[] = [
  {
    id: 'research1',
    title:
      'Machine Learning Applications in Algorithmic Trading: A Comprehensive Analysis of Predictive Models',
    abstract:
      'This paper explores the application of various machine learning algorithms in algorithmic trading, comparing the performance of LSTM, Random Forest, and Gradient Boosting models in predicting stock price movements. We analyze 5 years of historical data from Indian equity markets (NSE) and evaluate models based on accuracy, Sharpe ratio, and maximum drawdown. Our findings suggest that ensemble methods combining multiple models outperform individual algorithms, achieving 68% directional accuracy and Sharpe ratio of 1.9. The research contributes to the growing body of literature on quantitative finance and provides practical insights for retail traders seeking to implement ML-based trading strategies.',
    publication_date: '2024-03-15',
    publication_venue:
      'IEEE International Conference on AI in Finance (ICAIF 2024)',
    authors: ['Harshal Jain'],
    coauthors: ['Dr. Amit Sharma', 'Prof. Rajesh Kumar'],
    paper_url: 'https://doi.org/example/icaif2024',
    keywords: [
      'Algorithmic Trading',
      'Machine Learning',
      'LSTM',
      'Stock Market Prediction',
      'Quantitative Finance',
    ],
    citation_count: 12,
    category: 'Finance',
    display_order: 1,
  },
  {
    id: 'research2',
    title:
      'Real-Time Collaborative Editing Systems: Performance Optimization Techniques for Low-Latency Synchronization',
    abstract:
      'Real-time collaboration has become essential in modern web applications, but achieving low-latency synchronization remains challenging. This paper presents novel optimization techniques for WebSocket-based collaboration systems, including adaptive batching, predictive conflict resolution, and client-side caching strategies. We implement these techniques in a production-grade collaborative editor and demonstrate 60% reduction in perceived latency and 40% reduction in server load compared to baseline implementations. Through extensive testing with 1000+ concurrent users, we validate the scalability of our approach. The findings have practical applications for developers building collaborative tools, document editors, and real-time dashboards.',
    publication_date: '2024-01-20',
    publication_venue:
      'ACM Conference on Computer Supported Cooperative Work (CSCW 2024)',
    authors: ['Harshal Jain'],
    coauthors: ['Prof. Sneha Desai'],
    paper_url: 'https://doi.org/example/cscw2024',
    keywords: [
      'Real-Time Collaboration',
      'WebSocket',
      'Operational Transformation',
      'Latency Optimization',
      'CRDT',
    ],
    citation_count: 8,
    category: 'Tech',
    display_order: 2,
  },
]

// ============================================================================
// FINANCIAL ANALYSES (2)
// ============================================================================

export const PLACEHOLDER_FINANCIAL_ANALYSES: FinancialAnalysis[] = [
  {
    id: 'analysis1',
    ticker: 'RELIANCE',
    company_name: 'Reliance Industries Limited',
    analysis_title:
      'Reliance Industries: Comprehensive Equity Research Report Q4 FY2024',
    executive_summary:
      'Reliance Industries (RIL) continues to demonstrate strong fundamentals with diversified revenue streams across refining, petrochemicals, retail, and digital services. Our DCF valuation suggests a fair value of ₹2,850 per share (15% upside from current levels). Key growth drivers include Jio\'s 5G expansion, retail footprint growth, and new energy initiatives. However, headwinds from regulatory scrutiny in telecom and global crude volatility pose risks. We maintain a BUY rating with 12-month target price of ₹2,850.',
    investment_thesis:
      'RIL is transitioning from a traditional O&G company to a diversified conglomerate with significant exposure to high-growth digital and retail sectors. Jio Platforms has 440M+ subscribers generating steady ARPU growth. Reliance Retail is India\'s largest organized retailer with 18,000+ stores. The company\'s new energy push (solar, battery, hydrogen) positions it well for the energy transition. Strong balance sheet with net debt reduction provides financial flexibility.',
    methodology:
      'DCF valuation using 10-year cash flow projection with 9% WACC and 4% terminal growth rate. Comparable company analysis with Asian O&G majors and Indian conglomerates. Sum-of-the-parts (SOTP) valuation for different business segments. Sensitivity analysis for crude oil prices and telecom ARPU.',
    key_findings: [
      'Q4 FY2024 revenue: ₹2.35L Cr (+12% YoY), EBITDA: ₹42,000 Cr (+15% YoY)',
      'Jio ARPU increased to ₹181 (+8% YoY), subscriber base at 440M',
      'Retail segment revenue: ₹65,000 Cr (+25% YoY), store count: 18,040',
      'Net debt reduced by ₹25,000 Cr, debt/equity ratio at healthy 0.45',
      'New energy capex commitment of ₹75,000 Cr over 3 years',
    ],
    recommendation: 'BUY',
    target_price: 2850,
    current_price: 2480,
    data_metrics: {
      pe_ratio: 24.5,
      pb_ratio: 2.8,
      roe: 11.2,
      revenue_growth: 12,
      ebitda_margin: 17.9,
      debt_equity: 0.45,
    },
    technologies_used: [
      'Excel',
      'Python',
      'Pandas',
      'Bloomberg Terminal',
      'Capital IQ',
    ],
    analysis_date: '2024-04-15',
    impact:
      'Detailed 50-page research report with financial models. Shared with 500+ finance students. Used in college investment club stock pitches.',
    display_order: 1,
  },
  {
    id: 'analysis2',
    ticker: 'NIFTY',
    company_name: 'NIFTY 50 Index',
    analysis_title:
      'Indian Equity Markets Outlook: Sectoral Analysis & Portfolio Strategy H2 2024',
    executive_summary:
      'Indian equity markets are expected to remain volatile in H2 2024 driven by global rate uncertainty, domestic election outcomes, and monsoon performance. Our base case targets Nifty at 22,500 (8% upside) with bull case at 24,000. We recommend overweight positions in IT (global recovery), Banking (credit growth), and Infrastructure (government capex). Underweight Consumer Discretionary (demand slowdown) and Metals (China concerns). Portfolio strategy emphasizes quality stocks with strong balance sheets and consistent earnings growth.',
    investment_thesis:
      'India\'s macro remains resilient with 6.5-7% GDP growth, moderating inflation, and strong corporate earnings. However, valuations are stretched (Nifty PE at 20x vs 10-year average of 18x). Sectoral rotation favors defensive quality over cyclical growth. FII flows remain critical - any reversal could trigger 10-15% correction.',
    methodology:
      'Top-down macroeconomic analysis, Bottom-up sectoral analysis, Earnings growth modeling, Valuation multiples comparison, Technical analysis of index levels, Risk-reward assessment',
    key_findings: [
      'Nifty 50 earnings growth projected at 12-15% for FY25',
      'IT sector likely to recover with US Fed rate cuts (expected H2 2024)',
      'Banking sector NPA ratios at decade lows, credit growth at 15%+',
      'Infrastructure spending budgeted at ₹10L Cr for FY25 (+15% YoY)',
      'Monsoon forecast at 102% of LPA supports rural consumption',
    ],
    recommendation: 'HOLD',
    target_price: 22500,
    current_price: 20850,
    data_metrics: {
      index_pe: 20.2,
      index_pb: 3.4,
      earnings_growth: 14,
      fii_ownership: 18.5,
      dii_ownership: 15.2,
    },
    technologies_used: ['Excel', 'Python', 'Tableau', 'TradingView', 'R'],
    analysis_date: '2024-05-01',
    impact:
      'Comprehensive 35-page sectoral report. Informed portfolio allocation for personal investments. Presented to finance club members.',
    display_order: 2,
  },
]

// ============================================================================
// BLOG POSTS (3 Placeholders)
// ============================================================================

export const PLACEHOLDER_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog1',
    title: 'Understanding Technical Analysis: A Beginner\'s Complete Guide',
    slug: 'understanding-technical-analysis-beginners-guide',
    excerpt:
      'Learn the fundamentals of technical analysis including chart patterns, indicators, and how to use them for better trading decisions. Perfect for beginners starting their trading journey.',
    content: `Technical analysis is the study of historical price action to forecast future price movements...

[Full article content would go here - 2000+ words covering:]
- What is Technical Analysis
- Chart Patterns (Head & Shoulders, Double Top/Bottom, Triangles)
- Technical Indicators (RSI, MACD, Moving Averages, Bollinger Bands)
- Volume Analysis
- Support & Resistance
- Trend Analysis
- Practical Examples
- Common Mistakes to Avoid

This is a placeholder - actual blog post content will be added later.`,
    cover_image_url: '/blog/technical-analysis-cover.jpg',
    category: 'Finance',
    tags: [
      'Technical Analysis',
      'Trading',
      'Stock Market',
      'Beginners Guide',
    ],
    published_date: '2024-03-15T10:00:00Z',
    is_published: true,
    views_count: 2500,
    reading_time_minutes: 12,
    author: 'Harshal Jain',
  },
  {
    id: 'blog2',
    title:
      'How I Built My First Trading Algorithm with Python: Step-by-Step Tutorial',
    slug: 'building-trading-algorithm-python-tutorial',
    excerpt:
      'A detailed walkthrough of building an algorithmic trading bot from scratch using Python, pandas, and Zerodha API. Includes backtesting and risk management.',
    content: `Building your first trading algorithm can seem daunting, but with Python it's more accessible than ever...

[Full article content would go here - 2500+ words covering:]
- Setting up Python environment
- Understanding trading algorithms
- Data collection with yFinance
- Building a simple moving average strategy
- Backtesting with historical data
- Risk management and position sizing
- Connecting to broker API (Zerodha)
- Live trading considerations
- Performance metrics
- Common pitfalls
- Complete code walkthrough

This is a placeholder - actual blog post content will be added later.`,
    cover_image_url: '/blog/algo-trading-python-cover.jpg',
    category: 'Tech',
    tags: [
      'Algorithmic Trading',
      'Python',
      'Tutorial',
      'Finance',
      'Programming',
    ],
    published_date: '2024-04-02T14:30:00Z',
    is_published: true,
    views_count: 4200,
    reading_time_minutes: 18,
    author: 'Harshal Jain',
  },
  {
    id: 'blog3',
    title:
      'The Future of FinTech: How AI and Blockchain are Reshaping Finance',
    slug: 'future-of-fintech-ai-blockchain',
    excerpt:
      'Exploring how emerging technologies like AI, blockchain, and Web3 are revolutionizing the financial services industry. Analysis of trends, opportunities, and challenges.',
    content: `The financial technology landscape is evolving at breakneck speed, driven by innovations in AI and blockchain...

[Full article content would go here - 2200+ words covering:]
- Current state of FinTech
- AI in Finance: Use cases in trading, risk management, fraud detection
- Blockchain in Finance: DeFi, tokenization, cross-border payments
- Regulatory challenges and opportunities
- Case studies of successful FinTech companies
- Web3 and decentralized finance
- Future predictions for next 5 years
- Investment opportunities in FinTech sector
- Risks and concerns
- Conclusion and key takeaways

This is a placeholder - actual blog post content will be added later.`,
    cover_image_url: '/blog/fintech-future-cover.jpg',
    category: 'Finance',
    tags: ['FinTech', 'AI', 'Blockchain', 'DeFi', 'Future Trends', 'Web3'],
    published_date: '2024-05-10T09:00:00Z',
    is_published: true,
    views_count: 1800,
    reading_time_minutes: 15,
    author: 'Harshal Jain',
  },
]

// ============================================================================
// TESTIMONIALS (3)
// ============================================================================

export const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test1',
    name: 'Dr. Rajesh Kumar',
    designation: 'Associate Professor',
    organization: 'Department of Computer Science',
    testimonial_text:
      'Harshal is an exceptional student who combines technical excellence with strong leadership abilities. His final year project on real-time collaboration systems demonstrated deep understanding of distributed systems and WebSocket architecture. He consistently ranks in the top 5% of the class and actively mentors junior students. His research paper on algorithmic trading was accepted at a prestigious IEEE conference, showcasing his ability to bridge theory and practice. I highly recommend Harshal for any software engineering or quantitative finance role.',
    rating: 5,
    relationship: 'Professor',
    date_given: '2024-05-15',
    is_featured: true,
    display_order: 1,
  },
  {
    id: 'test2',
    name: 'Priya Sharma',
    designation: 'Founder & CEO',
    organization: 'TechStartup Solutions',
    testimonial_text:
      'We hired Harshal as a freelance developer to build our SaaS dashboard, and he exceeded all expectations. He delivered a production-ready application 2 weeks ahead of schedule with clean, maintainable code. His expertise in React and Node.js is evident, and he proactively suggested performance optimizations that reduced our API response times by 70%. Beyond technical skills, Harshal communicates exceptionally well and truly understands business requirements. We\'ve already contracted him for two additional projects and would highly recommend him to anyone seeking a talented full-stack developer.',
    rating: 5,
    relationship: 'Client',
    date_given: '2024-04-20',
    is_featured: true,
    display_order: 2,
  },
  {
    id: 'test3',
    name: 'Amit Verma',
    designation: 'Quantitative Analyst',
    organization: 'Alpha Capital Markets',
    testimonial_text:
      'Harshal interned with our quantitative trading desk for 4 months and made significant contributions despite being a student. He developed multiple algorithmic trading strategies that performed well in backtesting, with one strategy achieving 22% annualized returns. His Python and statistical skills are strong, and he quickly learned to use our proprietary trading platform. What impressed me most was his intellectual curiosity - he would stay late reading academic papers on quantitative finance and asking insightful questions. Harshal has the analytical mindset and technical skills to excel in quantitative finance, and I would welcome the opportunity to work with him again.',
    rating: 5,
    relationship: 'Mentor',
    date_given: '2024-05-05',
    is_featured: false,
    display_order: 3,
  },
]

// ============================================================================
// COURSEWORK (5)
// ============================================================================

export const PLACEHOLDER_COURSEWORK: Coursework[] = [
  {
    id: 'course1',
    course_name: 'Data Structures and Algorithms',
    institution: 'University',
    category: 'Engineering',
    grade: 'A+',
    credit_hours: 4,
    semester: 'Fall 2022',
    year: 2022,
    skills_learned: [
      'Data Structures',
      'Algorithms',
      'Complexity Analysis',
      'Problem Solving',
    ],
    description:
      'Comprehensive course covering fundamental data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, dynamic programming). Implemented all data structures from scratch in C++ and Java.',
    display_order: 1,
  },
  {
    id: 'course2',
    course_name: 'Database Management Systems',
    institution: 'University',
    category: 'Engineering',
    grade: 'A',
    credit_hours: 3,
    semester: 'Spring 2023',
    year: 2023,
    skills_learned: [
      'SQL',
      'Database Design',
      'Normalization',
      'Transactions',
      'NoSQL',
    ],
    description:
      'In-depth study of relational databases, SQL, indexing, query optimization, and transaction management. Final project: Built a complete e-commerce database with complex queries and stored procedures.',
    display_order: 2,
  },
  {
    id: 'course3',
    course_name: 'Machine Learning',
    institution: 'University',
    category: 'Engineering',
    grade: 'A+',
    credit_hours: 4,
    semester: 'Fall 2023',
    year: 2023,
    skills_learned: [
      'Machine Learning',
      'Supervised Learning',
      'Unsupervised Learning',
      'Neural Networks',
    ],
    description:
      'Graduate-level ML course covering classical algorithms and deep learning. Implemented algorithms from scratch in Python. Final project: Stock price prediction using LSTM networks.',
    display_order: 3,
  },
  {
    id: 'course4',
    course_name: 'Financial Management',
    institution: 'University',
    category: 'Finance',
    grade: 'A',
    credit_hours: 3,
    semester: 'Spring 2024',
    year: 2024,
    skills_learned: [
      'Corporate Finance',
      'Financial Analysis',
      'Valuation',
      'Capital Budgeting',
    ],
    description:
      'Core finance course covering time value of money, capital budgeting, cost of capital, and corporate valuation. Completed case studies on real companies and DCF valuations.',
    display_order: 4,
  },
  {
    id: 'course5',
    course_name: 'Blockchain Technology and Applications',
    institution: 'University',
    category: 'Engineering',
    grade: 'A+',
    credit_hours: 3,
    semester: 'Spring 2024',
    year: 2024,
    skills_learned: [
      'Blockchain',
      'Smart Contracts',
      'Solidity',
      'Web3',
      'DeFi',
    ],
    description:
      'Elective course on blockchain fundamentals, smart contract development, and decentralized applications. Built NFT marketplace and DeFi protocol as final project.',
    display_order: 5,
  },
]

// ============================================================================
// TIMELINE EVENTS (Sample - auto-generated from other data)
// ============================================================================

export const generateTimelineEvents = (): TimelineEvent[] => {
  // This would typically combine data from experiences, education, certifications, etc.
  // For now, returning sample timeline
  return [
    {
      id: 'timeline1',
      title: 'Started University - Computer Science',
      event_type: 'Education',
      description: 'Began Bachelor of Technology in Computer Science',
      date: '2021-08-01',
      icon: 'graduation',
      color: '#0066CC',
      display_order: 1,
    },
    {
      id: 'timeline2',
      title: 'First Hackathon Win - Smart India Hackathon',
      event_type: 'Achievement',
      description: 'Won national hackathon with EcoTracker project',
      date: '2023-10-15',
      icon: 'trophy',
      color: '#FFD700',
      display_order: 2,
    },
    {
      id: 'timeline3',
      title: 'Software Engineering Intern - TechCorp',
      event_type: 'Work',
      description: 'Summer internship in full-stack development',
      date: '2023-06-01',
      icon: 'briefcase',
      color: '#00FF00',
      display_order: 3,
    },
    // More events would be dynamically generated from actual data
  ]
}

// Export all final placeholder data
export const MOCK_FINAL_DATA = {
  competitions: PLACEHOLDER_COMPETITIONS,
  research: PLACEHOLDER_RESEARCH,
  financial_analyses: PLACEHOLDER_FINANCIAL_ANALYSES,
  blog_posts: PLACEHOLDER_BLOG_POSTS,
  testimonials: PLACEHOLDER_TESTIMONIALS,
  coursework: PLACEHOLDER_COURSEWORK,
  timeline: generateTimelineEvents(),
}
