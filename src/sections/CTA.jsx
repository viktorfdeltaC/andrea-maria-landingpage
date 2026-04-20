import { useState } from 'react'
import { StarButton } from '@/components/ui/star-button'
import './CTA.css'

const trust = [
  { label: '100% diskret', path: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z' },
  { label: 'Zertifizierte Begleitung', path: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' },
  { label: 'Ohne Verpflichtung', path: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
]

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/mvzdqyre', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          topic: form.topic,
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', topic: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section cta-section grain">
      <div className="container cta-inner">
        <div className="cta-text">
          <span className="section-label cta-label">Nächster Schritt</span>
          <h2>Wie wäre es, endlich wieder du selbst zu sein?</h2>
          <p>
            Dein erster Schritt: ein kostenloses, unverbindliches Gespräch.
            Gemeinsam schauen wir, ob Aktiv Hypnose der richtige Weg für dich ist.
          </p>
          <div className="cta-urgency">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            Begrenzte Plätze pro Monat – aktuell noch Termine verfügbar
          </div>
          <div className="cta-trust">
            {trust.map((t, i) => (
              <span key={i}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d={t.path}/></svg>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        <div className="cta-form-wrapper">
          {status === 'success' ? (
            <div className="cta-success">
              <div className="cta-success-icon">
                <svg className="cta-check-svg" viewBox="0 0 52 52" fill="none">
                  <circle className="cta-check-circle" cx="26" cy="26" r="23" stroke="white" strokeWidth="2.5" fill="none"/>
                  <polyline className="cta-check-mark" points="14,27 22,35 38,18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <h3>Vielen Dank!</h3>
              <p>Ich melde mich innerhalb von 24 Stunden bei dir.</p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit} noValidate>
              <div className="cta-form-row">
                <div className="cta-field">
                  <label htmlFor="cta-name">Dein Name</label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    placeholder="z. B. Maria"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="cta-field">
                  <label htmlFor="cta-email">E-Mail-Adresse</label>
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    placeholder="deine@email.de"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="cta-field">
                <label htmlFor="cta-topic">Worum geht es dir grob? <span>(optional)</span></label>
                <select
                  id="cta-topic"
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                >
                  <option value="">Bitte wählen …</option>
                  <option value="Angst">Angst &amp; Panik</option>
                  <option value="Selbstwert">Selbstwert &amp; Blockaden</option>
                  <option value="Schlaf">Schlaf &amp; Erschöpfung</option>
                  <option value="Anderes">Anderes</option>
                </select>
              </div>
              <div className="cta-field">
                <label htmlFor="cta-message">Möchtest du noch etwas ergänzen? <span>(optional)</span></label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={4}
                  placeholder="Erzähl mir kurz, was dich bewegt …"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <StarButton type="submit" disabled={status === 'sending'} className="star-btn--full">
                {status === 'sending' ? (
                  <>
                    <span className="cta-spinner" />
                    Wird gesendet …
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                    Kostenloses Erstgespräch anfragen
                  </>
                )}
              </StarButton>
              <p className="cta-form-note">Deine Daten werden vertraulich behandelt.</p>
              {status === 'error' && (
                <p className="cta-form-error">Etwas ist schiefgelaufen. Bitte schreib direkt an kontakt@andreamariacoaching.de</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
