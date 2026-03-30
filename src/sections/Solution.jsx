import './Solution.css'

const rows = [
  ['Passives "Einschlafen"', 'Aktiv & bewusst dabei'],
  ['Kontrollverlust-Gefühl', 'Du behältst die Führung'],
  ['Oberflächliche Entspannung', 'Tiefgreifende Transformation'],
  ['Einmalige Wirkung', 'Nachhaltige Verankerung'],
]

export default function Solution() {
  const scrollTo = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' })
  }

  return (
    <section id="solution" className="section animate-on-scroll">
      <div className="container">
        <div className="solution-grid">
          <div>
            <span className="section-label">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
              Die Lösung
            </span>
            <h2>Was ist Aktiv Hypnose?</h2>
            <p>Aktiv Hypnose nach David Woods ist ein moderner Ansatz, der dich nicht in einen passiven Trance-Zustand versetzt – sondern dich <strong>bewusst und aktiv</strong> in den Heilungsprozess einbindet.</p>
            <p>Du bleibst jederzeit wach, ansprechbar und behältst die Kontrolle. Gemeinsam arbeiten wir direkt mit deinem Unterbewusstsein, um nachhaltige Veränderungen zu verankern.</p>
            <a href="#contact" className="btn btn-primary" onClick={scrollTo} style={{ marginTop: '1rem' }}>Mehr erfahren</a>
          </div>
          <div className="comparison">
            <div className="comparison-header">
              <span>Klassische Hypnose</span>
              <span>Aktiv Hypnose</span>
            </div>
            {rows.map(([no, yes], i) => (
              <div key={i} className="comparison-row">
                <span className="comparison-no">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                  {no}
                </span>
                <span className="comparison-yes">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  {yes}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
