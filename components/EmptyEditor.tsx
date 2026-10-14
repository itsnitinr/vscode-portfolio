import Image from 'next/image';

import styles from '@/styles/EmptyEditor.module.css';

const shortcuts = [
  { label: 'Show All Commands', keys: ['Ctrl', 'Shift', 'P'] },
  { label: 'Go to File', keys: ['Ctrl', 'P'] },
  { label: 'Go to Home', keys: ['G', 'H'] },
  { label: 'Toggle Terminal', keys: ['Ctrl', '`'] },
  { label: 'Change Color Theme', keys: ['K', 'T'] },
];

// Shown in place of the page when every tab is closed, like VS Code's
// empty editor watermark
const EmptyEditor = () => {
  return (
    <div className={styles.empty}>
      <Image
        src="/logos/vscode_icon.svg"
        alt=""
        width={160}
        height={160}
        className={styles.logo}
      />
      <dl className={styles.shortcuts}>
        {shortcuts.map(({ label, keys }) => (
          <div key={label} className={styles.shortcut}>
            <dt>{label}</dt>
            <dd>
              {keys.map(key => (
                <kbd key={key} className={styles.key}>
                  {key}
                </kbd>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default EmptyEditor;
