import Benifits from "./_components/Benifits";
import Eligiblity from "./_components/Eligiblity";
import ListOfSpeakers from "./_components/ListOfSpeakers";

export const metadata = {
  title: "CALDAM 2025 | Young Researchers' Forum",
  description: "Information about the young researchers' forum for CALDAM 2025."
}
export default function YoungResearchersForum() {
  return (
    <div>
      {/* <ListOfSpeakers /> */}
      <Benifits />
      <Eligiblity />
    </div>
  );
}
