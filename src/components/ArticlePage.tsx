type articlepageProps={
    title:string
    author:string
    publishedAt:string
    urlToImg:string
    content:string

}
export default function ArticlePage(articlepageProps:articlepageProps){
    const title=articlepageProps.title;
    const author=articlepageProps.author;
    const publishedAt=articlepageProps.publishedAt;
    const urlToImage=articlepageProps.urlToImg;
    const content=articlepageProps.content;

    return (
        <div className="flex flex-col justify-center items-center w-[70%]">
        <div>
            <h1>{title}</h1>
        </div>
        <div className="flex flex-row justify-between">
            <h3>{author}</h3>
            <h4>{publishedAt}</h4>
        </div>
        <div>
            <img src={urlToImage} alt="alt-text"></img>
        </div>
        <div>
            <p>{content}</p>
        </div>
        </div>
    )

}