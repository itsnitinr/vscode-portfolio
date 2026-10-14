'use client';

import { usePathname } from 'next/navigation';

import Tab from '@/components/Tab';
import {
  getRoute,
  moveTab,
  openTab,
  pinTab,
  useEditorActions,
  useEditorTabs,
} from '@/lib/editorTabs';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  const pathname = usePathname();
  const { tabs, hydrated } = useEditorTabs();
  const { close } = useEditorActions();

  // Render all portfolio page tabs before hydration too, so they don't flash
  // in after load. A direct extension/settings link also gets its current tab.
  const visibleTabs = hydrated || tabs.some(tab => tab.path === pathname)
    ? tabs
    : [...tabs, { path: pathname, preview: false }];

  return (
    <div className={styles.tabs} role="tablist" aria-label="Open editors">
      {visibleTabs.map(({ path, preview }) => {
        const route = getRoute(path);
        if (!route) return null;

        return (
          <Tab
            key={path}
            route={route}
            isActive={path === pathname}
            isPreview={preview}
            onOpen={() => openTab(path, { after: pathname })}
            onPin={() => pinTab(path)}
            onClose={() => close(path)}
            onMove={fromPath => moveTab(fromPath, path)}
          />
        );
      })}
    </div>
  );
};

export default Tabsbar;
