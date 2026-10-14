'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';

import FileIcon from '@/components/FileIcon';
import { openTab, pinTab, useEditorTabs } from '@/lib/editorTabs';
import { fileRoutes } from '@/portfolio.config';

import styles from '@/styles/Explorer.module.css';

const Explorer = ({ hidden = false }: { hidden?: boolean }) => {
  const pathname = usePathname();
  const { tabs, hydrated } = useEditorTabs();
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  // Only highlight the current file while its tab is open
  const activePath =
    !hydrated || tabs.some(tab => tab.path === pathname) ? pathname : null;

  return (
    <div className={styles.explorer} hidden={hidden}>
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
          <VscChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {fileRoutes.map(route => (
            <Link
              href={route.path}
              key={route.path}
              className={`${styles.file} ${
                route.path === activePath ? styles.activeFile : ''
              }`}
              // Single click previews the file, double click keeps it open
              onClick={() => openTab(route.path, { after: pathname })}
              onDoubleClick={() => pinTab(route.path)}
            >
              <FileIcon route={route} />
              <p>{route.file.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
