const PlayerCard = ({ playersList }) => {
    return (
        <div>
            {
                playersList.map((player) => {
                    return (
                        <div className="player-card" key={player}>
                            {player}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PlayerCard;