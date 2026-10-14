import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';

import { profile, getSocial } from '@/portfolio.config';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  const github = getSocial('github');

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Hello, I&apos;m</p>
            
            <h1 className={styles.name}>{profile.name}</h1>
            
            <p className={styles.role}>{profile.role}</p>
            
            <div className={styles.divider} />
            
            <p className={styles.description}>{profile.intro}</p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>View Projects</span>
              <VscArrowRight size={18} />
            </Link>
            
            <Link href="/about" className={styles.secondaryAction}>
              <span>Learn More</span>
            </Link>
          </div>

          <div className={styles.links}>
            {github && (
              <>
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <VscGithub size={16} />
                  <span>GitHub</span>
                </a>

                <span className={styles.linkSeparator}>/</span>
              </>
            )}

            <Link href="/contact" className={styles.link}>
              <VscMail size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
