type Artilcle = {
  author:string
  title: string;
  description:string
  url:string
  urlToImage:string
  publishedAt: string
  content:string
}
type ArtilcleCardProps={
    title:string
    urlToImage:string
}
export default function NewsCard(articleProps:ArtilcleCardProps) {
    const title:string= articleProps.title;
    const urlToImage:string= articleProps.urlToImage;

    return (
  <button className="w-1/4 h-60 flex flex-col justify-start items-center bg-[#42414d] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <img className="w-full h-2/3 object-cover" src={urlToImage} alt="" />
    <h2 className="text-white overflow-hidden p-2">{title}</h2>
  </button>
);

   
}