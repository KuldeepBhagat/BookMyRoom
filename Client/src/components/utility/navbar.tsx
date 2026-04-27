import { useNavigate } from "react-router-dom"
import { MapIcon, UserIcon, SiteIcon, MenuIcon } from "../../assets/icons/index"

export default function NavigationBar() {
  const naviagte = useNavigate()

  const ButtonStyle = ` p-2 w-15 font-medium hover:bg-black/10 hover:text-black 
                        cursor-pointer flex items-center gap-1 justify-center 
                        transition-all duration-150 transform active:scale-95 
                        active:shadow-inner active:bg-black/10`
  const desktopOverride = "md:rounded-lg md:w-25 md:border md:hover:bg-black md:hover:text-white"

  return (
    <div className="px-2 flex w-full justify-center">
      <nav className=" flex gap-2 bg-white w-full max-w-245 items-center px-1 align-middle justify-between">
        <button onClick={() => naviagte('/')}>
          <SiteIcon className="w-50 h-50 text-2xl"/>        
          </button>
        <div className="flex h-full md:py-1.5 gap-3">
          <button className={`${ButtonStyle} ${desktopOverride}`} onClick={() => naviagte('/Map')}>
            <MapIcon className="w-6 h-6" />
            <span className=" hidden md:inline">Map</span>
          </button>
          <button className={`${ButtonStyle} ${desktopOverride}` } >
            <UserIcon className="w-6 h-6 "/>
            <span className="hidden md:inline">Sign in</span>
          </button>
          <button className={`${ButtonStyle} ${desktopOverride}`} >
            <MenuIcon className="w-5 h-5"/>
            <span className="hidden md:inline">Menu</span>
            </button>
        </div>
      </nav>
    </div>
  )
}