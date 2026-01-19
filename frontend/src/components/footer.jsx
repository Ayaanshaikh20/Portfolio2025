import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
