import AboutPy from '@/components/AboutPy';

const HomePage = () => {
  return <AboutPy />;
};

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}

export default HomePage;
