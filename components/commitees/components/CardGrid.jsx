import PeopleCard from "@/components/shared/re-used/PeopleCard";

const CardGrid = ({ data, darkVariant }) => {
  return (
    <div className="grid gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3">
      {data.map((item, index) => (
        <div key={index} className="w-full">
          <PeopleCard
            darkVariant={darkVariant}
            institute={item.collegeName}
            name={item.name}
            link={item.link}
            conferenceTitle={item.conferenceTitle ?? null}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
