import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

/**
 * HAWKINS DESIGN SYSTEM - Input Component
 * 
 * Text input field with label, error states, and optional icon.
 * 
 * PRODUCTION DIFFERENCES:
 * This component is a simplified prototype version. Production Hawkins Input uses:
 * - Composition pattern (separate InputAdornment components for icons)
 * - More granular state management (isFocused, isHovered)
 * - Character count support with maxLength integration
 * - Clear button functionality for text inputs
 * 
 * MIGRATION PATH:
 * When moving to production, replace icon prop with InputAdornment composition:
 * <Input startAdornment={<InputAdornment><SearchIcon /></InputAdornment>} />
 * 
 * @example
 * // Basic input
 * <Input label="Email" placeholder="Enter email" />
 * 
 * @example
 * // Input with icon (prototype convenience)
 * <Input icon={<SearchIcon />} iconPosition="left" placeholder="Search..." />
 * 
 * @example
 * // Input with error
 * <Input label="Password" error="Password is required" />
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input label text */
  label?: string
  /** Error message to display */
  error?: string
  /** Helper text displayed below input */
  helperText?: string
  /** Icon element (prototype convenience - production uses composition) */
  icon?: React.ReactNode
  /** Icon position when icon prop is used */
  iconPosition?: 'left' | 'right'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, icon, iconPosition = 'left', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-')
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-body-2 font-medium text-foreground mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-dim [&_svg]:size-4">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full h-10 rounded-md text-body-1',
              'bg-surface-0 border border-border',
              'text-foreground placeholder:text-foreground-subtle',
              'transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              error && 'border-error focus:ring-error',
              icon && iconPosition === 'left' ? 'pl-10 pr-3' : icon && iconPosition === 'right' ? 'pl-3 pr-10' : 'px-3',
              className
            )}
            {...props}
          />
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-dim [&_svg]:size-4">
              {icon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p className={cn(
            'mt-1.5 text-caption',
            error ? 'text-error' : 'text-foreground-dim'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
