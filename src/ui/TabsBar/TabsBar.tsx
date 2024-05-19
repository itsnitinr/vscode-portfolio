import Tab from '@/ui/Tab'
import styles from './Tabsbar.module.css'

function TabsBar() {
  return (
    <div className={styles.tabs}>
      <Tab icon='/react_icon.svg' filename='home.jsx' path='/' />
      <Tab icon='/html_icon.svg' filename='about.html' path='/about' />
      <Tab icon='/css_icon.svg' filename='contact.css' path='/contact' />
      {/* <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" /> */}
      <Tab icon='/markdown_icon.svg' filename='github.md' path='/github' />
    </div>
  )
}

export default TabsBar
