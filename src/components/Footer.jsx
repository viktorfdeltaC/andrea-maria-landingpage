import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Andrea Maria
            </span>
            <p>Hypnose-Coaching mit Herz & Kompetenz<br />Schwabmünchen & Online</p>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              {[['#problem','Warum Hypnose?'],['#solution','Aktiv Hypnose'],['#about','Über mich'],['#process','Ablauf'],['#pricing','Preise']].map(([h,l]) => (
                <li key={h}><a href={h}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-links">
            <h4>Rechtliches</h4>
            <ul>
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/datenschutz">Datenschutz</a></li>
              <li><a href="/agb">AGB</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Kontakt</h4>
            <ul>
              <li><a href="mailto:hello@andreamariacoaching.de">hello@andreamariacoaching.de</a></li>
              <li><a href="tel:+49123456789">+49 (0) 123 456 789</a></li>
              <li>Schwabmünchen, Bayern</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {year} Andrea Maria Coaching &nbsp;•&nbsp;
            <a href="/datenschutz">Datenschutz</a> &nbsp;•&nbsp;
            <a href="/impressum">Impressum</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
