const ArticlesPage = () => {
  return (
    <>
      <h1>Articles Page</h1>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Articles" },
  };
}

export default ArticlesPage;
