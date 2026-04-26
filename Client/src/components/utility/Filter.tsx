import FilterIcon from "../../assets/icons/Filter.svg?react"

export default function Filter() {
    return (
        <div className="flex items-center">
            <button className=" cursor-pointer border-l h-full">
                <FilterIcon className="w-10 h-10 active:scale-110" />
            </button>
        </div>
    )
}