import programCommmitee from "@/constants/programCommitee.json";
import Card from "@/components/accepted-papers/components/Cards";

export default function ProgramCommitee() {
    return (
        <div>
            <div className=" px-10 py-10 grid gap-4 lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
                {programCommmitee.map((programCommmitee, index) => (
                    <div key={index} className="w-full">
                        <Card
                            title={programCommmitee.collegeName}
                            speakers={programCommmitee.name}
                            researchResourceLink={""}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
