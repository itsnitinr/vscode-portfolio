export interface ThemeInfo {
  name: string;
  theme: string;
  icon: string;
  publisher: string;
}

export const THEMES: ThemeInfo[] = [
  {
    name: 'GitHub Dark',
    theme: 'github-dark',
    icon: '/themes/github-dark.png',
    publisher: 'GitHub',
  },
  {
    name: 'Dracula',
    theme: 'dracula',
    icon: '/themes/dracula.png',
    publisher: 'Dracula Theme',
  },
  {
    name: 'Ayu Dark',
    theme: 'ayu-dark',
    icon: '/themes/ayu.png',
    publisher: 'teabyii',
  },
  {
    name: 'Ayu Mirage',
    theme: 'ayu-mirage',
    icon: '/themes/ayu.png',
    publisher: 'teabyii',
  },
  {
    name: 'Nord',
    theme: 'nord',
    icon: '/themes/nord.png',
    publisher: 'arcticicestudio',
  },
  {
    name: 'Night Owl',
    theme: 'night-owl',
    icon: '/themes/night-owl.png',
    publisher: 'sarah.drasner',
  },
];

export const THEME_KEYS = THEMES.map(t => t.theme) as [string, ...string[]];
