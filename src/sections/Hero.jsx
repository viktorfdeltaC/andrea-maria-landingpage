import './Hero.css'

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
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
            In einer Session das lösen,<br />
            <span className="highlight">woran Jahre nichts half</span>
          </h1>
          <p className="hero-subtitle hero-anim hero-anim-3">
            Aktiv Hypnose nach David Woods: Du bleibst jederzeit wach, behältst
            die Kontrolle – und erlebst echte, nachhaltige Veränderung.
            In Schwabmünchen oder online.
          </p>
          <div className="hero-cta hero-anim hero-anim-4">
            <a href="#contact" className="btn btn-primary btn-large" onClick={(e) => scrollTo(e, '#contact')}>
              <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              Kostenloses Erstgespräch buchen
            </a>
          </div>
          <div className="hero-stats hero-anim hero-anim-5">
            <div className="hero-stat">
              <span className="hero-stat-number">200+</span>
              <span className="hero-stat-label">Begleitete Klient:innen</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">8</span>
              <span className="hero-stat-label">Jahre Erfahrung</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">1</span>
              <span className="hero-stat-label">Session reicht meist</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            {/* Replace src with actual photo */}
            <div className="img-placeholder">
              <svg viewBox="0 0 24 24" fill="#7B2D3A"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              <span>Foto Andrea Maria</span>
            </div>
            <div className="hero-image-overlay" />
          </div>
        </div>
      </div>
    </section>
  )
}
