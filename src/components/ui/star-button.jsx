import './star-button.css'

export function StarButton({ children, type = 'button', disabled = false, onClick, className = '' }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`star-btn${className ? ` ${className}` : ''}`}
    >
      <span className="star-btn-bg" />
      <span className="star-btn-stars">
        <span className="star s1" />
        <span className="star s2" />
        <span className="star s3" />
        <span className="star s4" />
        <span className="star s5" />
      </span>
      <span className="star-btn-content">{children}</span>
    </button>
  )
}
