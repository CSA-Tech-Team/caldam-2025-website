import InvitedSpeaker from "./components/InvitedSpeaker";
import Landing from "./components/Landing";
import LinksMarquee from "./components/Marquee";
import Timer from "./components/Timer";
import Updates from "./components/Updates";

const HomePage = () => {
  return (
    <>
      <Landing />
      <LinksMarquee />
      <Timer endTime={"2025-02-17"} />
      <Updates />
      <InvitedSpeaker/>
    </>
  );
};

export default HomePage;
