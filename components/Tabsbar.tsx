import Tab from '@/components/Tab';
import { fileRoutes } from '@/portfolio.config';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      {fileRoutes.map(({ path, file }) => (
        <Tab key={path} icon={file.icon} filename={file.name} path={path} />
      ))}
    </div>
  );
};

export default Tabsbar;
