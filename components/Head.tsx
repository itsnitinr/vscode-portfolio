import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Jeff K is a passionate full stack web developer building innovative websites and applications"
      />
      <meta
        name="keywords"
        content="jeff k, jeff, web developer portfolio, jeff web developer, jeff developer, full stack, jeff k portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Jeff K's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer creating exceptional web experiences."
      />
      <meta property="og:image" content="/jeff-k-photo.png" />
      <meta property="og:url" content="https://jeffk.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jeff K',
};
