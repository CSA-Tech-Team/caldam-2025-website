import OrgCommiteeFromAMCS from "@/components/shared/re-used/OrgCommiteeFromAMCS";
import OrgPeopleCard from "@/components/shared/re-used/OrgPeopleCard";

const OrgCardFromAMCS = ({ data, darkVariant }) => {
  return (
    <div className="grid gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-5">
      {data.map((item, index) => (
        <div key={index} className="w-full">
          <OrgCommiteeFromAMCS
            darkVariant={darkVariant}
            institute={item.collegeName}
            name={item.name}
            country={item.country}
            deptname={item?.deptname}
            link={item.link}
            position={item.position}
            conferenceTitle={item.conferenceTitle ?? null}
          />
        </div>
      ))}
    </div>
  );
};

export default OrgCardFromAMCS;
