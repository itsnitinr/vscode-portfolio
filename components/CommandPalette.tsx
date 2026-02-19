'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { VscSymbolColor, VscTerminal, VscFiles, VscGoToFile, VscGear, VscColorMode, VscHome, VscAccount, VscCode, VscBook, VscMail, VscGithubAlt } from 'react-icons/vsc';
import { MdNavigateNext } from 'react-icons/md';

import { THEMES } from '@/lib/themes';
import styles from '@/styles/CommandPalette.module.css';

interface Command {
  id: string;
  label: string;
  category: string;
  shortcut?: string;
  icon: React.ReactNode;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
}

const CommandPalette = ({ isOpen, onClose, onToggleTerminal, isTerminalOpen }: CommandPaletteProps) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const getCommands = useCallback((): Command[] => {
    const baseCommands: Command[] = [
      {
        id: 'go-home',
        label: 'Go to Home',
        category: 'Navigation',
        shortcut: 'G H',
        icon: <VscHome size={16} />,
        action: () => router.push('/'),
      },
      {
        id: 'go-about',
        label: 'Go to About',
        category: 'Navigation',
        shortcut: 'G A',
        icon: <VscAccount size={16} />,
        action: () => router.push('/about'),
      },
      {
        id: 'go-projects',
        label: 'Go to Projects',
        category: 'Navigation',
        shortcut: 'G P',
        icon: <VscCode size={16} />,
        action: () => router.push('/projects'),
      },
      {
        id: 'go-articles',
        label: 'Go to Articles',
        category: 'Navigation',
        shortcut: 'G R',
        icon: <VscBook size={16} />,
        action: () => router.push('/articles'),
      },
      {
        id: 'go-contact',
        label: 'Go to Contact',
        category: 'Navigation',
        shortcut: 'G C',
        icon: <VscMail size={16} />,
        action: () => router.push('/contact'),
      },
      {
        id: 'go-github',
        label: 'Go to GitHub',
        category: 'Navigation',
        shortcut: 'G G',
        icon: <VscGithubAlt size={16} />,
        action: () => router.push('/github'),
      },
      {
        id: 'go-settings',
        label: 'Go to Settings',
        category: 'Navigation',
        shortcut: 'G S',
        icon: <VscGear size={16} />,
        action: () => router.push('/settings'),
      },
      {
        id: 'toggle-terminal',
        label: isTerminalOpen ? 'Close Terminal' : 'Open Terminal',
        category: 'Terminal',
        shortcut: 'Ctrl+`',
        icon: <VscTerminal size={16} />,
        action: onToggleTerminal,
      },
      {
        id: 'change-theme',
        label: 'Change Color Theme',
        category: 'Preferences',
        shortcut: 'K T',
        icon: <VscSymbolColor size={16} />,
        action: () => setShowThemePicker(true),
      },
    ];

    return baseCommands;
  }, [router, onToggleTerminal, isTerminalOpen]);

  const commands = getCommands();

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredThemes = THEMES.filter((theme) =>
    theme.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = useCallback(
    (index: number) => {
      if (showThemePicker) {
        if (index < filteredThemes.length) {
          const theme = filteredThemes[index];
          document.documentElement.setAttribute('data-theme', theme.theme);
          localStorage.setItem('theme', theme.theme);
          onClose();
        }
      } else {
        if (index < filteredCommands.length) {
          filteredCommands[index].action();
          if (filteredCommands[index].id !== 'change-theme') {
            onClose();
          }
        }
      }
    },
    [filteredCommands, filteredThemes, onClose, showThemePicker]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        if (showThemePicker) {
          setShowThemePicker(false);
          setSearchQuery('');
          setSelectedIndex(0);
        } else {
          onClose();
        }
        return;
      }

      const items = showThemePicker ? filteredThemes : filteredCommands;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % items.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleSelect(selectedIndex);
      }
    },
    [isOpen, onClose, filteredCommands, filteredThemes, selectedIndex, handleSelect, showThemePicker]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setSearchQuery('');
      setSelectedIndex(0);
      setShowThemePicker(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery, showThemePicker]);

  useEffect(() => {
    if (listRef.current && selectedIndex >= 0) {
      const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.inputWrapper}>
          <VscGoToFile size={20} className={styles.inputIcon} />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={showThemePicker ? 'Select color theme' : 'Type a command or search...'}
            className={styles.input}
            spellCheck={false}
            autoComplete="off"
          />
          {searchQuery && (
            <button
              className={styles.clearButton}
              onClick={() => {
                setSearchQuery('');
                inputRef.current?.focus();
              }}
            >
              ×
            </button>
          )}
        </div>

        <div className={styles.results} ref={listRef}>
          {showThemePicker ? (
            filteredThemes.length === 0 ? (
              <div className={styles.noResults}>No matching themes</div>
            ) : (
              <>
                <div className={styles.category}>Color Theme</div>
                {filteredThemes.map((theme, index) => (
                  <div
                    key={theme.theme}
                    className={`${styles.item} ${
                      selectedIndex === index ? styles.selected : ''
                    }`}
                    onClick={() => handleSelect(index)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className={styles.itemIcon}>
                      <VscColorMode size={16} />
                    </div>
                    <div className={styles.itemContent}>
                      <span className={styles.itemLabel}>{theme.name}</span>
                      <span className={styles.itemDescription}>{theme.publisher}</span>
                    </div>
                  </div>
                ))}
              </>
            )
          ) : filteredCommands.length === 0 ? (
            <div className={styles.noResults}>No matching commands</div>
          ) : (
            (() => {
              let lastCategory = '';
              let itemIndex = 0;
              return filteredCommands.map((cmd, index) => {
                const showCategory = cmd.category !== lastCategory;
                lastCategory = cmd.category;
                const currentIndex = itemIndex++;
                return (
                  <div key={cmd.id}>
                    {showCategory && (
                      <div className={styles.category}>{cmd.category}</div>
                    )}
                    <div
                      className={`${styles.item} ${
                        selectedIndex === currentIndex ? styles.selected : ''
                      }`}
                      onClick={() => handleSelect(currentIndex)}
                      onMouseEnter={() => setSelectedIndex(currentIndex)}
                    >
                      <div className={styles.itemIcon}>{cmd.icon}</div>
                      <div className={styles.itemContent}>
                        <span className={styles.itemLabel}>{cmd.label}</span>
                      </div>
                      {cmd.shortcut && (
                        <div className={styles.shortcut}>
                          {cmd.id === 'change-theme' ? (
                            <MdNavigateNext size={16} />
                          ) : (
                            cmd.shortcut.split(' ').map((key, i) => (
                              <span key={i} className={styles.key}>
                                {key}
                              </span>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              });
            })()
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.footerItem}>
            <span className={styles.key}>↑↓</span> to navigate
          </div>
          <div className={styles.footerItem}>
            <span className={styles.key}>↵</span> to select
          </div>
          <div className={styles.footerItem}>
            <span className={styles.key}>esc</span> to close
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
