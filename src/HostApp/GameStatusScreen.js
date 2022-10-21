import HostHeader from "./HostHeader.js";
import GameStatusCard from "./GameStatusCard.js";
import { Link } from "react-router-dom";
import Player from "../Player Components/Player.js";
import { AllTasks } from "../AllTasks.js";

const GameStatusScreen = ({userList}) => {
    console.log("userList", userList);

    return (
        <div className="invite-players-screen">
            <HostHeader />
            <GameStatusCard />
            <h3>Players</h3>
            {userList.map((player) => {
                return <Player name={player} className="YourPlayer" AllTasks={AllTasks} hostMode={true}/>;
            })}
            
            <Link to="/" className="game-status--end-game">End Game</Link>
        </div>
    )
}

export default GameStatusScreen;