import './About.css'

const credentials = [
  { icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z', label: 'David Woods Zertifikat' },
  { icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z', label: 'Traumasensibel' },
  { icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z', label: '50+ begleitete Klient:innen' },
  { icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', label: 'Online & Vor Ort' },
]

export default function About() {
  const scrollTo = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' })
  }

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">

          {/* ── Left: Image ── */}
          <div className="about-image-col animate-from-left">
            <div className="about-img-frame">
              <div className="about-img-bg" />
              <img src="/übermich.jpeg" alt="Andrea Maria" className="about-img" />
            </div>
            <figure className="about-quote-card">
              <span className="about-quote-mark">"</span>
              <blockquote>Jeder Mensch trägt die Ressourcen für Heilung bereits in sich.</blockquote>
              <figcaption>— Andrea Maria</figcaption>
            </figure>
          </div>

          {/* ── Right: Text ── */}
          <div className="about-text-col animate-from-right">
            <span className="section-label">Über mich</span>
            <h2>Hallo, ich bin Andrea</h2>

            <p className="about-lead">
              Als zertifizierte Hypnose-Coaching-Spezialistin begleite ich Menschen dabei, sich von dem zu befreien, was sie zurückhält – fokussiert, nachhaltig und in einer einzigen Session.
            </p>

            <p>
              Ich kam selbst über Umwege zur Hypnose – und was ich dabei erlebt habe, hat meine Sicht auf Heilung für immer verändert. Heute begleite ich Menschen durch genau diesen Prozess: mit echtem Verständnis und einer Methode, die wirkt.
            </p>

            <p>
              Mein Ansatz verbindet die <strong>David Woods Methode</strong> mit traumasensibler Begleitung. Der Unterschied: Du bist kein passiver Empfänger – du bist aktiv Teil deiner Veränderung.
            </p>

            {/* Credentials */}
            <ul className="about-credentials">
              {credentials.map((c, i) => (
                <li key={i}>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d={c.icon}/></svg>
                  {c.label}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary about-cta" onClick={scrollTo}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              Lass uns sprechen
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
