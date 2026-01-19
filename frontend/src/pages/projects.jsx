import { Chip } from "@mui/material";
import { Link } from "react-router";
import LogoCC from "../assets/img/logoCareerCompass.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <>
      {/* Projects */}
      <section id="Projects" className=" mt-20">
        <div className="w-full flex flex-col items-center align-middle gap-4 border-2 text-white border-white p-4 lg:p-10">
          <span className=" font-semibold text-xl lg:text-4xl text-white tracking-wide">Projects</span>
          {/* CAREER COMPASS */}
          <div className=" w-full flex flex-col">
            <div className=" flex items-center gap-3 mb-3">
              <span className=" text-md lg:text-xl font-semibold flex gap-2">
                <img className=" h-7" src={LogoCC} />
                CareerCompass
              </span>
              <div className=" flex gap-4">
                <Link title="source code" to={"https://github.com/Ayaanshaikh20/CareerCompass/"}>
                  <GitHubIcon
                    sx={{
                      fontSize: 25,
                      color: "white",
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
                  color: "white",
                }}
                variant="filled"
              />
              <Chip
                label="Node.js"
                size="medium"
                sx={{
                  color: "white",
                }}
                variant="filled"
              />
              <Chip
                label="Express.js"
                size="medium"
                sx={{
                  color: "white",
                }}
                variant="filled"
              />
              <Chip
                label="PostgreSQL"
                size="medium"
                sx={{
                  color: "white",
                }}
                variant="filled"
              />
              <Chip
                label="Material UI"
                size="medium"
                sx={{
                  color: "white",
                }}
                variant="filled"
              />
              <Chip
                label="JWT"
                size="medium"
                sx={{
                  color: "white",
                }}
                variant="filled"
              />
              <Chip
                label="Render"
                size="medium"
                sx={{
                  color: "white",
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
    </>
  );
};

export default Projects;
