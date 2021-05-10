import { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {
  
  const titleText = Component?.name?.replace("Page", "") || "Home";

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={`Nitin Ranganath | ${titleText}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
