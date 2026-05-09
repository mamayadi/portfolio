import { useEffect, useRef, useState } from 'react'

const transforms = {
  up:    { hidden: 'translateY(32px)',  visible: 'translateY(0)' },
  down:  { hidden: 'translateY(-32px)', visible: 'translateY(0)' },
  left:  { hidden: 'translateX(-40px)', visible: 'translateX(0)' },
  right: { hidden: 'translateX(40px)',  visible: 'translateX(0)' },
  scale: { hidden: 'scale(0.90)',       visible: 'scale(1)' },
  none:  { hidden: 'none',              visible: 'none' },
}

export default function Reveal({ children, className = '', delay = 0, from = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const t = transforms[from] ?? transforms.up

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? t.visible : t.hidden,
        transition: `opacity 0.7s ease-out, transform 0.7s ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
