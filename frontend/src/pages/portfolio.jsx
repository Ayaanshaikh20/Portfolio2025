/****************************Porfolio*******************************/
import { Link } from "react-router";
import { Button, IconButton, Typography } from "@mui/material";
import resume from "../assets/img/ayaanCV2025.pdf";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Profile from "../assets/img/Media.jpg";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useNavigate } from "react-router";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full flex flex-col bg-[#212121] align-middle items-center justify-center">
      <main className="w-full min-h-screen max-w-7xl max-xl:px-3">
        {/* Main */}
        <section>
          <div className="w-full border-2 border-white mt-16 mb-6 p-4">
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
                    Passionate full-stack developer with 2+ years of hands-on experience, primarily working with React.js to
                    build dynamic and responsive front-end interfaces, and Node.js + Express.js for developing scalable
                    RESTful APIs following MVC architecture.
                  </p>
                </div>
              </div>
              <div className=" w-full flex justify-center lg:justify-end mt-4">
                <img src={Profile} alt="Profile" className=" rounded-full w-44 md:w-1/2 lg:w-3/4 xl:w-3/4 2xl:w-3/5" />
              </div>
            </div>
            <div className=" mt-5 flex justify-center w-full">
              <Button variant="outlined" size="small"
              onClick={() => {navigate("/about")}}
              className="hover:bg-white text-[0.8rem] xl:text-xl hover:text-black transition" sx={{
                borderRadius: "0px",
                border: "1px solid white",
                color: "white"
              }} endIcon={<ArrowDownwardIcon />}>
                Read more
              </Button>
            </div>
          </div>
        </section>
        {/* Experience */}
        <section className=" mt-10">

        </section>
        {/* Education */}
        <section className=" mt-10">
          <div className="w-full flex flex-col lg:flex lg:flex-row justify-between items-center align-middle border-2 border-white mt-5 mb-6 p-4">
            <span className=" font-semibold text-xl text-white tracking-wide">Education</span>
            <div className=" mt-2 w-full">
              <Timeline position="right"
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      {/* <FastfoodIcon /> */}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px' }}>
                    <div className=" flex flex-col">
                      <span className=" text-sm text-white font-bold">
                        B.E In Computer Engineering
                      </span>
                      <span className=" text-sm text-white font-mono">
                        Rizvi College Of Engineering
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Portfolio;
