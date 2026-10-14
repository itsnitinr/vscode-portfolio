import type { IconType } from 'react-icons';
import {
  VscAccount,
  VscCode,
  VscEdit,
  VscGithubAlt,
  VscFiles,
  VscMail,
  VscSettings,
  VscVscode,
} from 'react-icons/vsc';
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { Project } from '@/types';

// Everything personal about the portfolio lives here. Edit this file to make
// the template your own; pages and components read from it.

export const profile = {
  name: 'Nitin Ranganath',
  role: 'Full Stack Developer',
  currentPosition: 'Software Engineer at Tessact',
  location: 'Mumbai, India',
  siteUrl: 'https://vscode-portfolio.vercel.app',
  ogImage: 'https://imgur.com/4zi5KkQ.png',
  repository: 'https://github.com/itsnitinr/vscode-portfolio',
  metaDescription:
    "Nitin Ranganath is an avid full stack web developer building websites and applications you'd love to use",
  ogDescription:
    "A full-stack developer building websites that you'd like to use.",
  keywords: [
    'nitin ranganath',
    'nitin',
    'ranganath',
    'web developer portfolio',
    'nitin web developer',
    'nitin developer',
    'mern stack',
    'nitin ranganath portfolio',
    'vscode-portfolio',
  ],
  intro:
    'I craft clean, performant web applications with modern technologies. Specialized in TypeScript, React, Node.js, and building products that users love.',
  bio: [
    "I'm a software engineer passionate about crafting beautiful, performant web experiences. I primarily work with the JavaScript/TypeScript ecosystem and React, building products that people love to use.",
    'While I specialize in frontend development, I enjoy working across the stack with Node.js, MongoDB, and Express to bring full-stack applications to life.',
  ],
  beyondCode:
    'Aside from programming and writing, I enjoy reading dystopian novels, listening to calm piano music, or just enjoying some downtime.',
};

export interface Social {
  id: string;
  handle: string;
  href: string;
}

export const socials: Social[] = [
  {
    id: 'website',
    handle: 'nitinranganath.com',
    href: 'https://nitinranganath.com',
  },
  {
    id: 'email',
    handle: 'nitinranganath@gmail.com',
    href: 'mailto:nitinranganath@gmail.com',
  },
  {
    id: 'github',
    handle: 'itsnitinr',
    href: 'https://github.com/itsnitinr',
  },
  {
    id: 'linkedin',
    handle: 'nitinranganath',
    href: 'https://www.linkedin.com/in/nitinranganath/',
  },
  {
    id: 'twitter',
    handle: 'iamnitinr',
    href: 'https://www.twitter.com/iamnitinr',
  },
  {
    id: 'telegram',
    handle: 'iamnitinr',
    href: 'https://t.me/iamnitinr',
  },
  {
    id: 'peerlist',
    handle: 'nitinranganath',
    href: 'https://peerlist.io/nitinranganath',
  },
  {
    id: 'devto',
    handle: 'itsnitinr',
    href: 'https://dev.to/itsnitinr',
  },
];

export const getSocial = (id: string) => socials.find(s => s.id === id);

export interface Experience {
  role: string;
  company?: string;
  period: string;
  highlights?: string[];
  description?: string;
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer 2',
    company: 'Tessact',
    period: 'Present',
    highlights: [
      'Leading frontend development with a lean team of 4 engineers',
      'Building a next-gen video creation suite for professionals',
      'Implemented collaborative video reviewing and editing features',
      'Maintaining in-house component library, icon library and website',
    ],
  },
  {
    role: 'Technical Writer',
    period: 'Freelance',
    description:
      'Contributing to publications like 100ms Blog, LogRocket Blog, and DEV.to.',
  },
];

// Your skills, shown as installed extensions in the Extensions view. Each one
// gets a detail page at /extensions/<id>.
export interface Extension {
  id: string;
  name: string;
  publisher: string;
  category: string;
  icon: IconType;
  // Brand color for the icon
  color: string;
  // One-liner shown in the extensions list
  description: string;
  // Longer write-up shown on the extension's detail page
  details?: string;
  // Shown where VS Code shows the version, e.g. "4 years"
  experience?: string;
}

export const extensions: Extension[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    publisher: 'Ecma International',
    category: 'Languages',
    icon: SiJavascript,
    color: '#f7df1e',
    description: 'The language I started with and still write every day.',
    experience: '5 years',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    publisher: 'Microsoft',
    category: 'Languages',
    icon: SiTypescript,
    color: '#3178c6',
    description: 'My default for anything beyond a quick script.',
    details:
      'I reach for TypeScript on every project, from component libraries to backend services. Strict mode on, types as documentation.',
    experience: '4 years',
  },
  {
    id: 'html-css',
    name: 'HTML/CSS',
    publisher: 'W3C',
    category: 'Languages',
    icon: SiHtml5,
    color: '#e34f26',
    description: 'Semantic markup and layouts that hold up on every screen.',
    experience: '5 years',
  },
  {
    id: 'react',
    name: 'React',
    publisher: 'Meta',
    category: 'Frontend',
    icon: SiReact,
    color: '#61dafb',
    description: 'Building interactive UIs, from video editors to portfolios.',
    details:
      'React is where I spend most of my time. At Tessact I build collaborative video reviewing and editing features with it, and maintain our in-house component library.',
    experience: '4 years',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    publisher: 'Vercel',
    category: 'Frontend',
    icon: SiNextdotjs,
    color: '#ffffff',
    description: 'Full-stack React apps, including this portfolio.',
    experience: '3 years',
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    publisher: 'Tailwind Labs',
    category: 'Frontend',
    icon: SiTailwindcss,
    color: '#06b6d4',
    description: 'Utility-first styling for shipping UI quickly.',
    experience: '3 years',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    publisher: 'OpenJS Foundation',
    category: 'Backend',
    icon: SiNodedotjs,
    color: '#5fa04e',
    description: 'APIs and tooling on the server side of the stack.',
    experience: '4 years',
  },
  {
    id: 'express',
    name: 'Express',
    publisher: 'OpenJS Foundation',
    category: 'Backend',
    icon: SiExpress,
    color: '#ffffff',
    description: 'Minimal, unopinionated REST APIs.',
    experience: '4 years',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    publisher: 'MongoDB Inc.',
    category: 'Backend',
    icon: SiMongodb,
    color: '#47a248',
    description: 'Document storage for MERN stack apps.',
    experience: '3 years',
  },
  {
    id: 'git',
    name: 'Git',
    publisher: 'Software Freedom Conservancy',
    category: 'Tools',
    icon: SiGit,
    color: '#f05032',
    description: 'Version control, rebases and all.',
    experience: '5 years',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    publisher: 'Microsoft',
    category: 'Tools',
    icon: VscVscode,
    color: '#0098ff',
    description: 'Where I spend my days, hence this portfolio.',
    experience: '5 years',
  },
  {
    id: 'figma',
    name: 'Figma',
    publisher: 'Figma',
    category: 'Tools',
    icon: SiFigma,
    color: '#f24e1e',
    description: 'Reading designs and occasionally making them.',
    experience: '3 years',
  },
];

export const getExtension = (id: string) => extensions.find(e => e.id === id);

// Extension names grouped by category, in the order they're listed above
export const skills = extensions.reduce<Record<string, string[]>>(
  (groups, { category, name }) => {
    (groups[category] ??= []).push(name);
    return groups;
  },
  {}
);

export const writing = [
  { name: '100ms Blog', href: 'https://www.100ms.live/blog/author/nitin' },
  {
    name: 'LogRocket Blog',
    href: 'https://blog.logrocket.com/author/nitinranganath/',
  },
  { name: 'DEV.to', href: 'https://dev.to/itsnitinr' },
];

export const projects: Project[] = [
  {
    title: 'Driwwwle',
    description:
      'Discover creative websites and developers. A portal for you to share your projects.',
    logo: '/logos/driwwwle.svg',
    link: 'https://github.com/itsnitinr/driwwwle',
    slug: 'driwwwle',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/itsnitinr/vscode-portfolio',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Subtrackt',
    description:
      'A simple and elegant way to track your subscriptions and save money.',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/itsnitinr/subtrackt',
    slug: 'subtrackt',
  },
  {
    title: 'Coolify Deployments',
    description:
      'VSCode extension to track and deploy your Coolify applications.',
    logo: '/logos/coolify.svg',
    link: 'https://github.com/itsnitinr/coolify-vscode-extension',
    slug: 'coolify-vscode-extension',
  },
];

export interface Route {
  path: string;
  label: string;
  // Activity bar and command palette icon
  icon: IconType;
  // Where the route's icon sits in the activity bar, if at all
  activityBar?: 'top' | 'bottom';
  // Second key of the "G <key>" navigation chord
  shortcut?: string;
  // Routes with a file appear in the explorer and tabs bar
  file?: {
    name: string;
    icon: string;
  };
}

export const routes: Route[] = [
  {
    path: '/',
    label: 'Home',
    icon: VscFiles,
    activityBar: 'top',
    shortcut: 'h',
    file: { name: 'home.tsx', icon: '/logos/react_icon.svg' },
  },
  {
    path: '/about',
    label: 'About',
    icon: VscAccount,
    activityBar: 'bottom',
    shortcut: 'a',
    file: { name: 'about.html', icon: '/logos/html_icon.svg' },
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: VscMail,
    activityBar: 'top',
    shortcut: 'c',
    file: { name: 'contact.css', icon: '/logos/css_icon.svg' },
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: VscCode,
    activityBar: 'top',
    shortcut: 'p',
    file: { name: 'projects.js', icon: '/logos/js_icon.svg' },
  },
  {
    path: '/articles',
    label: 'Articles',
    icon: VscEdit,
    activityBar: 'top',
    shortcut: 'r',
    file: { name: 'articles.json', icon: '/logos/json_icon.svg' },
  },
  {
    path: '/github',
    label: 'GitHub',
    icon: VscGithubAlt,
    activityBar: 'top',
    shortcut: 'g',
    file: { name: 'github.md', icon: '/logos/markdown_icon.svg' },
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: VscSettings,
    activityBar: 'bottom',
    shortcut: 's',
  },
];

export const fileRoutes = routes.filter(
  (route): route is Route & { file: NonNullable<Route['file']> } =>
    route.file !== undefined
);
