/**
 * GitHub REST API Integration
 * Fetches user profile, repositories, and statistics
 */

import type { GitHubStats, LanguageStats } from '@/types/database'

const GITHUB_API_BASE = 'https://api.github.com'
const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'HarshalJain-cs'

/**
 * Fetch comprehensive GitHub user statistics
 */
export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    // Fetch user profile
    const userResponse = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!userResponse.ok) {
      throw new Error('Failed to fetch GitHub user')
    }

    const user = await userResponse.json()

    // Fetch repositories
    const reposResponse = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 },
      }
    )

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repositories')
    }

    const repos = await reposResponse.json()

    // Calculate total stars
    const total_stars = repos.reduce(
      (sum: number, repo: any) => sum + repo.stargazers_count,
      0
    )

    // Get language statistics
    const most_used_languages = await calculateLanguageStats(repos)

    // Calculate account age
    const accountCreatedDate = new Date(user.created_at)
    const now = new Date()
    const account_age_days = Math.floor(
      (now.getTime() - accountCreatedDate.getTime()) / (1000 * 60 * 60 * 24)
    )

    return {
      username: user.login,
      name: user.name || user.login,
      avatar_url: user.avatar_url,
      bio: user.bio,
      public_repos: user.public_repos,
      followers: user.followers,
      following: user.following,
      total_stars,
      total_commits: 0, // Would need GitHub GraphQL API for accurate commit count
      account_age_days,
      most_used_languages,
    }
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    return getFallbackGitHubStats()
  }
}

/**
 * Calculate language statistics from repositories
 */
async function calculateLanguageStats(
  repos: any[]
): Promise<LanguageStats[]> {
  try {
    const languageCounts: Record<string, number> = {}

    // Aggregate language usage across all repos
    repos.forEach(repo => {
      if (repo.language) {
        languageCounts[repo.language] =
          (languageCounts[repo.language] || 0) + 1
      }
    })

    // Convert to array and calculate percentages
    const total = Object.values(languageCounts).reduce(
      (sum, count) => sum + count,
      0
    )
    const languageStats = Object.entries(languageCounts)
      .map(([language, count]) => ({
        language,
        percentage: Math.round((count / total) * 100),
        color: getLanguageColor(language),
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5) // Top 5 languages

    return languageStats
  } catch (error) {
    console.error('Error calculating language stats:', error)
    return []
  }
}

/**
 * Get color for programming language
 */
function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    Go: '#00ADD8',
    Rust: '#dea584',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
  }

  return colors[language] || '#cccccc'
}

/**
 * Fetch user's contribution graph data
 */
export async function fetchContributionGraph(): Promise<any> {
  // This would require GitHub GraphQL API
  // For now, returning placeholder
  return {
    totalContributions: 1250,
    weeks: [], // Would contain weekly contribution data
  }
}

/**
 * Fetch pinned repositories
 */
export async function fetchPinnedRepos(): Promise<any[]> {
  try {
    // GitHub REST API doesn't support pinned repos directly
    // Fallback to most starred repos
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?per_page=6&sort=stars`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch repos')
    }

    const repos = await response.json()

    return repos.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      url: repo.html_url,
    }))
  } catch (error) {
    console.error('Error fetching pinned repos:', error)
    return []
  }
}

/**
 * Fallback GitHub stats when API fails
 */
function getFallbackGitHubStats(): GitHubStats {
  return {
    username: 'HarshalJain-cs',
    name: 'Harshal Jain',
    avatar_url: '/images/placeholder-avatar.png',
    bio: 'Engineering student with finance expertise',
    public_repos: 25,
    followers: 150,
    following: 80,
    total_stars: 500,
    total_commits: 1250,
    account_age_days: 1095, // ~3 years
    most_used_languages: [
      { language: 'JavaScript', percentage: 35, color: '#f1e05a' },
      { language: 'TypeScript', percentage: 25, color: '#3178c6' },
      { language: 'Python', percentage: 20, color: '#3572A5' },
      { language: 'Java', percentage: 12, color: '#b07219' },
      { language: 'C++', percentage: 8, color: '#f34b7d' },
    ],
  }
}

/**
 * Format numbers for display (1.2K, 3.5M, etc.)
 */
export function formatGitHubNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
  return num.toString()
}
