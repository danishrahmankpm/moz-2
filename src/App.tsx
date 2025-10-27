

import './App.css'


import IconCard from './components/IconCard';
import NewsCard from './components/NewsCard';
import SearchBox from './components/SearchBox'

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

const news=[
  {
  author: "John Doe",
  title: "Exploring the Wonders of the Universe",
  description: "A deep dive into the latest discoveries in astronomy and space exploration.",
  url: "https://www.example.com/articles/universe-discoveries",
  urlToImage: "https://science.nasa.gov/wp-content/uploads/2023/09/stsci-01ga76rm0c11w977jrhgj5j26x-2.png?w=1024",
  publishedAt: "2025-10-26T10:00:00Z",
  content: "Astronomers have recently unveiled new insights into the formation of galaxies, shedding light on the mysteries of the universe..."
  },
    {
    author: "John Doe",
    title: "Exploring the Wonders of the Universe",
    description: "A deep dive into the latest discoveries in astronomy and space exploration.",
    url: "https://www.example.com/articles/universe-discoveries",
    urlToImage: "https://science.nasa.gov/wp-content/uploads/2023/09/stsci-01ga76rm0c11w977jrhgj5j26x-2.png?w=1024",
    publishedAt: "2025-10-26T10:00:00Z",
    content: "Astronomers have recently unveiled new insights into the formation of galaxies, shedding light on the mysteries of the universe..."
  },
  {
    author: "John Doe",
    title: "Exploring the Wonders of the Universe",
    description: "A deep dive into the latest discoveries in astronomy and space exploration.",
    url: "https://www.example.com/articles/universe-discoveries",
    urlToImage: "https://science.nasa.gov/wp-content/uploads/2023/09/stsci-01ga76rm0c11w977jrhgj5j26x-2.png?w=1024",
    publishedAt: "2025-10-26T10:00:00Z",
    content: "Astronomers have recently unveiled new insights into the formation of galaxies, shedding light on the mysteries of the universe..."
  },
  {
    author: "John Doe",
    title: "Exploring the Wonders of the Universe",
    description: "A deep dive into the latest discoveries in astronomy and space exploration.",
    url: "https://www.example.com/articles/universe-discoveries",
    urlToImage: "https://science.nasa.gov/wp-content/uploads/2023/09/stsci-01ga76rm0c11w977jrhgj5j26x-2.png?w=1024",
    publishedAt: "2025-10-26T10:00:00Z",
    content: "Astronomers have recently unveiled new insights into the formation of galaxies, shedding light on the mysteries of the universe..."
  },
  {
    author: "John Doe",
    title: "Exploring the Wonders of the Universe",
    description: "A deep dive into the latest discoveries in astronomy and space exploration.",
    url: "https://www.example.com/articles/universe-discoveries",
    urlToImage: "https://science.nasa.gov/wp-content/uploads/2023/09/stsci-01ga76rm0c11w977jrhgj5j26x-2.png?w=1024",
    publishedAt: "2025-10-26T10:00:00Z",
    content: "Astronomers have recently unveiled new insights into the formation of galaxies, shedding light on the mysteries of the universe..."
  },
  {
    author: "John Doe",
    title: "Exploring the Wonders of the Universe",
    description: "A deep dive into the latest discoveries in astronomy and space exploration.",
    url: "https://www.example.com/articles/universe-discoveries",
    urlToImage: "https://science.nasa.gov/wp-content/uploads/2023/09/stsci-01ga76rm0c11w977jrhgj5j26x-2.png?w=1024",
    publishedAt: "2025-10-26T10:00:00Z",
    content: "Astronomers have recently unveiled new insights into the formation of galaxies, shedding light on the mysteries of the universe..."
  },
  {
    author: "John Doe",
    title: "Exploring the Wonders of the Universe",
    description: "A deep dive into the latest discoveries in astronomy and space exploration.",
    url: "https://www.example.com/articles/universe-discoveries",
    urlToImage: "https://science.nasa.gov/wp-content/uploads/2023/09/stsci-01ga76rm0c11w977jrhgj5j26x-2.png?w=1024",
    publishedAt: "2025-10-26T10:00:00Z",
    content: "Astronomers have recently unveiled new insights into the formation of galaxies, shedding light on the mysteries of the universe..."
  },
  {
    author: "John Doe",
    title: "Exploring the Wonders of the Universe",
    description: "A deep dive into the latest discoveries in astronomy and space exploration.",
    url: "https://www.example.com/articles/universe-discoveries",
    urlToImage: "https://science.nasa.gov/wp-content/uploads/2023/09/stsci-01ga76rm0c11w977jrhgj5j26x-2.png?w=1024",
    publishedAt: "2025-10-26T10:00:00Z",
    content: "Astronomers have recently unveiled new insights into the formation of galaxies, shedding light on the mysteries of the universe..."
  },
  {
    author: "John Doe",
    title: "Exploring the Wonders of the Universe",
    description: "A deep dive into the latest discoveries in astronomy and space exploration.",
    url: "https://www.example.com/articles/universe-discoveries",
    urlToImage: "https://science.nasa.gov/wp-content/uploads/2023/09/stsci-01ga76rm0c11w977jrhgj5j26x-2.png?w=1024",
    publishedAt: "2025-10-26T10:00:00Z",
    content: "Astronomers have recently unveiled new insights into the formation of galaxies, shedding light on the mysteries of the universe..."
  }

]


function App() {


  return (
    <div className="flex flex-col justify-start items-center bg-[#2B2A33] h-screen w-screen overflow-auto ">
        <div className="pl-7 w-full flex flex-row justify-start items-center gap-2.5 mt-5 mr-1">
              <img
                className="w-8 h-8 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
                alt="Firefox Logo"
              />
              <h1 className="text-white font-bold text-2xl">FireFox</h1>
        </div>
      
      <SearchBox engine="Google" logourl="logo.png" />

      <div className='flex flex-row justify-center gap-12  mb-12 mt-12 flex-nowrap w-[70%]'>
        {icons.map((icons,index)=>(
          <IconCard key={index} title={icons.title} iconlogo={icons.imageUrl}/>
        ))}


      </div>
      <div className='flex flex-row justify-center gap-8  flex-wrap pb-5 w-[80%] '>
        {news.map((newsItem,index)=>(
          <NewsCard key={index} title={newsItem.title} urlToImage={newsItem.urlToImage}/>))}
      </div>

    </div>

  )
}

export default App
