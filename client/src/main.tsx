import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

// Force instant return to Home ("/") on page reload/refresh
const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
const isPageReload =
  (navEntries.length > 0 && navEntries[0].type === "reload") ||
  // @ts-expect-error fallback for legacy browsers
  performance?.navigation?.type === 1;

if (isPageReload) {
  if (window.location.pathname !== "/" || window.location.hash) {
    window.location.replace("/");
  }
}

// Additional listener for beforeunload/pagehide to store reload intent if needed
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    window.location.replace("/");
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);