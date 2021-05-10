const ProjectsPage = () => {
  return (
    <>
      <h1>Projects Page</h1>
    </>
  );
};


export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}


export default ProjectsPage;
