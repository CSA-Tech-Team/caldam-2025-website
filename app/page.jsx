import HomeComponent from "@/components/UI/Home";
import PreConferenceSchoolLinksComponent from "@/components/UI/PreConferenceSchollLinks";
import TimerComponent from "@/components/UI/Timer";


export default function Home() {
    return (
        <div className=" flex items-center flex-col ">
            <HomeComponent />
            <TimerComponent />
            <PreConferenceSchoolLinksComponent />
        </div>
    );
}
