# 🚀 Prototype Factory

Rapidly build clickable prototypes with pre-built components that match our design system. 

**Zero engineering setup required** — just clone, install, and start prototyping.

---

## Quick Start

```bash
# 1. Clone the template
git clone https://github.com/yourusername/prototype-factory.git my-prototype
cd my-prototype

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open http://localhost:3000
```

> Replace `yourusername` with your actual GitHub username after publishing.

That's it! Start editing `src/app/page.tsx` or create a new page.

---

## Create a New Prototype

```bash
npm run new:page my-feature-name
```

This creates `src/app/my-feature-name/page.tsx` with boilerplate ready to customize.

---

## Project Structure

```
├── .cursor/
│   └── rules              # AI instructions for Cursor
├── docs/
│   ├── COMPONENTS.md      # Component API reference
│   └── PATTERNS.md        # Copy-paste UI patterns
├── src/
│   ├── app/               # Pages (Next.js App Router)
│   │   ├── page.tsx       # Homepage
│   │   └── examples/      # Example prototypes
│   ├── components/
│   │   └── ui/            # UI component library
│   └── lib/
│       └── utils.ts       # Utility functions
└── tailwind.config.ts     # Design tokens
```

---

## Design System

This template uses the **Hawkins Design System** with:
- **RGB-based color tokens** for maximum flexibility
- **Semantic naming** (surface, foreground, border systems)
- **shadcn/ui compatibility** - add any shadcn component easily
- **Full light/dark mode** support

### Using Components

Built-in components:
```tsx
import { Button, Card, Stack, Text, Input, Badge } from '@/components/ui'
```

Add shadcn/ui components:
```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

Browse all shadcn components: [ui.shadcn.com](https://ui.shadcn.com)

See `docs/COMPONENTS.md` for full API reference.

---

## Theme Toggle

Click the moon/sun icon in the top-right corner to toggle dark mode. All components automatically adapt.

---

## Deployment (Designer-Friendly)

**Save your work** (auto-deploys to live site):
```bash
npm run save
```

**Create a version** (permanent snapshot with unique URL):
```bash
npm run publish
```

**First time?** See the full [Deployment Guide](DEPLOYMENT.md) for step-by-step setup (15 min, one-time)

---

## Using with Cursor AI

This template is optimized for AI-assisted prototyping. The `.cursor/rules` file teaches the AI to:

- ✅ Use the local component library correctly
- ✅ Follow design system patterns
- ✅ Support light/dark themes
- ✅ Create well-structured pages

### Example Prompts

```
"Create a settings page with user profile form"
"Add a notification dropdown to the header"  
"Build a data table with sorting and filtering"
"Create a modal flow for onboarding"
```

---

## Resources

- **Components:** `docs/COMPONENTS.md`
- **Patterns:** `docs/PATTERNS.md`  
- **Examples:** `src/app/examples/`
- **Icons:** [lucide.dev/icons](https://lucide.dev/icons)

---

## Tips

1. **Start with examples** — copy from `examples/` and modify
2. **Use mock data** — define test data at the top of your page
3. **Check both themes** — always verify light and dark mode
4. **Keep it scrappy** — this is prototyping, speed > perfection

---

Built for rapid prototyping. Not for production.
