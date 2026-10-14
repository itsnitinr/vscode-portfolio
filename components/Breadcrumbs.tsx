'use client';

import { usePathname } from 'next/navigation';
import { VscChevronRight } from 'react-icons/vsc';

import FileIcon, { getTabTitle } from '@/components/FileIcon';
import { getRoute } from '@/lib/editorTabs';

import styles from '@/styles/Breadcrumbs.module.css';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const route = getRoute(pathname);

  if (!route) return null;

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      {route.file && (
        <>
          <span className={styles.crumb}>portfolio</span>
          <VscChevronRight className={styles.separator} aria-hidden />
        </>
      )}
      <span className={styles.crumb} aria-current="page">
        <FileIcon route={route} size={14} />
        {getTabTitle(route)}
      </span>
    </nav>
  );
};

export default Breadcrumbs;
