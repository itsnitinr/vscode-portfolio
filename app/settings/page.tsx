'use client';

import { useSyncExternalStore } from 'react';
import { VscColorMode } from 'react-icons/vsc';

import { THEMES, THEME_CHANGE_EVENT } from '@/lib/themes';
import ThemeInfo from '@/components/ThemeInfo';

import styles from '@/styles/SettingsPage.module.css';

const subscribe = (onChange: () => void) => {
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
};

const SettingsPage = () => {
  // Saved theme lives in localStorage, so it's only readable on the client
  const activeTheme = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem('theme') || 'github-dark',
    () => null
  );

  const handleThemeSelect = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  if (!activeTheme) {
    return null;
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.iconWrapper}>
            <VscColorMode className={styles.icon} size={24} />
          </div>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Settings</h1>
            <p className={styles.subtitle}>
              Customize your editor appearance. Choose from curated themes 
              that match your style.
            </p>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Color Theme</h2>
          
          <div className={styles.themesGrid}>
            {THEMES.map((theme) => (
              <ThemeInfo
                key={theme.theme}
                icon={theme.icon}
                name={theme.name}
                publisher={theme.publisher}
                theme={theme.theme}
                isActive={activeTheme === theme.theme}
                onSelect={handleThemeSelect}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
