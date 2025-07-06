import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";


export default function Navbar() {
    return (
        <nav className="max-w-screen mx-auto h-16 flex justify-between items-center gap-3 px-5 bg-pink-500">
            <div className="navbar bg-base-300">
                <Link to="/" className="rounded-full flex mr-6">
                    {/* <img className="rounded-full"
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                        <span>📚</span>
                        <p className="text-pink-900">BLove</p>
                </Link>
            </div>
            
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/borrow-summary">Borrows</Link>
            <div className="ml-auto text-pink-900">
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    )
}

// path: "borrow-summary",
//         Component: BorrowSummary,