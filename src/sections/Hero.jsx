import { motion } from 'framer-motion'
import { StarButton } from '@/components/ui/star-button'
import { useCountUp } from '../hooks/useCountUp'
import { useMediaQuery } from '../hooks/useMediaQuery'
import './Hero.css'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { y: 22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Hero() {
  const [count50, ref50] = useCountUp(50)
  const [count4,  ref4]  = useCountUp(4,  900)
  const [count94, ref94] = useCountUp(94, 600)
  const isMobile = useMediaQuery('(max-width: 900px)')

  const scrollTo = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero grain">
      <div className="hero-bg-shapes">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
      </div>

      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* ── LEFT PANEL ── */}
        <div className="hero-panel">
          {/* Badge */}
          <motion.span className="hero-badge" variants={item}>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Zertifiziert · Online & Vor Ort
          </motion.span>

          {/* Headline */}
          <motion.h1 variants={item}>
            In einer Session frei werden<br />
            <span className="highlight">von dem, was dich festhält</span>
          </motion.h1>

          {/* Accent line */}
          <motion.div className="hero-accent-line" variants={item} />

          {/* Subtitle */}
          <motion.p className="hero-subtitle" variants={item}>
            Hypnose-Coaching in Schwabmünchen & online – aktiv, bewusst und
            nachhaltig. Nach der David Woods Methode. Auch erreichbar aus
            Augsburg, Kaufbeuren und Landsberg.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item}>
            <StarButton onClick={() => window.open('https://calendly.com/andreamaria/kostenloseserstgespraech?month=2026-04', '_blank', 'noopener,noreferrer')} className="star-btn--full hero-cta-btn">
              Kostenloses Erstgespräch buchen
            </StarButton>
          </motion.div>

          {/* Stats */}
          <motion.div className="hero-stats" variants={item}>
            <div className="hero-stat" ref={ref50}>
              <span className="hero-stat-number">{count50}+</span>
              <span className="hero-stat-label">Begleitete Klient:innen</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat" ref={ref4}>
              <span className="hero-stat-number">{count4}+</span>
              <span className="hero-stat-label">Zertifizierungen</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat" ref={ref94}>
              <span className="hero-stat-number">{count94}%</span>
              <span className="hero-stat-label">Spüren Veränderung</span>
            </div>
          </motion.div>

          {/* Contact footer */}
          <motion.footer className="hero-contact" variants={item}>
            <a href="https://www.andreamariacoaching.de" target="_blank" rel="noopener noreferrer" className="hero-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              andreamariacoaching.de
            </a>
            <span className="hero-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Schwabmünchen, Bayern
            </span>
            <span className="hero-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12 19.79 19.79 0 0 1 1.06 3.38 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Online & Vor Ort
            </span>
          </motion.footer>
        </div>

        {/* ── RIGHT PANEL — image with diagonal reveal ── */}
        <motion.div
          className="hero-image-panel"
          initial={{ clipPath: isMobile ? 'none' : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: isMobile ? 'none' : 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <img src="/hero.jpeg" alt="Andrea Maria" className="hero-image-fill" />
          <div className="hero-image-overlay" />
        </motion.div>
      </motion.div>

      {/* Wave divider */}
      <div className="hero-wave" />
    </section>
  )
}
