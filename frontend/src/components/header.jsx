import { Link } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ setOpenMenu }) => {
  const navItems = [
    { header: "Home", path: "/" },
    { header: "Resume", path: "/resume" },
    { header: "Projects", path: "/projects" },
    { header: "Contact me", path: "/contact" },
  ];

  const handleOpenDrawer = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className=" px-5 md:px-6 xl:px-6 py-1 md:py-2 xl:py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-base md:text-lg xl:text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent transition-transform hover:scale-105">
            Ayaan
          </Link>

          <div className="hidden md:flex items-center space-x-5 md:space-x-8 xl:space-x-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`${item.path}`}
                className="text-xs md:text-xs xl:text-base text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.header}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button
            onClick={handleOpenDrawer}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
