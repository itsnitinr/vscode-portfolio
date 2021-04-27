import Link from 'next/link';
import Head from '../components/Head';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <Head title="Nitin Ranganath | Home" />
      <div className={styles.container}>
        <h6 className={styles.welcome}>Hey there, geeks! I am</h6>
        <h1 className={styles.title}>Nitin Ranganath</h1>
        <h3 className={styles.subtitle}>&lt;!-- Web Developer --&gt;</h3>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.contained}>What Can I Do?</button>
          </Link>
          <Link href="/contact">
            <button className={styles.outlined}>React Out to Me</button>
          </Link>
        </div>
      </div>
    </>
  );
}
