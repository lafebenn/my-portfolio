/**
 * The component tree shared by the browser entry (App.tsx) and the build-time
 * prerender (entry-server.tsx).
 *
 * These two must render identically. If the server emits one tree and the
 * client hydrates a different one, React throws away the prerendered DOM and
 * re-renders from scratch — which silently undoes the whole point of
 * prerendering and logs a hydration error while doing it. Keeping the routes in
 * one file is what stops the two drifting apart.
 *
 * The router is the only difference: BrowserRouter in the browser, StaticRouter
 * at build time.
 */
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/resume" element={<Resume />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);
