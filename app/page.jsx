import HomeComponent from "@/components/UI/Home";
import Navbar from "./_components/Navbar";
import PreConferenceSchoolLinksComponent from "@/components/UI/PreConferenceSchollLinks";
import Organizers from "@/components/UI/Organizers";
import Sponsers from "@/components/UI/Sponsers";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HomeComponent />
      <PreConferenceSchoolLinksComponent/>
      {/* <Organizers/>
      <Sponsers/> */}
    </div>
  );
}
