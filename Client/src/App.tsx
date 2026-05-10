import { Routes, Route, Outlet } from "react-router-dom"
import Home from "./components/pages/home"
import Map from "./components/pages/map"
import Navbar from "./components/utility/navbar"
import Footer from "./components/utility/Footer"
import LegalPage from "./components/pages/LegalPage"

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route index element={<Home />}></Route>
        <Route path="/Map" element={<Map />}></Route>
      </Route>

      <Route path="/LegalPage/:type" element={<LegalPage />}></Route>
    </Routes>

  )

  function DefaultLayouts() {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="flex h-14 bg-white w-full shadow-lg justify-center">
          < Navbar />
        </header>

        <div className="flex flex-1 justify-center">
          <main className=" flex w-full max-w-245">
            <Outlet />
          </main>
        </div>

        <div className="bg-black/90 text-white flex justify-center">
          <Footer />
        </div>

      </div>
    )
  }
}