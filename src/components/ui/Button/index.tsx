import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { UI } from '@/constants/ui'

type ButtonVariant = 'primary' | 'outline' | 'gradient'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] active:brightness-95',
  outline:
    'border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--background)]',
  gradient:
    'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white hover:brightness-110 active:brightness-95',
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 font-medium ${UI.borderRadius.md} ${UI.transition.default} disabled:pointer-events-none disabled:opacity-50 ${UI.button[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
