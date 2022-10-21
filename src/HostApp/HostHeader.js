import "./HostHeader.css";
import "./Host.css";
import { Link } from "react-router-dom";


const HostHeader = () => {
    return (
        <div className="host-header">
            <Link to="/"><img src="/Points_RGB_White.png" alt="header-logo" /></Link>
            <div className="host-header-headers">
                <h4>Onboarding</h4>
                <h4>Host App</h4>
            </div>
        </div>
    )
}

export default HostHeader;