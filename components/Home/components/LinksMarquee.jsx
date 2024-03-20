import Link from "next/link";
import Marquee from "react-fast-marquee";

const LinksMarquee = () => {
  return (
    <Marquee
      className="bg-black text-white text-sm lg:text-xl mb-2"
      pauseOnHover={true}
      pauseOnClick={true}
      autoFill={true}
    >
      <div className="flex flex-row p-3 space-x-4 items-stretch">
        <Link href={"http://www.google.com"}>Previous Year CALDAMS</Link>
        <div className="w-px bg-white"></div>
        <Link href={"http://www.google.com"}>Previous Year CALDAMS</Link>
        <div className="w-px bg-white"></div>
        <Link href={"http://www.google.com"}>Previous Year CALDAMS</Link>
        <div className="w-px bg-white"></div>
        <Link href={"http://www.google.com"}>Previous Year CALDAMS</Link>
        <div className="w-px bg-white"></div>
        <Link href={"http://www.google.com"}>Previous Year CALDAMS</Link>
        <div className="w-px bg-white"></div>
        <Link href={"http://www.google.com"}>Previous Year CALDAMS</Link>
        <div className="w-px bg-white"></div>
        <Link href={"http://www.google.com"}>Previous Year CALDAMS</Link>
        <div className="w-px bg-white"></div>
        <Link href={"http://www.google.com"}>Previous Year CALDAMS</Link>
        <div className="w-px bg-white"></div>
        <Link href={"http://www.google.com"}>Previous Year CALDAMS</Link>
        <div className="w-px bg-white"></div>
      </div>
    </Marquee>
  );
};

export default LinksMarquee;
