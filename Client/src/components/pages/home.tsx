import SearchBar from "../utility/searchBar"
import Filter from "../utility/Filter"
import Highlights from "../utility/Highlights"

export default function Home() {
    return (
        <div className="flex align-middle flex-1 flex-col w-full py-3 px-2">
            <div className=" flex flex-1 flex-col gap-4">
                <h1 className="text-3xl font-bold"> Find Rooms Fast and Easy </h1>
                <h1 className="text-xl">Upto 50% off on your first booking!! <br /> Open the Map and just book the room</h1>
            </div>
            <div className=" bg-white h-15 shadow-2xl rounded-md p-1 flex justify-between">
                < SearchBar />
                < Filter />
            </div>
            <div className="flex flex-3 flex-col">
                <div className="w-full">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-bold my-5"> Best Deals</h1>
                        <button>
                            <span className="hover:text-black cursor-pointer 
                                           text-blue-500 text-sm font-bold">
                                Show more
                            </span>
                        </button>
                    </div>
                    <Highlights />
                </div>
                <div className="my-5 bg-green-300 h-140">
                    Map will be here
                </div>
            </div>
        </div>
    )
}