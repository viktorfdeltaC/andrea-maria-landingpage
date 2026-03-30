import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Legal.css'

export default function Impressum() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="container">
          <Link to="/" className="legal-back">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Zurück
          </Link>
          <img src="/logo-transparent.svg" alt="Andrea Maria Coaching" className="legal-logo" />
        </div>
      </div>

      <main className="container legal-content">
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Andrea Hartner<br />
          Dorfstr. 33<br />
          86830 Schwabmünchen<br />
          Deutschland
        </p>

        <p>
          <strong>E-Mail:</strong> <a href="mailto:hartnera@gmx.de">hartnera@gmx.de</a>
        </p>

        <p>
          <strong>Umsatzsteuer-Identifikationsnummer</strong> gemäß § 27a UStG:<br />
          DE336013899
        </p>

        <h2>Vertretungsberechtigte Person</h2>
        <p>Andrea Hartner</p>

        <h2>Registergericht</h2>
        <p>
          AG Augsburg<br />
          Am Alten Einlaß 1<br />
          86150 Augsburg<br /><br />
          Postanschrift:<br />
          Postfach 110160<br />
          86142 Augsburg<br /><br />
          Telefon: (0821) 3105-0<br />
          Telefax: (0821) 3105-1200
        </p>

        <h2>Berufliche Qualifikation</h2>
        <p>Coach, zertifizierter emTrace Emotionscoach</p>

        <h2>Haftung für Inhalte</h2>
        <p>Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

        <h2>Haftung für Links</h2>
        <p>Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>

        <h2>Urheberrecht</h2>
        <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
      </main>
    </div>
  )
}
