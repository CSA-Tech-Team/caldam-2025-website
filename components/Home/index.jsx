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
      <Timeline />
      <Organizers />
      <Sponsors />
    </>
  );
};

export default HomePage;
