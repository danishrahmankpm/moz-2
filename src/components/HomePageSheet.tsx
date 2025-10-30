import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Edit } from "lucide-react"
/* import w1 from "@/assets/w1.jpg";
import w2 from "@/assets/w2.jpg";
import w3 from "@/assets/w3.jpg";
import w4 from "@/assets/w4.jpg";
import w5 from "@/assets/w5.jpg";
import w6 from "@/assets/w6.jpg"; */

interface Props {
  setBackground: (url: string) => void; 
}


export default function HomepageSheet({ setBackground }: Props) {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          
          <button
            className="
              fixed bottom-4 right-4 sm:bottom-6 sm:right-6
              w-12 h-12
              flex items-center justify-center
              bg-blue-100 text-white
              rounded-md shadow-lg
              hover:bg-gray-600
              transition
            "
          >
            <Edit className="w-5 h-5" />
          </button>
        </SheetTrigger>
       
            <SheetContent side="right" className="bg-gray-700 h-screen overflow-y-auto">
            
                <SheetHeader>
                    <SheetTitle className="text-white">Wallpapers</SheetTitle>
                    <SheetDescription className="text-amber-50">
                    Select the background you want to apply.
                    </SheetDescription>
                </SheetHeader>
                {/* <div className="flex justify-center flex-wrap mb-2">
                    <button className="w-auto h-auto"><img className="border-2 hover:opacity-100 cursor-pointer" src={w1} onClick={() => {setBackground(w1);} }></img></button>
                    <button className="w-auto h-auto"><img className="border-2 hover:opacity-100 cursor-pointer" src={w2} onClick={() => {setBackground(w2);}}></img></button>
                    <button className="w-auto h-auto"><img className="border-2 hover:opacity-100 cursor-pointer" src={w3} onClick={() => {setBackground(w3);}}></img></button>
                    <button className="w-auto h-auto"><img className="border-2 hover:opacity-100 cursor-pointer" src={w4} onClick={() => {setBackground(w4);}}></img></button>
                    <button className="w-auto h-auto"><img className="border-2 hover:opacity-100 cursor-pointer" src={w5} onClick={() => {setBackground(w5);}}></img></button>
                    <button className="w-auto h-auto"><img className="border-2 hover:opacity-100 cursor-pointer" src={w6} onClick={() => {setBackground(w6);}}></img></button>
                </div> */}

            </SheetContent>
        
      </Sheet>
    </div>
  )
}