import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

/*
 * `npm run build` prerenders each route into the served HTML (see
 * scripts/prerender.mjs). When that markup is present we hydrate it — attaching
 * event handlers to the DOM that is already on screen — rather than throwing it
 * away and rebuilding. Calling createRoot here instead would discard the
 * prerendered DOM on every page load, so the prerender would help crawlers and
 * nobody else.
 *
 * `npm run dev` serves the template with an empty #root, so fall back to a
 * normal client render there.
 */
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
