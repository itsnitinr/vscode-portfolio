export interface Project {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Driwwwle',
    thumbnail: 'https://imgur.com/kbGs6zH.png',
    description: 'A platform for web developers to showcase their projects',
    tags: ['next', 'node', 'mongodb', 'tailwind', 'react-query'],
    githubLink: 'https://github.com/itsnitinr/driwwwle-v2',
    demoLink: 'https://driwwwle.com/',
  },
  {
    id: 2,
    name: 'PCB Cupid',
    thumbnail: 'https://imgur.com/tAZotn3.png',
    description: 'E-commerce website for a PCB manufacturing company',
    tags: ['react', 'node', 'mongodb', 'redux', 'razorpay', 'material-ui'],
    githubLink: 'https://github.com/itsnitinr/pcb-cupid',
    demoLink: 'https://www.pcbcupid.com/',
  },
  {
    id: 3,
    name: 'HealthyWays',
    thumbnail: 'https://imgur.com/8FFqaX8.png',
    description: 'A food ordering platform for healthy and home-cooked meals',
    tags: ['react', 'node', 'mongodb', 'redux', 'razorpay', 'material-ui'],
    githubLink: 'https://github.com/itsnitinr/healthyways',
    demoLink: 'https://healthyways.herokuapp.com/',
  },
  {
    id: 4,
    name: 'VSCode Portfolio',
    thumbnail: 'https://imgur.com/mKkz0iz.png',
    description:
      'A themeable and developer-centric portfolio based on the VSCode',
    tags: ['next', 'css-modules'],
    githubLink: 'https://github.com/itsnitinr/vscode-portfolio',
    demoLink: 'http://vscode-portfolio.vercel.app/',
  },
];
