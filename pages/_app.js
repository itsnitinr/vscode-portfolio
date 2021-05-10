import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {
  const [titleText, setTitleText] = useState("Home");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  useEffect(() => {
    if (Component) {
      setTitleText(Component?.name?.replace("Page", ""));
    }
  }, [Component]);

  return (
    <Layout>
      <Head title={`Nitin Ranganath | ${titleText}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
