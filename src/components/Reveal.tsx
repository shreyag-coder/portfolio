import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${isInView ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}
