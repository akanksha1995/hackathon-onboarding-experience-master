import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><img src="/Points_RGB_White.png" alt="header-logo" /></Link>
            <div className="header-headers">
                <h4>Onboarding</h4>
            </div>
        </div>
    )
}

export default Header;