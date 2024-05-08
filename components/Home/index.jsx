import Sponsors from "./components/Sponsors";
import InvitedSpeakers from "./components/InvitedSpeakers";
import Landing from "./components/Landing";
import LinksMarquee from "./components/LinksMarquee";
import Organizers from "./components/Organizers";
import Timeline from "./components/Timeline";
import Timer from "./components/Timer";
import Updates from "./components/Updates";

const HomePage = () => {
  return (
    <>
      <Landing />
      <LinksMarquee />
      <Timer endTime={"2025-02-17"} />
      <Updates />
      <InvitedSpeakers />
      {/*<Timeline /> //use timeline for final version */}
      <div className="h-[300px] p-8 max-lg:flex-col lg:h-[400px] lg:p-14">
        <div>
          <h3 className="text-4xl font-bold">
            TIMELINE
          </h3>
        </div>
        <div className="flex justify-center items-center h-full font-semibold">
          <p className="text-2xl"> TBA </p>
        </div>
      </div>
      <Organizers />
      <Sponsors />
    </>
  );
};

export default HomePage;
