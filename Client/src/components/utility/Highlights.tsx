import AngleLeft from "../../assets/icons/AngleLeft.svg?react"
import AngleRight from "../../assets/icons/AngleRight.svg?react"
import { useRef, useState } from "react"

export default function Highlights() {

    const [isAtStart, setIsAtStart] = useState(true)
    const [isAtEnd, setIsAtEnd] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmmount = 300;

            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmmount : scrollAmmount,
                behavior: "smooth"
            })

        }
    }

    const handleScroll = () => {
        if(scrollRef.current) {
            const {scrollLeft, clientWidth, scrollWidth} = scrollRef.current
            setIsAtStart(scrollLeft <= 5);

            // Total Content Width - Visible Window Width = Maximum possible scroll
            const CheckisAtEnd = scrollLeft + clientWidth >= scrollWidth - 5;
            setIsAtEnd(CheckisAtEnd)
        }
    }


    const buttonAniation = `absolute w-11 h-11 flex 
                items-center justify-center text-5xl
                bg-white shadow-lg border-red-400 
                -translate-x-2 rounded-full
                transition-all
                duration-100 ease-in-out

                overflow-hidden
                active:scale-90
                after:content-[''] after:absolute after:inset-0 
                after:bg-black/20 after:rounded-full after:scale-0 
                after:opacity-0 active:after:scale-150 active:after:opacity-100 
                after:transition-all after:duration-200 after:ease-out `
    return (
        <div className="flex">
                <div className={`flex items-center justify-start relative transition-all ease-in-out duration-500
                    ${isAtStart ? "opacity-0 invisible -translate-x-4" 
                        : "opacity-100 visible translate-x-0"
                    }`}>
                <button onClick={() => scroll("left")}
                    className={buttonAniation}>
                    <AngleLeft />
                </button>
            </div>

            <div className="flex justify-start w-full overflow-auto no-scrollbar" ref={scrollRef} onScroll={handleScroll}>
                <div className=" flex shrink-0 bg-green-500 w-70 h-80 m-1 rounded-xl">
                </div>
                <div className=" flex shrink-0 bg-green-500 w-70 h-80 m-1 rounded-xl">
                </div>
                <div className=" flex shrink-0 bg-green-500 w-70 h-80 m-1 rounded-xl">
                </div>
                <div className=" flex shrink-0 bg-green-500 w-70 h-80 m-1 rounded-xl">
                </div>
                <div className=" flex shrink-0 bg-green-500 w-70 h-80 m-1 rounded-xl">
                </div>
                <div className=" flex shrink-0 bg-green-500 w-70 h-80 m-1 rounded-xl">
                </div>
                <div className=" flex shrink-0 bg-green-500 w-70 h-80 m-1 rounded-xl">
                </div>
                <div className=" flex shrink-0 bg-green-500 w-70 h-80 m-1 rounded-xl">
                </div>
            </div>
            <div className={`flex items-center justify-start relative transition-all ease-in-out duration-500
                            ${isAtEnd ? "opacity-0 invisible translate-x-5" 
                                : "opacity-100 visible translate-x-0"
                            }
            `}>
                <button onClick={() => scroll("right")}
                    className={`${buttonAniation} -translate-x-9`}>
                    <AngleRight />
                </button>
            </div>
        </div>

    )
}