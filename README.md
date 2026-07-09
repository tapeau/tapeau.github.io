# My Portfolio Website

## Description

My personal portfolio website with a computer-terminal look that stays minimal and
professional. It is a static site built to be hosted on GitHub Pages with no build step or dependencies.

The site has three pages:

- **About Me** (`index.html`): profile and header photos, keywords, about paragraph,
  downloadable CV, education, work experience, and contact details
- **Portfolio** (`portfolio.html`): university projects, personal projects, and
  certifications, each with links out to GitHub or the credential
- **Contact** (`contact.html`): Viber, email, GitHub, and LinkedIn details

## Features

- **Terminal/CRT theme**: retro VGA font (VT323) for headers and buttons, a clean
  monospaced font (IBM Plex Mono) for paragraphs and long-form text
- **Light and dark mode**: follows the browser's color scheme automatically; a manual
  toggle in the navbar overrides it, and the choice persists across pages and visits
  via `localStorage`. Dark mode is an amber-phosphor CRT; light mode is a warm-paper
  printout
- **Typewriter animations**: a blinking terminal cursor types out a greeting on each
  page load, and section headers type themselves out as they scroll into view, all at
  one consistent speed
- **Scanline overlay**: a subtle CRT-style scanline layer that fades in and pulses
  gently across every page
- **Sticky navbar**: profile photo on the left, page links in the center, dark/light
  toggle on the right; present on all pages
- **Responsive design**: adapts down to small and mobile displays
- **Modular entries**: every repeatable block (education, work experience, projects,
  certifications, keywords) is fenced with `<!-- ENTRY - copy from here... -->`
  comments: copy the block, paste it below, and edit the details
- **Fast and lightweight**: roughly 36 KB of code plus two Google Fonts; no
  frameworks, no build tools
- **Accessible by default**: all animations are disabled under
  `prefers-reduced-motion`, full text lives in the HTML so the site works without
  JavaScript, and interactive elements have visible keyboard focus
