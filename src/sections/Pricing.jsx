import './Pricing.css'

const features = [
  { text: 'Kostenloses Erstgespräch (20 Min)', icon: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' },
  { text: 'Tiefen-Session mit Aktiv Hypnose', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
  { text: 'Traumasensible Begleitung', icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' },
  { text: 'Geschützter Rahmen – nur persönlich in Schwabmünchen', icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' },
  { text: 'Integrations-Impulse für den Alltag', icon: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z' },
  { text: 'Impulse zur Nachbereitung', icon: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z' },
]

export default function Pricing() {
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
                <p className="pricing-context">Inkl. kostenloses Erstgespräch, Tiefen-Session & schriftlichem Follow-up</p>
                <p className="pricing-note">Während klassische Methoden oft langfristig angelegt sind, zielt Aktiv Hypnose auf fokussierte, nachhaltige Veränderung – in einer Session.</p>
                <p className="pricing-installment">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                  Ratenzahlung möglich – sprich mich einfach an.
                </p>
              </div>
              <a
                href="https://calendly.com/andreamaria/kostenloseserstgespraech?month=2026-04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
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
