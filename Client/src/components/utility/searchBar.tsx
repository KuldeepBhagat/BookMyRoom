import SearchIcon from "../../assets/icons/Search.svg?react";
import { useState, useEffect} from "react";

export default function SearchBar() {

  const [index, setIndex ] = useState(0)
  const List  = ["Destination", "Landmark", "PG", "Hostel"]
  const [fade, setFade] = useState((true))

  useEffect(() => {
    const interval = setInterval(() => {
        setFade(false)
        
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % List.length)
          setFade(true)
        }, 500)
        
    }, 2000)
    return () => clearInterval(interval)
  }, [List.length])

  return (
    <form className=" flex items-center w-100 rounded-xl ml-1 gap-2 hover:bg-black/10 cursor-pointer">
        <div className="m-1">
            <SearchIcon className="w-8 h-8 bg-inherit" />
        </div>
        <div className="w-full h-full transition-all">
            <h1
               className={`transition-all duration-500 ease-in-out text-black/50 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
               }`}
            >{`${List[index]}`}</h1>
            <label htmlFor="search"></label>
            <input type="text" placeholder="what are you looking for?" className=" w-full font-bold outline-none" />       
        </div>
        <button type="submit" className="ml-2 cursor-pointer
                      border-l h-full p-2
                        rounded-r-xl
                        font-bold
                       "><span className="transition-all hover:scale-110 hover:text-green-700 inline-block">Search</span></button>
    </form>
  );
}