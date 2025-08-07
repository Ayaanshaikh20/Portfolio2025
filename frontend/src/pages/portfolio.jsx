/****************************Porfolio*******************************/
import { Chip } from "@mui/material";
import resume from "../assets/img/ayaanCV2025.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Profile from "../assets/img/Media.jpg";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Link } from "react-router";
import LogoCC from "../assets/img/logoCareerCompass.png";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Portfolio = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vpsmf6x",
        "template_wuu5jd9",
        form.current,
        "2HzvduR_Bltc5R0Xp"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <main id="About" className="w-full flex flex-col bg-[#212121] align-middle items-center justify-center">
      <main className="w-full min-h-screen max-w-7xl max-xl:px-3">
        {/* Main */}
        <section className=" mt-20">
          <div className="w-full border-2 border-white p-4 lg:p-10">
            <div className="w-full flex flex-col lg:flex lg:flex-row justify-between items-center align-middle">
              <div className=" flex flex-col w-full">
                <span className="block text-white tracking-wide text-3xl sm:text-4xl md:text-4xl font-extrabold">
                  Muhammad Ayaan Shaikh
                </span>
                <div className=" mt-5 flex flex-wrap gap-5 items-center">
                  <span className="text-lg xl:text-3xl lg:text-4xl text-white font-mono">Full-Stack Developer</span>
                  <button className="border border-white text-white p-2 text-[0.8rem] xl:text-lg hover:bg-white hover:text-black transition">
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
                    Passionate full-stack developer with 2+ years of hands-on experience, primarily working with
                    React.js to build dynamic and responsive front-end interfaces, and Node.js + Express.js for
                    developing scalable RESTful APIs following MVC architecture.
                  </p>
                </div>
              </div>
              <div className=" w-full flex justify-center lg:justify-end mt-4">
                <img src={Profile} alt="Profile" className=" rounded-full w-44 md:w-1/2 lg:w-3/4 xl:w-3/4 2xl:w-3/5" />
              </div>
            </div>
            <div className=" mt-5 flex justify-center w-full">
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className="border border-white text-white p-2 text-[0.8rem] xl:text-lg hover:bg-white hover:text-black transition"
              >
                <ArrowDownwardIcon />
                Read more
              </button>
            </div>
          </div>
        </section>
        {/* Experience */}
        <section className=" mt-20" id="Experience">
          <div className="w-full flex flex-col justify-between items-center align-middle border-2 border-white p-4 lg:p-10">
            <span className=" font-semibold text-xl lg:text-4xl text-white tracking-wide">Experience</span>
            <div className=" mt-5 w-full space-y-20">
              <div className=" flex flex-col">
                <span className=" text-white font-bold text-md lg:text-xl tracking-wide">
                  Prosoft e-Solutions India Pvt. Ltd.
                </span>
                <span className=" text-sm lg:text-lg text-white font-mono">Software Developer</span>
                <span className=" text-gray-500 text-sm">May. 2024 – Present | Belgaum, Karnataka</span>
                <div className=" mt-5">
                  <ul className="list-disc pl-4 space-y-3 text-white text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl">
                    <li className="">
                      Developed WhatsApp chatbot using WhatsApp Cloud API, Node.js, and Express, integrated with
                      webhook-based event handling.
                    </li>
                    <li>
                      Built a bot configuration dashboard in React.js with Express.js-based RESTful APIs for backend
                      logic and chatbot customization.
                    </li>
                    <li>
                      Migrated and modernized the legacy C5 CAT Analyzer .NET application by rebuilding it with a
                      React.js frontend and Express.js backend, preserving core functionality while enhancing
                      performance and scalability.
                    </li>
                    <li>Implemented parallel processing and asynchronous operations in data import module.</li>
                  </ul>
                </div>
              </div>
              <div className=" flex flex-col">
                <span className=" text-white font-bold text-md lg:text-xl tracking-wide">
                  CodeArray Technologies Pvt. Ltd.
                </span>
                <span className=" text-sm lg:text-lg text-white font-mono">Associate Software Engineer</span>
                <span className=" text-gray-500 text-sm">Jun. 2023 – May. 2024 | Mumbai, Maharashtra</span>
                <div className=" mt-5">
                  <ul className="list-disc pl-4 space-y-3 text-white text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl">
                    <span className="font-semibold block">EZOrder Web – Field Salesman (User Panel)</span>

                    <li>
                      Contributed to building a seamless and high-performance web application using{" "}
                      <strong>Next.js</strong> and <strong>TypeScript</strong>, leveraging{" "}
                      <strong>Redux Toolkit</strong> for efficient state management.
                    </li>

                    <li>
                      Implemented a dynamic <strong>UI theme selection feature</strong> personalized based on individual
                      user preferences.
                    </li>

                    <li>
                      Spearheaded the development of the complete <strong>“Place Order” workflow</strong>, including
                      advanced cart functionalities with Redux Toolkit integration.
                    </li>

                    <li>
                      Utilized advanced <strong>React.js concepts</strong> and crafted custom hooks to enhance
                      performance, maintainability, and deliver a smooth user experience.
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" mt-5 flex justify-center w-full">
                <button
                  onClick={() => {
                    navigate("/experience");
                  }}
                  className="border border-white text-white p-2 text-[0.8rem] xl:text-lg hover:bg-white hover:text-black transition"
                >
                  <ArrowDownwardIcon />
                  Read more
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Education */}
        <section className="mt-20" id="Education">
          <div className="w-full flex flex-col justify-between items-center align-middle border-2 border-white p-4 lg:p-10">
            <span className=" font-semibold text-xl lg:text-4xl text-white tracking-wide">Education</span>
            <div className=" mt-2 w-full">
              <Timeline
                position="right"
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0
                  }
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>{/* <FastfoodIcon /> */}</TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px" }}>
                    <div className=" flex flex-col">
                      <span className=" text-md lg:text-xl text-white font-bold">B.E In Computer Engineering</span>
                      <span className=" text-md sm:text-md text-white font-mono">Rizvi College Of Engineering</span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section className="mt-20" id="Skills">
          <div className="w-full flex flex-col items-center align-middle gap-4 border-2 border-white p-4 lg:p-10">
            <span className=" font-semibold text-xl lg:text-4xl text-white tracking-wide">Skills</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 text-white mt-4">
              <div>
                <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Languages</h3>
                <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>HTML5 & CSS3</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Frameworks</h3>
                <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                  <li>Next.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Libraries</h3>
                <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                  <li>React.js</li>
                  <li>Redux Toolkit</li>
                  <li>Vue.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Tools & Platforms</h3>
                <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                  <li>Git & GitHub</li>
                  <li>Postman</li>
                  <li>VS Code</li>
                  <li>Vercel / Netlify / Render</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Databases</h3>
                <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md lg:text-xl font-semibold mb-2 border-b border-white pb-1">Other Skills</h3>
                <ul className="list-disc text-sm sm:text-md md:text-lg lg:text-md 2xl:text-xl list-inside space-y-1">
                  <li>RESTful APIs</li>
                  <li>Responsive Design</li>
                  <li>Web Performance Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="Projects" className=" mt-20">
          <div className="w-full flex flex-col items-center align-middle gap-4 border-2 text-white border-white p-4 lg:p-10">
            <span className=" font-semibold text-xl lg:text-4xl text-white tracking-wide">Projects</span>
            <div className=" w-full flex flex-col">
              <div className=" flex items-center gap-3 mb-3">
                <span className=" text-md lg:text-xl font-semibold flex gap-2">
                  <img className=" h-7" src={LogoCC} />
                  CareerCompass
                </span>
                <div className=" flex gap-4">
                  <Link title="visit" to={"https://careercompass.cyrusesolutions.xyz/"}>
                    <InsertLinkIcon
                      sx={{
                        fontSize: 25,
                        color: "white"
                      }}
                    />
                  </Link>
                  <Link title="source code" to={"https://github.com/Ayaanshaikh20/CareerCompass/"}>
                    <GitHubIcon
                      sx={{
                        fontSize: 25,
                        color: "white"
                      }}
                    />
                  </Link>
                </div>
              </div>
              <span className=" flex gap-2 flex-wrap">
                <Chip
                  label="Vite"
                  size="medium"
                  sx={{
                    color: "white"
                  }}
                  variant="filled"
                />
                <Chip
                  label="Node.js"
                  size="medium"
                  sx={{
                    color: "white"
                  }}
                  variant="filled"
                />
                <Chip
                  label="Express.js"
                  size="medium"
                  sx={{
                    color: "white"
                  }}
                  variant="filled"
                />
                <Chip
                  label="PostgreSQL"
                  size="medium"
                  sx={{
                    color: "white"
                  }}
                  variant="filled"
                />
                <Chip
                  label="Material UI"
                  size="medium"
                  sx={{
                    color: "white"
                  }}
                  variant="filled"
                />
                <Chip
                  label="JWT"
                  size="medium"
                  sx={{
                    color: "white"
                  }}
                  variant="filled"
                />
                <Chip
                  label="Render"
                  size="medium"
                  sx={{
                    color: "white"
                  }}
                  variant="filled"
                />
              </span>
              <div>
                <ul className="list-disc pl-4 mt-3 text-white space-y-2 text-sm sm:text-base">
                  <li>
                    Developed a real-time full-stack job tracking web application enabling users to manage and organize
                    their job applications from multiple platforms efficiently.
                  </li>
                  <li>
                    Implemented secure user authentication and authorization using <strong>JWT</strong> with{" "}
                    <strong>Axios</strong> interceptors, ensuring safe access control across user sessions.
                  </li>
                  <li>
                    Built the backend using <strong>Node.js</strong> and <strong>Express.js</strong>, with{" "}
                    <strong>PostgreSQL</strong> for structured data storage and complex queries.
                  </li>
                  <li>
                    Integrated Material UI for a modern and responsive frontend UI, enhancing user experience across
                    devices.
                  </li>
                  <li>
                    Leveraged <strong>Vite</strong> for faster development build times and optimized performance.
                  </li>
                  <li>
                    Deployed the application on <strong>Render</strong> for both backend, frontend and{" "}
                    <strong>PostgreSQL</strong> database, ensuring seamless CI/CD and serverless deployment.
                  </li>
                  <li>
                    GitHub repository and live demo available for showcasing code quality, design system, and deployment
                    pipeline.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Contact me */}
        <section className="mt-20" id="Contact">
          <div className="w-full flex flex-col items-center align-middle gap-6 border-2 text-white border-white p-4 lg:p-10">
            <span className="font-semibold text-xl lg:text-4xl text-white tracking-wide">Contact Me</span>
            <form className="w-full max-w-xl flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="p-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="p-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  className="p-3 bg-transparent border border-white text-white placeholder-white rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Portfolio;
