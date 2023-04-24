import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
        <meta name="google-site-verification" content="BH9IGWPc8M0i_tMhP5f7VwupCOzk-l9cbKSKnzJtWQY" />
      <meta
        name="description"
        content="Formado em Análise e Desenvolvimento de Sistemas, pós-graduando em Desenvolvimento Web Full-Stack e formado na Trybe - Desenvolvedor Full-Stack Jr."
      />
      <meta
        name="keywords"
        content="daniel custodio, web developer portfolio, daniel custodio web developer, daniel custodio, desenvolvedor web, daniel custodio portfolio, portfolio de programador, portfolio de desenvolvedor, portfolio fullstack, programdor freelancer"
      />
      <meta property="og:title" content="Portfolio de Daniel Custódio" />
      <meta
        property="og:description"
        content="Desenvolvedor fullstack, construo sistemas e sites web."
      />
      <meta property="og:image" content="https://imgur.com/g6acT2j.png" />
      <meta property="og:url" content="https://danielcustodio.com.br/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="google-site-verification" content="Sbolx0p-WCauJ2As8ebGDAudISnSwQAu91W_b0uUxr4" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title:'',
};
