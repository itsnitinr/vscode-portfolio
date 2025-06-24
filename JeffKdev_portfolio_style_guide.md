# Interactive VS Code Portfolio Style Guide

## Color Palette

### Primary Colors
* **Primary Dark** - `#1E1E1E` (Main background, VS Code editor background)
* **Primary Teal** - `#00D9FF` (Brand color, active tabs, navigation highlights, interactive states)
* **Primary Coral** - `#FF6B47` (Console outputs, call-to-action elements, hover states, achievements)

### Secondary Colors
* **Secondary Dark Gray** - `#252526` (File explorer background, inactive panels)
* **Secondary Medium Gray** - `#3C3C3C` (Borders, dividers, tab backgrounds)
* **Secondary Light Gray** - `#4D4D4D` (Hover states, disabled elements)

### Interactive Element Colors
* **Active Tab** - `#2D2D30` (Currently selected file tab background)
* **Hover State** - `#FF8C42` (Button and link hover effects)
* **Focus Ring** - `#00D9FF` (Keyboard focus indicators)
* **Success State** - `#4CAF50` (Terminal success commands, git operations)

### Text Colors
* **Primary Text** - `#CCCCCC` (Main content, file names, standard code)
* **Secondary Text** - `#969696` (Comments, metadata, timestamps)
* **Bright Text** - `#FFFFFF` (Headings, active elements, important information)
* **Link Text** - `#00D9FF` (Clickable elements, external links)
* **Console Text** - `#FF6B47` (Console outputs, interactive command responses)

### Syntax Highlighting Colors (VS Code Dark+ Theme)
* **Keywords** - `#569CD6` (function, const, let, return)
* **Strings** - `#CE9178` (Text content, file paths)
* **Variables** - `#9CDCFE` (User-defined names, properties)
* **Comments** - `#6A9955` (Code comments, documentation)
* **Numbers** - `#B5CEA8` (Numeric values, dates)
* **Functions** - `#DCDCAA` (Function names, method calls)
* **Types** - `#4EC9B0` (TypeScript types, interfaces)
* **Operators** - `#D4D4D4` (=, +, -, {}, [])

### Background Variations
* **Deep Black** - `#0D1117` (Terminal background, loading screens)
* **Card Background** - `#21262D` (Project cards, elevated content)
* **Panel Background** - `#161B22` (Side panels, secondary areas)
* **Terminal Background** - `#1A1A1A` (Console panel, debug output)

## Typography

### Font Family
* **Primary Font**: 'Fira Code', 'SF Mono', 'Cascadia Code', 'Consolas', monospace
* **Fallback Font**: 'JetBrains Mono', 'Source Code Pro', monospace
* **UI Font**: 'Segoe UI', 'SF Pro Text', system-ui, sans-serif (for non-code elements)

### Font Weights
* **Light**: 300 (comments, secondary text)
* **Regular**: 400 (standard code, body text)
* **Medium**: 500 (file names, navigation)
* **Semibold**: 600 (headings, important code)
* **Bold**: 700 (major headings, terminal prompts)

### Text Styles

#### Code Editor Content
* **Terminal Prompt**: 16px/24px, Bold, Color: `#00D9FF`
  * Used for command prompts and interactive console
* **Code Syntax**: 14px/20px, Regular, Fira Code
  * All syntax-highlighted content with proper token colors
* **File Names**: 14px/20px, Medium, Color: `#CCCCCC`
  * File explorer items, tab labels
* **Comments**: 14px/20px, Regular, Color: `#6A9955`, Italic
  * Code comments and documentation

#### UI Elements
* **Hero Title**: 72px/80px, Bold, Transform: uppercase, Color: `#FFFFFF`
  * Main portfolio branding
* **Section Headers**: 24px/32px, Semibold, Color: `#FF6B47`
  * "My Projects", "About Me" section titles
* **Tab Labels**: 13px/20px, Medium, Color: `#CCCCCC`
  * File extension tabs (Home.tsx, About.html, etc.)
* **Status Bar**: 12px/18px, Regular, Color: `#969696`
  * Bottom status information, git branch, stats

#### Interactive Text
* **Console Commands**: 14px/20px, Regular, Fira Code, Color: `#00D9FF`
  * User-input commands like jeff.getSkills()
* **Console Output**: 14px/20px, Regular, Fira Code, Color: `#FF6B47`
  * Command responses and function returns
* **Button Text**: 14px/20px, Medium, Color: `#FFFFFF`
  * Interactive button labels

## Component Styling

### VS Code Interface Elements

#### File Explorer
* **Background**: `#252526`
* **Width**: 280px (collapsible to 60px icon-only)
* **File Icons**: 16px x 16px with file-type specific colors
* **Folder Icons**: 16px x 16px with expand/collapse states
* **Hover Effect**: Background `#2A2D2E`, transition 150ms
* **Active File**: Background `#37373D` with left border `#00D9FF` 3px

#### Tab Bar
* **Background**: `#2D2D30`
* **Tab Height**: 32px
* **Active Tab**: Background `#1E1E1E`, border-top `#00D9FF` 2px
* **Inactive Tab**: Background `#2D2D30`, opacity 0.7
* **Tab Close Button**: 16px x 16px, opacity 0.6, hover opacity 1.0
* **Dirty Indicator**: Orange dot for "unsaved" changes

#### Terminal Panel
* **Background**: `#1A1A1A`
* **Height**: 200px (resizable)
* **Border**: Top 1px solid `#3C3C3C`
* **Prompt Symbol**: `$` or `>` in teal
* **Scrollbar**: Custom styled to match VS Code

#### Status Bar
* **Background**: `#007ACC`
* **Height**: 24px
* **Text Color**: `#FFFFFF`
* **Sections**: Git branch, line count, language mode, problems count
* **Interactive Elements**: Hover background `#005a9e`

### Interactive Components

#### Console Panel Commands
* **Input Background**: Transparent
* **Input Border**: None
* **Input Color**: `#00D9FF`
* **Output Color**: `#FF6B47`
* **Error Color**: `#F44747`
* **Success Color**: `#4CAF50`
* **Autocomplete**: Background `#252526`, border `#3C3C3C`

#### Search/Command Palette
* **Background**: `#252526`
* **Border**: 1px solid `#3C3C3C`
* **Corner Radius**: 6px
* **Width**: 600px (centered)
* **Input**: Background `#1E1E1E`, border `#00D9FF` when focused
* **Results**: Hover background `#2A2D2E`

#### Project Cards
* **Background**: `#21262D`
* **Border**: 1px solid `#3C3C3C`
* **Corner Radius**: 8px
* **Padding**: 20px
* **Hover Effect**: 
  * Border color changes to `#FF6B47`
  * Slight scale transform (1.02)
  * Box shadow: 0 8px 24px rgba(255, 107, 71, 0.1)

#### Buttons
* **Primary Button**
  * Background: `#FF6B47`
  * Text: `#FFFFFF`
  * Height: 36px
  * Corner Radius: 4px
  * Hover: Background `#E55A40`

* **Secondary Button**
  * Background: Transparent
  * Border: 1px solid `#00D9FF`
  * Text: `#00D9FF`
  * Hover: Background `#00D9FF`, Text `#1E1E1E`

* **Icon Button**
  * Background: Transparent
  * Size: 28px x 28px
  * Hover: Background `#2A2D2E`

### Loading States and Animations

#### Terminal Boot Sequence
* **Command Speed**: 50ms per character
* **Cursor**: Blinking block cursor `#CCCCCC`
* **Success Commands**: Green checkmarks with 200ms delay
* **Progress Dots**: Animated ellipsis for operations

#### Page Transitions
* **File Tab Switch**: 200ms ease-out with content fade
* **Panel Slide**: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
* **Hover States**: 150ms ease-in-out

#### Microinteractions
* **File Icon Bounce**: Subtle 100ms scale on click
* **Syntax Highlighting**: Progressive revelation, 50ms per token
* **Console Type Effect**: Character-by-character reveal

## Layout System

### VS Code Layout Structure
* **Activity Bar**: 48px width (left edge icons)
* **File Explorer**: 280px width (collapsible)
* **Editor Area**: Flexible width (main content)
* **Panel Area**: 200px height (terminal/console)
* **Status Bar**: 24px height (bottom info)

### Responsive Breakpoints
* **Desktop**: 1200px+ (full VS Code layout)
* **Laptop**: 1024px - 1199px (compressed panels)
* **Tablet**: 768px - 1023px (collapsible sidebar)
* **Mobile**: 767px and below (stacked layout, bottom tabs)

### Grid System
* **Container**: Max-width 1400px
* **Gutters**: 16px between elements
* **Panel Spacing**: 8px internal padding
* **Content Spacing**: 20px between major sections

## Interactive Features Styling

### Git Blame Tooltips
* **Background**: `#252526`
* **Border**: 1px solid `#3C3C3C`
* **Corner Radius**: 4px
* **Text**: 12px/16px, `#CCCCCC`
* **Arrow**: CSS triangle in matching border color

### Extensions Panel
* **Item Height**: 44px
* **Icon Size**: 24px x 24px
* **Rating Stars**: `#FF6B47` active, `#3C3C3C` inactive
* **Install Button**: Styled as VS Code marketplace

### Problems Panel
* **Error Icons**: `#F44747` with warning triangle
* **Warning Icons**: `#FFCC02` with exclamation
* **Info Icons**: `#007ACC` with info symbol
* **Line Height**: 24px for easy scanning

### Minimap
* **Background**: `#1E1E1E`
* **Width**: 120px
* **Visible Area**: `#3C3C3C` overlay
* **Scroll Thumb**: `#969696` with hover state

## Accessibility Considerations

### Keyboard Navigation
* **Focus Indicators**: 2px solid `#00D9FF` outline
* **Tab Order**: Logical flow through VS Code elements
* **Escape Key**: Closes overlays and command palette
* **Arrow Keys**: Navigate file explorer and command results

### Screen Reader Support
* **Landmark Roles**: main, navigation, complementary
* **ARIA Labels**: Descriptive labels for all interactive elements
* **Live Regions**: For dynamic console output and status updates
* **Skip Links**: Hidden navigation for screen readers

### Contrast Ratios
* **Text on Dark Background**: Minimum 7:1 ratio (AAA compliant)
* **Interactive Elements**: Minimum 4.5:1 ratio
* **Focus States**: High contrast borders and outlines

## Performance Optimizations

### Code Splitting
* **Route-based**: Each "file" loads independently
* **Component-based**: Heavy features load on demand
* **Syntax Highlighting**: Lazy load language definitions

### Asset Loading
* **Font Display**: swap for faster text rendering
* **Image Optimization**: Next.js Image component with WebP
* **Icon Sprites**: SVG sprite sheets for VS Code icons

### Animation Performance
* **GPU Acceleration**: Transform and opacity only
* **Reduced Motion**: Respect prefers-reduced-motion
* **60fps Targets**: All animations optimized for smooth performance

This style guide creates a cohesive VS Code experience that's both authentic to the development environment and optimized for portfolio presentation, ensuring every visual element reinforces Jeff's technical expertise while maintaining professional polish.