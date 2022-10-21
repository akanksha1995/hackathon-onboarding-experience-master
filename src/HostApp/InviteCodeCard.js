// import logo from "../../public/Points_RGB_White";
import OnboardingCard from "../OnboardingCard";
import "./InviteCodeCard.css";

const InviteCodeCard = () => {
    return (
        <OnboardingCard>
            <h4 style={{ margin: "0" }}>Your Players’ Invite Code</h4>
            <div className="onboarding-card-intro">
                Tell your new pointsters to enter this code in their app to join the game.
            </div>
            <div className="invite-code">AB12B</div>
            <div>Once all your pointsters have joined, tap “Start Game”</div>
        </OnboardingCard>
    )
}

export default InviteCodeCard;