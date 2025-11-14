/**
 * Centralized Placeholder Data Export
 * Import all mock/placeholder data from single location
 */

export * from './placeholder'
export * from './placeholder-extended'
export * from './placeholder-final'

import { MOCK_DATA } from './placeholder'
import { MOCK_EXTENDED_DATA } from './placeholder-extended'
import { MOCK_FINAL_DATA } from './placeholder-final'

// Combine all placeholder data
export const PLACEHOLDER_DATA = {
  ...MOCK_DATA,
  ...MOCK_EXTENDED_DATA,
  ...MOCK_FINAL_DATA,
}

// Summary of placeholder content
export const PLACEHOLDER_SUMMARY = {
  projects: 15, // 3 college, 3 personal, 3 hackathon, 3 learning, 3 finance
  skills: 30,
  experiences: 8, // 2 internships, 2 freelance, 2 part-time, 2 clubs
  volunteering: 12, // 3 NGO, 3 events, 3 teaching, 3 community
  certifications: 15, // 3 online, 3 hackathon, 3 academic, 3 finance, 3 leadership
  competitions: 7, // 5 national, 2 international
  research_papers: 2,
  financial_analyses: 2,
  blog_posts: 3,
  testimonials: 3,
  coursework: 5,
}
