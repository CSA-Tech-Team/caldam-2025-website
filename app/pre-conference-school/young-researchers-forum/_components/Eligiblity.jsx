import eligiblities from "@/constants/yrfeligiblity.json"

export default function Eligiblity() {
  return (
    <div className='px-10 py-4 lg:px-16'>
      <h2 className='text-2xl lg:text-3xl 2xl:text-4xl font-bold'>
        Eligiblity
      </h2>
      <ul className='leading-tight space-y-3 px-3 py-5 '>
        {eligiblities.map((eligiblity, i) => {
          return (
            <li
              key={i}
              className="before:content-[' '] text-lg relative pl-6 before:absolute before:rounded-full before:left-0 before:top-[5px] before:m-auto before:h-4 before:w-4 before:bg-orange"
            >
              {eligiblity.eligiblity}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
