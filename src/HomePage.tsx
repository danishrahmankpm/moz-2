import './App.css'

import { useState } from 'react';
import IconCard from './components/IconCard';
import NewsCard from './components/NewsCard';
import SearchBox from './components/SearchBox'
import useArticles from './useArticles';

const icons = [
    { title: "Gmail", imageUrl: "https://cdn.simpleicons.org/gmail" },
    { title: "Github", imageUrl: "https://cdn.simpleicons.org/github" },
    { title: "ChatGpt", imageUrl: "https://cdn.simpleicons.org/openai" },
    { title: "Figma", imageUrl: "https://cdn.simpleicons.org/figma" },
    { title: "YouTube", imageUrl: "https://cdn.simpleicons.org/youtube" },
    { title: "Google Drive", imageUrl: "https://cdn.simpleicons.org/googledrive" },
    { title: "Discord", imageUrl: "https://cdn.simpleicons.org/discord" },
    { title: "Twitter", imageUrl: "https://cdn.simpleicons.org/x" },
  ];





function HomePage() {
  const[search,setSearch]=useState("");
  const news=useArticles();

  const filteredNews=news.filter((item) =>(item.title.toLowerCase().includes(search.toLowerCase())));

  return (
    <div className="flex flex-col justify-start items-center bg-[#2B2A33] h-screen w-screen overflow-y-auto ">
        <div className="pl-7 w-full flex flex-row justify-start items-center gap-2.5 mt-5 mr-1">
              <img
                className="w-8 h-8 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
                alt="Firefox Logo"
              />
              <h1 className="text-white font-bold text-2xl">FireFox</h1>
        </div>
      
      <SearchBox engine="Google" logourl="logo.png" setSearch={setSearch} />

      <div className='flex flex-row justify-center gap-12  mb-24 mt-12 flex-wrap w-[70%]'>
        {icons.map((icons,index)=>(
          <IconCard key={index} title={icons.title} iconlogo={icons.imageUrl}/>
        ))}


      </div>
      <div className='flex flex-row justify-center gap-8  flex-wrap pb-5 w-[80%] '>
        {filteredNews.map((newsItem,index)=>(
          <NewsCard key={index} index={index} title={newsItem.title} urlToImage={newsItem.urlToImage}/>))}
      </div>
      

    </div>

  )
}

export default HomePage
