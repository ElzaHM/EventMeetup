import type { HTMLAttributes, ReactNode } from 'react'

import { UI } from '@/constants/ui'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full ${UI.container.maxWidth} ${UI.container.padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
