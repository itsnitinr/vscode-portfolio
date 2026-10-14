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

export const skills: Record<string, string[]> = {
  Languages: ['JavaScript', 'TypeScript', 'HTML/CSS'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'MongoDB'],
  Tools: ['Git', 'VS Code', 'Figma'],
};

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
