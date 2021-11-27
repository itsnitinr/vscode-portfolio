import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  const { t } = useTranslation('common');
  return (
    <section className={styles.titlebar}>
      <div className={styles.items}>
        <Image src="/vscode_icon.svg" alt="VSCode Icon" height={15} width={15} />
        <p>{t('file')}</p>
        <p>{t('edit')}</p>
        <p>{t('selection')}</p>
        <p>{t('view')}</p>
        <p>{t('go')}</p>
        <p>{t('run')}</p>
        <p>{t('terminal')}</p>
        <p>{t('window')}</p>
        <p>{t('help')}</p>
      </div>
      <p className={styles.title}>Nitin Ranganath - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
