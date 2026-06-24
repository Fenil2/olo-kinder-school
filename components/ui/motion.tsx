'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type Variant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'

const variantClass: Record<Variant, string> = {
  up:    'motion-up',
  down:  'motion-down',
  left:  'motion-left',
  right: 'motion-right',
  scale: 'motion-scale',
  fade:  'motion-fade',
}

export function Motion({
  children,
  variant = 'up',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); io.unobserve(el) } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${show ? variantClass[variant] : 'motion-hidden'} ${className}`}
      style={show && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
