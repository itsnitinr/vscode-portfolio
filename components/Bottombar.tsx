import {
  VscBell,
  VscCheck,
  VscError,
  VscWarning,
  VscSourceControl,
} from 'react-icons/vsc';
import { SiNextdotjs } from 'react-icons/si';

import styles from '@/styles/Bottombar.module.css';

const Bottombar = () => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href="https://github.com/itsnitinr/vscode-portfolio"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.section}
        >
          <VscSourceControl className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <VscError className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <VscWarning className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <SiNextdotjs className={styles.icon} />
          <p>Powered by Next.js</p>
        </div>
        <div className={styles.section}>
          <VscCheck className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <VscBell />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
