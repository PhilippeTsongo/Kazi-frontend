import { Briefcase } from "lucide-react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="relative px-5 md:px-14 md:py-5">
            <div className="fixed top-0 left-0 w-full shadow-sm bg-white z-50 flex justify-between items-center px-10 py-4">
                <h2 className="flex items-center gap-2 text-2xl font-bold">
                    <Briefcase className="w-6 h-6" />
                    <Link to='/'>Kazi</Link>
                </h2>

                <ul className="flex gap-6 items-center text-xs md:text-sm">
                    <Link to="/chat" className="hover:cursor-pointer hover:text-gray-700 transition">Chat</Link>
                    <Link to="/jobs" className="hover:cursor-pointer hover:text-gray-700 transition">Jobs</Link>
                    <Link to="/profile" className="hover:cursor-pointer hover:text-gray-700 transition">Profile</Link>
                    <Link to="/login" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition hover:cursor-pointer"> Login</Link>

                </ul>
            </div>
        </header>
    );
}

export default Header;
