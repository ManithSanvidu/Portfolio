import { Routes, Route } from "react-router-dom";
import { Root } from "./components/Root";
import { PortfolioPage } from "./components/pages/PortfolioPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<PortfolioPage />} />
      </Route>
    </Routes>
  );
}
