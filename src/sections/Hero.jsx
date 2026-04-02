import './Hero.css'
import { useCountUp } from '../hooks/useCountUp'

export default function Hero() {
  const [count50,  ref50]  = useCountUp(50)
  const [count8,   ref8]   = useCountUp(8,   900)
  const [count94,  ref94]  = useCountUp(94,  600)

  const scrollTo = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero grain">
      <div className="hero-bg-shapes">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
      </div>
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-badge hero-anim hero-anim-1">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Zertifiziert · Online & Vor Ort
          </span>
          <h1 className="hero-anim hero-anim-2">
            In einer Session frei werden<br />
            <span className="highlight">von dem, was dich festhält</span>
          </h1>
          <p className="hero-subtitle hero-anim hero-anim-3">
            Hypnose-Coaching in Schwabmünchen & online – aktiv, bewusst und
            nachhaltig. Nach der David Woods Methode, dem führenden Ansatz
            für Aktiv Hypnose. Auch erreichbar aus Augsburg, Kaufbeuren und Landsberg.
          </p>
          <div className="hero-cta hero-anim hero-anim-4">
            <a href="#contact" className="btn btn-primary btn-large" onClick={(e) => scrollTo(e, '#contact')}>
              <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              Kostenloses Erstgespräch buchen
            </a>
          </div>
          <div className="hero-stats hero-anim hero-anim-5">
            <div className="hero-stat" ref={ref50}>
              <span className="hero-stat-number">{count50}+</span>
              <span className="hero-stat-label">Begleitete Klient:innen</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat" ref={ref8}>
              <span className="hero-stat-number">{count8}+</span>
              <span className="hero-stat-label">Jahre Erfahrung</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat" ref={ref94}>
              <span className="hero-stat-number">{count94}%</span>
              <span className="hero-stat-label">Spüren Veränderung nach 1 Session</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src="/hero.jpeg" alt="Andrea Maria" />
            <div className="hero-image-overlay" />
          </div>
        </div>
      </div>
    </section>
  )
}
