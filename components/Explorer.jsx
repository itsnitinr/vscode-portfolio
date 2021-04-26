import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';
import styles from '../styles/Explorer.module.css';

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          <Link href="/">
            <div className={styles.file}>
              <Image
                src="/react_icon.svg"
                alt="React Icon"
                height={18}
                width={18}
              />{' '}
              <p>home.jsx</p>
            </div>
          </Link>
          <Link href="/about">
            <div className={styles.file}>
              <Image
                src="/html_icon.svg"
                alt="HTML Icon"
                height={18}
                width={18}
              />{' '}
              <p>about.html</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.file}>
              <Image
                src="/css_icon.svg"
                alt="CSS Icon"
                height={18}
                width={18}
              />{' '}
              <p>contact.css</p>
            </div>
          </Link>
          <Link href="/projects">
            <div className={styles.file}>
              <Image
                src="/js_icon.svg"
                alt="JavaScript Icon"
                height={18}
                width={18}
              />{' '}
              <p>projects.js</p>
            </div>
          </Link>
          <Link href="/articles">
            <div className={styles.file}>
              <Image
                src="/json_icon.svg"
                alt="JSON Icon"
                height={18}
                width={18}
              />{' '}
              <p>articles.json</p>
            </div>
          </Link>
          <Link href="/github">
            <div className={styles.file}>
              <Image
                src="/markdown_icon.svg"
                alt="Markdown Icon"
                height={18}
                width={18}
              />{' '}
              <p>github.md</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
