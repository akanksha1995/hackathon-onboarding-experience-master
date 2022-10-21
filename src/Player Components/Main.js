import React from 'react'
import Player from "./Player"
import Box from '@mui/material/Box';
import Header from './Header';
import Tasks from './Tasks';
import FullTrivia from './FullTrivia';
import { Button } from '@mui/material';
import { FullTask } from './FullTask';
import { AllTasks } from '../AllTasks';
import { Link } from "react-router-dom";

export const Main = () => {

    const [openTask, setOpenTask] = React.useState(false)
    const [currTask, setcurrTask] = React.useState()
    return (
        <div>
            <Header />
            <div className="LeaveButtonDiv" style = {{height : "40px"}}>
                <Link to="/"><Button className="LeaveButton" sx = {{width : "100%", height : "40px", backgroundColor : "#FF005C", color : "white"}}>Leave Game</Button></Link>
            </div>
            <h2 style={{marginLeft : "10px", marginRight : "10px", marginBottom : "20px", marginTop : "20px", textAlign : "left"}}>Your Player Card</h2>
            <Player className="YourPlayer" AllTasks={AllTasks}/>
            <Box sx = {{marginTop : "20px", marginBottom : "20px", marginLeft : "10px", marginRight : "10px", height : "8.6px", background: "#EEEEEE"}}></Box>
            <div style = {{marginLeft : "10px", marginRight : "10px"}}>
                <h2 style = {{marginBottom : "20px", textAlign : "left"}}>Instructions:</h2>
                <p style = {{textAlign : "left"}}>
                    Search the Points office for QR codes. Each item has a clue and a code. They are all listed for you down below. If you have questions, ask your Game Host
                </p>
            </div>
            <Box sx = {{marginTop : "20px", marginBottom : "20px", marginLeft : "10px", marginRight : "10px", height : "8.6px", background: "#EEEEEE"}}></Box>
            {openTask ? (currTask.Type == "Task" ? <FullTask task = {currTask} setOpenTask={setOpenTask}/> : <FullTrivia task = {currTask} setOpenTask={setOpenTask}/>): 
                        <Tasks AllTasks={AllTasks} setOpenTask={setOpenTask} setcurrTask={setcurrTask} className="TaskList"/>}
            <Box sx = {{height : "30px"}}/>
            
            
        </div>
    )
}

export default Main