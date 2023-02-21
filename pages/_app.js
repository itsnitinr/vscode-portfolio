import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const tagManagerArgs ={
      gtmId:'GTM-P8WD33N'
    }
    TagManager.initialize(tagManagerArgs)
  }, []);


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
      <Head title={`Daniel Custódio | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
