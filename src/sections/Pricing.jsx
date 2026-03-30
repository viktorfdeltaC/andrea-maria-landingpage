import './Pricing.css'

const features = [
  'Kostenloses Erstgespräch (20 Min)',
  'Tiefen-Session mit Aktiv Hypnose',
  'Traumasensible Begleitung',
  'Audio-Recording zum Nachhören',
  'Integrations-Impulse für den Alltag',
  'Online oder in Person möglich',
]

export default function Pricing() {
  const scrollTo = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="section section--alt animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Investition</span>
          <h2>Transparente Investition in dich</h2>
          <p className="section-intro">Keine versteckten Kosten. Alles klar von Anfang an.</p>
        </div>
        <div className="pricing-wrapper">
          <div className="pricing-card">
            <div className="pricing-content">
              <div className="pricing-header">
                <span className="pricing-label">Komplettpaket</span>
                <h3>Aktiv Hypnose Session</h3>
              </div>
              <div className="pricing-price-block">
                <span className="price">390 €</span>
                <span className="price-period">/ 2,5 Stunden</span>
              </div>
              <p className="price-context">
                Inklusive Vorgespräch, Session, Audio-Aufnahme und Follow-up
              </p>
              <ul className="pricing-features">
                {features.map((f, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pricing-cta">
                <a
                  href="#contact"
                  className="btn btn-primary btn-large"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={scrollTo}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                  Jetzt Termin sichern
                </a>
                <p className="pricing-note">Alle Preise inkl. MwSt. • Ratenzahlung auf Anfrage</p>
              </div>
            </div>
            <div className="pricing-visual">
              <div className="pricing-visual-content">
                <div className="pricing-visual-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h4>Herz & Kompetenz</h4>
                <p>Persönliche Begleitung auf Augenhöhe – weil du mehr verdienst als Standardlösungen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
