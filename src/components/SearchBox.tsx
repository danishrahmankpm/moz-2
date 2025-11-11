export type SearchBoxProps={
    engine:string
    logourl:string
    setSearch:(value:string)=>void
}
export default function SearchBox({engine,logourl,setSearch}:SearchBoxProps){ 
    return( 
        <div className="flex flex-row justify-start items-center mt-12 w-[70%] sm:w-[60%] md:w-[40%]  gap-4 p-4 bg-[#3c3c47] rounded-lg transition-shadow duration-300">
            <img src={logourl} alt={""} />
            <input
            className=" text-white outline-none text-ellipsis truncate w-full"
            type="text"
            placeholder={`Search with ${engine} or enter an address`}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="type to search"
        />
        </div>
    )
};