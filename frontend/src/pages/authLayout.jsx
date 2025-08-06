import { Outlet } from 'react-router'
import { Link } from "react-router";
import { IconButton } from "@mui/material";
import resume from "../assets/img/ayaanCV2025.pdf";
import MenuIcon from "@mui/icons-material/Menu";

const AuthLayout = () => {
    const navItems = [
        { header: "Home", path: "/path" },
        { header: "About", path: "/about" },
        { header: "Contact", path: "/contact" }
    ];

    return (
        <main className="w-full flex flex-col bg-[#212121] align-middle items-center justify-center">
            {/* Navbar */}
            <nav className="bg-black top-0 sticky shadow-lg flex justify-center w-full px-3">
                <div className="flex items-center justify-between flex-1 h-16 max-w-7xl">
                    <Link to={"/"} className="text-white text-xl font-semibold tracking-widest">Ayaan Shaikh</Link>
                    <div className="hidden sm:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <Link key={index} to={item.path} className="text-white hover:text-red-400 transition">
                                {item.header}
                            </Link>
                        ))}
                        <button className="border border-white text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
                            <a href={resume} download>
                                Download Resume
                            </a>
                        </button>
                    </div>
                    <div className="sm:hidden">
                        <IconButton color="inherit" aria-label="open drawer" edge="end">
                            <MenuIcon className="text-white" />
                        </IconButton>
                    </div>
                </div>
            </nav>
            <Outlet />
        </main>
    )
}

export default AuthLayout