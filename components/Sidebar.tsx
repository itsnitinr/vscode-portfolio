'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { IconType } from 'react-icons';
import { VscExtensions, VscFiles } from 'react-icons/vsc';

import { EXTENSION_PATH_PREFIX, openTab } from '@/lib/editorTabs';
import { routes, type Route } from '@/portfolio.config';

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
  activePath: string | null;
  activePanel: SidePanel | null;
  onPanelSelect: (panel: SidePanel) => void;
}

const Sidebar = ({ activePath, activePanel, onPanelSelect }: SidebarProps) => {
  const pathname = usePathname();

  const renderPanelButton = (panel: SidePanel) => {
    const { icon: Icon, label, shortcut } = panels[panel];
    const isActive = activePanel === panel;
    const isCurrentPage =
      panel === 'extensions' && activePath?.startsWith(EXTENSION_PATH_PREFIX);

    return (
      <button
        type="button"
        className={styles.iconContainer}
        onClick={() => onPanelSelect(panel)}
        aria-label={label}
        aria-pressed={isActive}
        aria-current={isCurrentPage ? 'page' : undefined}
        title={`${label} (${shortcut})`}
      >
        <Icon size={16} className={styles.icon} />
      </button>
    );
  };

  const renderRouteLink = ({ icon: Icon, path, label }: Route) => (
    <Link
      href={path}
      key={path}
      className={styles.iconContainer}
      aria-label={label}
      title={label}
      aria-current={activePath === path ? 'page' : undefined}
      onNavigate={() => openTab(path, { after: pathname })}
    >
      <Icon size={16} className={styles.icon} />
    </Link>
  );

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(renderRouteLink)}
        {renderPanelButton('extensions')}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(renderRouteLink)}
      </div>
    </aside>
  );
};

export default Sidebar;
