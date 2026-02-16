'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

import Titlebar from '@/components/Titlebar';
import Sidebar from '@/components/Sidebar';
import Explorer from '@/components/Explorer';
import Bottombar from '@/components/Bottombar';
import Tabsbar from '@/components/Tabsbar';

import styles from '@/styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) {
      main.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
