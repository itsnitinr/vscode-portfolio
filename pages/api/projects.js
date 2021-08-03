import data from './projects.json';

export const getProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getProjects();
  res.json(projects);
};
