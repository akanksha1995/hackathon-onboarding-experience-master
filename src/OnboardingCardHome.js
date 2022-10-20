// import logo from "../../public/Points_RGB_White";
import OnboardingCard from "./OnboardingCard.js";
// import "./OnboardingCardHome.css";

const OnboardingCardHome = () => {
    return (
        <OnboardingCard>
            <div className="onboarding-card-intro">
                Check out the cool new onboarding tool for all new Pointsters!
            </div>
            <div>To get started, tap “Host” or, if you are a player, tap “Player”</div>
        </OnboardingCard>
    )
}

export default OnboardingCardHome;