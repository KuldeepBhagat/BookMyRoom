import RoomImage from "../../assets/Others/RoomImage.jpg"
import Location from "../../assets/icons/Location.svg?react"

export default function Catelogue({ Type }: { Type: "Highlight" | "general" }) {
    if (Type === "Highlight") {
        return (
            <div className="flex cursor-pointer ">
                <div className=" shadow-xl gap-1 flex shrink-0 w-70 h-80 m-1 rounded-xl flex-col text-sm">
                    <div className=" center bg-amber-500 rounded-xl overflow-hidden ">
                        <img className="rounded-t-xl w-70 h-39.5 hover:scale-110 transition-all ease-in-out duration-300" src={RoomImage} alt="Image" />
                    </div>
                    <div className="flex flex-col gap-1 px-1.5">
                        <div className="font-bold text-lg">
                            <h1>
                                Room for sale
                            </h1>
                        </div>
                        <div className="text-xs flex items-center gap-2 ">
                            <Location className="w-4 h-4" />
                            <span className="font-mono">rajivgandhi chowk, bilaspur</span>
                        </div>
                        <div className="flex gap-2 font-bold items-center">
                            <div className="text-sm bg-green-500 max-w-fit px-2 center rounded-md">
                                9.9
                            </div>
                            <div className="text-xs ">
                                <h1>Excellent (1242)</h1>
                            </div>
                        </div>
                        <div className=" bg-red-700 text-white max-w-fit px-2 rounded-md font-medium">
                            <h1>clean finished room with tiles</h1>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="font-bold">
                                4000₹
                            </div>
                            <h1 className="text-xs">per month</h1>
                        </div>
                        <div className="flex justify-end ">
                            <button className="bg-yellow-400 p-1 px-3 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out font-medium cursor-pointer">
                                <span className="">Check</span>
                            </button>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }

    if (Type === "general") {
        return (
            <div>
                General
            </div>
        )
    }
}