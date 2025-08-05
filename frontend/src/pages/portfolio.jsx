/****************************Porfolio*******************************/
import { Link } from "react-router";
import { IconButton } from "@mui/material";
import resume from "../assets/img/ayaanCV2025.pdf";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Profile from "../assets/img/Media.jpg";

const Portfolio = () => {
  const navItems = [
    { header: "Home", path: "/path" },
    { header: "About", path: "/about" },
    { header: "Contact", path: "/contact" }
  ];

  return (
    <main className="w-full flex flex-col bg-[#212121] align-middle items-center justify-center">
      {/* Navbar */}
      <nav className="bg-black top-0 sticky shadow-lg flex justify-center w-full">
        <div className="flex items-center justify-between flex-1 h-16 max-w-7xl">
          <span className="text-white text-xl font-semibold tracking-widest">Ayaan Shaikh</span>
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
      {/* Main */}
      <section className="w-full min-h-screen max-w-7xl">
        <div className="w-full flex flex-col lg:flex lg:flex-row justify-between items-center align-middle border-2 border-white mt-5 mb-6 p-5">
          <div className=" flex flex-col w-full">
            <span className="block text-white tracking-wide text-3xl sm:text-4xl md:text-4xl font-extrabold">
              Muhammad Ayaan Shaikh
            </span>
            <div className=" mt-5 flex flex-wrap gap-5 items-center">
              <span className="text-lg xl:text-3xl lg:text-4xl text-white font-mono">Software Developer</span>
              <button className="border border-white text-white px-4 py-2 text-[0.8rem] xl:text-xl hover:bg-white hover:text-black transition">
                <a href={resume} download>
                  Download Resume
                </a>
              </button>
            </div>
            <div className="flex gap-5 mt-5">
              <GitHubIcon
                className="text-white transition duration-300 ease-in-out hover:text-gray-400"
                fontSize="large"
              />
              <LinkedInIcon
                className="text-white transition duration-300 ease-in-out hover:text-gray-400"
                fontSize="large"
              />
              <InstagramIcon
                className="text-white transition duration-300 ease-in-out hover:text-gray-400"
                fontSize="large"
              />
              <FacebookIcon
                className="text-white transition duration-300 ease-in-out hover:text-gray-400"
                fontSize="large"
              />
            </div>
            <div className="w-full flex mt-5">
              <p className="text-white text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl mb-4">
                I have 2+ years of hands-on experience as a full-stack developer, primarily working with React.js to
                build dynamic and responsive front-end interfaces, and Node.js with Express.js for developing scalable
                RESTful APIs following MVC architecture. I've worked on multiple fast-paced projects where I implemented
                component-driven architecture using Next.js, and improved UI/UX using Material UI and Tailwind CSS. My
                focus is on writing clean, maintainable, and efficient code while adhering to best practices and staying
                current with modern technologies. I hold a Bachelor of Engineering (B.E.) in Computer Engineering from
                Rizvi College of Engineering, which laid a strong foundation in software development, problem-solving,
                and system design.
              </p>
            </div>
          </div>
          <div className=" w-full flex justify-center lg:justify-end mt-4">
            <img src={Profile} alt="Profile" className=" rounded-full w-44 md:w-1/2 lg:w-3/4 xl:w-3/4 2xl:w-3/5" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
