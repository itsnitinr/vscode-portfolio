import React from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import GitHubCalendar from 'react-github-calendar';

import RepoCard from '../components/RepoCard';
import { FETCH_CONFIG } from '../constants/config';

import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ entities }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  const reposLength = Number(process.env.NEXT_PUBLIC_GITHUB_REPOS_LENGTH);
  const { t } = useTranslation('github');

  return (
    <>
      {entities.map(({ user, repos }) => (
        <React.Fragment key={user.id}>
          <div className={styles.user}>
            <div>
              <Image src={user.avatar_url} className={styles.avatar} alt={user.login} width={50} height={50} />
              <h3 className={styles.username}>{user.login}</h3>
            </div>
            <div>
              <h3>{user.public_repos} repos</h3>
            </div>
            <div>
              <h3>{user.followers} followers</h3>
            </div>
          </div>
          <h2>{t('latest-repos', { count: repos.length })}</h2>
          <div className={styles.container}>
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
          <div className={styles.contributions}>
            <GitHubCalendar username={user.login} theme={theme} hideColorLegend />
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const names = process.env.NEXT_PUBLIC_GITHUB_USERNAME.split(' ');

  try {
    const entities = await Promise.all(
      names.map(async (name) => {
        const all = await Promise.all([fetch(`https://api.github.com/users/${name}`, FETCH_CONFIG), fetch(`https://api.github.com/users/${name}/repos?sort=created_at&per_page=${process.env.NEXT_PUBLIC_GITHUB_REPOS_LENGTH}`, FETCH_CONFIG)]);

        const entity = {
          user: await all[0].json(),
          repos: await all[1].json(),
        };

        return entity;
      })
    );

    return {
      props: { title: 'Github', entities },
    };
  } catch (err) {
    return { props: { title: 'Github', entities: [] } };
  }
}

export default GithubPage;
