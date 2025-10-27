import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ArticlePage from "./components/ArticlePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/article/1"
        element={
          <ArticlePage
            title="Inside the final stretch of New York’s wild mayoral race - Politico"
            author="POLITICO Staff"
            publishedAt="2025-10-26T11:00:00Z"
            urlToImg="https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https%3A%2F%2Fstatic.politico.com%2F83%2F44%2Fffe9111c4c1bab7d21c2d8dd5d2d%2Fmain-nycmayoralroundtable2.jpg"
            content="Gartland: Lets talk about Curtis. He went all Braveheart before the debate yesterday. Reisman: He was clearly advised to rise above it all, compare Cuomo and Mamdani to two kids in a school yard. … [+7362 chars]"
          />
        }
      />
    </Routes>
  );
}
