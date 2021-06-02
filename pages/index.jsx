import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>WEB & APP</h1>
          <h1>DEVELOPER</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Nitin Ranganath</h1>
            <h6 className={styles.bio}>Full Stack Developer</h6>
            <button className={styles.button}>View Work</button>
            <button className={styles.outlined}>Contact Me</button>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
