# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # dev server at localhost:3000
npm run build    # production build (CI=true — ESLint warnings become errors)
npm test         # run tests
```

Vercel deploys automatically from `main`. Build runs with `CI=true`, so **unused imports will fail the build** — always remove them before committing.

## Architecture

Single-page React app (Create React App, React 19, React Router DOM 7). Four routes rendered inside a shared `Navbar` + `PixelCursor` shell:

| Route | Component |
|---|---|
| `/` | `Home` |
| `/about` | `About` |
| `/projects` | `Projects` |
| `/contact` | `Contact` |

`PixelCursor` injects a `<style>` tag at mount to apply a custom SVG cursor (`src/assets/cursor.svg`) site-wide. It must be a JS import — CRA cannot resolve absolute paths inside CSS `url()`.

## Theme & Styling

All CSS variables live in `src/App.css` `:root`. Key values:

- `--navy` `#0c0c0c` — page background
- `--green` `#00ff41` — primary accent (Matrix green)
- `--cyan` `#39ff14` — secondary accent
- `--font-pixel` — `Press Start 2P` (headings, labels, pixel UI)
- `--font-retro` — `VT323` (body text, larger readable copy)

Fonts are loaded via Google Fonts in `public/index.html`.

Pixel-notched card borders use `clip-path: polygon(0 12px, 12px 0, ...)` — this pattern is reused across project cards, about cards, skill tags, form inputs, and the toast notification.

## Key Patterns

**Terminal card structure** (used on About, Projects):
```jsx
<div className="terminal-topbar">
  <span className="terminal-dot red" /><span className="terminal-dot yellow" /><span className="terminal-dot tgreen" />
  <span className="terminal-filename">file.ext</span>
</div>
<div className="terminal-body"> ... </div>
```

**Equal-height flex cards**: parent uses `align-items: stretch`, each card uses `display: flex; flex-direction: column`, and the body inside uses `flex: 1`.

**pixelarticons imports**: use named sub-path imports — `import { Terminal } from 'pixelarticons/react/Terminal.js'`. Default exports do not exist.

**Resume file**: `src/Dawood_Resume.pdf` — referenced via `require()` in `Navbar.js`.
