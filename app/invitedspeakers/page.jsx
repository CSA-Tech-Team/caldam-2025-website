import InvitedSpeaker from "./_components/InvitedSpeakers";
export const metadata = {
  title: "CALDAM 2025 | Invited Speakers",
  description: "Committees for CALDAM 2025."
}
export default function Invitees() {
  return (
    <div
    className=" py-10 "
    >
      <InvitedSpeaker />
    </div>
  );
}
