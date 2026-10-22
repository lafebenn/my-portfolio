import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppTree";

/*
 * This used to mount two toast systems, a TooltipProvider and a react-query
 * client. Nothing on the site ever called toast(), rendered a Tooltip, or ran a
 * query — they were scaffolding from the template. Removing them cut four
 * runtime dependencies and, incidentally, the only thing in the tree that
 * touched window.matchMedia during hydration.
 */
const App = () => (
  <BrowserRouter basename="/">
    <AppRoutes />
  </BrowserRouter>
);

export default App;
