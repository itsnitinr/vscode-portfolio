import ThemeInfo from '@/components/ThemeInfo';

import styles from '@/styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <ThemeInfo
          name="GitHub Dark"
          icon="/themes/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
        />
        <ThemeInfo
          name="Dracula"
          icon="/themes/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="/themes/ayu.png"
          publisher="teabyii"
          theme="ayu-dark"
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon="/themes/ayu.png"
          publisher="teabyii"
          theme="ayu-mirage"
        />
        <ThemeInfo
          name="Nord"
          icon="/themes/nord.png"
          publisher="arcticicestudio"
          theme="nord"
        />
        <ThemeInfo
          name="Night Owl"
          icon="/themes/night-owl.png"
          publisher="sarah.drasner"
          theme="night-owl"
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;
