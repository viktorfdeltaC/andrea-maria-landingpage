import { useEffect, useState } from 'react'
import './styles/global.css'

import Header       from './components/Header'
import Footer       from './components/Footer'
import Hero         from './sections/Hero'
import Problem      from './sections/Problem'
import Solution     from './sections/Solution'
import About        from './sections/About'
import Process      from './sections/Process'
import Pricing      from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import FAQ          from './sections/FAQ'
import CTA          from './sections/CTA'

export default function App() {
  const [scrollPct, setScrollPct] = useState(0)
  const [showTop, setShowTop]     = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap'
    link.rel  = 'stylesheet'
    document.head.appendChild(link)

    const onScroll = () => {
      const scrollTop    = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setScrollPct((scrollTop / scrollHeight) * 100)
      setShowTop(scrollTop > 500)
      document.querySelectorAll('.hero-shape').forEach((el, i) => {
        el.style.transform = `translateY(${scrollTop * (i + 1) * 0.03}px)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} aria-hidden="true" />

      <Header />

      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <About />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />

      <div className="sticky-cta" aria-hidden="true">
        <a href="#contact" className="btn btn-primary">
          Kostenloses Erstgespräch buchen
        </a>
      </div>

      <button
        className={`back-to-top${showTop ? ' visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Nach oben scrollen"
      >
        <svg viewBox="0 0 24 24"><path d="M12 4l-8 8h6v8h4v-8h6z"/></svg>
      </button>
    </>
  )
}
