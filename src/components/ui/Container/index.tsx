import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div
    className={`mx-auto w-full min-w-0 max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 2xl:max-w-screen-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
