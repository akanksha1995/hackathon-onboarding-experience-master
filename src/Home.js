import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Points Onboarding App</h1>
            <div className="home-login-buttons">
                <Link to="host"><Button variant="contained">I am a HOST</Button></Link>
                <Link to="player"><Button variant="contained">I am a new HIRE</Button></Link>
            </div>
        </div>
    )
}

export default Home;