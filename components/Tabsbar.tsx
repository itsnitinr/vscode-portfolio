import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/react_icon.svg" filename="about.py" path="/" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/json_icon.svg" filename="cv.yml" path="/cv" />
      <Tab icon="/logos/markdown_icon.svg" filename="papers.md" path="/papers" />
      <Tab icon="/logos/json_icon.svg" filename="articles.json" path="/articles" />
      <Tab 
        icon="/logos/markdown_icon.svg" 
        filename="github" 
        path="https://github.com/johnmath" 
        external={true} 
      />
    </div>
  );
};

export default Tabsbar;
