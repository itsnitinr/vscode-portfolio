import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscGithubAlt, VscRepo, VscPerson, VscCode } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';

import styles from '@/styles/GithubPage.module.css';

import { Repo, User } from '../types';

interface GithubPageProps {
  repos: Repo[];
  user: User;
}

const GithubPage = ({ repos, user }: GithubPageProps) => {
  return (
    <div className={styles.githubPage}>
      <div className={styles.profileSection}>
        <div className={styles.profileInfo}>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={100}
            height={100}
            priority
          />
          <div className={styles.userInfo}>
            <h2 className={styles.username}>{user.login}</h2>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <VscRepo className={styles.statIcon} />
                <span>{user.public_repos} repositories</span>
              </div>
              <div className={styles.statItem}>
                <VscPerson className={styles.statIcon} />
                <span>{user.followers} followers</span>
              </div>
            </div>
            <a
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              <VscGithubAlt />
              <span>View Profile</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.sectionHeader}>
        <VscCode className={styles.sectionIcon} />
        <h3 className={styles.sectionTitle}>Popular Repositories</h3>
      </div>
      <div className={styles.reposContainer}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>

      <div className={styles.sectionHeader}>
        <VscGithubAlt className={styles.sectionIcon} />
        <h3 className={styles.sectionTitle}>Contribution Activity</h3>
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
          hideColorLegend
          hideMonthLabels
          colorScheme="dark"
          theme={{
            dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
          }}
          style={{
            width: '100%',
          }}
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user = (await userRes.json()) as User;

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  let repos = (await repoRes.json()) as Repo[];
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}

export default GithubPage;
