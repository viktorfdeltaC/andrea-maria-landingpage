# Andrea Maria Coaching – Landing Page

Vite + React Landing Page für andreamariacoaching.de

## Stack
- Vite + React
- Vanilla CSS (CSS Variables, kein Framework)
- Vercel Deployment

## Setup

```bash
npm install
npm run dev      # localhost:5173
npm run build    # Production build → /dist
```

## Deployment (Vercel)

1. Repo auf GitHub pushen (viktorfdeltaC)
2. In Vercel: "New Project" → GitHub Repo importieren
3. Framework: Vite (wird automatisch erkannt)
4. Deploy → fertig

## Bilder ersetzen

In `src/sections/Hero.jsx` und `src/sections/About.jsx` die `img-placeholder` Divs durch echte `<img>` Tags ersetzen:

```jsx
// Vorher (Placeholder):
<div className="img-placeholder">...</div>

// Nachher (echtes Bild):
<img src="/images/andrea-hero.jpg" alt="Andrea Maria" />
```

Bilder in `/public/images/` ablegen.

## Kontakt-Integration

CTA-Button in `src/sections/CTA.jsx` aktuell als `mailto:`-Link.
Für Kalender-Booking (Kapso / Google Calendar) einfach `href` und Button-Text anpassen.
