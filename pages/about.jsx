import useTranslation from 'next-translate/useTranslation';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <>
      <h1>{t('title')}</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
