import { Link } from "react-router-dom";
export type Article = {
 
  author:string
  title: string;
  description:string
  url:string
  urlToImage:string
  publishedAt: string
  content:string
}
type ArticleCardProps={
    title:string
    urlToImage:string
    index:number
}
export default function NewsCard(articleProps:ArticleCardProps) {
    const title:string= articleProps.title;
    const urlToImage:string= articleProps.urlToImage;
    const index=articleProps.index;

    return (
  <button className="w-[60%] sm:w-[50%] md:w-[22.5%] min-w-[150px] bg-gray-600 rounded-lg overflow-hidden text-left pb-2.5 flex flex-col cursor-pointer  hover:bg-[#3a3845]">
    <Link key={index} to={`/article/${index}`}>
        <div className="w-full h-48 overflow-hidden"> 
            <img
            src={urlToImage}
            alt={title}
            className="w-full h-full object-cover"
            />
        </div>
        <div className="w-full h-25 overflow-auto">
            <p className="p-2.5 text-sm text-[#ddd]">{title}</p>
        </div>
    </Link>
  </button>
);

   
}