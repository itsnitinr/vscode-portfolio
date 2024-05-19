import Image from 'next/image'
import GitHubCalendar from 'react-github-calendar'
import RepoCard from '@/ui/RepoCard'
import styles from './GithubPage.module.css'
import type { Metadata } from 'next'

async function Page() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`
      }
    }
  )
  const user = await userRes.json()

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`
      }
    }
  )
  let repos: Array<{
    id: number
    name: string
    description: string
    watchers: number
    forks: number
    stargazers_count: number
    html_url: string
    homepage: string | null
  }> = await repoRes.json()

  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)

  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353'
  }

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  )
}

export const metadata: Metadata = {
  title: 'GitHub'
}

export default Page
