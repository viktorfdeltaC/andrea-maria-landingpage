import './Process.css'

const steps = [
  {
    n: '01',
    title: 'Kostenloses Erstgespräch',
    text: '20 Minuten online oder telefonisch. Wir klären deine Situation und ob Aktiv Hypnose der richtige Weg für dich ist.',
    icon: <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>,
    detail: 'Kostenlos & unverbindlich',
  },
  {
    n: '02',
    title: 'Tiefen-Session (2,5 Std.)',
    text: 'Gemeinsame Arbeit an deinem Thema: Ressourcen aktivieren, Blockaden lösen, neue Muster nachhaltig verankern. Keine Vorkenntnisse nötig – ich führe dich durch alles.',
    icon: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>,
    detail: 'Online oder vor Ort',
  },
  {
    n: '03',
    title: 'Integration & Follow-up',
    text: 'Nachbereitung, Audio-Aufnahme zum Nachhören und praktische Impulse für den Alltag. Optional: Folgetermine zur Vertiefung.',
    icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>,
    detail: 'Inkl. Audio-Aufnahme',
  },
]

export default function Process() {
  return (
    <section id="process" className="section animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Der Weg</span>
          <h2>So läuft deine Sitzung ab</h2>
          <p className="section-intro">Transparent, strukturiert und immer auf deine Bedürfnisse abgestimmt.</p>
        </div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div key={i} className={`process-step animate-scale-up delay-${i + 1}`}>
              <div className="process-step-inner">
                <div className="process-number">{s.n}</div>
                <div className="process-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">{s.icon}</svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="process-detail">{s.detail}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="process-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
