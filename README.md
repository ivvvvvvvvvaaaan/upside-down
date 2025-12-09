# Prototype Factory

Build clickable prototypes with pre-built components. Uses the Hawkins Design System with full light/dark mode support.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Creating Pages

Run the interactive generator:
```bash
npm run new:page
```

Or provide arguments directly:
```bash
npm run new:page feature-name -- --type=gallery
```

**Available Templates:**
- `search` - Centralized search center
- `gallery` - Media collection with Grid/List toggle
- `manager` - File manager with tree view
- `empty` - Blank canvas


## Components

Import from `@/components/ui`:
```tsx
import { Button, Card, Stack, Text, Input, Badge } from '@/components/ui'
```

Add more components:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add tabs
```

Browse all: [ui.shadcn.com](https://ui.shadcn.com)

## Theme System

- **Light/dark mode:** Toggle in top-right corner
- **Color reference:** See `THEME_SYSTEM.md`
- **Component docs:** See `docs/COMPONENTS.md`
- **Code patterns:** See `docs/PATTERNS.md`

## Deployment

**Save & deploy:**
```bash
npm run save
```

**Create version snapshot:**
```bash
npm run publish
```

**First time setup:** See `DEPLOYMENT.md`

## File Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   └── [feature]/         # Your pages
├── components/ui/         # Component library
└── lib/utils.ts          # Utilities
```

## Resources

- Icons: [lucide.dev/icons](https://lucide.dev/icons)
- Components: `docs/COMPONENTS.md`
- Patterns: `docs/PATTERNS.md`
- Theme: `THEME_SYSTEM.md`
