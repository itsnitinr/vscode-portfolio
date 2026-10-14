import { Extension } from '@/portfolio.config';

import styles from '@/styles/ExtensionIcon.module.css';

interface ExtensionIconProps {
  extension: Extension;
  size: number;
}

const ExtensionIcon = ({ extension, size }: ExtensionIconProps) => {
  const Icon = extension.icon;

  return (
    <span
      className={styles.tile}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Icon size={size * 0.6} color={extension.color} />
    </span>
  );
};

export default ExtensionIcon;
