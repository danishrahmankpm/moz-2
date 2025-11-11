type IconCardProps = {
    iconlogo: string;
    title: string;
}
export default function IconCard(iconCardProps:IconCardProps){
    const {iconlogo,title} = iconCardProps;
    return   <div className="flex flex-col justify-center cursor-pointer gap-1">
                <button className="flex flex-col justify-center bg-[#363639] border-0 cursor-pointer w-13 h-13 p-3  rounded-2xl hover:bg-gray-400 hover:ring-4 hover:ring-gray-400 hover:ring-offset-6 hover:ring-offset-gray-400"
                aria-label={`Go to: ${title}`}>
                    <img
                        src={iconlogo}
                        alt={title}
                        className="w-12 h-12 rounded-lg pb-0.5"
                    />
                </button>
                <p className="text-white text-sm">{title}</p>
            </div>
}