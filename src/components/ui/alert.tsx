import { cn } from '@/lib/utils'
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react'

/*
 * ===========================================
 * ALERT COMPONENT
 * ===========================================
 * Inline notification/message.
 */

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

function Alert({ 
  className, 
  variant = 'info',
  title,
  dismissible,
  onDismiss,
  children,
  ...props 
}: AlertProps) {
  const variants = {
    info: 'bg-primary/10 border-primary/20 text-primary',
    success: 'bg-success/10 border-success/20 text-success',
    warning: 'bg-warning/10 border-warning/20 text-warning',
    error: 'bg-destructive/10 border-destructive/20 text-destructive',
  }
  
  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
  }
  
  const Icon = icons[variant]

  return (
    <div
      className={cn(
        'flex gap-3 p-4 rounded-lg border',
        variants[variant],
        className
      )}
      role="alert"
      {...props}
    >
      <Icon className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-medium mb-1">{title}</p>
        )}
        <div className="text-body-2">{children}</div>
      </div>
      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className="shrink-0 p-1 rounded hover:bg-black/5 dark:hover:bg-white/5"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

export { Alert }
