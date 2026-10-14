# vscode-portfolio
[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://vscode.dev/github/itsnitinr/vscode-portfolio)

A Visual Studio Code themed developer portfolio website built with Next.js and deployed on Vercel.

![vscode-portfolio banner](https://imgur.com/JXJ9mpO.gif)

## Features Roadmap

- [ ] Themes and customizations
  - [x] GitHub Dark (default)
  - [ ] One Dark Pro
  - [x] Dracula
  - [x] Ayu Dark
  - [x] Ayu Mirage
  - [x] Nord
  - [x] Night Owl
- [x] Interactive custom terminal

For other features and themes suggestions, please open an issue.

## Environment Variables

Copy `.env.example` to `.env.local` inside the project directory and fill in the values:

- `DEV_TO_API_KEY`: your dev.to API key, used to fetch your articles.
- `GITHUB_API_KEY`: optional GitHub token. When set, GitHub API requests are authenticated, which raises the rate limit above 60 requests per hour.
- `NEXT_PUBLIC_GITHUB_USERNAME`: the GitHub username shown on the GitHub page.

## Running Development Server

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Making It Your Own

Your personal details live in `portfolio.config.ts` at the project root. Edit it to change:

- `profile`: your name, role, location, bio, site URL and SEO metadata.
- `socials`: the links shown on the Contact page and in the terminal's `contact` command.
- `experience` and `writing`: sections of the About page.
- `extensions`: your skills, shown as installed extensions in the Extensions view (Ctrl+Shift+X), each with its own detail page. The About page's skills section and the terminal's `skills` command are generated from this list.
- `projects`: the cards on the Projects page.
- `routes`: the pages of the site. Each route sets its icon and, optionally, where it sits in the activity bar, its `G <key>` keyboard shortcut, and the file name and icon it shows in the explorer and tabs bar.

To add a page, create `app/<route>/page.tsx` and add an entry to `routes`. The explorer, tabs, activity bar, command palette and terminal pick it up automatically.

All VS Code related components can be found in the `components` folder.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
