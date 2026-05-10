import FooterLogo from "../../assets/icons/FooterLogo.svg?react"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="flex flex-col gap-3 w-full max-w-245 mb-5">
            <div className="">
                <FooterLogo className="w-30 h-30" />
            </div>
            <div>
                <span>Copyright {new Date().getFullYear()} Radius | All rights reserved.</span>
            </div>
            <div className="flex flex-col gap-3">
                <span><Link
                to="/LegalPage/PrivacyPolicy"
                target="_blank"
                rel="noopener noreferrer"
                >
                Privacy Policy
                </Link></span>
                <span>
                    <Link
                to="/LegalPage/TOS"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Terms of Service
                </Link>
                </span>
            </div>

        </div>
    )
}