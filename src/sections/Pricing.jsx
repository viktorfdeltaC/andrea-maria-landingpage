import './Pricing.css'

const features = [
  { text: 'Kostenloses Erstgespräch (20 Min)', icon: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' },
  { text: 'Tiefen-Session mit Aktiv Hypnose', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
  { text: 'Traumasensible Begleitung', icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' },
  { text: 'Audio-Recording zum Nachhören', icon: 'M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z' },
  { text: 'Integrations-Impulse für den Alltag', icon: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z' },
  { text: 'Online oder in Person möglich', icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' },
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

        <div className="pricing-card">
          {/* Header band */}
          <div className="pricing-card-header">
            <div className="pricing-card-header-left">
              <span className="pricing-label">Komplettpaket</span>
              <h3>Aktiv Hypnose Session</h3>
            </div>
            <div className="pricing-card-header-right">
              <span className="pricing-price">390 €</span>
              <span className="pricing-duration">/ 2,5 Stunden</span>
            </div>
          </div>

          {/* Body */}
          <div className="pricing-card-body">
            <ul className="pricing-features">
              {features.map((f, i) => (
                <li key={i}>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d={f.icon}/></svg>
                  {f.text}
                </li>
              ))}
            </ul>

            <div className="pricing-footer">
              <div className="pricing-footer-left">
                <p className="pricing-context">Inkl. Vorgespräch, Session, Audio-Aufnahme & Follow-up</p>
                <p className="pricing-note">Alle Preise inkl. MwSt. · Ratenzahlung auf Anfrage</p>
              </div>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={scrollTo}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
                Jetzt Termin sichern
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
