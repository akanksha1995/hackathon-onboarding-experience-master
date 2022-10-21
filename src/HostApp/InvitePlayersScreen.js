import HostHeader from "./HostHeader.js";
import InviteCodeCard from "./InviteCodeCard.js";
import PlayerCard from "./PlayerCard.js";
import { Link } from "react-router-dom";
// import { playersList } from "../PlayersList.js";

const InvitePlayersScreen = ({userList}) => {
    return(
        <div className="invite-players-screen">
            <HostHeader />
            <InviteCodeCard />
            <h3>Players</h3>
            <div className="waiting-for-players">Waiting for players to join...</div>
            <PlayerCard playersList={userList} />
            <Link to="/host/game-status" className="waiting-screen--start-game">Start Game</Link>
        </div>
    )
}

export default InvitePlayersScreen;