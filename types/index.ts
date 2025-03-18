export interface Article {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
}

export interface Project {
  thumbnail: string;
  name: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}
