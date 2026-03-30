import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'Bin ich während der Hypnose wach?',
    a: 'Ja, absolut! Bei der Aktiv Hypnose bleibst du jederzeit bewusst, ansprechbar und behältst die Kontrolle. Es ist kein "Einschlafen" oder Kontrollverlust – sondern ein fokussierter, entspannter Zustand, in dem du aktiv mitarbeitest.',
  },
  {
    q: 'Was, wenn ich Angst habe, die Kontrolle zu verlieren?',
    a: 'Diese Sorge ist völlig verständlich – und ein wichtiger Teil unseres Erstgesprächs. Bei Aktiv Hypnose gibt es keinen Kontrollverlust: Du bestimmst das Tempo, du entscheidest, wie tief wir gehen.',
  },
  {
    q: 'Hilft das auch, wenn ich skeptisch bin?',
    a: 'Skepsis ist gesund – und oft ein Zeichen von Intelligenz! Viele meiner Klient:innen starten mit Zweifel. Wichtig ist nicht, "daran zu glauben", sondern offen zu sein für eine Erfahrung.',
  },
  {
    q: 'Kann ich auch online teilnehmen?',
    a: 'Ja, gerne! Die Aktiv Hypnose funktioniert hervorragend online – viele Klient:innen schätzen sogar die Vertrautheit der eigenen Umgebung. Du brauchst nur eine ruhige, ungestörte Umgebung und eine stabile Internetverbindung.',
  },
  {
    q: 'Was kostet eine Session und was ist inbegriffen?',
    a: 'Eine vollständige Aktiv Hypnose Session kostet 390 € – inklusive kostenloses Erstgespräch (20 Min.), der 2,5-stündigen Tiefen-Session, einer Audio-Aufnahme zum Nachhören sowie Integrations-Impulsen für den Alltag. Keine versteckten Kosten. Ratenzahlung ist auf Anfrage möglich.',
  },
  {
    q: 'Wie viele Sessions brauche ich?',
    a: 'Die Aktiv Hypnose nach David Woods ist so konzipiert, dass in vielen Fällen eine einzige Session ausreicht, um nachhaltige Veränderung zu erzielen. Je nach Thema und Tiefe können Folgesessions sinnvoll sein – das besprechen wir transparent im Erstgespräch.',
  },
  {
    q: 'Für wen ist Aktiv Hypnose nicht geeignet?',
    a: 'Aktiv Hypnose ist nicht geeignet bei akuten Psychosen, schwerer dissoziativer Störung oder wenn du aktuell eine psychiatrische Krisenbehandlung erhältst. Im Erstgespräch klären wir gemeinsam, ob die Methode für dich passend ist – Offenheit und Ehrlichkeit sind dabei das Wichtigste.',
  },
  {
    q: 'Wie unterscheidet sich Aktiv Hypnose von klassischer Therapie?',
    a: 'Klassische Gesprächstherapie arbeitet hauptsächlich auf der bewussten Ebene und kann oft Monate oder Jahre dauern. Aktiv Hypnose hingegen erreicht direkt das Unterbewusstsein, wo Muster und Blockaden gespeichert sind – und erzielt dadurch oft in einer einzigen Session das, woran Therapie lange gearbeitet hat. Sie ersetzt keine psychiatrische Behandlung, ergänzt aber viele andere Methoden sehr wirkungsvoll.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section section--alt animate-on-scroll">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Fragen & Antworten</span>
          <h2>Häufige Fragen</h2>
          <p className="section-intro">Hier findest du Antworten auf die wichtigsten Fragen zur Aktiv Hypnose.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' active' : ''}`}>
              <button
                className="faq-question"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <span className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </button>
              <div className="faq-answer" style={{ maxHeight: open === i ? '400px' : '0' }}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
