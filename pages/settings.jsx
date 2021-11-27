import ThemeInfo from '../components/ThemeInfo';
import useTranslation from 'next-translate/useTranslation';
import SwitchLanguage from '../components/SwitchLanguage';
import styles from '../styles/SettingsPage.module.css';

const SettingsPage = () => {
  const { t } = useTranslation('settings');
  return (
    <>
      <h2>{t('manage_themes')}</h2>
      <div className={styles.container}>
        <ThemeInfo name="GitHub Dark" icon="/github-dark.png" publisher="GitHub" theme="github-dark" description="GitHub theme for VS Code" />
        <ThemeInfo name="Dracula" icon="/dracula.png" publisher="Dracula Theme" theme="dracula" description="Official Dracula Theme. A dark theme for many editors, shells, and more." />
        <ThemeInfo name="Ayu Dark" icon="/ayu.png" publisher="teabyii" theme="ayu-dark" description="A simple theme with bright colors." />
        <ThemeInfo name="Ayu Mirage" icon="/ayu.png" publisher="teabyii" theme="ayu-mirage" description="A simple theme with bright colors." />
        <ThemeInfo name="Nord" icon="/nord.png" publisher="arcticicestudio" theme="nord" description="An arctic, north-bluish clean and elegant Visual Studio Code theme." />
      </div>

      <h2>{t('language')}</h2>
      <div className={styles.language}>
        <SwitchLanguage />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;
