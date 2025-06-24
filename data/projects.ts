export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Chat Nexus',
    description:
      'Free AI chat application using OpenRouter API. Built with React and modern web technologies for seamless AI conversations.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/Jeff-Kazzee/Personal-Portfolio',
    slug: 'chat-nexus',
  },
  {
    title: 'Chroma Kan Ban',
    description:
      'Beautiful project tracking and management tool with a colorful, intuitive interface. Built with Next.js and TypeScript.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/Jeff-Kazzee/Personal-Portfolio',
    slug: 'chroma-kan-ban',
  },
  {
    title: 'Prompt Vault',
    description:
      'AI prompt sharing and storage platform. Save, organize, and share your best prompts with the community.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/Jeff-Kazzee/Personal-Portfolio',
    slug: 'prompt-vault',
  },
  {
    title: 'VS Code Portfolio',
    description:
      'This portfolio! A Visual Studio Code themed developer portfolio showcasing my projects and skills.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/Jeff-Kazzee/Personal-Portfolio',
    slug: 'vscode-portfolio',
  },
];
