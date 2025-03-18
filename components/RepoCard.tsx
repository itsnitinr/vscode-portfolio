import {
  VscEye,
  VscRepoForked,
  VscStarEmpty,
  VscGithub,
  VscLink,
} from 'react-icons/vsc';

import styles from '../styles/RepoCard.module.css';

interface RepoCardProps {
  repo: {
    name: string;
    description: string;
    watchers: number;
    forks: number;
    stargazers_count: number;
    html_url: string;
    homepage: string;
  };
}

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{repo.name}</h3>
        <p>{repo.description}</p>
      </div>
      <div className={styles.stats}>
        <div>
          <div>
            <VscEye className={styles.icon} /> {repo.watchers}
          </div>
          <div>
            <VscRepoForked className={styles.icon} /> {repo.forks}
          </div>
          <div>
            <VscStarEmpty className={styles.icon} /> {repo.stargazers_count}
          </div>
        </div>
        <div>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <VscGithub height={20} width={20} className={styles.icon} />
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              <VscLink height={20} width={20} className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
