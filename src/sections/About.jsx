import './About.css'

export default function About() {
  const scrollTo = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' })
  }

  return (
    <section id="about" className="section section--warm">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper animate-from-left">
            <div className="about-image">
              {/* Replace with: <img src="/images/andrea.jpg" alt="Andrea Maria" /> */}
              <div className="img-placeholder">
                <svg viewBox="0 0 24 24" fill="#7B2D3A"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                <span>Foto Andrea</span>
              </div>
            </div>
            <div className="about-image-accent" />
          </div>
          <div className="animate-from-right">
            <span className="section-label">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              Über mich
            </span>
            <h2>Hallo, ich bin Andrea</h2>
            <p>Als zertifizierte Hypnose-Coaching-Spezialistin begleite ich Menschen seit über 8 Jahren auf ihrem Weg zu mehr Leichtigkeit, Klarheit und innerer Stärke.</p>
            <p>Ich kam selbst über Umwege zur Hypnose – und was ich dabei erlebt habe, hat meine Perspektive auf Heilung für immer verändert. Heute begleite ich Menschen durch genau diesen Prozess.</p>
            <p>Mein Ansatz verbindet fundierte Fachkompetenz mit herzlicher Empathie. Ich glaube daran: <em>Jeder Mensch trägt die Ressourcen für Heilung bereits in sich</em> – manchmal braucht es nur den richtigen Schlüssel.</p>
            <div className="about-highlights">
              {[
                { label: 'Zertifiziert', sub: 'Nach David Woods Institut', path: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z' },
                { label: 'Traumasensibel', sub: 'Sicherer Raum für Heilung', path: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
                { label: 'Nachhaltig', sub: 'Langfristige Veränderung', path: 'M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25C16.56 6.25 14.48 5 12 5S7.44 6.25 7.03 8C6.19 8.4 5.6 9.25 5.6 10.25z' },
              ].map((h, i) => (
                <div key={i} className="highlight-item">
                  <div className="highlight-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d={h.path}/></svg></div>
                  <strong>{h.label}</strong>
                  <p>{h.sub}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-secondary" onClick={scrollTo}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              Lass uns sprechen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
