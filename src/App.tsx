import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ArticlePage from "./components/ArticlePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article/:index" element={<ArticlePage />} />
    </Routes>
  );
}
