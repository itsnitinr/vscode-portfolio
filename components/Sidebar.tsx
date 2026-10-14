'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { IconType } from 'react-icons';
import { VscExtensions, VscFiles } from 'react-icons/vsc';

import { openTab } from '@/lib/editorTabs';
import { routes } from '@/portfolio.config';

import styles from '@/styles/Sidebar.module.css';

export type SidePanel = 'explorer' | 'extensions';

const panels: Record<SidePanel, { icon: IconType; label: string; shortcut: string }> = {
  explorer: { icon: VscFiles, label: 'Explorer', shortcut: 'Ctrl+Shift+E' },
  extensions: { icon: VscExtensions, label: 'Extensions', shortcut: 'Ctrl+Shift+X' },
};

const sidebarTopItems = routes.filter(route => route.activityBar === 'top');
const sidebarBottomItems = routes.filter(
  route => route.activityBar === 'bottom'
);

interface SidebarProps {
  activePanel: SidePanel | null;
  onPanelSelect: (panel: SidePanel) => void;
}

const Sidebar = ({ activePanel, onPanelSelect }: SidebarProps) => {
  const pathname = usePathname();

  const renderPanelButton = (panel: SidePanel) => {
    const { icon: Icon, label, shortcut } = panels[panel];
    const isActive = activePanel === panel;

    return (
      <button
        type="button"
        className={`${styles.iconContainer} ${styles.panelButton} ${
          isActive ? styles.active : ''
        }`}
        onClick={() => onPanelSelect(panel)}
        aria-label={label}
        aria-pressed={isActive}
        title={`${label} (${shortcut})`}
      >
        <Icon size={16} className={styles.icon} />
      </button>
    );
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {renderPanelButton('explorer')}
        {sidebarTopItems.map(({ icon: Icon, path, label }) => (
          <Link
            href={path}
            key={path}
            aria-label={label}
            title={label}
            aria-current={pathname === path ? 'page' : undefined}
            onClick={() => openTab(path, { after: pathname })}
          >
            <div className={styles.iconContainer}>
              <Icon size={16} className={styles.icon} />
            </div>
          </Link>
        ))}
        {renderPanelButton('extensions')}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ icon: Icon, path, label }) => (
          <div className={styles.iconContainer} key={path}>
            <Link
              href={path}
              aria-label={label}
              title={label}
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
