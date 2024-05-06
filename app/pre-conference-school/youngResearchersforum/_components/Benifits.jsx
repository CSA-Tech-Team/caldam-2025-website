import benifits from "@/constants/yrfbenifits.json";

export default function Benifits() {
  return (
    <div className='px-10 py-6 lg:px-16'>
      <h1 className='text-3xl lg:text-4xl 2xl:text-5xl italic font-bold'>
        Benifits
      </h1>
      <ul className='leading-tight space-y-5 px-3 py-4 '>
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
