import './Testimonials.css'

const reviews = [
  {
    text: 'Ich hatte fast 4 Jahre Panikattacken – klassische Therapie hat geholfen, aber nie wirklich gereicht. In der Session mit Andrea hat sich etwas tief in mir verschoben. Seit 8 Monaten lebe ich ohne Angstmedikamente.',
    author: 'M.',
    age: '42',
    role: 'nach Angst-Begleitung',
    initials: 'M',
    color: '#7B2D3A',
  },
  {
    text: 'Vorher konnte ich berufliche Entscheidungen kaum treffen – ich war ständig blockiert und zweifelte an mir. Nach einer einzigen Session habe ich meine Selbstständigkeit angemeldet. Das hätte ich nicht für möglich gehalten.',
    author: 'T.',
    age: '35',
    role: 'nach Selbstwert-Session',
    initials: 'T',
    color: '#B8965B',
  },
  {
    text: 'Ich schlief seit zwei Jahren schlecht, war tagsüber erschöpft und funktionierte nur noch. Heute, drei Monate nach der Online-Session, schlafe ich durch und habe wieder Energie für die Dinge, die mir wichtig sind.',
    author: 'L.',
    age: '29',
    role: 'nach Online-Begleitung',
    initials: 'L',
    color: '#C9968A',
  },
]

const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
)

export default function Testimonials() {
  return (
    <section className="section section--warm animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Erfahrungen</span>
          <h2>Was Klient:innen sagen</h2>
          <p className="section-intro">
            Anonymisierte Erfahrungsberichte – weil Vertrauen und Diskretion an erster Stelle stehen.
          </p>
        </div>
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <article key={i} className={`testimonial-card animate-on-scroll delay-${i + 1}`}>
              <div className="testimonial-quote-mark">&ldquo;</div>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} />)}
              </div>
              <p className="testimonial-text">{r.text}</p>
              <footer className="testimonial-footer">
                <div className="testimonial-avatar" style={{ background: r.color }}>
                  {r.initials}
                </div>
                <div className="testimonial-meta">
                  <span className="testimonial-author">{r.author}, {r.age}</span>
                  <span className="testimonial-role">{r.role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
