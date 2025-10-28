import { useEffect, useState } from 'react';
import type { Article }  from './components/NewsCard'
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
                

                setArticles(response.data.articles);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchArticles();
    },[]);
    useEffect(() => {
                    localStorage.setItem("articles", JSON.stringify(articles));
                    
                }, [articles]);
    return articles;
    
}