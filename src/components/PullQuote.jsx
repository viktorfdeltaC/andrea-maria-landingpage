import './PullQuote.css'

export default function PullQuote() {
  return (
    <section className="pull-quote-section section--warm grain">
      <div className="container">
        <blockquote className="pull-quote animate-on-scroll">
          <span className="pull-quote-mark" aria-hidden="true">&ldquo;</span>
          <p>Das Unterbewusstsein kennt den Weg.<br />Manchmal braucht es nur jemanden, der die Tür öffnet.</p>
          <cite>— Andrea Maria</cite>
        </blockquote>
      </div>
    </section>
  )
}
