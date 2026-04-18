import { useNavigate } from "react-router-dom"

export default function NavigationBar() {
    const naviagte = useNavigate()
    
    const ButtonStyle = "border rounded-lg p-1 w-25 font-medium hover:bg-black hover:text-white cursor-pointer"
    return (
        <nav className=" flex gap-2 bg-white w-full px-1 align-middle justify-between">
          <button onClick={() => naviagte('/')}>Home</button>
          <div className="flex py-1.5 gap-3">
            <button className={ButtonStyle} onClick={() => naviagte('/Map')}>Map page</button>
            <button className={ButtonStyle} >User</button>
            <button className={ButtonStyle} >MENU</button>
          </div>
        </nav>
    )
}