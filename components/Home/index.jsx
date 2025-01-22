import Sponsors from "./components/Sponsors";
import Landing from "./components/Landing";
import Organizers from "./components/Organizers";
import Timeline from "./components/Timeline";
import Timer from "./components/Timer";
import Updates from "./components/Updates";
import links from "@/constants/links-marquee.json";
import LinksMarquee from "./components/LinksMarquee";
import Condolense from "./components/Condolense";
const HomePage = () => {
  return (
    <>
      <Landing />
      <LinksMarquee links={links} />
      <Timer endTime={"2025-02-17"} />
      <Updates />
      {/*<Timeline /> //use timeline for final version */}
      {/* <div className="h-[300px] p-8 max-lg:flex-col lg:h-[400px] lg:p-14">
        <div>
          <h3 className="text-4xl font-bold">TIMELINE</h3>
        </div>
        <div className="flex h-full items-center justify-center font-semibold">
          <p className="text-2xl"> TBA </p>
        </div>
      </div> */}
      {/* <Condolense /> */}
      <Organizers />
      <Sponsors />
    </>
  );
};

export default HomePage;
