import ThemeInfo from '../components/ThemeInfo';
import styles from '../styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <>
      <h2>Manage Themes</h2>
      <div className={styles.container}>
        <ThemeInfo
          name="GitHub Dark"
          icon="/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
        />
        <ThemeInfo
          name="Dracula"
          icon="/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-dark"
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-mirage"
        />
        <ThemeInfo
          name="Nord"
          icon="/nord.png"
          publisher="arcticicestudio"
          theme="nord"
        />
        <ThemeInfo
          name="Night Owl"
          icon="/night-owl.png"
          publisher="sarah.drasner"
          theme="night-owl"
        />
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
