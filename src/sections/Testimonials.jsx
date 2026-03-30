import './Testimonials.css'

const reviews = [
  {
    text: 'Nach Jahren von Angstzuständen konnte ich endlich wieder durchatmen. Andrea hat einen sicheren Raum geschaffen, in dem ich mich öffnen konnte – ohne Druck, ohne Urteil.',
    author: 'M., 42',
    role: 'nach Angst-Begleitung',
  },
  {
    text: 'Ich war skeptisch, ob Hypnose bei mir funktioniert. Aber die Aktiv-Methode hat mich überzeugt: Ich war immer wach, immer ich selbst – und habe trotzdem tiefe Blockaden gelöst.',
    author: 'T., 35',
    role: 'nach Selbstwert-Session',
  },
  {
    text: 'Die Online-Session war genauso intensiv wie vor Ort. Besonders wertvoll: das Audio zum Nachhören. So konnte ich die positiven Impulse im Alltag immer wieder abrufen.',
    author: 'L., 29',
    role: 'nach Online-Begleitung',
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
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} />)}
              </div>
              <p className="testimonial-text">{r.text}</p>
              <footer>
                <span className="testimonial-author">{r.author}</span>
                <span className="testimonial-role">{r.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
