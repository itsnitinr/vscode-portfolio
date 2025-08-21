import Image from 'next/image';
import styles from '@/styles/AboutPage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profileSection}>
          <Image
            src="/me.png"
            alt="John Abascal"
            width={200}
            height={200}
            className={styles.profileImage}
          />
        </div>
        
        <h1 className={styles.title}>John Abascal</h1>
        <div className={styles.subtitle}>Computer Science PhD Student at Northeastern University</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              I am a fourth-year Computer Science PhD Student at Northeastern University, where I am 
              advised by <a href="https://www.ccs.neu.edu/home/jullman/" target="_blank" rel="noopener noreferrer" className={styles.link}>Jonathan Ullman</a> and{' '}
              <a href="https://www.ccs.neu.edu/home/alina/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alina Oprea</a>. 
              I completed my B.S. in Pure Mathematics at Florida State University and conducted my 
              undergraduate honors thesis under the guidance of{' '}
              <a href="https://www.math.fsu.edu/~kercheva/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alec Kercheval</a> and{' '}
              <a href="https://www.sc.fsu.edu/people?uid=ndc08" target="_blank" rel="noopener noreferrer" className={styles.link}>Nathan Crock</a>.
            </p>
            
            <p className={styles.paragraph}>
              My primary research interest is privacy in deep learning. More broadly, I am interested 
              in both theoretical computer science and applied machine learning, including topics such 
              as differential privacy, adversarial machine learning, and the trustworthiness of machine 
              learning algorithms.
            </p>
            
            <p className={styles.paragraph}>
              I have also held industry positions in both software engineering and data science at{' '}
              <a href="https://www.intuit.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>Intuit</a> and{' '}
              <a href="https://labs.newsci.ai/" target="_blank" rel="noopener noreferrer" className={styles.link}>NewSci Labs</a>, 
              respectively. During the summers of 2023 and 2024, I was an Applied Research Intern on{' '}
              <a href="https://about.linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn&apos;s</a> Data Privacy team, 
              where I worked on empirically measuring privacy leakage in analytics and LLMs. This semester, 
              I am a Student Researcher at{' '}
              <a href="https://about.google/" target="_blank" rel="noopener noreferrer" className={styles.link}>Google</a>, 
              exploring open problems in machine unlearning 🔒
            </p>
          </section>
          
          <section className={styles.section}>
            <div className={styles.contact}>
              <p className={styles.address}>
                177 Huntington<br />
                Boston, MA 02115
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}

export default HomePage;
