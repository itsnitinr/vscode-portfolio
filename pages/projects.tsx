import ProjectCard from '@/components/ProjectCard';

import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <>
      <h3>Stuff I&apos;ve Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
