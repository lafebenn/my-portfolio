# Will Bennett — Portfolio

Personal portfolio site for Will Bennett, showcasing projects across web development,
automation, machine learning, and enterprise software asset management (SAM/ITAM).

Live at **[willbennett.org](https://willbennett.org)**.

## Tech stack

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS

## Local development

Requires Node.js & npm.

```sh
npm install
npm run dev
```

## Build & deploy

The site is deployed to GitHub Pages via the `gh-pages` branch:

```sh
npm run build     # outputs to dist/
npm run deploy    # builds and publishes dist/ to the gh-pages branch
```

## Games

- **American Mahjong** — a solo American Mah Jongg game (vs. 3 AI bots) built with
  TanStack Start + React, served as a static app at
  [willbennett.org/games/mahjong](https://willbennett.org/games/mahjong).
  Source: [github.com/lafebenn/emerald-ace-mahjong](https://github.com/lafebenn/emerald-ace-mahjong).
  The prebuilt static app lives in `public/games/mahjong/`.
