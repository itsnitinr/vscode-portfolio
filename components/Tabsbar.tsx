import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/python_icon.svg" filename="about.py" path="/" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/json_icon.svg" filename="cv.yml" path="/cv" />
      <Tab icon="/logos/markdown_icon.svg" filename="papers.md" path="/papers" />
      <Tab 
        icon="/logos/github_icon.svg" 
        filename="github.com" 
        path="https://github.com/johnmath" 
        external={true} 
      />
      <Tab 
        icon="/logos/linkedin_icon.svg" 
        filename="linkedin.com" 
        path="https://www.linkedin.com/in/johnabascal/" 
        external={true} 
      />
    </div>
  );
};

export default Tabsbar;
