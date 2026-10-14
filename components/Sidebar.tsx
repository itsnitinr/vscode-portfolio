'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { openTab } from '@/lib/editorTabs';
import { routes } from '@/portfolio.config';

import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = routes.filter(route => route.activityBar === 'top');
const sidebarBottomItems = routes.filter(
  route => route.activityBar === 'bottom'
);

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ icon: Icon, path, label }) => (
          <Link
            href={path}
            key={path}
            aria-label={label}
            aria-current={pathname === path ? 'page' : undefined}
            onClick={() => openTab(path, { after: pathname })}
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
        {sidebarBottomItems.map(({ icon: Icon, path, label }) => (
          <div className={styles.iconContainer} key={path}>
            <Link
              href={path}
              aria-label={label}
              aria-current={pathname === path ? 'page' : undefined}
              onClick={() => openTab(path, { after: pathname })}
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
