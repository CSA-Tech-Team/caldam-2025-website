import HomeComponent from "@/components/shared/re-used/Home";
import PreConferenceSchoolLinksComponent from "@/components/UI/PreConferenceSchollLinks";
import TimerComponent from "@/components/shared/re-used/Timer";

export default function Home() {
    return (
        <div className=" flex items-center flex-col ">
            <HomeComponent
                title={"CALDAM 2025"}
                shortInfo={
                    "11th Annual International Conference on Algorithms and Discrete Applied Mathematics"
                }
                BriefInfo={`The International Conference on Algorithms and Discrete
                Applied Mathematics (CALDAM), held under the aegis of
                the Association of Computer Science, is intended to
                bring together researchers working in the areas of
                algorithms and applied discrete mathematics and provide
                a high-quality forum for the dissemination and
                discussion of research results in these broad areas.
                CALDAM has originated from the ongoing efforts for promoting research in Algorithms and Discrete Mathematics.`}
            />
            <TimerComponent />
            <PreConferenceSchoolLinksComponent />
        </div>
    );
}
