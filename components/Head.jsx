import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
        <meta name="google-site-verification" content="BH9IGWPc8M0i_tMhP5f7VwupCOzk-l9cbKSKnzJtWQY" />
      <meta
        name="description"
        content="Desenvolvedor fullstack. Formado em Análise e Desenvolvimento de Sistemas e estudante da Trybe por 1 ano"
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
      <meta property="og:url" content="https://portfolio-daniel-custodio.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title:'',
};
