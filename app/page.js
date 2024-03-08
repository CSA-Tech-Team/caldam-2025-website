import hamburger from "@/public/hamburger.png";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <main
        className={"[height:100%] [min-height:100vh] bg-[url('../public/psg_entrance.png')] bg-no-repeat bg-cover px-10 py-5"}>
        <nav
          className={"navbar bg-magenta h-20 flex w-full justify-center text-seasalt align-middle items-center font-semibold rounded-full"}>
          <div className={"mx-7"}>{"Home"}</div>
          <div className={"mx-7"}>{"Communities"}</div>
          <div className={"mx-7"}>{"Invited Speakers"}</div>
          <div className={"mx-7"}>{"Program"}</div>
          <div className={"mx-7"}>{"Registration"}</div>
          <div className={"mx-7"}>{"Pre-Conference School"}</div>
          <div className={"mx-7"}>{"DAM Special Issue of CALDAM 2024"}</div>
          <Image src={hamburger} alt={"hamburgermenu"} height={24} width={24} className={"z-10"}/>
        </nav>
      </main>
      <div className={"h-[400px]"}> hehhd</div>
    </>
  )
}
