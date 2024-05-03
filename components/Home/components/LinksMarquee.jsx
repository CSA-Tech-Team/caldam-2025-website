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
        <div className="w-px bg-white"></div>

        <Link prefetch target="_blank" href={"https://caldam.cse.iitk.ac.in"}>
          Previous Year CALDAMS
        </Link>
        <div className="w-px bg-white"></div>
        <Link prefetch target="_blank" href={"https://caldam.cse.iitk.ac.in"}>
          Previous Year CALDAMS
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
          Previous Year CALDAMS
        </Link>
        <div className="w-px bg-white"></div>
        <Link prefetch target="_blank" href={"http://acsdm.in/caldam/2017/"}>
          Previous Year CALDAMS
        </Link>
        <div className="w-px bg-white"></div>
        <Link prefetch target="_blank" href={"http://acsdm.in/caldam/2018/"}>
          Previous Year CALDAMS
        </Link>
        <div className="w-px bg-white"></div>
        <Link
          prefetch
          target="_blank"
          href={"http://cse.iitkgp.ac.in/conf/CALDAM/"}
        >
          Previous Year CALDAMS
        </Link>
        <div className="w-px bg-white"></div>
        <Link
          prefetch
          target="_blank"
          href={"https://people.iith.ac.in/caldam2020/"}
        >
          Previous Year CALDAMS
        </Link>
        <div className="w-px bg-white"></div>
        <Link
          prefetch
          target="_blank"
          href={"https://www.iitrpr.ac.in/caldam2021/"}
        >
          Previous Year CALDAMS
        </Link>
        <div className="w-px bg-white"></div>
        <Link prefetch target="_blank" href={"http://acsdm.in/caldam/2022/"}>
          Previous Year CALDAMS
        </Link>
        <div className="w-px bg-white"></div>
        <Link
          prefetch
          target="_blank"
          href={"https://caldam2023.daiict.ac.in/"}
        >
          Previous Year CALDAMS
        </Link>
        <div className="w-px bg-white"></div>
      </div>
    </Marquee>
  );
};

export default LinksMarquee;
