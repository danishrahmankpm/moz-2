export type SearchBoxProps={
    engine:string
    logourl:string
}
export default function SearchBox(searchBoxProps:SearchBoxProps){ 
    const engine:string= searchBoxProps.engine;
    const logourl:string=searchBoxProps.logourl
    return( 
    <div className="flex flex-row justify-center items-center w-[50%] gap-2 p-4 backgound-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src={logourl} alt={""} />
        <input className="p-2 rounded-md text-white" type="text" placeholder={`Search with ${engine}`} />
    </div>
    )
};