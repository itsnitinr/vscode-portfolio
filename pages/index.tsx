import NotebookAbout from '@/components/NotebookAbout';

const HomePage = () => {
  return <NotebookAbout />;
};

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}

export default HomePage;
