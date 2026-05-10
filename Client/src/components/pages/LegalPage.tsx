import { useParams } from "react-router-dom"
import Footer from "../utility/Footer"
import Logo from "../../assets/icons/Logo.svg?react"

export default function LegalPage() {


    const { type } = useParams()

    if (type === "TOS") {
        return (
            <div className="">
                <div className="h-20 flex items-center">
                    <Logo className="w-50 h-50 text-2xl mx-5" />
                </div>
                <div className="w-full flex justify-center mt-5 mb-20">
                    <div className="shadow-[0_0_5px_rgba(0,0,0,0.8)] w-3xl h-200">

                    </div>
                </div>

                <div className="bg-black/90 text-white flex justify-center">
                    <Footer />
                </div>
            </div>
        )
    }

    if (type === "PrivacyPolicy") {
        return (
            <div>

            </div>
        )
    }
}