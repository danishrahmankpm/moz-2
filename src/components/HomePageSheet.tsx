import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Edit } from "lucide-react"
import w1 from "@/assets/w1.jpg";
import w2 from "@/assets/w2.jpg";
import w4 from "@/assets/w4.jpg";
import w5 from "@/assets/w5.jpg";
import w6 from "@/assets/w6.jpg";

interface Props {
  setBackground: (url: string) => void; 
}


export default function HomepageSheet({ setBackground }: Props) {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          
          <button
            aria-label="Open wallpaper selector"
            className="
              fixed bottom-4 right-4 sm:bottom-6 sm:right-6
              w-12 h-12
              flex items-center justify-center
              bg-gray-800 text-white
              rounded-md shadow-lg
              hover:bg-gray-600">
            <Edit className="w-5 h-5" />
          </button>
        </SheetTrigger>
       
            <SheetContent side="right" className="bg-gray-700 h-screen overflow-y-auto" aria-label="Wallpaper selection panel">
            
                <SheetHeader>
                    <SheetTitle className="text-white">Wallpapers</SheetTitle>
                    <SheetDescription className="text-amber-50">
                    Select the background you want to apply.
                    </SheetDescription>
                </SheetHeader>
                    <div className="flex justify-center flex-wrap mb-1 gap-2">
                      {[w1, w2, w4, w5, w6].map((imgSrc, index) => (
                        <button
                          key={index}
                          onClick={() => setBackground(imgSrc)}
                          className="w-28 h-28 rounded overflow-hidden focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                        >
                          <img
                            src={imgSrc}
                            alt={`Wallpaper`}
                            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity duration-200"
                            aria-label={`Apply wallpaper ${index}`}
                          />
                        </button>
                      ))}
                    </div>

            </SheetContent>
        
      </Sheet>
    </div>
  )
}