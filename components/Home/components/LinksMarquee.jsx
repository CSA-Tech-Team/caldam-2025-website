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
