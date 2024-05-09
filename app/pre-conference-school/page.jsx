import Coordinators from "./_components/Coordinators";
import Landing from "@/app/pre-conference-school/_components/Landing";
import ListOfSpeakers from "./_components/ListOfSpeakers";
import Registration from "./_components/Registration";
import YoungResearchersForum from "./_components/YoungResearchersForum";
import Sponsors from "@/components/Home/components/Sponsors";
import SchedulesAndAbstract from "./_components/SchedulesAndAbstract";

export const metadata = {
  title: "CALDAM 2025 | Pre-Conference School",
  description: "Information about the pre-conference school for CALDAM 2025."
}

export default function page() {
  return (
    <div>
      <Landing />
      {/* <SchedulesAndAbstract/> */}
      <ListOfSpeakers />
      <Registration />
      <Coordinators />
      <YoungResearchersForum/>
      <Sponsors/>
    </div>
  );
}
