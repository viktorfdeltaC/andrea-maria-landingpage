import { useEffect } from 'react'

export function useAnimateOnScroll() {
  useEffect(() => {
    const animate = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
          el.classList.add('visible')
        }
      })
    }
    animate()
    window.addEventListener('scroll', animate, { passive: true })
    return () => window.removeEventListener('scroll', animate)
  }, [])
}
