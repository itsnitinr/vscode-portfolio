import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Gabriel Lobo is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="gabriel lobo, gabriel, lobo, web developer portfolio, gabriel web developer, gabriel developer, python, django, react, typescript, gabriel lobo portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Gabriel Lobo's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:url" content="https://gabrielrbl-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Gabriel Lobo',
};
