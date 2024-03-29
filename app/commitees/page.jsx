import SteeringCommitee from "@/components/commitees/components/SteeringCommitee";
import ProgramCommitee from "@/components/commitees/components/ProgramCommitee";

function Commitees() {
    return (
        <div className="pt-10">
            <SteeringCommitee />
            <ProgramCommitee />
        </div>
    );
}

export default Commitees;
