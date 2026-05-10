# Mohamed AYADI — Portfolio

Personal portfolio of **Mohamed AYADI**, DevOps Engineer based in Lyon, France.  
Built with React 18, Vite 5, and Tailwind CSS v3 — deployed on GitHub Pages.

🌐 **Live:** [mamayadi.github.io/portfolio](https://mamayadi.github.io/portfolio/)

---

## Tech Stack

| Layer      | Technology                                         |
| ---------- | -------------------------------------------------- |
| Framework  | React 18 (with `lazy` + `Suspense` code-splitting) |
| Build tool | Vite 5                                             |
| Styling    | Tailwind CSS v3 (`darkMode: 'class'`)              |
| Icons      | Lucide React · React Icons (Simple Icons)          |
| Deployment | GitHub Pages                                       |

---

## Features

- **Dark / Light theme** — system preference detection, `localStorage` persistence, FOUC-free pre-hydration script
- **Bilingual (FR / EN)** — full i18n via a lightweight React context; toggle in the navbar
- **Lazy-loaded sections** — all below-the-fold sections are code-split; spinner skeleton while loading
- **Availability toggle** — single `AVAILABLE` flag in `src/config.js` switches badge, phone number, and subtitle
- **Animated timeline** — Experience and Education rendered as interactive vertical timelines
- **Accordion** — SiFAST detailed projects expandable with a smooth CSS grid animation
- **Reveal animations** — `IntersectionObserver`-powered fade-in from left / right / scale per section
- **404 page** — custom static `public/404.html` for GitHub Pages routing

---

## Sections

| Section            | Description                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- |
| **Hero**           | Name, role, animated gradient title, CTA buttons, count-up stats                            |
| **About**          | Avatar with spinning gradient ring, contact links, spoken languages                         |
| **Skills**         | 6 tech categories, each with brand-colored icon tags                                        |
| **Experience**     | Alternating timeline — APRIL (green accent) and SiFAST (blue accent) with colored tool tags |
| **Education**      | Center-split timeline — IPSAS (blue) and ISIMS (violet) with school logos                   |
| **Certifications** | Card grid with provider logos and credential links                                          |
| **Contact**        | Contact cards with availability-aware phone display                                         |

---

## Project Structure

```plaintext
portfolio/
├── public/
│   ├── assets/
│   │   ├── logos/          # Company & school logos
│   │   ├── profile.png     # Avatar photo
│   │   └── favicon.svg
│   ├── CV_Mohamed_AYADI_VF.pdf
│   └── 404.html            # GitHub Pages fallback
├── src/
│   ├── components/         # One file per section + shared components
│   ├── context/
│   │   ├── ThemeContext.jsx # Dark/light theme state
│   │   └── LangContext.jsx  # FR/EN translation state
│   ├── i18n/
│   │   └── translations.js  # All UI strings in FR and EN
│   ├── config.js            # AVAILABLE flag
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Theme tokens, global light-mode overrides
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## Getting Started

**Prerequisites:** Node.js ≥ 18

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5175/portfolio/)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Configuration

### Availability status

Edit `src/config.js`:

```js
// true  → green "Available" badge, full phone number
// false → red "En mission" badge, masked phone
export const AVAILABLE = false
```

### Theme tokens

CSS custom properties live in `src/index.css` under `:root` (light) and `:root.dark` (dark).  
Colors use the space-separated RGB channel format so Tailwind opacity modifiers (`bg-base/90`) work correctly.

```css
:root {
  --bg-base:     248 250 252;   /* #f8fafc */
  --bg-card:     255 255 255;   /* #ffffff */
}
:root.dark {
  --bg-base:     3 7 18;        /* #030712 */
  --bg-card:     13 17 23;      /* #0d1117 */
}
```

### Adding a language

1. Add a new locale object to `src/i18n/translations.js`
2. Update `LangContext.jsx` to include the new locale key

---

## Deployment

The project is configured for GitHub Pages with `base: '/portfolio/'` in `vite.config.js`.

```bash
npm run build          # outputs to dist/
# push dist/ to gh-pages branch, or use your preferred GH Pages action
```

---

## License

This project is personal and not intended for reuse as a template.  
All content (text, photos, logos) belongs to Mohamed AYADI.
