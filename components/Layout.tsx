'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';

import Titlebar from '@/components/Titlebar';
import Sidebar, { SidePanel } from '@/components/Sidebar';
import Explorer from '@/components/Explorer';
import ExtensionsPanel from '@/components/ExtensionsPanel';
import Bottombar from '@/components/Bottombar';
import Tabsbar from '@/components/Tabsbar';
import Terminal from '@/components/Terminal';
import CommandPalette from '@/components/CommandPalette';
import Breadcrumbs from '@/components/Breadcrumbs';
import EmptyEditor from '@/components/EmptyEditor';
import { routes } from '@/portfolio.config';
import { openTab, useEditorActions, useEditorTabs } from '@/lib/editorTabs';

import styles from '@/styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const { tabs, hydrated } = useEditorTabs();
  const editor = useEditorActions();
  const previousPathRef = useRef<string | null>(null);
  const scrollPositionsRef = useRef(new Map<string, number>());
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<SidePanel | null>('explorer');
  const lastPanelRef = useRef<SidePanel>('explorer');
  const [chordKey, setChordKey] = useState<string | null>(null);
  const chordTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleTerminal = useCallback(() => {
    setIsTerminalOpen(prev => !prev);
  }, []);

  // Selecting the visible panel again collapses the side bar, like VS Code
  const selectPanel = useCallback((panel: SidePanel) => {
    lastPanelRef.current = panel;
    setActivePanel(current => (current === panel ? null : panel));
  }, []);

  const showPanel = useCallback((panel: SidePanel) => {
    lastPanelRef.current = panel;
    setActivePanel(panel);
  }, []);

  const toggleSidebar = useCallback(() => {
    setActivePanel(current => (current ? null : lastPanelRef.current));
  }, []);

  const openCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(true);
  }, []);

  const closeCommandPalette = useCallback(() => {
    setIsCommandPaletteOpen(false);
  }, []);

  const resetChord = useCallback(() => {
    if (chordTimeoutRef.current) {
      clearTimeout(chordTimeoutRef.current);
      chordTimeoutRef.current = null;
    }
    setChordKey(null);
  }, []);

  useEffect(() => {
    return () => {
      if (chordTimeoutRef.current) {
        clearTimeout(chordTimeoutRef.current);
      }
    };
  }, []);

  // Every page you land on gets a tab, however you got there (links inside
  // pages, back/forward). The first tab of a session is opened pinned.
  useEffect(() => {
    openTab(pathname, {
      pin: previousPathRef.current === null,
      after: previousPathRef.current,
    });
    previousPathRef.current = pathname;
  }, [pathname]);

  // Each tab remembers its own scroll position
  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) {
      main.scrollTop = scrollPositionsRef.current.get(pathname) ?? 0;
    }
  }, [pathname]);

  useEffect(() => {
    const navigationRoutes = Object.fromEntries(
      routes
        .filter(route => route.shortcut)
        .map(route => [route.shortcut, route.path])
    );

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

      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyE') {
        e.preventDefault();
        showPanel('explorer');
        return;
      }

      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyX') {
        e.preventDefault();
        showPanel('extensions');
        return;
      }

      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.code === 'KeyB') {
        e.preventDefault();
        toggleSidebar();
        return;
      }

      // Ctrl+W closes the browser tab, so closing an editor uses Alt+W
      if (e.altKey && !e.ctrlKey && !e.metaKey && e.code === 'KeyW') {
        e.preventDefault();
        editor.closeActive();
        return;
      }

      // Chords are plain keys only, and never fire while the user is typing
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const target = e.target;
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          target.closest('input, textarea, select'))
      ) {
        return;
      }

      const key = e.key.toLowerCase();

      if (chordKey === 'g' && navigationRoutes[key]) {
        e.preventDefault();
        editor.open(navigationRoutes[key]);
        resetChord();
        return;
      }

      if (chordKey === 'k' && key === 't') {
        e.preventDefault();
        openCommandPalette();
        resetChord();
        return;
      }

      if (key === 'g' || key === 'k') {
        resetChord();
        setChordKey(key);
        chordTimeoutRef.current = setTimeout(resetChord, 2000);
        return;
      }

      if (chordKey && key !== chordKey) {
        resetChord();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTerminal, openCommandPalette, chordKey, editor, isCommandPaletteOpen, resetChord, showPanel, toggleSidebar]);

  const showEmptyEditor = hydrated && tabs.length === 0;

  return (
    <div className={styles.layout}>
      <Titlebar onOpenCommandPalette={openCommandPalette} />
      <div className={styles.main}>
        <Sidebar activePanel={activePanel} onPanelSelect={selectPanel} />
        {activePanel === 'explorer' && <Explorer />}
        {activePanel === 'extensions' && <ExtensionsPanel />}
        <div className={styles.editorContainer}>
          <Tabsbar />
          {!showEmptyEditor && <Breadcrumbs />}
          <div className={styles.editorWithTerminal}>
            <main
              id="main-editor"
              className={styles.content}
              onScroll={e =>
                scrollPositionsRef.current.set(pathname, e.currentTarget.scrollTop)
              }
            >
              {showEmptyEditor ? <EmptyEditor /> : children}
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
        onShowPanel={showPanel}
        onToggleSidebar={toggleSidebar}
      />
    </div>
  );
};

export default Layout;
