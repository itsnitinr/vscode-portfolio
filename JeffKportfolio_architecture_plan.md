# VS Code Portfolio - Technical Architecture & Implementation Plan

## Technical Architecture

### Next.js 15 Stack
```
├── Framework: Next.js 15 (App Router)
├── Styling: Tailwind CSS + CSS Modules for VS Code themes
├── UI Components: Custom components (no heavy libraries)
├── Syntax Highlighting: Prism.js or Shiki (lightweight)
├── Animations: Framer Motion (selective imports)
├── Icons: Lucide React + Custom VS Code icon set
├── Deployment: Vercel (static where possible)
├── Content: Markdown + JSON (Git-based CMS)
└── External APIs: GitHub Public API only
```

### Rendering Strategy
- **Static Generation (SSG)**: All main pages for optimal performance
- **Incremental Static Regeneration (ISR)**: GitHub data (revalidate every hour)
- **Client-side**: Interactive console, file explorer interactions
- **Edge Runtime**: Minimal API routes if needed

### Data Sources
```
├── Static Content
│   ├── /content/projects.json
│   ├── /content/articles.md
│   ├── /content/about.md
│   └── /content/skills.json
├── External APIs
│   └── GitHub Public API (rate limit: 60 req/hour)
└── Client State
    ├── VS Code UI state (tabs, explorer)
    ├── Console interaction history
    └── Theme/animation preferences
```

## Information Architecture & Sitemap

### Page Structure
```
jeffkazzee.dev/
├── / (Home.tsx)
│   ├── Hero with terminal loading
│   ├── Quick overview
│   └── Navigation setup
├── /about (About.html)
│   ├── Personal story & epilepsy context
│   ├── Current skills showcase
│   └── Daily learning mindset
├── /projects (Projects.js)
│   ├── Chat Nexus overview
│   ├── Chroma Kan Ban overview
│   ├── Prompt Vault overview
│   └── Additional project placeholder
├── /contact (Contact.css)
│   ├── Contact methods
│   ├── Availability status
│   └── Social links
├── /articles (Articles.md)
│   ├── Dev insights
│   ├── Learning journey posts
│   └── External article links
└── /github (Github.json)
    ├── Live repository data
    ├── Contribution stats
    └── Recent activity
```

### VS Code Interface Layout
```
┌─────────────────────────────────────────────────────┐
│ Activity Bar │ File Explorer │ Editor Tabs          │
├─────────────┼───────────────┼─────────────────────────┤
│             │ src/          │ ┌─ Home.tsx ─┐ About.html│
│ □ Explorer  │ ├─components/ │ │             │          │
│ ⚡ Extensions│ ├─projects/   │ │ Main Content│          │
│ 🔍 Search   │ ├─articles/   │ │   Area      │          │
│ ⚙️ Settings │ └─github/     │ │             │          │
│             │               │ └─────────────┘          │
├─────────────┴───────────────┴─────────────────────────┤
│ Terminal/Console Panel (Collapsible)                  │
├─────────────────────────────────────────────────────┤
│ Status Bar: Git branch | Problems: 0 | Line 1, Col 1 │
└─────────────────────────────────────────────────────┘
```

## File Structure

### Project Organization
```
portfolio/
├── app/                          # Next.js 15 App Router
│   ├── layout.tsx               # Root layout with VS Code shell
│   ├── page.tsx                 # Home.tsx content
│   ├── about/page.tsx           # About.html content
│   ├── projects/page.tsx        # Projects.js content
│   ├── contact/page.tsx         # Contact.css content
│   ├── articles/page.tsx        # Articles.md content
│   ├── github/page.tsx          # Github.json content
│   ├── globals.css              # Global styles + VS Code theme
│   └── api/
│       └── github/route.ts      # GitHub API proxy (ISR)
├── components/
│   ├── VSCodeLayout/
│   │   ├── ActivityBar.tsx
│   │   ├── FileExplorer.tsx
│   │   ├── TabBar.tsx
│   │   ├── StatusBar.tsx
│   │   └── Terminal.tsx
│   ├── Interactive/
│   │   ├── Console.tsx
│   │   ├── CommandPalette.tsx
│   │   └── GitBlame.tsx
│   ├── Content/
│   │   ├── ProjectCard.tsx
│   │   ├── SyntaxHighlight.tsx
│   │   └── LoadingTerminal.tsx
│   └── UI/
│       ├── Button.tsx
│       └── Icon.tsx
├── content/                     # Git-based CMS
│   ├── projects.json
│   ├── skills.json           # Current skills & learning focus
│   ├── articles.md
│   └── about.md              # Personal story & daily learning
├── lib/
│   ├── github.ts               # GitHub API utilities
│   ├── console-commands.ts     # Interactive console logic
│   └── utils.ts               # General utilities
├── public/
│   ├── icons/                 # VS Code style icons
│   └── project-images/        # Project screenshots
├── styles/
│   ├── vscode-theme.css       # VS Code Dark+ theme
│   └── components.css         # Component-specific styles
└── types/
    ├── github.ts
    └── content.ts
```

## Step-by-Step Implementation Plan

### Phase 1: Foundation Setup (Days 1-2)
1. **Project Initialization**
   - [ ] Create Next.js 15 project with TypeScript
   - [ ] Configure Tailwind CSS with custom VS Code colors
   - [ ] Set up ESLint, Prettier with VS Code integration
   - [ ] Initialize Git repository and connect to GitHub

2. **Basic Layout Structure**
   - [ ] Create root layout with basic VS Code shell
   - [ ] Build static ActivityBar component (no functionality)
   - [ ] Create responsive container structure
   - [ ] Add basic dark theme CSS variables

3. **Deployment Pipeline**
   - [ ] Connect to Vercel for continuous deployment
   - [ ] Configure environment variables
   - [ ] Test basic deployment with placeholder content

### Phase 2: Core VS Code Interface (Days 3-4)
4. **File Explorer Component**
   - [ ] Create collapsible folder structure
   - [ ] Add file icons with proper extensions
   - [ ] Implement hover states and selection
   - [ ] Add responsive behavior for mobile

5. **Tab System**
   - [ ] Build tab bar with file extension labels
   - [ ] Implement active/inactive tab states
   - [ ] Add tab close buttons (visual only)
   - [ ] Handle tab overflow on smaller screens

6. **Status Bar**
   - [ ] Create bottom status bar with Git info
   - [ ] Add problem count and cursor position
   - [ ] Include useful developer stats
   - [ ] Make responsive for mobile

### Phase 3: Content Pages (Days 5-7)
7. **Home Page (Home.tsx)**
   - [ ] Create hero section with typed animation
   - [ ] Add syntax highlighting for React code
   - [ ] Include console.log statements with personality
   - [ ] Add quick navigation/overview

8. **About Page (About.html)**
   - [ ] Structure content as semantic HTML
   - [ ] List current skills and technologies
   - [ ] Include learning mindset and daily experimentation
   - [ ] Add epilepsy context and recent coding journey

9. **Projects Page (Projects.js)**
   - [ ] Create JavaScript object structure for projects
   - [ ] Build project cards with hover effects
   - [ ] Add tech stack arrays and links
   - [ ] Include "debugging" tooltips

### Phase 4: Interactive Features (Days 8-10)
10. **Loading Terminal Animation**
    - [ ] Create realistic boot sequence
    - [ ] Add git clone, npm install commands
    - [ ] Include ASCII art and easter eggs
    - [ ] Make skippable for return visitors

11. **Interactive Console**
    - [ ] Build terminal panel component
    - [ ] Implement basic command system
    - [ ] Add commands like jeff.getSkills()
    - [ ] Include command history and autocomplete

12. **Command Palette**
    - [ ] Create Cmd+P search functionality
    - [ ] Add fuzzy search for navigation
    - [ ] Style like VS Code command palette
    - [ ] Include keyboard shortcuts

### Phase 5: Content Integration (Days 11-12)
13. **Content Management Setup**
    - [ ] Create JSON/Markdown content structure
    - [ ] Build content loading utilities
    - [ ] Add TypeScript types for content
    - [ ] Test content updates via Git

14. **GitHub Integration**
    - [ ] Set up GitHub API client
    - [ ] Create ISR for repository data
    - [ ] Add error handling and fallbacks
    - [ ] Display live stats and activity

15. **Article System**
    - [ ] Create markdown rendering system
    - [ ] Add syntax highlighting for code blocks
    - [ ] Style as VS Code markdown preview
    - [ ] Include external article links

### Phase 6: Polish & Features (Days 13-15)
16. **Advanced Interactions**
    - [ ] Add Git Blame tooltips on hover
    - [ ] Create Extensions panel mockup
    - [ ] Build Problems panel with achievements
    - [ ] Add Minimap for long pages

17. **Performance Optimization**
    - [ ] Implement code splitting for heavy features
    - [ ] Optimize images and fonts
    - [ ] Add loading states for API calls
    - [ ] Test and optimize Core Web Vitals

18. **Mobile Experience**
    - [ ] Create mobile-friendly VS Code layout
    - [ ] Add touch gestures for file explorer
    - [ ] Optimize terminal for mobile
    - [ ] Test across devices

### Phase 7: Content & Testing (Days 16-17)
19. **Content Creation**
    - [ ] Write all page content
    - [ ] Add project descriptions and links
    - [ ] Create article content
    - [ ] Add personal story and skills

20. **Quality Assurance**
    - [ ] Test all interactive features
    - [ ] Verify GitHub API integration
    - [ ] Check responsive design
    - [ ] Test accessibility features

21. **SEO & Meta**
    - [ ] Add proper meta tags and Open Graph
    - [ ] Create sitemap.xml
    - [ ] Add structured data
    - [ ] Optimize for search engines

### Phase 8: Launch Prep (Day 18)
22. **Final Deployment**
    - [ ] Domain setup and SSL
    - [ ] Final performance audit
    - [ ] Analytics setup (optional)
    - [ ] Launch and share!

## Cost Optimization Strategies

### Free Tier Maximization
- **Vercel Free**: Unlimited static deployments, 100GB bandwidth
- **GitHub Free**: Public repositories, Actions minutes
- **GitHub API**: 60 requests/hour without auth (sufficient for portfolio)
- **Next.js ISR**: Minimize API calls with smart caching

### Performance Budget
- **Bundle Size**: Target <100KB initial load
- **API Calls**: <10 GitHub API calls per visitor
- **Images**: Next.js Image optimization, WebP format
- **Fonts**: System fonts with web font enhancement

### Development Efficiency
- **Component Reuse**: Build modular, reusable components
- **Progressive Enhancement**: Start simple, add features incrementally
- **No Premium Tools**: Use free alternatives (Prism.js vs paid syntax highlighters)
- **Static Content**: Maximize static generation, minimize runtime

## Best Practices for Next.js 15

### App Router Patterns
```typescript
// app/layout.tsx - Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <VSCodeLayout>{children}</VSCodeLayout>
      </body>
    </html>
  )
}

// app/projects/page.tsx - Static page
export default function ProjectsPage() {
  return <ProjectsContent />
}

// app/github/page.tsx - ISR page
export const revalidate = 3600 // 1 hour

export default async function GitHubPage() {
  const data = await getGitHubData()
  return <GitHubContent data={data} />
}
```

### Performance Optimization
```typescript
// Dynamic imports for heavy features
const Console = dynamic(() => import('@/components/Console'), {
  loading: () => <div>Loading terminal...</div>
})

// Image optimization
import Image from 'next/image'
<Image
  src="/project-screenshot.jpg"
  alt="Project screenshot"
  width={400}
  height={300}
  priority={false}
/>
```

### Type Safety
```typescript
// types/content.ts
export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  liveUrl: string
  githubUrl: string
}

// lib/content.ts
export async function getProjects(): Promise<Project[]> {
  // Type-safe content loading
}
```

This implementation plan breaks the portfolio into manageable, testable chunks while maintaining focus on the core VS Code experience that makes it unique. Each phase delivers working functionality that can be deployed and tested independently.