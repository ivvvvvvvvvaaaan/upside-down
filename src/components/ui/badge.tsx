import { cn } from '@/lib/utils'

/**
 * HAWKINS DESIGN SYSTEM - Badge Component
 * 
 * Status indicator or label for tagging and categorization.
 * 
 * PRODUCTION DIFFERENCES:
 * This component is a simplified prototype version. Production Hawkins Badge includes:
 * - Explicit token-based color system (Blue400, Gray500, etc.)
 * - Movie phase support (complete, in-progress, UNKNOWN)
 * - startAdornment/endAdornment composition props
 * - Standalone compact boolean (not size enum)
 * 
 * MIGRATION PATH:
 * When moving to production, replace variant-based styling with explicit color tokens
 * and use adornment props for icons instead of inline children.
 * 
 * @example
 * // Variant-based styling (prototype)
 * <Badge variant="success">Active</Badge>
 * 
 * @example
 * // Color-based styling (closer to Hawkins)
 * <Badge color="green">Active</Badge>
 * 
 * @example
 * // Compact variant
 * <Badge compact>New</Badge>
 */

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant. Use for semantic states (success, error, etc.) */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  /** Direct color override. Accepts 'gray', 'blue', 'green', 'yellow', 'red'. Takes precedence over variant. */
  color?: 'gray' | 'blue' | 'green' | 'yellow' | 'red'
  /** Deprecated: Use compact prop instead */
  size?: 'sm' | 'md'
  /** Compact spacing for dense layouts */
  compact?: boolean
}

function Badge({ 
  className, 
  variant = 'default', 
  color,
  size = 'md',
  compact = false,
  children,
  ...props 
}: BadgeProps) {
  // Color prop takes precedence over variant
  const colorStyles = {
    gray: 'bg-surface-2 text-foreground border border-border-subtle',
    blue: 'bg-primary/10 text-primary border border-primary/20',
    green: 'bg-success/10 text-success border border-success/20',
    yellow: 'bg-warning/10 text-warning border border-warning/20',
    red: 'bg-destructive/10 text-destructive border border-destructive/20',
  }
  
  const variants = {
    default: 'bg-surface-2 text-foreground border border-border-subtle',
    success: 'bg-success/10 text-success border border-success/20',
    warning: 'bg-warning/10 text-warning border border-warning/20',
    error: 'bg-destructive/10 text-destructive border border-destructive/20',
    info: 'bg-primary/10 text-primary border border-primary/20',
  }
  
  const sizes = {
    sm: 'px-1.5 py-0.5 text-xs',
    md: 'px-2 py-1 text-caption',
  }

  const finalColor = color ? colorStyles[color] : variants[variant]
  const finalSize = compact ? sizes.sm : sizes[size]

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-md',
        finalColor,
        finalSize,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge }
