import HomeComponent from "@/components/shared/re-used/Home";
import UpdatesComponent from "@/components/UI/UpdatesComponent";
import TimerComponent from "@/components/shared/re-used/Timer";

export default function Home() {
  return (
    <>
      <HomeComponent />
      <TimerComponent endTime={"2025-02-17"} />
      <UpdatesComponent />
    </>
  );
}
