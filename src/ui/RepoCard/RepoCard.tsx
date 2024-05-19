import WatchIcon from '@/ui/icons/WatchIcon'
import ForkIcon from '@/ui/icons/ForkIcon'
import StarIcon from '@/ui/icons/StarIcon'
import GithubIcon from '@/ui/icons/GithubIcon'
import LinkIcon from '@/ui/icons/LinkIcon'
import styles from '@/styles/RepoCard.module.css'

type RepoCardProps = {
  repo: {
    name: string
    description: string
    watchers: number
    forks: number
    stargazers_count: number
    html_url: string
    homepage?: string
  }
}

function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{repo.name}</h3>
        <p>{repo.description}</p>
      </div>
      <div className={styles.stats}>
        <div>
          <div>
            <WatchIcon className={styles.icon} /> {repo.watchers}
          </div>
          <div>
            <ForkIcon className={styles.icon} /> {repo.forks}
          </div>
          <div>
            <StarIcon className={styles.icon} /> {repo.stargazers_count}
          </div>
        </div>
        <div>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
            <GithubIcon height={20} width={20} className={styles.icon} />
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target='_blank' rel='noopener noreferrer'>
              <LinkIcon height={20} width={20} className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default RepoCard
