import programCommmitee from "@/constants/programCommitee.json";
import CardGrid from "./CardGrid";

export default function ProgramCommitee() {
  return (
    <div className="bg-bluecolor p-8 lg:p-14">
      <p className="mb-10 text-4xl font-bold uppercase text-white lg:text-5xl">
        Programme Committee
      </p>
      <CardGrid data={programCommmitee} darkVariant={true} />
    </div>
  );
}
