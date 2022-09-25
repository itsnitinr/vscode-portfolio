import Link from 'next/link';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Daniel Custódio</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <Link href="/projects">
              <button className={styles.button}>Veja meus projeto</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contato</button>
            </Link>
          </div>
          <img src="background.svg"  className={styles.illustration} alt="" />
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
