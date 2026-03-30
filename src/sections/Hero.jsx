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
          <span className="hero-badge">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Online & Vor Ort
          </span>
          <h1>
            <span className="highlight">Hypnose</span>, die wirklich wirkt
          </h1>
          <p className="hero-subtitle">
            Aktiv Hypnose nach David Woods: In nur einer Session alte Muster lösen
            und nachhaltige Veränderung erleben – in Schwabmünchen oder online.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-large" onClick={(e) => scrollTo(e, '#contact')}>
              <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              Kostenloses Erstgespräch buchen
            </a>
          </div>
          <div className="hero-trust">
            <span className="hero-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
              Zertifiziert
            </span>
            <span className="hero-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
              100% diskret
            </span>
            <span className="hero-trust-item">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Auch online
            </span>
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
