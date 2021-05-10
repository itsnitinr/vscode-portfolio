const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
