# PR Breakdown Plan

## Current Status
The current PR has over 1000 changes, which is too large. We'll break it into smaller, focused PRs.

## Recommended PR Structure

### PR 1: Personal Information Update (Priority 1)
**Branch:** `feature/personal-info-update`
**Files to include:**
- `components/Head.tsx` - SEO meta information
- `components/Titlebar.tsx` - Name in title bar
- `components/Bottombar.tsx` - GitHub repo link
- `components/ContactCode.tsx` - Contact information
- `pages/index.tsx` - Home page personal info
- `pages/about.tsx` - About page content
- `styles/AboutPage.module.css` - About page styling for profile image
- `pages/github.tsx` - GitHub avatar update
- `data/projects.ts` - Your projects
- `public/jeff-k-animated.png` - Your avatar
- `public/jeff-k-photo.png` - Your photo
- `.env.example` - Updated username

### PR 2: CI/CD Pipeline Setup (Priority 2)
**Branch:** `feature/cicd-pipeline`
**Files to include:**
- `.github/workflows/ci-cd.yml`
- `.github/workflows/branch-protection.yml`
- `.github/auto-assign.yml`
- `.commitlintrc.json`
- `lighthouse-budget.json`
- `package.json` (commitlint dependencies only)

### PR 3: Documentation (Priority 3)
**Branch:** `feature/documentation`
**Files to include:**
- `CLAUDE.md`
- `JeffKazzee'svscode_portfolio_prd.md`
- `JeffKdev_portfolio_style_guide.md`
- `JeffKportfolio_architecture_plan.md`
- `README.md` (updates)

### PR 4: Code Quality & Fixes (Priority 4)
**Branch:** `feature/code-quality`
**Files to include:**
- All remaining style updates
- All remaining component updates
- Package updates not related to CI/CD

## Steps to Execute

1. **Close current PR** with a comment explaining the breakdown
2. **Create PR 1** (Personal Info):
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/personal-info-update
   # Cherry-pick or manually apply only personal info changes
   git push -u origin feature/personal-info-update
   ```

3. **After PR 1 is merged**, create PR 2 (CI/CD):
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/cicd-pipeline
   # Add CI/CD files
   git push -u origin feature/cicd-pipeline
   ```

4. **Continue with PR 3 and PR 4** after previous PRs are merged

## Benefits
- Easier code review
- Faster CI/CD checks
- Can merge personal info immediately
- Can test each feature independently
- Follows best practices for PR size