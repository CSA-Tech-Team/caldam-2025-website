import Link from "next/link";
import Marquee from "react-fast-marquee";

const LinksMarquee = () => {
  return (
    <Marquee
      className="mb-2 bg-bluecolor text-sm text-white lg:text-xl"
      pauseOnHover={true}
      pauseOnClick={true}
      autoFill={true}
    >
      <div className="flex flex-row items-stretch space-x-4 p-3">
        {/* each CALDAM is separated by two <div> */}
        <div className="w-px bg-white"></div>
        <Link prefetch target="_blank" href={"https://caldam.cse.iitk.ac.in"}>
          CALDAM 2015
        </Link>
        <div className="w-px bg-white"></div>
        <Link prefetch target="_blank" href={"https://caldam.cse.iitk.ac.in"}>
          CALDAM 2024
        </Link>
        <div className="w-px bg-white"></div>
        <Link
          target="_blank"
          prefetch
          href={"https://events.iitbhilai.ac.in/caldam2024/"}
        >
          CALDAM 2024
        </Link>

        <div className="w-px bg-white"></div>
        <Link
          prefetch
          href={"http://caldam2016.keralauniversity.ac.in/index.html"}
        >
          CALDAM 2016
        </Link>
        <div className="w-px bg-white"></div>
        <Link prefetch target="_blank" href={"http://acsdm.in/caldam/2017/"}>
          CALDAM 2017
        </Link>
        <div className="w-px bg-white"></div>
        <Link prefetch target="_blank" href={"http://acsdm.in/caldam/2018/"}>
          CALDAM 2018
        </Link>
        <div className="w-px bg-white"></div>
        <Link
          prefetch
          target="_blank"
          href={"http://cse.iitkgp.ac.in/conf/CALDAM/"}
        >
          CALDAM 2015
        </Link>
        <div className="w-px bg-white"></div>
        <Link
          prefetch
          target="_blank"
          href={"https://people.iith.ac.in/caldam2020/"}
        >
          CALDAM 2020
        </Link>
        <div className="w-px bg-white"></div>
        <Link
          prefetch
          target="_blank"
          href={"https://www.iitrpr.ac.in/caldam2021/"}
        >
          CALDAM 2021
        </Link>
        <div className="w-px bg-white"></div>
        <Link prefetch target="_blank" href={"http://acsdm.in/caldam/2022/"}>
          CALDAM 2022
        </Link>
        <div className="w-px bg-white"></div>
        <Link
          prefetch
          target="_blank"
          href={"https://caldam2023.daiict.ac.in/"}
        >
          CALDAM 2023
        </Link>
        <div className="w-px bg-white"></div>
      </div>
    </Marquee>
  );
};

export default LinksMarquee;
