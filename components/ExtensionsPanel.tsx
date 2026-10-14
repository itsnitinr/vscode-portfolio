'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { VscChevronRight, VscVerifiedFilled } from 'react-icons/vsc';

import ExtensionIcon from '@/components/ExtensionIcon';
import { EXTENSION_PATH_PREFIX, openTab, pinTab } from '@/lib/editorTabs';
import { extensions, Extension } from '@/portfolio.config';

import styles from '@/styles/ExtensionsPanel.module.css';

interface CategoryProps {
  name: string;
  items: Extension[];
}

const Category = ({ name, items }: CategoryProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className={styles.category}>
      <button
        type="button"
        className={styles.categoryHeader}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <VscChevronRight
          className={styles.chevron}
          style={isOpen ? { transform: 'rotate(90deg)' } : {}}
        />
        <span>{name}</span>
        <span className={styles.count}>{items.length}</span>
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {items.map(extension => {
            const path = `${EXTENSION_PATH_PREFIX}${extension.id}`;

            return (
              <li key={extension.id}>
                <Link
                  href={path}
                  className={`${styles.item} ${
                    path === pathname ? styles.active : ''
                  }`}
                  // Single click previews the extension, double click keeps it open
                  onClick={() => openTab(path, { after: pathname })}
                  onDoubleClick={() => pinTab(path)}
                >
                  <ExtensionIcon extension={extension} size={36} />
                  <div className={styles.itemBody}>
                    <span className={styles.name}>{extension.name}</span>
                    <p className={styles.description}>
                      {extension.description}
                    </p>
                    <p className={styles.publisher}>
                      <VscVerifiedFilled
                        className={styles.verified}
                        aria-hidden
                      />
                      <span className={styles.publisherName}>
                        {extension.publisher}
                      </span>
                      {extension.experience && (
                        <span className={styles.experience}>
                          {extension.experience}
                        </span>
                      )}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

const ExtensionsPanel = ({ hidden = false }: { hidden?: boolean }) => {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();
  const matches = extensions.filter(extension =>
    [extension.name, extension.publisher, extension.category, extension.description]
      .some(field => field.toLowerCase().includes(normalizedQuery))
  );

  const categories = Object.entries(
    matches.reduce<Record<string, Extension[]>>((groups, extension) => {
      (groups[extension.category] ??= []).push(extension);
      return groups;
    }, {})
  );

  return (
    <div className={styles.panel} hidden={hidden}>
      <p className={styles.title}>Extensions</p>
      <div className={styles.search}>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search Extensions"
          aria-label="Search extensions"
          className={styles.searchInput}
          spellCheck={false}
        />
      </div>
      {categories.length === 0 ? (
        <p className={styles.empty}>No extensions found.</p>
      ) : (
        categories.map(([name, items]) => (
          <Category key={name} name={name} items={items} />
        ))
      )}
    </div>
  );
};

export default ExtensionsPanel;
