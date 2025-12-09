/**
 * HAWKINS DESIGN SYSTEM - Button Component
 * 
 * PRODUCTION DIFFERENCES:
 * This component is a simplified prototype version. Production Hawkins Button includes:
 * - Additional variants: genai-primary, genai-secondary, icon-reverse, tertiary-reverse
 * - executing/loading/disabled state management with loading spinners
 * - Tooltip integration via tooltipProps
 * - href/to props for automatic Link/RouterLink composition
 * - Extended icon support (leftIcon, rightIcon instead of single icon)
 * - standalone compact boolean (independent of size)
 * 
 * MIGRATION PATH:
 * When moving to production, add loading state handlers and integrate routing
 * props for seamless navigation. Consider tooltip prop for accessibility.
 * 
 * STYLING RULES:
 * - Use values from tailwind.config.ts only
 * - Avoid arbitrary values for colors, font sizes, etc.
 * - Follow semantic naming conventions
 * 
 * AI USAGE GUIDE:
 * - Primary: Main actions (CTA, submit forms)
 * - Secondary: Secondary actions (cancel, back)
 * - Destructive: Dangerous actions (delete, remove)
 * - Tertiary: Low emphasis actions (links, text buttons)
 * - Icon: Icon-only buttons (toolbar actions)
 */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-[4px] font-sans text-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-system-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary: "bg-transparent border border-border-subtle text-foreground dark:border-border-inverse-subtle dark:text-foreground hover:bg-surface-highlight dark:hover:bg-white/10 disabled:bg-transparent disabled:opacity-40 disabled:border-opacity-20",
        "secondary-destructive":
          "bg-transparent border border-destructive-secondary-border border-opacity-40 text-destructive-secondary-foreground hover:bg-destructive/10",
        tertiary: "bg-transparent text-foreground hover:bg-surface-highlight dark:hover:bg-white/10",
        icon: "bg-transparent text-foreground hover:bg-surface-highlight dark:hover:bg-white/10",
      },
      size: {
        default: "h-10 px-3 py-[10px] text-base font-semibold",
        compact: "py-1 px-2 text-xs font-semibold",
        icon: "h-10 w-10",
      },
    },
    compoundVariants: [
      {
        variant: "icon",
        size: "icon",
        className: "[&_svg]:size-6",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

/**
 * Button component props extending native button attributes
 * 
 * @interface ButtonProps
 * @param {ButtonVariant} variant - Visual style variant. Use 'primary' for main actions, 'secondary' for supporting actions
 * @param {ButtonSize} size - Button size. 'default' for most cases, 'icon' for icon-only buttons
 * @param {boolean} compact - Apply compact spacing (independent of size). Closer to Hawkins API.
 * @param {boolean} asChild - Render as child component (useful for Next.js Link integration)
 * @param {React.ReactNode} icon - Icon element to display before text
 * @param {boolean} dropdown - Add dropdown chevron icon after text
 * 
 * @example
 * // Primary action button
 * <Button variant="primary">Save Changes</Button>
 * 
 * @example  
 * // Secondary button with icon
 * <Button variant="secondary" icon={<PlusIcon />}>Add Item</Button>
 * 
 * @example
 * // Icon-only button
 * <Button variant="icon" size="icon"><TrashIcon /></Button>
 * 
 * @example
 * // Compact button (Hawkins-style)
 * <Button compact>Compact Action</Button>
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as child component for composition with other elements */
  asChild?: boolean
  /** Icon to display before button text */
  icon?: React.ReactNode
  /** Show dropdown chevron after button text */
  dropdown?: boolean
  /** Apply compact spacing (Hawkins-compatible API) */
  compact?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, compact, asChild = false, children, icon, dropdown, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const finalSize = compact ? 'compact' : size
    return (
      <Comp className={cn(buttonVariants({ variant, size: finalSize, className }))} ref={ref} {...props}>
        {icon}
        {children}
        {dropdown && (
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
