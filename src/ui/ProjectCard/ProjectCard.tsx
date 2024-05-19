import Image from 'next/image'
import styles from '@/styles/ProjectCard.module.css'

type ProjectCardProps = {
  project: {
    id: number
    name: string
    description: string
    image: string
    tags: string[]
    source_code?: string
    demo: string
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <Image src={project.image} height={300} width={600} alt={project.name} />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          <a
            href={project.demo}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.underline}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
