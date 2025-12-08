# Hawkins Design System - Theme Reference

This template uses the **Hawkins Design System** - a professional RGB-based color system with semantic naming.

## Color System

### Surface Colors (Backgrounds)
Use these for backgrounds and cards:

```tsx
// Numbered scale (0 = lightest, 6 = darkest in light mode)
className="bg-surface-0"  // Pure white (light) / Darkest (dark)
className="bg-surface-1"  // Off-white / Very dark
className="bg-surface-2"  // Light gray / Dark gray
className="bg-surface-3"  // Medium gray
className="bg-surface-4"  // Dark gray / Light gray
className="bg-surface-5"  // Very dark / Off-white
className="bg-surface-6"  // Black (light) / White (dark)

// Elevation variants
className="bg-surface-flat"      // Flat surface
className="bg-surface-low"       // Subtle elevation
className="bg-surface-mid"       // Medium elevation
className="bg-surface-high"      // High elevation
className="bg-surface-highlight" // Hover states
className="bg-surface-overlay"   // Modal overlays
```

### Foreground Colors (Text)
Use these for text and icons:

```tsx
className="text-foreground"        // Primary text (90% opacity)
className="text-foreground-dim"    // Secondary text (60% opacity)
className="text-foreground-subtle" // Tertiary text (70% opacity)

// System colors
className="text-foreground-system-error"   // Error red
className="text-foreground-system-success" // Success green
className="text-foreground-system-warning" // Warning yellow
className="text-foreground-system-link"    // Link blue
```

### Border Colors
Use these for borders and dividers:

```tsx
className="border-border"         // Default border
className="border-border-dim"     // Subtle border (20% opacity)
className="border-border-subtle"  // Medium border (40% opacity)

// System borders
className="border-border-system-error"   // Error state
className="border-border-system-success" // Success state
className="border-border-system-warning" // Warning state
className="border-border-system-focus"   // Focus ring (indigo)
```

### Brand Colors
Full color scales available:

```tsx
// Indigo (Primary brand color)
className="bg-indigo-500 text-white"

// Red (Errors, destructive actions)
className="bg-red-500 text-white"

// Green (Success states)
className="bg-green-500 text-white"

// Yellow (Warnings)
className="bg-yellow-500 text-black"

// Blue (Information)
className="bg-blue-500 text-white"

// Purple (Accents)
className="bg-purple-500 text-white"

// Gray (Neutrals)
className="bg-gray-500 text-white"
```

Each color has variants: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

### Semantic Colors
Pre-configured for common use cases:

```tsx
// Primary actions (indigo-500)
className="bg-primary text-primary-foreground"

// Secondary actions
className="bg-secondary text-secondary-foreground"

// Destructive actions (red)
className="bg-destructive text-destructive-foreground"

// Muted backgrounds
className="bg-muted text-muted-foreground"

// Accent highlights
className="bg-accent text-accent-foreground"
```

## Shadow System

```tsx
className="shadow-flat"  // No shadow
className="shadow-low"   // Subtle shadow
className="shadow-mid"   // Medium shadow
className="shadow-high"  // Dramatic shadow
```

## Typography Scale

```tsx
className="text-xs"      // 10px / 15px line-height
className="text-sm"      // 12px / 18px
className="text-base"    // 13px / 20px (default)
className="text-lg"      // 14px / 21px
className="text-xl"      // 16px / 24px
className="text-2xl"     // 18px / 23px
className="text-3xl"     // 20px / 25px
className="text-4xl"     // 24px / 30px
className="text-5xl"     // 28px / 35px
className="text-6xl"     // 32px / 40px
className="text-7xl"     // 40px / 50px
className="text-8xl"     // 52px / 65px
className="text-9xl"     // 68px / 85px
className="text-display" // 88px / 110px
```

## Usage Examples

### Card with proper theming
```tsx
<div className="bg-surface-1 border border-border rounded-lg p-4">
  <h2 className="text-xl text-foreground font-semibold">Title</h2>
  <p className="text-base text-foreground-dim">Description text</p>
</div>
```

### Button variants
```tsx
// Primary action
<Button variant="primary">Save</Button>

// Secondary action
<Button variant="secondary">Cancel</Button>

// Destructive action
<Button variant="destructive">Delete</Button>

// Tertiary/Ghost
<Button variant="tertiary">Learn More</Button>
```

### Status indicators
```tsx
// Error state
<div className="bg-surface-system-error border border-border-system-error text-foreground-system-error">
  Error message
</div>

// Success state
<div className="bg-surface-system-success border border-border-system-success text-foreground-system-success">
  Success message
</div>

// Warning state
<div className="bg-surface-system-warning border border-border-system-warning text-foreground-system-warning">
  Warning message
</div>
```

## Adding shadcn/ui Components

This template is configured to work with shadcn/ui out of the box:

```bash
# Install any shadcn component
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add card
npx shadcn@latest add tabs
```

Browse all components: [ui.shadcn.com](https://ui.shadcn.com)

## Dark Mode

The theme automatically adapts to dark mode. Toggle with the button in the top-right corner.

All color tokens reverse appropriately:
- `surface-0` becomes darkest (was lightest)
- `surface-6` becomes lightest (was darkest)
- Text colors invert automatically
- Border opacity adjusts for visibility

## Best Practices

1. **Use semantic tokens** instead of arbitrary colors
   ```tsx
   // ✅ Good
   className="bg-surface-1 text-foreground"
   
   // ❌ Avoid
   className="bg-white text-black"
   ```

2. **Use the surface scale** for layering
   ```tsx
   // Page background
   <div className="bg-surface-0">
     {/* Card on page */}
     <div className="bg-surface-1">
       {/* Elevated element in card */}
       <div className="bg-surface-2">
         Content
       </div>
     </div>
   </div>
   ```

3. **Use system colors** for feedback
   ```tsx
   // Error state
   className="border-border-system-error text-foreground-system-error"
   
   // Success state
   className="border-border-system-success text-foreground-system-success"
   ```

4. **Leverage CVA for variants** (see Button component)
   ```tsx
   const variants = cva("base-classes", {
     variants: {
       color: {
         primary: "bg-primary text-primary-foreground",
         secondary: "bg-secondary text-secondary-foreground",
       }
     }
   })
   ```

## Migration from Old Theme

If you're updating existing components:

| Old Token | New Token |
|-----------|-----------|
| `bg-surface-primary` | `bg-surface-0` |
| `bg-surface-secondary` | `bg-surface-1` |
| `bg-surface-tertiary` | `bg-surface-2` |
| `text-content-primary` | `text-foreground` |
| `text-content-secondary` | `text-foreground-dim` |
| `text-content-tertiary` | `text-foreground-subtle` |
| `border-border` | `border-border` (unchanged) |

## Resources

- Full color reference: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- shadcn/ui docs: [ui.shadcn.com](https://ui.shadcn.com)
- Component examples: `docs/COMPONENTS.md`
