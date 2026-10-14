'use client';

import Link from 'next/link';
import { VscClose } from 'react-icons/vsc';

import FileIcon, { getTabTitle } from '@/components/FileIcon';
import { Route } from '@/portfolio.config';

import styles from '@/styles/Tab.module.css';

interface TabProps {
  route: Route;
  isActive: boolean;
  isPreview: boolean;
  onOpen: () => void;
  onPin: () => void;
  onClose: () => void;
  onMove: (fromPath: string) => void;
}

const DRAG_TYPE = 'application/x-editor-tab';

const Tab = ({
  route,
  isActive,
  isPreview,
  onOpen,
  onPin,
  onClose,
  onMove,
}: TabProps) => {
  const title = getTabTitle(route);

  return (
    <div
      role="tab"
      aria-selected={isActive}
      className={`${styles.tab} ${isActive ? styles.active : ''} ${
        isPreview ? styles.preview : ''
      }`}
      title={isPreview ? `${title} (preview, double-click to keep open)` : title}
      draggable
      onDragStart={e => {
        e.dataTransfer.setData(DRAG_TYPE, route.path);
        e.dataTransfer.effectAllowed = 'move';
      }}
      onDragOver={e => {
        if (e.dataTransfer.types.includes(DRAG_TYPE)) e.preventDefault();
      }}
      onDrop={e => {
        e.preventDefault();
        onMove(e.dataTransfer.getData(DRAG_TYPE));
      }}
      onDoubleClick={onPin}
      // Middle-click closes the tab instead of opening a new browser tab
      onMouseDown={e => {
        if (e.button === 1) e.preventDefault();
      }}
      onAuxClick={e => {
        if (e.button === 1) {
          e.preventDefault();
          onClose();
        }
      }}
    >
      <Link
        href={route.path}
        className={styles.link}
        draggable={false}
        onClick={onOpen}
      >
        <FileIcon route={route} />
        <span className={styles.title}>{title}</span>
      </Link>
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label={`Close ${title}`}
        title="Close (Alt+W)"
      >
        <VscClose size={14} />
      </button>
    </div>
  );
};

export default Tab;
