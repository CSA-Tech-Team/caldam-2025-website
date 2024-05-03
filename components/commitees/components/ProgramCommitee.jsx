import programCommmitee from "@/constants/programCommitee.json";
import Card from "@/components/accepted-papers/components/Cards";

export default function ProgramCommitee() {
  return (
    <div>
      <div className=" grid gap-4 px-10 py-10 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3">
        {programCommmitee.map((programCommmitee, index) => (
          <div key={index} className="w-full">
            <Card
              title={programCommmitee.collegeName}
              speakers={programCommmitee.name}
              researchResourceLink={programCommmitee.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
