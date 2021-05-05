import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/themes.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      document.documentElement.setAttribute(
        'data-theme',
        localStorage.getItem('theme')
      );
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
