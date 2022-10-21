import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Player from "./Player"
import Host from "./Host"
import PlayerWelcome from './Player Components/PlayerWelcome';
import InvitePlayersScreen from "./HostApp/InvitePlayersScreen"
import GameStatusScreen from "./HostApp/GameStatusScreen"
import ContextProvider from "./ContextProvider"
import React, { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="player" element={<Player />} />
        <Route path="welcome/player/:hire_name" element={<Player />} />
        <Route path="host" element={<Host />} />
          <Route path="welcome" element={<PlayerWelcome userList={userList} setUserList={setUserList}/>} />
        <Route path="host/invite-players" element={<InvitePlayersScreen userList={userList}/>} />
        <Route path="host/game-status" element={<GameStatusScreen userList={userList}/>} />
      </Routes>
    </div>
  );
}

export default App;
