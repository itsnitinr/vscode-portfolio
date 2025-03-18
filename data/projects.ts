export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

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
