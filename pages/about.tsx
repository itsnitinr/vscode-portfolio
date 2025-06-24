import Image from 'next/image';
import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profileSection}>
          <Image
            src="/jeff-k-photo.png"
            alt="Jeff K"
            width={200}
            height={200}
            className={styles.profileImage}
            priority
          />
          <div>
            <h1 className={styles.title}>Jeff K</h1>
            <div className={styles.subtitle}>Software Engineer</div>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m Jeff K, a passionate software engineer specializing in
              full-stack development with a focus on creating innovative web applications.
            </p>
            <p className={styles.paragraph}>
              I work with modern technologies including React, Next.js, TypeScript,
              Node.js, and various databases to build scalable and performant applications.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              I&apos;m passionate about clean code, best practices, and creating
              exceptional user experiences. My expertise spans across the entire
              development stack.
            </p>
            <p className={styles.paragraph}>
              I enjoy tackling complex problems and turning ideas into reality
              through code. Always eager to learn new technologies and improve
              my craft.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
            <p className={styles.paragraph}>
              My technical toolkit includes{' '}
              <span className={styles.highlight}>React</span>,{' '}
              <span className={styles.highlight}>Next.js</span>,{' '}
              <span className={styles.highlight}>TypeScript</span>,{' '}
              <span className={styles.highlight}>Node.js</span>, and more.
              I&apos;m always exploring new technologies to stay current in the
              rapidly evolving tech landscape.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open source projects, or enjoying the great outdoors.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
