import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Education = () => {
  return (
    <>
      <section className="mt-20" id="Education">
        <div className="w-full flex flex-col justify-between items-center align-middle border-2 border-white p-4 lg:p-10">
          <span className=" font-semibold text-xl lg:text-4xl text-white tracking-wide">Education</span>
          <div className=" mt-2 w-full">
            <Timeline
              position="right"
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
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
    </>
  );
};

export default Education;
