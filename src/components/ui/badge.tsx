import { cn } from '@/lib/utils'

/*
 * ===========================================
 * BADGE COMPONENT
 * ===========================================
 * Status indicator or label.
 * 
 * Variants:
 * - default: Neutral gray
 * - success: Green
 * - warning: Yellow
 * - error: Red
 * - info: Blue
 */

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md'
}

function Badge({ 
  className, 
  variant = 'default', 
  size = 'md',
  children,
  ...props 
}: BadgeProps) {
  const variants = {
    default: 'bg-surface-2 text-foreground border border-border-subtle',
    success: 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20',
    error: 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20',
    info: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
  }
  
  const sizes = {
    sm: 'px-1.5 py-0.5 text-xs',
    md: 'px-2 py-1 text-caption',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-md',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge }
