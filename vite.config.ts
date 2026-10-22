import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// The Mahjong app is a static build in public/. Vite's SPA fallback otherwise
// swallows /games/mahjong and shows the portfolio 404. Rewrite to the file
// before that fallback; the browser URL stays /games/mahjong/ so the game's
// own router still matches.
function mahjongStatic() {
  return {
    name: "mahjong-static",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const pathname = req.url?.split("?")[0];
        if (pathname === "/games/mahjong" || pathname === "/games/mahjong/") {
          req.url = "/games/mahjong/index.html";
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/", // Root of willbennett.org
  plugins: [mahjongStatic(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
