import Card from "@/components/accepted-papers/components/Cards";
import organizingCommitee from "@/constants/organizingcommitee.json";
export default function OrganizingCommitee() {
  return (
    <>
      <div className=" px-5 py-6 ">
        <i className=" text-2xl font-bold max-lg:text-3xl lg:text-5xl ">
          Organizing Committee
        </i>
        <div className=" border-[5px] border-b-2 border-yellow-300 max-lg:w-1/2 lg:w-1/3" />
      </div>
      <div className=" grid gap-4 px-10 py-10 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3">
        {organizingCommitee.map((organizer, index) => (
          <div key={index} className="w-full">
            <Card
              title={organizer.collegeName}
              speakers={organizer.name}
              researchResourceLink={organizer.link}
            />
          </div>
        ))}
      </div>
    </>
  );
}
