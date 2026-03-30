import './CTA.css'

const trust = [
  { label: '100% diskret', path: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z' },
  { label: 'Zertifizierte Begleitung', path: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' },
  { label: 'Ohne Verpflichtung', path: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
]

export default function CTA() {
  return (
    <section id="contact" className="section cta-section">
      <div className="container cta-inner">
        <span className="section-label cta-label">Nächster Schritt</span>
        <h2>Bereit für deine Transformation?</h2>
        <p>
          Lass uns in einem kostenlosen, unverbindlichen Gespräch klären,
          ob Aktiv Hypnose der richtige Weg für dich ist.
        </p>
        <a
          href="mailto:hello@andreamariacoaching.de?subject=Erstgespräch%20Aktiv%20Hypnose"
          className="btn btn-large cta-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
          Jetzt Erstgespräch anfragen
        </a>
        <div className="cta-trust">
          {trust.map((t, i) => (
            <span key={i}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d={t.path}/></svg>
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
