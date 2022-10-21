import HostHeader from "./HostApp/HostHeader"
import OnboardingCardIntro from "./HostApp/OnboardingCardIntro"
import "./Host.css";
import { Link } from "react-router-dom";


const Host = () => {
    return (
        <div className="host">
            <HostHeader />
            <OnboardingCardIntro />
            <Link to="invite-players" className="start-game">Start Game</Link>
        </div>
    )
}

export default Host;