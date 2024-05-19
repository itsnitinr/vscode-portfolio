import styles from './AboutPage.module.css'
import type { Metadata } from 'next'

function Page() {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <div className={styles.content}>
        <p>
          I am a Software Engineer in contact with programming for over 10 years
          and graduated in Systems Analysis and Development from Instituto
          Federal Baiano - Campus Guanambi.
        </p>
        <p>
          I worked on the development of an important solution, the ROP-E
          (Police Occurrences Record - Electronic), a strategic platform for
          managing and controlling records for the Military Police of the State
          of Bahia, which initially had more than 200 users.
        </p>
        <p>Some of the technologies and tools I've worked with:</p>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>React Query, Redux, Jest, React Testing Library</li>
          <li>Django, Django Rest Framework</li>
          <li>Pandas</li>
          <li>Docker, Kubernetes</li>
          <li>Webpack, SASS</li>
          <li>PostgreSQL, MySQL, SQLite, MongoDB, GraphQL</li>
          <li>API, API REST, RESTful</li>
          <li>Scrum, Kanban</li>
          <li>AWS (S3, EC2, VPC, SES, Elastic IP, Route 53), Google Cloud</li>
          <li>Heroku</li>
          <li>Git, GitHub, GitLab, BitBucket</li>
          <li>Test Driven Development (TDD)</li>
        </ul>
      </div>
    </>
  )
}

export const metadata: Metadata = {
  title: 'About'
}

export default Page
