import Link from "next/link";
import Marquee from "react-fast-marquee";
import links from "@/constants/links-marquee.json";

const LinksMarquee = () => {
  return (
    <Marquee
      className="mb-2 bg-bluecolor text-sm text-white lg:text-xl"
      pauseOnHover={true}
      pauseOnClick={true}
      autoFill={true}
    >
      <div className="flex flex-row items-stretch space-x-4 p-3">
        {links.map((link, i) => {
          return (
            <div key={i} className=" flex space-x-5 ">
              <div className="w-px bg-white"></div>
              <Link prefetch target="_blank" href={link.weblink}>
                {link.name}
              </Link>
              <div className="w-px bg-white"></div>
              <Link prefetch target="_blank" href={link.proceedingsLink}>
                {link.name.slice(6,link.name.length)} Proceedings
              </Link>
            </div>
          );
        })}
      </div>
    </Marquee>
  );
};

export default LinksMarquee;
