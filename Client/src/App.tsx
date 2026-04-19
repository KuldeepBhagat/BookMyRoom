import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./components/pages/home"
import Map from "./components/pages/map"
import Navbar from "./components/utility/navbar"

export default function App() {
  return (
    <div className="">
      <header className="flex h-14 bg-white w-full shadow-lg justify-center">
        < Navbar/>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Map" element={<Map />}></Route>
        </Routes>
      </main>
    </div>
  )
}