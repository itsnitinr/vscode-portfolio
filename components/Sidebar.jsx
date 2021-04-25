import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <Link href="/">
          <div
            className={`${styles.iconContainer} ${
              router.pathname === '/' && styles.active
            }`}
          >
            <FilesIcon fill="rgb(225, 228, 232)" className={styles.icon} />
          </div>
        </Link>
        <Link href="/github">
          <div
            className={`${styles.iconContainer} ${
              router.pathname === '/github' && styles.active
            }`}
          >
            <GithubIcon fill="rgb(106, 115, 125)" className={styles.icon} />
          </div>
        </Link>
        <Link href="/projects">
          <div
            className={`${styles.iconContainer} ${
              router.pathname === '/projects' && styles.active
            }`}
          >
            <CodeIcon fill="rgb(106, 115, 125)" className={styles.icon} />
          </div>
        </Link>
        <Link href="/articles">
          <div
            className={`${styles.iconContainer} ${
              router.pathname === '/articles' && styles.active
            }`}
          >
            <PencilIcon fill="rgb(106, 115, 125)" className={styles.icon} />
          </div>
        </Link>
      </div>
      <div className={styles.sidebarBottom}>
        <div className={styles.iconContainer}>
          <Link href="/about">
            <AccountIcon fill="rgb(106, 115, 125)" className={styles.icon} />
          </Link>
          <SettingsIcon fill="rgb(106, 115, 125)" className={styles.icon} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
