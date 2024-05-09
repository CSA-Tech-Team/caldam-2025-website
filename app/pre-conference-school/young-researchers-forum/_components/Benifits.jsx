import benifits from "@/constants/yrfbenifits.json";

export default function Benifits() {
  return (
    <div className='px-10 py-6 lg:px-16'>
      <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-bold'>
        Benefits
      </h2>
      <ul className='leading-tight space-y-3 px-3 py-4 '>
        {benifits.map((benifit, i) => {
          return (
            <li
              key={i}
              className="before:content-[' '] text-lg relative pl-6 before:absolute before:left-0 before:top-[5px] before:m-auto before:h-4 before:w-4 before:rounded-full before:bg-orange"
            >
              {benifit.benifit}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
