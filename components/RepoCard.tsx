import {
  VscEye,
  VscRepoForked,
  VscStarEmpty,
  VscGithubAlt,
  VscLinkExternal,
  VscTypeHierarchy,
} from 'react-icons/vsc';

import { Repo } from '@/types';

import styles from '@/styles/RepoCard.module.css';

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{repo.name}</h3>
        {repo.language && (
          <div className={styles.language}>
            <VscTypeHierarchy className={styles.languageIcon} />
            <span>{repo.language}</span>
          </div>
        )}
      </div>
      <p>{repo.description || 'No description provided'}</p>
      <div className={styles.stats}>
        <div>
          <div>
            <VscStarEmpty className={styles.icon} />
            {repo.stargazers_count}
          </div>
          <div>
            <VscRepoForked className={styles.icon} />
            {repo.forks}
          </div>
          <div>
            <VscEye className={styles.icon} />
            {repo.watchers}
          </div>
        </div>
        <div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title="View Repository"
          >
            <VscGithubAlt className={styles.icon} />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Live Site"
            >
              <VscLinkExternal className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
