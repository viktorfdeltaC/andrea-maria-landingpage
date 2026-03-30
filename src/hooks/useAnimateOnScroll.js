import { useEffect } from 'react'

const CLASSES = [
  '.animate-on-scroll',
  '.animate-from-left',
  '.animate-from-right',
  '.animate-scale-up',
]

export function useAnimateOnScroll() {
  useEffect(() => {
    const selector = CLASSES.join(', ')
    const animate = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
          el.classList.add('visible')
        }
      })
    }
    animate()
    window.addEventListener('scroll', animate, { passive: true })
    return () => window.removeEventListener('scroll', animate)
  }, [])
}
