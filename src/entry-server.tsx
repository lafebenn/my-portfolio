/**
 * Server entry used only at build time by scripts/prerender.mjs.
 *
 * The site is a static SPA. Without this step the served index.html is an empty
 * <div id="root"></div>, which is what LinkedIn's preview scraper, Slack and
 * iMessage unfurls, and a large share of applicant tracking systems actually
 * see. This renders each route to real HTML so those crawlers get the name,
 * role, graduation date, contact links and project titles.
 *
 * The routes come from AppTree.tsx, the same source App.tsx uses, so this
 * markup matches what the browser hydrates.
 */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import { AppRoutes } from "./AppTree";

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();
  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");

  return { html, head };
}
