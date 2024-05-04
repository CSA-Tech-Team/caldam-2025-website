import PeopleCard from "@/components/shared/re-used/PeopleCard";
import organizingCommitee from "@/constants/organizingcommitee.json";
import organizingPatrons from "@/constants/organizingpatrons.json";
import CardGrid from "./CardGrid";

export default function OrganizingCommitee() {
  return (
    <div className="p-8 lg:p-14">
      <p className="mb-10 text-4xl font-bold uppercase lg:text-5xl">
        Organizing Committee
      </p>
      <div className="space-y-10">
        <CardGrid data={organizingPatrons} />
        <CardGrid data={organizingCommitee} />
      </div>
    </div>
  );
}
