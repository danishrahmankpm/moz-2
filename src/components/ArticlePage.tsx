import { useParams, useNavigate } from "react-router-dom";

export default function ArticlePage() {
  const { index } = useParams();
  const navigate = useNavigate();

  const articles = JSON.parse(localStorage.getItem("articles") || "[]");
  const article = articles[Number(index)];

  if (!article) {
    return (
      <div
        className="text-white text-center"
        role="alert"
        aria-live="polite"
      >
        Article not found
      </div>
    );
  }

  return (
    <main
      className="flex flex-row justify-center relative"
      aria-labelledby="article-title"
    >
      
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-[#2B2A33] text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer"
        aria-label="Go back to the previous page"
      >
        ← Back
      </button>

      <article
        className="flex flex-col justify-center items-center w-[70%] gap-3 text-white mt-10"
        aria-describedby="article-content"
      >
        <header>
          <h1 id="article-title" className="text-2xl font-semibold">
            {article.title}
          </h1>
        </header>

        <section
          className="flex justify-evenly gap-3"
          aria-label="Article metadata"
        >
          <span aria-label="Author">{article.author}</span>
          <span aria-label="Publication date">{article.publishedAt}</span>
        </section>

        {article.urlToImage && (
          <figure>
            <img
              src={article.urlToImage}
              alt={article.title || "Article image"}
              aria-label="Article image"
            />
          </figure>
        )}

        <section id="article-content" className="mt-6" aria-label="Article content">
          <p>{article.content}</p>
        </section>
      </article>
    </main>
  );
}
