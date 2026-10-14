import { Metadata } from 'next';
import { VscFolderOpened, VscGithub, VscLinkExternal } from 'react-icons/vsc';

import ProjectCard from '@/components/ProjectCard';
import { projects, getSocial } from '@/portfolio.config';

import styles from '@/styles/ProjectsPage.module.css';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage = () => {
  const totalProjects = projects.length;
  const github = getSocial('github');

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.iconWrapper}>
              <VscFolderOpened className={styles.icon} size={24} />
            </div>
            <div className={styles.meta}>
              <span className={styles.count}>{totalProjects} Projects</span>
            </div>
          </div>
          
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Featured Work</h1>
            <p className={styles.subtitle}>
              A curated collection of projects I&apos;ve built. Each represents 
              a unique challenge and learning experience.
            </p>
          </div>
        </header>

        <div className={styles.timeline}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project}
              index={index + 1}
            />
          ))}
        </div>

        {github && (
          <footer className={styles.footer}>
            <div className={styles.footerLine} />
            <a
              href={`${github.href}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <VscGithub size={18} />
              <span>Explore more on GitHub</span>
              <VscLinkExternal size={14} />
            </a>
          </footer>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
