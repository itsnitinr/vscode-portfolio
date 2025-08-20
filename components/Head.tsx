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
        content="John Abascal is a Computer Science PhD student at Northeastern University researching privacy in deep learning, differential privacy, and adversarial machine learning."
      />
      <meta
        name="keywords"
        content="john abascal, privacy, differential privacy, machine learning, adversarial ml, phd student, northeastern university, computer science"
      />
      <meta property="og:title" content="John Abascal's Portfolio" />
      <meta
        property="og:description"
        content="PhD student researching privacy in deep learning and machine unlearning at Northeastern University."
      />
      <meta property="og:image" content="https://johnmath.github.io/me.png" />
      <meta property="og:url" content="https://johnmath.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YBQJC2ZQY4"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YBQJC2ZQY4');
          `,
        }}
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'John Abascal',
};
