import './Problem.css'

const problems = [
  {
    icon: <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>,
    title: 'Immer wieder dasselbe',
    text: 'Du nimmst dir fest vor, etwas zu ändern – doch nach wenigen Tagen bist du wieder beim alten Verhalten. Das frustriert und zermürbt.',
  },
  {
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>,
    title: 'Emotionale Blockaden',
    text: 'Bestimmte Situationen lösen unbegründete Angst, Traurigkeit oder Überforderung aus. Du weißt nicht warum – aber es fühlt sich echt an.',
  },
  {
    icon: <path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"/>,
    title: 'Erschöpfung trotz Ruhe',
    text: 'Du schläfst, bist aber nicht erholt. Der Kopf denkt weiter, auch wenn der Körper Pause braucht. Jeder Tag fühlt sich wie ein Kampf an.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section section--alt animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            Herausforderungen
          </span>
          <h2>Fühlst du dich gefangen in Mustern?</h2>
          <p className="section-intro">Viele Menschen spüren, dass etwas sie zurückhält – ohne genau zu wissen, was es ist.</p>
        </div>
        <div className="problem-grid">
          {problems.map((p, i) => (
            <article key={i} className={`problem-card animate-on-scroll delay-${i + 1}`} data-number={`0${i + 1}`}>
              <div className="problem-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">{p.icon}</svg>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
        <p className="problem-bridge animate-on-scroll">
          Erkennst du dich darin wieder? Du bist nicht allein – und es gibt einen Weg heraus.
        </p>
      </div>
    </section>
  )
}
