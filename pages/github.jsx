const GithubPage = () => {
  return (
    <>
      <h1>Github Page</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Github" },
  };
}

export default GithubPage;
