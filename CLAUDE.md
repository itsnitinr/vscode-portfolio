# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Jeff K's personal portfolio website built to mimic the VS Code interface. It's a Next.js application with TypeScript that showcases projects, skills, and provides an interactive developer experience.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint to check code quality

# Git workflow
git checkout -b feature/[feature-name]    # Create feature branch
git checkout -b bugfix/[bug-name]         # Create bugfix branch
git push -u origin [branch-name]          # Push new branch to remote

# Testing changes
npm run build && npm run start            # Test production build locally
```

## Architecture & Structure

### Tech Stack
- **Next.js 15.2.3** with Pages Router (not App Router)
- **React 19.0.0** 
- **TypeScript** for type safety
- **CSS Modules** for component-scoped styling
- **GitHub API** integration for live data
- **Dev.to API** integration for blog articles

### Key Design Patterns

1. **VS Code Theme System**: 
   - Multiple themes defined in `styles/themes.css` using CSS variables
   - Theme persistence via localStorage
   - Theme switcher in settings page

2. **Component Architecture**:
   - Layout components wrap content and provide VS Code UI structure
   - Page components represent "files" in the editor
   - Each component has its own CSS module for styling

3. **Data Flow**:
   - Static data in `data/` directory (projects, skills)
   - Dynamic data fetched via `getStaticProps` with ISR
   - Environment variables for API configuration

### Project-Specific Conventions

1. **File Naming**: 
   - Components: PascalCase (e.g., `ProjectCard.tsx`)
   - Styles: Same name with `.module.css` (e.g., `ProjectCard.module.css`)
   - Pages represent file types: `Home.tsx`, `About.html`, `Projects.js`, etc.

2. **VS Code UI Implementation**:
   - Titlebar, Sidebar, Explorer, Tabsbar, and Bottombar recreate VS Code interface
   - Each "file" in the portfolio is a tab that can be opened/closed
   - File icons match VS Code's file type associations

3. **Responsive Design**:
   - Mobile-first approach with breakpoints at 600px, 768px, 1200px
   - VS Code layout adapts to mobile with collapsible panels

## Environment Configuration

Create `.env.local` with:
```
NEXT_PUBLIC_GITHUB_USERNAME=Jeff-Kazzee
DEV_TO_API_KEY=[your-dev-to-api-key]
GITHUB_API_KEY=[your-github-personal-access-token]
```

## CI/CD Pipeline

The project uses GitHub Actions for CI/CD with:
- Linting and type checking on every push
- Build verification 
- Lighthouse performance checks on PRs
- Automatic deployment to Vercel
- Branch protection rules

## Key Features from PRD

1. **Interactive Console** (To be implemented):
   - Commands like `jeff.getSkills()`, `jeff.getProjects()`
   - Terminal-style interface in the bottom panel

2. **Command Palette** (To be implemented):
   - Cmd/Ctrl + P for quick navigation
   - Fuzzy search across all content

3. **Loading Animation** (To be implemented):
   - Terminal boot sequence showing git clone, npm install, etc.

4. **GitHub Integration** (Implemented):
   - Live repository data
   - Contribution calendar
   - Repository statistics

## Performance Considerations

- Images optimized with Next.js Image component
- Lazy loading for non-critical components
- ISR (Incremental Static Regeneration) for GitHub data
- Minimal bundle size with selective imports

## Deployment

The project is configured for Vercel deployment with:
- Automatic deployments from main branch
- Preview deployments for PRs
- Environment variables configured in Vercel dashboard
- Custom domain: jeffk.dev (to be configured)

## Important Notes

- Always test responsive design, especially the VS Code layout on mobile
- Maintain the authentic VS Code look and feel
- Follow the established component patterns
- Update this file when adding major architectural changes