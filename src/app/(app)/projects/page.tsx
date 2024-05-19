import ProjectCard from '@/ui/ProjectCard'
import { getProjects } from '../../api/projects/route'
import styles from '@/styles/ProjectsPage.module.css'

function Page() {
  const projects = getProjects()

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}

export default Page
