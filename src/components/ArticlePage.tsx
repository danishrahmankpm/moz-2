import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type  {Article} from "./NewsCard";

export default function ArticlePage(){
    const {index}=useParams();
    const [article,setArticle]=useState<Article | null>(null);
    useEffect(()=>{
        const saved = localStorage.getItem("articles");
        if(saved){
            const articles=JSON.parse(saved);
            setArticle(articles[Number(index)]);
            console.log(articles);
        }
    },[])
    console.log()

    if (!article) return <p>Loading...</p>;


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