import { Outlet } from "react-router";
import { Link } from "react-router";
import { IconButton } from "@mui/material";
import resume from "../assets/img/ayaanCV092025.pdf";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import DrawerComponent from "./drawer";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    // { header: "Home", path: "/" },
    { header: "Experience", path: "/experience" },
    { header: "Projects", path: "/projects" },
    { header: "Contact", path: "/contact" }
  ];

  const handleOpenDrawer = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <main class="w-full flex flex-col bg-gradient-to-tr from-[#3f3f3f] to-[#000000] items-center justify-center">
      {/* Drawer */}
      <DrawerComponent openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {/* Navbar */}
      <nav className="bg-black  shadow-lg flex justify-center w-full px-3 sticky top-0">
        <div className="flex items-center justify-between flex-1 h-16 max-w-7xl">
          <Link to={"/"} className="text-white text-xl font-semibold tracking-widest">
            Ayaan Shaikh
          </Link>
          <div className="hidden sm:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a key={index} href={`#${item.header}`} className="text-white hover:text-red-400 transition">
                {item.header}
              </a>
            ))}
            <button className="border border-white text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
              <a href={resume} download>
                Download Resume
              </a>
            </button>
          </div>
          <div className="sm:hidden">
            <IconButton color="inherit" aria-label="open drawer" onClick={handleOpenDrawer} edge="end">
              <MenuIcon className="text-white" />
            </IconButton>
          </div>
        </div>
      </nav>
      <main className="min-h-screen max-w-7xl">
        <Outlet openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </main>
      {/* footer */}
      <section className="mt-20 w-full bg-black border-t  border-white" id="footer">
        <footer className="w-full mx-auto px-4 py-10 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left Side: Name or Brand */}
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold">Ayaan Shaikh</h2>
            <p className="text-sm text-gray-400">Full-Stack Developer</p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex gap-6 text-sm">
            <a href="#About" className="hover:text-red-400 transition">
              About
            </a>
            <a href="#Projects" className="hover:text-red-400 transition">
              Projects
            </a>
            <a href="#Skills" className="hover:text-red-400 transition">
              Skills
            </a>
            <a href="#Contact" className="hover:text-red-400 transition">
              Contact
            </a>
          </div>

          {/* Right Side: Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Ayaanshaikh20"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ayaan-shaikh20/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </footer>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-700">
          © {new Date().getFullYear()} Ayaan Shaikh. All rights reserved.
        </div>
      </section>
    </main>
  );
};

export default Layout;
