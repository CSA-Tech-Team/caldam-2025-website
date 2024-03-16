import HomeComponent from "@/components/UI/Home";
import PreConferenceSchoolLinksComponent from "@/components/UI/PreConferenceSchollLinks";
import TimerComponent from "@/components/UI/Timer";


export default function Home() {
    return (
        <div className="">
            <HomeComponent />
            <TimerComponent />
            <PreConferenceSchoolLinksComponent />
        </div>
    );
}
