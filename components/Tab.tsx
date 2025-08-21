import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '@/styles/Tab.module.css';

interface TabProps {
  icon: string;
  filename: string;
  path: string;
  external?: boolean;
}

const Tab = ({ icon, filename, path, external = false }: TabProps) => {
  const router = useRouter();
  
  const displayFilename = external ? `${filename} 🔗 : filename;
  const isActive = !external && router.pathname === path;

  if (external) {
    return (
      <a 
        href={path} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.tab}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{displayFilename}</p>
      </a>
    );
  }

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${isActive && styles.active}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{displayFilename}</p>
      </div>
    </Link>
  );
};

export default Tab;
