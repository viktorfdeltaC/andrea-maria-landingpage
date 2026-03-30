import './Process.css'

const steps = [
  { n: 1, title: 'Kostenloses Erstgespräch', text: '20 Minuten online/telefonisch: Wir klären deine Situation und ob Aktiv Hypnose der richtige Weg für dich ist.' },
  { n: 2, title: 'Tiefen-Session (2,5 Std.)', text: 'Gemeinsame Arbeit an deinem Thema: Ressourcen aktivieren, Blockaden lösen, neue Muster verankern.' },
  { n: 3, title: 'Integration & Follow-up', text: 'Nachbereitung, praktische Impulse für den Alltag und optional: Folgetermine zur Vertiefung.' },
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
        <div className="timeline">
          {steps.map((s, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-step">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
