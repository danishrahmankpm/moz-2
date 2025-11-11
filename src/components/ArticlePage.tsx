import { useParams, useNavigate } from "react-router-dom";

export default function ArticlePage() {
  const { index } = useParams();
  const navigate = useNavigate();

  const articles = JSON.parse(localStorage.getItem("articles") || "[]");
  const article = articles[Number(index)];

  if (!article) {
    return <div className="text-white text-center">Article not found</div>;
  }

  return (
    <div className="flex flex-row justify-center relative">
      
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-[#2B2A33] text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer"
      >
        ← back
      </button>

      <div className="flex flex-col justify-center items-center w-[70%] gap-3 text-white mt-10">
        <div>
          <h1 className="text-2xl">{article.title}</h1>
        </div>
        <div className="flex justify-evenly gap-3">
          <span>{article.author}</span>
          <span>{article.publishedAt}</span>
        </div>
        <div>
          <img src={article.urlToImage} alt="alt-text" />
        </div>
        <div className="mt-6">
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
}
