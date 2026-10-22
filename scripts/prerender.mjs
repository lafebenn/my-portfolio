/**
 * Build-time prerender.
 *
 * Runs after `vite build`. Renders each route with react-dom/server and writes
 * the result into the served HTML, so that a client that does not execute
 * JavaScript still sees the name, target role, graduation date, contact links
 * and project titles.
 *
 * Why this exists: LinkedIn's preview scraper, Slack and iMessage unfurls, and
 * a large share of applicant tracking systems do not run JS. Before this, they
 * fetched willbennett.org and got an empty <div id="root">.
 *
 * The script asserts on its own output and exits non-zero if the name or the
 * target role is missing, so a regression here fails the build rather than
 * quietly shipping an empty page again.
 */
import { build } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDist = path.join(root, ".ssr-build");

const ROUTES = ["/", "/resume"];
const CANONICAL_ORIGIN = "https://willbennett.org";

/** Strings that must appear in the prerendered home page, or the build fails. */
const REQUIRED_ON_HOME = [
  "William Bennett",
  "Targeting consulting",
  "expected April 2027",
  "lafebenn@byu.edu",
  "github.com/lafebenn",
  "linkedin.com/in/willbennettbyu",
];

async function buildSsrBundle() {
  await build({
    root,
    logLevel: "warn",
    build: {
      ssr: path.join(root, "src/entry-server.tsx"),
      outDir: ssrDist,
      emptyOutDir: true,
      // Bundle the app; let node_modules resolve from disk.
      rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
    },
  });
  return path.join(ssrDist, "entry-server.mjs");
}

/**
 * Replace the template's <title> and description with the route's own, so a
 * prerendered page never ships two of either.
 */
function applyHead(template, head) {
  if (!head.trim()) return template;
  let out = template;
  if (/<title[^>]*>/i.test(head)) {
    out = out.replace(/<title>[\s\S]*?<\/title>\s*/i, "");
  }
  if (/name="description"/i.test(head)) {
    out = out.replace(/<meta\s+name="description"[^>]*>\s*/i, "");
  }
  return out.replace("</head>", `  ${head}\n  </head>`);
}

function applyCanonical(template, route) {
  const url = route === "/" ? `${CANONICAL_ORIGIN}/` : `${CANONICAL_ORIGIN}${route}`;
  return template
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${url}" />`);
}

async function main() {
  const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

  const entry = await buildSsrBundle();
  const { render } = await import(`file://${entry}`);

  for (const route of ROUTES) {
    const { html, head } = render(route);

    let page = applyCanonical(template, route);
    page = applyHead(page, head);
    page = page.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    const outPath =
      route === "/"
        ? path.join(dist, "index.html")
        : path.join(dist, route.slice(1), "index.html");

    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, page, "utf8");
    console.log(`prerendered ${route} -> ${path.relative(root, outPath)}`);

    if (route === "/") {
      const missing = REQUIRED_ON_HOME.filter((s) => !page.includes(s));
      if (missing.length) {
        console.error(
          `\nPrerender check FAILED. Missing from the served HTML:\n  - ${missing.join(
            "\n  - "
          )}\n`
        );
        process.exit(1);
      }
    }
  }

  // GitHub Pages serves 404.html for unknown paths, and it needs to boot the
  // SPA so client-side routes still resolve. It must NOT be a copy of the home
  // page: that serves the full homepage markup under a 404, which search
  // engines read as duplicate content and as a soft 404. Ship the shell only.
  const notFound = template
    .replace(/<link rel="canonical"[^>]*>/i, '<meta name="robots" content="noindex" />')
    .replace(/<title>[\s\S]*?<\/title>/i, "<title>Page not found — William Bennett</title>");
  await fs.writeFile(path.join(dist, "404.html"), notFound, "utf8");

  // Sitemap for the routes that actually exist.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
    (r) =>
      `  <url><loc>${CANONICAL_ORIGIN}${r === "/" ? "/" : r}</loc><changefreq>monthly</changefreq></url>`
  ).join("\n")}
</urlset>
`;
  await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");

  await fs.rm(ssrDist, { recursive: true, force: true });
  console.log("prerender OK — name, role, grad date and contacts are in the raw HTML");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
