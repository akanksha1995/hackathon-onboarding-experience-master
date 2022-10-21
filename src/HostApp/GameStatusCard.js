import OnboardingCard from "../OnboardingCard";
import "./InviteCodeCard.css";

const GameStatusCard = () => {
    return (
        <OnboardingCard>
            <div className="onboarding-card-intro">
                Remember to help your new pointsters as they hunt for their clues! The players have been given their own hints, but they may still need help.
            </div>
        </OnboardingCard>
    )
}

export default GameStatusCard;