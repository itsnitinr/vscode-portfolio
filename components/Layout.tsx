'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Titlebar from '@/components/Titlebar';
import Sidebar from '@/components/Sidebar';
import Explorer from '@/components/Explorer';
import Bottombar from '@/components/Bottombar';
import Tabsbar from '@/components/Tabsbar';
import Terminal from '@/components/Terminal';
import CommandPalette from '@/components/CommandPalette';

import styles from '@/styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [chordKey, setChordKey] = useState<string | null>(null);

  const toggleTerminal = useCallback(() => {
    setIsTerminalOpen(prev => !prev);
  }, []);

  const openCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(true);
  }, []);

  const closeCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(false);
  }, []);

  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) {
      main.scrollTop = 0;
    }
  }, [pathname]);

  useEffect(() => {
    const navigationRoutes: Record<string, string> = {
      'h': '/',
      'a': '/about',
      'p': '/projects',
      'r': '/articles',
      'c': '/contact',
      'g': '/github',
      's': '/settings',
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCommandPaletteOpen) return;

      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        toggleTerminal();
        return;
      }

      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        openCommandPalette();
        return;
      }

      const key = e.key.toLowerCase();

      if (chordKey === 'g' && navigationRoutes[key]) {
        e.preventDefault();
        router.push(navigationRoutes[key]);
        setChordKey(null);
        return;
      }

      if (chordKey === 'k' && key === 't') {
        e.preventDefault();
        openCommandPalette();
        setChordKey(null);
        return;
      }

      if (key === 'g' || key === 'k') {
        e.preventDefault();
        setChordKey(key);
        setTimeout(() => setChordKey(null), 2000);
        return;
      }

      if (chordKey && key !== chordKey) {
        setChordKey(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTerminal, openCommandPalette, chordKey, router, isCommandPaletteOpen]);

  return (
    <div className={styles.layout}>
      <Titlebar onOpenCommandPalette={openCommandPalette} />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div className={styles.editorContainer}>
          <Tabsbar />
          <div className={styles.editorWithTerminal}>
            <main id="main-editor" className={styles.content}>
              {children}
            </main>
            {isTerminalOpen && <Terminal onToggle={toggleTerminal} />}
          </div>
        </div>
      </div>
      <Bottombar onTerminalToggle={toggleTerminal} isTerminalOpen={isTerminalOpen} />
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={closeCommandPalette}
        onToggleTerminal={toggleTerminal}
        isTerminalOpen={isTerminalOpen}
      />
    </div>
  );
};

export default Layout;
