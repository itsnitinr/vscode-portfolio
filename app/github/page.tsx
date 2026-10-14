import { Metadata } from 'next';
import { cacheLife } from 'next/cache';
import Image from 'next/image';
import { Suspense } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson, VscStarEmpty, VscRepoForked, VscLinkExternal, VscGithub } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

export const metadata: Metadata = {
  title: 'GitHub',
};

function githubHeaders(): HeadersInit {
  return process.env.GITHUB_API_KEY
    ? { Authorization: `Bearer ${process.env.GITHUB_API_KEY}` }
    : {};
}

async function getGithubData() {
  'use cache';

  try {
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
      { headers: githubHeaders() }
    );
    if (!userRes.ok) {
      throw new Error(`Failed to fetch user: ${userRes.status}`);
    }
    const user: User = await userRes.json();

    // Fetch every public repo so the star and fork totals cover all of them
    const allRepos: Repo[] = [];
    for (let page = 1; ; page++) {
      const repoRes = await fetch(
        `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?sort=pushed&per_page=100&page=${page}`,
        { headers: githubHeaders() }
      );
      if (!repoRes.ok) {
        throw new Error(`Failed to fetch repos: ${repoRes.status}`);
      }
      const pageRepos: Repo[] = await repoRes.json();
      allRepos.push(...pageRepos);
      if (pageRepos.length < 100) break;
    }

    cacheLife({ stale: 300, revalidate: 600, expire: 86400 });
    return {
      user,
      repos: allRepos.slice(0, 6),
      totalStars: allRepos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
      totalForks: allRepos.reduce((acc, repo) => acc + repo.forks, 0),
    };
  } catch (error) {
    console.error('Failed to fetch GitHub data:', error);
    // Cache the failure briefly so the page retries soon without hammering the API
    cacheLife('minutes');
    return null;
  }
}

export default async function GithubPage() {
  const data = await getGithubData();

  if (!data) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.error}>
            <VscGithub size={32} className={styles.errorIcon} />
            <p className={styles.errorTitle}>Couldn&apos;t load GitHub data</p>
            <p className={styles.errorText}>
              The GitHub API didn&apos;t respond as expected. Please try again
              in a few minutes.
            </p>
            <a
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              <VscGithub size={18} />
              <span>View on GitHub</span>
              <VscLinkExternal size={14} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  const { user, repos, totalStars, totalForks } = data;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.profile}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={80}
              height={80}
              priority
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>{user.login}</h1>
              <span className={styles.handle}>@{user.login}</span>
            </div>
          </div>

          <a 
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <VscGithub size={18} />
            <span>View Profile</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepo size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user.public_repos}</span>
              <span className={styles.statLabel}>Repositories</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscPerson size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user.followers}</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscStarEmpty size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{totalStars}</span>
              <span className={styles.statLabel}>Total Stars</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepoForked size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{totalForks}</span>
              <span className={styles.statLabel}>Total Forks</span>
            </div>
          </div>
        </div>

        {/* Contribution Graph */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contribution Activity</h2>
          <div className={styles.contributions}>
            {/* The calendar reads the current date, so it renders at request time */}
            <Suspense fallback={<div className={styles.calendarFallback} />}>
              <GitHubCalendar
                username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
                hideColorLegend
                hideMonthLabels
                colorScheme="dark"
                theme={{
                  dark: ['var(--calendar-empty)', 'var(--accent-color)'],
                }}
                style={{
                  width: '100%',
                }}
              />
            </Suspense>
          </div>
        </section>

        {/* Repositories */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popular Repositories</h2>
            <a 
              href={`https://github.com/${user.login}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewAll}
            >
              View All
              <VscLinkExternal size={14} />
            </a>
          </div>
          
          <div className={styles.reposGrid}>
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
