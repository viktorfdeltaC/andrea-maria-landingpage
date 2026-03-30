import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">
              <img src="/logo-transparent.svg" alt="Andrea Maria Coaching" className="footer-logo-img" />
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
              <li><Link to="/impressum">Impressum</Link></li>
              <li><Link to="/datenschutz">Datenschutz</Link></li>
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
            <Link to="/datenschutz">Datenschutz</Link> &nbsp;•&nbsp;
            <Link to="/impressum">Impressum</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
