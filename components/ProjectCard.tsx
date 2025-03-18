import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: {
    thumbnail: string;
    name: string;
    description: string;
    tags: string[];
    githubLink: string;
    demoLink: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={project.thumbnail}
        height={300}
        width={600}
        alt={project.name}
      />
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
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
