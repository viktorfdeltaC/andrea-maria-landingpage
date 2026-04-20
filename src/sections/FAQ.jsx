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
    q: 'Findet die Session nur persönlich statt?',
    a: 'Ja – die Aktiv Hypnose findet ausschließlich persönlich in Schwabmünchen statt. Der geschützte, physische Raum ist ein wichtiger Teil der Methode. Er gibt dir die Sicherheit, dich wirklich fallen zu lassen. Das Erstgespräch kann telefonisch stattfinden.',
  },
  {
    q: 'Was kostet eine Session und was ist inbegriffen?',
    a: 'Eine vollständige Aktiv Hypnose Session kostet 390 € – inklusive kostenloses Erstgespräch (20 Min.), der 2,5-stündigen Tiefen-Session, schriftlichen Integrations-Impulsen für den Alltag. Keine versteckten Kosten. Ratenzahlung ist auf Anfrage möglich.',
  },
  {
    q: 'Wie viele Sessions brauche ich?',
    a: 'Die Aktiv Hypnose nach David Woods ist so konzipiert, dass in vielen Fällen eine einzige Session ausreicht, um nachhaltige Veränderung zu erzielen. Je nach Thema und Tiefe können Folgesessions sinnvoll sein – das besprechen wir transparent im Erstgespräch.',
  },
  {
    q: 'Für wen ist Aktiv Hypnose nicht geeignet?',
    a: 'Für Menschen in einer akuten psychiatrischen Krise ist Hypnose nicht der erste Schritt – hier braucht es zuerst andere Unterstützung. Aber für die meisten, die lange und erfolglos suchen, ist sie genau das Richtige. Im Erstgespräch klären wir gemeinsam und offen, ob die Methode für dich passt.',
  },
  {
    q: 'Wie unterscheidet sich Aktiv Hypnose von klassischer Therapie?',
    a: 'Klassische Gesprächstherapie arbeitet hauptsächlich auf der bewussten Ebene und kann oft Monate oder Jahre dauern. Aktiv Hypnose hingegen erreicht direkt das Unterbewusstsein, wo Muster und Blockaden gespeichert sind – und erzielt dadurch oft in einer einzigen Session das, woran Therapie lange gearbeitet hat.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  const scrollTo = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' })
  }

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="faq-layout">

          {/* ── Left: sticky header ── */}
          <div className="faq-header-col">
            <span className="section-label">FAQ</span>
            <h2>Häufige Fragen</h2>
            <p className="faq-intro">
              Du hast Fragen zu Aktiv Hypnose, zum Ablauf oder zu den Kosten? Hier findest du die wichtigsten Antworten.
            </p>
            <div className="faq-cta-block">
              <p>Deine Frage ist nicht dabei?</p>
              <a href="https://calendly.com/andreamaria/kostenloseserstgespraech?month=2026-04" target="_blank" rel="noopener noreferrer" className="btn btn-secondary faq-cta-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
                Stell mir deine Frage
              </a>
            </div>
          </div>

          {/* ── Right: accordion ── */}
          <div className="faq-list">
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item${open === i ? ' active' : ''}`}>
                <button
                  className="faq-question"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq-answer${open === i ? ' faq-answer--open' : ''}`}>
                  <div className="faq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
