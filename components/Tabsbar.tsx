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

  // Saved tabs are only readable on the client, so the server renders just
  // the current page's tab
  const visibleTabs = hydrated ? tabs : [{ path: pathname, preview: false }];

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
