import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import './Home.css';
import Header from "./Header";
import OnboardingCardHome from "./OnboardingCardHome";


const Home = () => {
    return (
        <div className="home">
            <Header />
            <OnboardingCardHome />
            <div className="home-login-buttons">
                <Link to="host" className="host-link">HOST</Link>
                <Link to="welcome" className="player-link">PLAYER</Link>
            </div>
        </div>
    )
}

export default Home;