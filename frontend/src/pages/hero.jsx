import resume from "../assets/img/Resume.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Profile from "../assets/img/MyImage.jpg";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate clouds: fade and move up as you scroll down
  const cloudVariants = {
    initial: { opacity: 1, y: 0 },
    scrolled: { opacity: 0, y: -100 },
  };
  const cloudTransition = { duration: 0.8, ease: "easeOut" };
  const cloudState = scrollY < 120 ? "initial" : "scrolled";

  return (
    <section className="flex items-center py-12 relative">
      {/* Clouds */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full pointer-events-none z-0"
        initial="initial"
        animate={cloudState}
        variants={cloudVariants}
        transition={cloudTransition}
      >
        {/* Cloud SVGs - you can add more or adjust positions as needed */}
        <svg className="absolute left-10 top-10 w-32 h-16 opacity-80" viewBox="0 0 120 60" fill="none">
          <ellipse cx="60" cy="30" rx="60" ry="30" fill="#fff" fillOpacity="0.15" />
        </svg>
        <svg className="absolute right-20 top-20 w-40 h-20 opacity-60" viewBox="0 0 160 80" fill="none">
          <ellipse cx="80" cy="40" rx="80" ry="40" fill="#fff" fillOpacity="0.10" />
        </svg>
        <svg className="absolute left-1/2 -translate-x-1/2 top-32 w-48 h-24 opacity-40" viewBox="0 0 200 100" fill="none">
          <ellipse cx="100" cy="50" rx="100" ry="50" fill="#fff" fillOpacity="0.08" />
        </svg>
      </motion.div>
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Ayaan
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 font-light">
                Software Developer
              </p>
            </div>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Passionate developer crafting digital experiences with modern technologies.
              Specialized in React, Node.js, and building scalable web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={resume}
                download
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
              >
                Download Resume
              </a>
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link
                  to="https://github.com/Ayaanshaikh20"
                  className="p-3 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
                >
                  <GitHubIcon />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/muhammad-ayaan-shaikh/"
                  className="p-3 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  to="https://www.facebook.com/profile.php?id=100004227799035"
                  className="p-3 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
                >
                  <FacebookIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 mix-blend-normal bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-2xl opacity-20"></div>
              <img
                src={Profile}
                alt="Ayaan Shaikh"
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-orange-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
