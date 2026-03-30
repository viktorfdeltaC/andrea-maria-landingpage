import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const scrollTo = (e, id) => {
    e.preventDefault()
    closeMenu()
    const target = document.querySelector(id)
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' })
    }
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <nav className="container nav">
        <a href="#" className="logo" onClick={(e) => scrollTo(e, '#hero')}>
          <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Andrea Maria
        </a>

        <button
          className={`mobile-toggle${menuOpen ? ' active' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label="Menü umschalten"
          onClick={toggleMenu}
        >
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12"/>
              : <path d="M3 12h18M3 6h18M3 18h18"/>
            }
          </svg>
        </button>

        <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="nav-menu">
          {[
            ['#problem', 'Warum Hypnose?'],
            ['#solution', 'Aktiv Hypnose'],
            ['#about', 'Über mich'],
            ['#process', 'Ablauf'],
            ['#pricing', 'Preise'],
            ['#faq', 'FAQ'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta-link" onClick={(e) => scrollTo(e, '#contact')}>
              Erstgespräch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
