import { useEffect, useState } from 'react';
import type { Article } from '../components/NewsCard';
import axios from 'axios';

export default function useArticles():Article[]{
    
    const[articles,setArticles]=useState<Article[]>([]);

    useEffect(()=>{
        const fetchArticles = async () => {
            try {
                const response = await axios.get("https://newsapi.org/v2/top-headlines", {
                params: { country: "us", apiKey: "781a0dae634949d6bd7d310309652636" },
                })
                if(response.data.articles.length==0){
                    console.log(response);
                }
                
                const indexedArticles=response.data.articles;
                indexedArticles.forEach((article: Article, index: number) => {article.id = index});
                localStorage.setItem("articles", JSON.stringify(indexedArticles));
                setArticles(indexedArticles);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchArticles();
    },[]);
   
    return articles;
    
}