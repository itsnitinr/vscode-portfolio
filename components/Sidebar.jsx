import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
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
            <FilesIcon
              fill={
                router.pathname === '/'
                  ? 'rgb(225, 228, 232)'
                  : 'rgb(106, 115, 125)'
              }
              className={styles.icon}
            />
          </div>
        </Link>
        <Link href="/github">
          <div
            className={`${styles.iconContainer} ${
              router.pathname === '/github' && styles.active
            }`}
          >
            <GithubIcon
              fill={
                router.pathname === '/github'
                  ? 'rgb(225, 228, 232)'
                  : 'rgb(106, 115, 125)'
              }
              className={styles.icon}
            />
          </div>
        </Link>
        <Link href="/projects">
          <div
            className={`${styles.iconContainer} ${
              router.pathname === '/projects' && styles.active
            }`}
          >
            <CodeIcon
              fill={
                router.pathname === '/projects'
                  ? 'rgb(225, 228, 232)'
                  : 'rgb(106, 115, 125)'
              }
              className={styles.icon}
            />
          </div>
        </Link>
        <Link href="/articles">
          <div
            className={`${styles.iconContainer} ${
              router.pathname === '/articles' && styles.active
            }`}
          >
            <PencilIcon
              fill={
                router.pathname === '/articles'
                  ? 'rgb(225, 228, 232)'
                  : 'rgb(106, 115, 125)'
              }
              className={styles.icon}
            />
          </div>
        </Link>
        <Link href="/contact">
          <div
            className={`${styles.iconContainer} ${
              router.pathname === '/contact' && styles.active
            }`}
          >
            <MailIcon
              fill={
                router.pathname === '/contact'
                  ? 'rgb(225, 228, 232)'
                  : 'rgb(106, 115, 125)'
              }
              className={styles.icon}
            />
          </div>
        </Link>
      </div>
      <div className={styles.sidebarBottom}>
        <div className={styles.iconContainer}>
          <Link href="/about">
            <>
              <AccountIcon
                fill={
                  router.pathname === '/about'
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </>
          </Link>
        </div>
        <div className={styles.iconContainer}>
          <Link href="/settings">
            <>
              <SettingsIcon fill="rgb(106, 115, 125)" className={styles.icon} />
            </>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
