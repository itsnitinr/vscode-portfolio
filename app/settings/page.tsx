'use client';

import { useState, useEffect } from 'react';
import { VscColorMode } from 'react-icons/vsc';

import ThemeInfo from '@/components/ThemeInfo';

import styles from '@/styles/SettingsPage.module.css';

const themes = [
  {
    name: 'GitHub Dark',
    icon: '/themes/github-dark.png',
    publisher: 'GitHub',
    theme: 'github-dark',
  },
  {
    name: 'Dracula',
    icon: '/themes/dracula.png',
    publisher: 'Dracula Theme',
    theme: 'dracula',
  },
  {
    name: 'Ayu Dark',
    icon: '/themes/ayu.png',
    publisher: 'teabyii',
    theme: 'ayu-dark',
  },
  {
    name: 'Ayu Mirage',
    icon: '/themes/ayu.png',
    publisher: 'teabyii',
    theme: 'ayu-mirage',
  },
  {
    name: 'Nord',
    icon: '/themes/nord.png',
    publisher: 'arcticicestudio',
    theme: 'nord',
  },
  {
    name: 'Night Owl',
    icon: '/themes/night-owl.png',
    publisher: 'sarah.drasner',
    theme: 'night-owl',
  },
];

const SettingsPage = () => {
  const [activeTheme, setActiveTheme] = useState('github-dark');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'github-dark';
    setActiveTheme(savedTheme);
    setIsLoaded(true);
  }, []);

  const handleThemeSelect = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setActiveTheme(theme);
  };

  if (!isLoaded) {
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
            {themes.map((theme) => (
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
