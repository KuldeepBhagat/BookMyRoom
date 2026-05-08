import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/home"
import Map from "./components/pages/map"
import Navbar from "./components/utility/navbar"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-14 bg-white w-full shadow-lg justify-center">
        < Navbar />
      </header>

      <div className="flex flex-1 justify-center">
        <main className=" flex w-full max-w-245">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Map" element={<Map />}></Route>
          </Routes>
        </main>
      </div>
      <div className="bg-red-500 shrink-0">
        Footer

      </div>
    </div>
  )
}