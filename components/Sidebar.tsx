'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
  VscEdit,
} from 'react-icons/vsc';

import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = [
  { Icon: VscFiles, path: '/', label: 'Home' },
  { Icon: VscGithubAlt, path: '/github', label: 'GitHub' },
  { Icon: VscCode, path: '/projects', label: 'Projects' },
  { Icon: VscEdit, path: '/articles', label: 'Articles' },
  { Icon: VscMail, path: '/contact', label: 'Contact' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: '/about', label: 'About' },
  { Icon: VscSettings, path: '/settings', label: 'Settings' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, label }) => (
          <Link
            href={path}
            key={path}
            aria-label={label}
            aria-current={pathname === path ? 'page' : undefined}
          >
            <div
              className={`${styles.iconContainer} ${
                pathname === path && styles.active
              }`}
            >
              <Icon size={16} className={styles.icon} />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path, label }) => (
          <div className={styles.iconContainer} key={path}>
            <Link
              href={path}
              aria-label={label}
              aria-current={pathname === path ? 'page' : undefined}
            >
              <Icon className={styles.icon} />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
