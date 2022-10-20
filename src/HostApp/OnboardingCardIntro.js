// import logo from "../../public/Points_RGB_White";
import OnboardingCard from "../OnboardingCard";
import "./OnboardingCardIntro.css";

const OnboardingCardIntro = () => {
    return (
        <OnboardingCard>
            <div className="onboarding-card-intro">
                Check out the cool new onboarding tool for all new Pointsters! This game will teach all of your new hires all about Points. Everything from when we were founded to how to escape in case of a fire drill!
            </div>
            <div>To get started, tap “Start Game</div>
        </OnboardingCard>
    )
}

export default OnboardingCardIntro;