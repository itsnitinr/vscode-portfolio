import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import BottomBar from '../components/BottomBar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <main className={styles.content}>{children}</main>
      </div>
      <BottomBar />
    </>
  );
};

export default Layout;
