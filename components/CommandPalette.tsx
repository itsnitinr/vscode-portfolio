'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  VscSymbolColor,
  VscTerminal,
  VscGoToFile,
  VscColorMode,
  VscClose,
  VscCloseAll,
  VscFiles,
  VscExtensions,
  VscLayoutSidebarLeft,
  VscSymbolClass,
  VscSymbolMethod,
  VscSymbolField,
} from 'react-icons/vsc';
import { MdNavigateNext } from 'react-icons/md';

import ExtensionIcon from '@/components/ExtensionIcon';
import FileIcon, { getTabTitle } from '@/components/FileIcon';
import type { SidePanel } from '@/components/Sidebar';
import { EXTENSION_PATH_PREFIX, useEditorActions } from '@/lib/editorTabs';
import { fuzzyMatch } from '@/lib/fuzzy';
import { THEMES, THEME_CHANGE_EVENT } from '@/lib/themes';
import { extensions, projects, routes } from '@/portfolio.config';

import styles from '@/styles/CommandPalette.module.css';

export type PaletteMode = 'files' | 'commands' | 'themes';

interface PaletteItem {
  id: string;
  label: string;
  // Group heading shown when nothing has been typed yet
  category: string;
  // Secondary text after the label, also searched when the label doesn't match
  description?: string;
  shortcut?: string;
  icon: React.ReactNode;
  // Commands that open a sub-picker keep the palette open
  keepOpen?: boolean;
  // `pin` is set when the item is opened with Ctrl/Cmd+Enter
  run: (options: { pin: boolean }) => void;
}

interface Result {
  item: PaletteItem;
  indices: number[];
}

const COMMAND_PREFIX = '>';
const SYMBOL_PREFIX = '@';

const HEADING_ICONS: Record<string, React.ReactNode> = {
  H1: <VscSymbolClass size={16} />,
  H2: <VscSymbolMethod size={16} />,
  H3: <VscSymbolField size={16} />,
};

// Fuzzy-filters items by label. Descriptions are long enough that fuzzy
// matching them turns up noise, so they only match on an exact substring and
// rank below label matches. With no query, items keep their original order.
const search = (items: PaletteItem[], query: string): Result[] => {
  if (!query) return items.map(item => ({ item, indices: [] }));

  return items
    .flatMap(item => {
      const labelMatch = fuzzyMatch(query, item.label);
      if (labelMatch) return [{ item, ...labelMatch }];

      const inDescription = item.description
        ?.toLowerCase()
        .includes(query.toLowerCase());
      return inDescription ? [{ item, score: -1, indices: [] }] : [];
    })
    .sort((a, b) => b.score - a.score)
    .map(({ item, indices }) => ({ item, indices }));
};

const Highlight = ({ text, indices }: { text: string; indices: number[] }) => {
  if (indices.length === 0) return <>{text}</>;

  const matched = new Set(indices);
  return (
    <>
      {[...text].map((char, i) =>
        matched.has(i) ? (
          <mark key={i} className={styles.match}>
            {char}
          </mark>
        ) : (
          char
        )
      )}
    </>
  );
};

interface CommandPaletteProps {
  initialMode: PaletteMode;
  onClose: () => void;
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
  onShowPanel: (panel: SidePanel) => void;
  onToggleSidebar: () => void;
}

const CommandPalette = ({
  initialMode,
  onClose,
  onToggleTerminal,
  isTerminalOpen,
  onShowPanel,
  onToggleSidebar,
}: CommandPaletteProps) => {
  const editor = useEditorActions();
  const [query, setQuery] = useState(
    initialMode === 'commands' ? COMMAND_PREFIX : ''
  );
  const [showThemePicker, setShowThemePicker] = useState(
    initialMode === 'themes'
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const mode = showThemePicker
    ? 'themes'
    : query.startsWith(COMMAND_PREFIX)
      ? 'commands'
      : query.startsWith(SYMBOL_PREFIX)
        ? 'symbols'
        : 'files';
  const searchText = (
    mode === 'commands' || mode === 'symbols' ? query.slice(1) : query
  ).trim();

  const updateQuery = useCallback((value: string) => {
    setQuery(value);
    setSelectedIndex(0);
  }, []);

  const fileItems = useMemo<PaletteItem[]>(
    () => [
      ...routes.map(route => ({
        id: `file-${route.path}`,
        label: getTabTitle(route),
        category: 'Files',
        description: route.file ? 'portfolio' : 'Preferences',
        icon: <FileIcon route={route} size={16} />,
        run: ({ pin }: { pin: boolean }) => editor.open(route.path, { pin }),
      })),
      ...extensions.map(extension => ({
        id: `extension-${extension.id}`,
        label: extension.name,
        category: 'Extensions',
        description: `Extension · ${extension.publisher}`,
        icon: <ExtensionIcon extension={extension} size={18} />,
        run: ({ pin }: { pin: boolean }) =>
          editor.open(`${EXTENSION_PATH_PREFIX}${extension.id}`, { pin }),
      })),
      ...projects.map(project => ({
        id: `project-${project.slug}`,
        label: project.title,
        category: 'Projects',
        description: `Project · ${project.description}`,
        icon: <Image src={project.logo} alt="" width={16} height={16} />,
        run: () => window.open(project.link, '_blank', 'noopener,noreferrer'),
      })),
    ],
    [editor]
  );

  const commandItems = useMemo<PaletteItem[]>(
    () => [
      ...routes.map(({ path, label, icon: Icon, shortcut }) => ({
        id: `go-${label.toLowerCase()}`,
        label: `Go to ${label}`,
        category: 'Navigation',
        shortcut: shortcut && `G ${shortcut.toUpperCase()}`,
        icon: <Icon size={16} />,
        run: () => editor.open(path),
      })),
      {
        id: 'quick-open',
        label: 'Go to File...',
        category: 'Navigation',
        shortcut: 'Ctrl+P',
        icon: <VscGoToFile size={16} />,
        keepOpen: true,
        run: () => updateQuery(''),
      },
      {
        id: 'go-to-symbol',
        label: 'Go to Symbol in Editor...',
        category: 'Navigation',
        icon: <VscSymbolMethod size={16} />,
        keepOpen: true,
        run: () => updateQuery(SYMBOL_PREFIX),
      },
      {
        id: 'show-explorer',
        label: 'Show Explorer',
        category: 'View',
        shortcut: 'Ctrl+Shift+E',
        icon: <VscFiles size={16} />,
        run: () => onShowPanel('explorer'),
      },
      {
        id: 'show-extensions',
        label: 'Show Extensions',
        category: 'View',
        shortcut: 'Ctrl+Shift+X',
        icon: <VscExtensions size={16} />,
        run: () => onShowPanel('extensions'),
      },
      {
        id: 'toggle-sidebar',
        label: 'Toggle Side Bar',
        category: 'View',
        shortcut: 'Ctrl+B',
        icon: <VscLayoutSidebarLeft size={16} />,
        run: onToggleSidebar,
      },
      {
        id: 'close-editor',
        label: 'Close Editor',
        category: 'View',
        shortcut: 'Alt+W',
        icon: <VscClose size={16} />,
        run: editor.closeActive,
      },
      {
        id: 'close-other-editors',
        label: 'Close Other Editors',
        category: 'View',
        icon: <VscCloseAll size={16} />,
        run: editor.closeOthers,
      },
      {
        id: 'close-all-editors',
        label: 'Close All Editors',
        category: 'View',
        icon: <VscCloseAll size={16} />,
        run: editor.closeAll,
      },
      {
        id: 'toggle-terminal',
        label: isTerminalOpen ? 'Close Terminal' : 'Open Terminal',
        category: 'Terminal',
        shortcut: 'Ctrl+`',
        icon: <VscTerminal size={16} />,
        run: onToggleTerminal,
      },
      {
        id: 'change-theme',
        label: 'Change Color Theme',
        category: 'Preferences',
        shortcut: 'K T',
        icon: <VscSymbolColor size={16} />,
        keepOpen: true,
        run: () => {
          setShowThemePicker(true);
          updateQuery('');
        },
      },
    ],
    [editor, onToggleTerminal, isTerminalOpen, onShowPanel, onToggleSidebar, updateQuery]
  );

  const themeItems = useMemo<PaletteItem[]>(
    () =>
      THEMES.map(theme => ({
        id: `theme-${theme.theme}`,
        label: theme.name,
        category: 'Color Theme',
        description: theme.publisher,
        icon: <VscColorMode size={16} />,
        run: () => {
          document.documentElement.setAttribute('data-theme', theme.theme);
          localStorage.setItem('theme', theme.theme);
          window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
        },
      })),
    []
  );

  // Headings on the current page, read from the DOM when symbol mode starts.
  // Previously visited pages stay mounted but hidden, so skip invisible ones.
  const symbolItems = useMemo<PaletteItem[]>(() => {
    if (mode !== 'symbols') return [];

    const headings = document.querySelectorAll<HTMLElement>(
      '#main-editor h1, #main-editor h2, #main-editor h3'
    );
    return [...headings]
      .filter(heading => heading.textContent?.trim() && heading.checkVisibility())
      .map((heading, i) => ({
        id: `symbol-${i}`,
        label: heading.textContent!.trim(),
        category: 'Symbols',
        icon: HEADING_ICONS[heading.tagName],
        run: () => heading.scrollIntoView({ block: 'start' }),
      }));
  }, [mode]);

  const items = {
    files: fileItems,
    commands: commandItems,
    themes: themeItems,
    symbols: symbolItems,
  }[mode];
  const results = search(items, searchText);
  const showCategories = !searchText && mode !== 'symbols';

  const runResult = (index: number, pin = false) => {
    const result = results[index];
    if (!result) return;

    result.item.run({ pin });
    if (!result.item.keepOpen) onClose();
    else inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${selectedIndex}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      if (showThemePicker) {
        setShowThemePicker(false);
        updateQuery(COMMAND_PREFIX);
      } else {
        onClose();
      }
      return;
    }

    // Ctrl+P and Ctrl+Shift+P switch modes instead of printing
    if ((e.ctrlKey || e.metaKey) && e.code === 'KeyP') {
      e.preventDefault();
      setShowThemePicker(false);
      updateQuery(e.shiftKey ? COMMAND_PREFIX : '');
      return;
    }

    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runResult(selectedIndex, e.ctrlKey || e.metaKey);
    }
  };

  const placeholder = {
    files: 'Search files by name (type > for commands, @ for symbols)',
    commands: 'Type a command',
    symbols: 'Go to a heading on this page',
    themes: 'Select color theme',
  }[mode];

  const emptyMessage = {
    files: 'No matching files',
    commands: 'No matching commands',
    symbols: 'No headings on this page',
    themes: 'No matching themes',
  }[mode];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.container}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-label="Command palette"
      >
        <div className={styles.inputWrapper}>
          <VscGoToFile size={20} className={styles.inputIcon} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => updateQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={styles.input}
            spellCheck={false}
            autoComplete="off"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-palette-results"
            aria-activedescendant={
              results[selectedIndex] ? `palette-item-${selectedIndex}` : undefined
            }
          />
          {query && (
            <button
              className={styles.clearButton}
              onClick={() => {
                updateQuery('');
                inputRef.current?.focus();
              }}
              aria-label="Clear"
            >
              ×
            </button>
          )}
        </div>

        <div
          className={styles.results}
          ref={listRef}
          id="command-palette-results"
          role="listbox"
        >
          {results.length === 0 ? (
            <div className={styles.noResults}>{emptyMessage}</div>
          ) : (
            results.map(({ item, indices }, index) => {
              const showCategory =
                showCategories &&
                (index === 0 || results[index - 1].item.category !== item.category);

              return (
                <div key={item.id}>
                  {showCategory && (
                    <div className={styles.category}>{item.category}</div>
                  )}
                  <div
                    id={`palette-item-${index}`}
                    data-index={index}
                    role="option"
                    aria-selected={selectedIndex === index}
                    className={`${styles.item} ${
                      selectedIndex === index ? styles.selected : ''
                    }`}
                    onClick={e => runResult(index, e.ctrlKey || e.metaKey)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className={styles.itemIcon}>{item.icon}</div>
                    <div className={styles.itemContent}>
                      <span className={styles.itemLabel}>
                        <Highlight text={item.label} indices={indices} />
                        {item.description && (
                          <span className={styles.itemDescription}>
                            {item.description}
                          </span>
                        )}
                      </span>
                    </div>
                    {item.id === 'change-theme' ? (
                      <div className={styles.shortcut}>
                        <MdNavigateNext size={16} />
                      </div>
                    ) : (
                      item.shortcut && (
                        <div className={styles.shortcut}>
                          {item.shortcut.split(' ').map((key, i) => (
                            <span key={i} className={styles.key}>
                              {key}
                            </span>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.footerItem}>
            <span className={styles.key}>↑↓</span> to navigate
          </div>
          <div className={styles.footerItem}>
            <span className={styles.key}>↵</span> to select
          </div>
          {mode === 'files' && (
            <div className={styles.footerItem}>
              <span className={styles.key}>Ctrl+↵</span> to keep open
            </div>
          )}
          <div className={styles.footerItem}>
            <span className={styles.key}>esc</span> to close
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
