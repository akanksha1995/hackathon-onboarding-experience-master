import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Player from "./Player"
import Host from "./Host"

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="player" element={ <Player/> } />
        <Route path="host" element={ <Host/> } />
      </Routes>
    </div>
  );
}

export default App;
