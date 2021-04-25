import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
