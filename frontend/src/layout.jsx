import { useEffect, useState } from "react";
import { FiUser, FiBriefcase, FiBookOpen, FiFolder, FiTool } from "react-icons/fi";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router";
import rcoeImage from "./assets/img/rcoe-1.jpg";
import LogoCC from "./assets/img/logoCareerCompass.png";
import resume from "./assets/img/Resume.pdf";
import MyImage from "./assets/img/MyImage.jpg";
import js from "./assets/img/javascript.png";
import ts from "./assets/img/typescript.png";
import html from "./assets/img/html.png";
import css from "./assets/img/css.png";
import react from "./assets/img/reactjs.png";
import nextjs from "./assets/img/nextjs.png";
import nodejs from "./assets/img/nodejs.png";
import express from "./assets/img/expressjs.png";
import redux from "./assets/img/redux.png";
import tailwind from "./assets/img/tailwindcss.png";
import postgresql from "./assets/img/postgresql.png";
import git from "./assets/img/git.png";
import github from "./assets/img/github.png";
import postman from "./assets/img/postman.png";
import vue from "./assets/img/vuejs.png";
import sql from "./assets/img/sql.png";
import aws from "./assets/img/aws.png";
import reactquery from "./assets/img/reactquery.png";
import careerCompassThumbnail from "./assets/img/careercompass-login.png";
import ccregister from "./assets/img/cc-register.png";
import PhoneIcon from "@mui/icons-material/Phone";

const sections = ["About", "Experience", "Education", "Skills", "Projects"];

const images = [careerCompassThumbnail, ccregister];

const sectionIcons = {
  About: FiUser,
  Experience: FiBriefcase,
  Education: FiBookOpen,
  Skills: FiTool,
  Projects: FiFolder,
};

const expData = [
  {
    company: "Godrej Infotech Ltd.",
    role: "Assistant Manager",
    period: "Dec 2025 – Present",
    location: "Mumbai, Maharashtra",
    skills: ["Javascript", "ReactJs", "Express", "AWS"],
    description:
      "Working on building and maintaining React-based frontends and backend services within a microservices architecture, focusing on clean design patterns and scalable solutions.",
  },
  {
    company: "Prosoft e-Solutions India Pvt. Ltd.",
    role: "Software Developer",
    period: "May 2024 – Dec 2025",
    location: "Belgaum, Karnataka",
    skills: ["Javascript", "ReactJs", "Express"],
    description: "Developed and maintained web applications, integrated third-party APIs, and built internal tools to support business workflows and automation.",
  },
  {
    company: "CodeArray Technologies Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Jun 2023 – May 2024",
    location: "Mumbai, Maharashtra",
    skills: ["Javascript", "Typescript", "ReactJs", "NextJs", "Redux Toolkit"],
    description: "Contributed to frontend development using modern React and Next.js, focusing on reusable components, state management, and responsive UI design.",
  },
];

const primaryStack = [
  { name: "HTML5", logo: html },
  { name: "CSS3", logo: css },
  { name: "JavaScript", logo: js },
  { name: "TypeScript", logo: ts },
  { name: "React", logo: react },
  { name: "Next.js", logo: nextjs },
  { name: "Node.js", logo: nodejs },
  { name: "Express.js", logo: express },
];

const secondaryStack = [
  { name: "React Query", logo: reactquery },
  { name: "Tailwind CSS", logo: tailwind },
  { name: "Redux Toolkit", logo: redux },
  { name: "PostgreSQL", logo: postgresql },
  { name: "SQL", logo: sql },
  { name: "Vue.js", logo: vue },
  { name: "Git", logo: git },
  { name: "GitHub", logo: github },
  { name: "Postman", logo: postman },
  { name: "AWS", logo: aws },
];

const Layout = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="cursor-glow" className="pointer-events-none fixed inset-0 z-0" aria-hidden />
      <main className=" mx-auto flex flex-col lg:flex-row xl:max-w-screen-xl px-6 py-12 md:px-20 md:py-14 lg:py-0">
        {/* ================= LEFT (DESKTOP SIDEBAR) ================= */}
        <aside className="w-full space-y-8 lg:w-[48%] lg:sticky lg:top-20 xl:top-24 lg:h-fit">
          {/* Identity */}
          <div>
            <a href="/" className="flex items-center gap-3 text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-100 transition-colors duration-300">
              <img src={MyImage} alt="Ayaan Shaikh" className="hidden md:block md:h-14 md:w-14 rounded-full object-cover border border-white/10 opacity-90" />
              <h1>Ayaan Shaikh</h1>
            </a>

            <span className="mt-3 block text-lg lg:text-sm xl:text-lg text-left font-normal lg:font-semibold text-slate-200">
              <span className=" mr-3">Software Developer</span>
            </span>
            <p className="mt-4 max-w-xs text-slate-400 text-sm leading-snug">I build performant web applications with a strong focus on accessibility and maintainable code.</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block space-y-4 lg:space-y-3 xl:space-y-4">
            {sections.map((section) => {
              const Icon = sectionIcons[section];
              return (
                <div
                  key={section}
                  className={`origin-left transition-all duration-300
                    ${activeSection === section ? "scale-125 text-slate-200 font-semibold" : "scale-100 text-slate-500"}`}
                >
                  <a className="flex items-center gap-3 text-sm transition-colors duration-300 hover:text-slate-200">
                    <Icon size={16} className={activeSection === section ? "text-teal-300" : "text-slate-500"} />
                    {section}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="lg:flex gap-1 space-x-3">
            <Link to="https://github.com/Ayaanshaikh20" className="p-1 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg">
              <GitHubIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/in/muhammad-ayaan-shaikh/"
              className="p-1 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
            >
              <LinkedInIcon />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100004227799035"
              className="p-1 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
            >
              <FacebookIcon />
            </Link>
            {/* Contact / Phone */}
            <Link to={"/contact"} className="p-1 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg" title="Contact me">
              <PhoneIcon />
            </Link>
          </div>
        </aside>

        {/* ================= RIGHT (CONTENT) ================= */}
        <section className="flex-1 text-slate-400 lg:w-[52%] mt-20 xl:mt-24 mb-12 text-sm leading-snug sm:leading-relaxed">
          <div className="space-y-36 w-full">
            {/* ABOUT */}
            <section className=" w-full" id="About">
              <nav className="sticky top-0 self-start z-30 bg-slate-950/95 backdrop-blur-lg border-b border-white/5 px-4 py-3 mb-10 lg:hidden">
                <h2
                  className={`flex items-center gap-2 uppercase tracking-widest font-semibold
      text-xs sm:text-sm transition-colors duration-300
      ${activeSection === "about" ? "text-teal-300" : "text-slate-400"}`}
                >
                  <FiUser size={14} />
                  About
                </h2>
              </nav>
              <p>
                I’m a software developer with industry experience building reliable, user-focused digital products. My work centers on developing responsive web applications with a
                strong emphasis on performance, accessibility, and clean architecture.
              </p>
              <p className="mt-4">
                Currently, I work as an Assistant Manager at{" "}
                <a href="https://www.godrejinfotech.com/" className="">
                  <span className="font-medium text-slate-200 transition-colors duration-300 hover:text-teal-300">Godrej Infotech</span>
                </a>
                , where I develop React-based frontends and backend services within a microservices architecture, following established design patterns and best practices.
              </p>
              <p className=" mt-4">
                Previously at{" "}
                <a href="https://www.prosoftesolutions.com/" className="">
                  <span className="font-medium text-slate-200 transition-colors duration-300 hover:text-teal-300">Prosoft e-Solutions</span>
                </a>
                , I worked on scalable web solutions, contributing to backend optimizations, automation workflows, and internal tooling. My experience includes building Node.js
                services, integrating third-party APIs, and developing secure, configurable React-based admin interfaces. Built whatsapp chatbot using{" "}
                <a href="https://developers.facebook.com/documentation/business-messaging/whatsapp/overview" className="">
                  <span className="font-medium text-slate-200 transition-colors duration-300 hover:text-teal-300">Whatsapp Cloud API</span>
                </a>{" "}
                and integrated with backend services to provide confidential data to State Int. department Bangalore.
              </p>
              <p className=" mt-4">
                I hold a Bachelor’s degree in Computer Engineering from Rizvi College of Engineering and an Executive PG Certification in Full-Stack Development from Intellipaat.
                I’m particularly interested in backend optimization, system design, and building maintainable software that improves real-world user experiences.
              </p>
              <p className=" mt-4">
                My hobbies are Canvas oil painting, playing video games. I enjoy contributing to open-source projects and staying active in developer communities.
              </p>
              <a
                href={resume}
                download
                className="
                  inline-flex items-center
                  mt-5
                  rounded-lg px-5 py-3 text-sm font-medium
                  text-slate-200 bg-white/5 backdrop-blur-lg
                  transition-all duration-300 ease-out
                  hover:bg-white/15 hover:text-slate-100
                "
              >
                Download Resume
              </a>
            </section>
            {/* EXPERIENCE */}
            <section id="Experience">
              {/* Mobile sticky header */}
              <nav className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-md border-b border-white/5 px-4 py-3 mb-10 lg:hidden">
                <h2
                  className={`flex items-center gap-2 uppercase tracking-widest font-semibold text-xs sm:text-sm transition-colors
        ${activeSection === "experience" ? "text-teal-300" : "text-slate-400"}`}
                >
                  <FiBriefcase size={14} />
                  Experience
                </h2>
              </nav>
              {/* Experience list */}
              <ol className="space-y-10">
                {expData.map((exp, index) => (
                  <li key={index} className=" relative group ">
                    {/* Hover glass background */}
                    <div />
                    {/* Content (unchanged alignment) */}
                    <div className="relative">
                      {/* Top row */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-slate-200 font-medium transition-colors group-hover:text-slate-100">{exp.role}</h3>
                        <span className="mt-1 sm:mt-0 text-xs text-slate-500">{exp.period}</span>
                      </div>

                      {/* Company + location */}
                      <p className="mt-1 text-sm text-slate-400">
                        {exp.company} · {exp.location}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm text-slate-400 leading-snug">{exp.description}</p>

                      {/* Skills */}
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <li key={skill} className="rounded-full px-3 py-1 text-xs text-slate-300 bg-white/[0.05]">
                            {skill}
                          </li>
                        ))}
                      </ul>

                      {/* Divider */}
                      <div className="mt-6 h-px w-full bg-white/5" />
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* EDUCATION */}
            <section id="Education">
              {/* Mobile sticky header */}
              <nav className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-md border-b border-white/5 px-4 py-3 mb-10 lg:hidden">
                <h2
                  className={`flex items-center gap-2 uppercase tracking-widest font-semibold text-xs sm:text-sm transition-colors
        ${activeSection === "education" ? "text-teal-300" : "text-slate-400"}`}
                >
                  <FiBookOpen size={14} />
                  Education
                </h2>
              </nav>

              {/* Education item */}
              <div className="relative group">
                <div className=" pointer-events-none absolute inset-y-0 -inset-x-4 rounded-xl opacity-0" />
                {/* Content */}
                <div className="relative overflow-hidden rounded-xl bg-[#23232b] border border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Image */}
                    <div className="md:col-span-5 h-40">
                      <img src={rcoeImage} alt="Rizvi College of Engineering, Mumbai" className="h-full w-full object-cover" />
                    </div>

                    {/* Text */}
                    <div className="md:col-span-7 p-5 flex flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-slate-200">Bachelor of Engineering (Computer Engineering)</h3>
                        <p className="text-xs text-teal-300">Rizvi College of Engineering, Mumbai</p>
                      </div>

                      <div className="my-3 h-px bg-white/10" />

                      <div className="flex justify-between text-xs text-slate-400 font-mono">
                        <span>Aug 2019 – Jun 2023</span>
                        <span>CGPA: 8.23 / 10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SKILLS */}
            <section id="Skills">
              {/* Mobile sticky header */}
              <nav className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-md border-b border-white/5 px-4 py-3 mb-10 lg:hidden">
                <h2
                  className={`flex items-center gap-2 uppercase tracking-widest font-semibold text-xs sm:text-sm transition-colors
        ${activeSection === "skills" ? "text-teal-300" : "text-slate-400"}`}
                >
                  <FiTool size={14} />
                  Skills
                </h2>
              </nav>

              {/* Skills content */}
              <div className="space-y-12">
                {/* Primary stack */}
                <div className="relative group">
                  {/* Full-bleed hover glass */}
                  <div />

                  <div className="relative">
                    <h3 className="text-slate-200 font-medium mb-4">Primary Stack</h3>

                    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                      {primaryStack.map((skill) => (
                        <li key={skill.name} className="flex flex-col items-center gap-2 text-center">
                          <img src={skill.logo} alt={skill.name} className="h-10 w-10 object-contain opacity-90" />
                          <span className="text-xs text-slate-400">{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Secondary stack */}
                <div className="relative group">
                  {/* Full-bleed hover glass */}
                  <div />

                  <div className="relative">
                    <h3 className="text-slate-200 font-medium mb-4">Secondary & Tools</h3>

                    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                      {secondaryStack.map((skill) => (
                        <li key={skill.name} className="flex flex-col items-center gap-2 text-center">
                          <img src={skill.logo} alt={skill.name} className="h-9 w-9 object-contain opacity-80" />
                          <span className="text-xs text-slate-400">{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* PROJECTS */}
            <section id="Projects">
              {/* Mobile sticky header */}
              <nav className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur-md border-b border-white/5 px-4 py-3 mb-10 lg:hidden">
                <h2
                  className={`flex items-center gap-2 uppercase tracking-widest font-semibold text-xs sm:text-sm transition-colors
        ${activeSection === "projects" ? "text-teal-300" : "text-slate-400"}`}
                >
                  <FiFolder size={14} />
                  Projects
                </h2>
              </nav>

              {/* Project item */}
              <div className="relative group">
                <div />
                <div className="relative">
                  <div className="items-start flex-col gap-6">
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <img src={LogoCC} alt="CareerCompass" className="h-7 w-auto" />
                          <h3 className="text-slate-200 font-medium text-base">CareerCompass</h3>
                          <div className="flex items-center gap-1.5 ml-2">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 text-xs font-medium">Live</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <a
                            href="https://careercompass.cyrusesolutions.xyz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-200 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-colors"
                          >
                            Visit
                          </a>
                          <Link
                            to="https://github.com/Ayaanshaikh20/CareerCompass/"
                            target="_blank"
                            className="text-slate-400 hover:text-slate-200 transition-colors"
                            title="Source Code"
                          >
                            <GitHubIcon fontSize="small" />
                          </Link>
                        </div>
                      </div>
                      {/* Tech stack */}
                      <ul className=" flex flex-wrap mt-8 gap-2">
                        {["Vite", "Node.js", "Express.js", "PostgreSQL", "Material UI", "JWT", "Render"].map((tech) => (
                          <li key={tech} className="rounded-full px-3 py-1 text-xs text-slate-300 bg-white/[0.05]">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="sm:block w-44 mt-5 h-28 md:w-[75%] object-cover md:h-56 rounded-xl overflow-hidden shrink-0 relative">
                      {images.map((img, index) => (
                        <img
                          key={img}
                          src={img}
                          alt="CareerCompass preview"
                          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out 
                            ${index === currentImage ? "opacity-100" : "opacity-0"}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="mt-5 space-y-2 list-disc pl-4 text-sm text-slate-400 leading-snug">
                    <li>
                      Built a <span className="text-slate-200 font-semibold">full-stack job tracking web application</span> that allows users to manage and organize job
                      applications from multiple platforms.
                    </li>

                    <li>
                      Implemented <span className="text-slate-200 font-semibold">secure authentication and authorization</span> using{" "}
                      <span className="text-slate-200 font-semibold">JWT</span> with <span className="text-slate-200 font-semibold">Axios interceptors</span> for session-safe
                      access control.
                    </li>

                    <li>
                      Developed backend services using <span className="text-slate-200 font-semibold">Node.js</span> and{" "}
                      <span className="text-slate-200 font-semibold">Express.js</span> with <span className="text-slate-200 font-semibold">PostgreSQL</span> for structured data
                      storage and querying.
                    </li>

                    <li>
                      Designed a <span className="text-slate-200 font-semibold">responsive and accessible UI</span> using{" "}
                      <span className="text-slate-200 font-semibold">Material UI</span>, ensuring consistency across devices.
                    </li>

                    <li>
                      Used <span className="text-slate-200 font-semibold">Vite</span> for <span className="text-slate-200 font-semibold">faster development builds</span> and{" "}
                      <span className="text-slate-200 font-semibold">performance optimization</span>.
                    </li>

                    <li>
                      Deployed <span className="text-slate-200 font-semibold">frontend, backend</span> on <span className="text-slate-200 font-semibold">Render</span>{" "}
                      with an integrated <span className="text-slate-200 font-semibold">auto build process</span>.
                    </li>
                  </ul>
                  {/* Divider */}
                  <div className="mt-8 h-px w-full bg-white/5" />
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Layout;
