
import { useParams } from "react-router-dom";

export default function ArticlePage(){
    const{index}=useParams()
    console.log(useParams())
    const articles=JSON.parse(localStorage.getItem("articles")||"[]");
    console.log(Number(index));
    const article=articles[Number(index)]
    if (!article) {
        return <div className="text-white text-center">Article not found</div>;
    }
    return (
    <div className=" flex flex-row justify-center">
        <div className="flex flex-col justify-center items-center w-[70%] gap-3 text-white">
            <div>
                <h1 className="text-2xl">{article.title}</h1>
            </div>
            <div className="flex justify-evenly gap-3">
                <span>{article.author}</span>
                <span>{article.publishedAt}</span>
            </div>
            <div>
                <img src={article.urlToImage} alt="alt-text"></img>
            </div>
            <div className="mt-6">
                <p>{article.content}</p>
            </div>
        </div>

    </div>
       
    )


}
