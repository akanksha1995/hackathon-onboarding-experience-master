import React from 'react'
import Player from "./Player"
import Box from '@mui/material/Box';
import Header from './Header';
import Tasks from './Tasks';
import { Button } from '@mui/material';

const AllTasks = [
    {Type : "Task",
    Title : "Go To Eiffel Tower", 
    Description : "Go find the meeting room in the Points Office called Eiffel Tower. Once you’re there, look for a QR Code to scan. Ask your Game Host if you need help", 
    completed : true}, 

    {Type : "Task",
    Title : "Go To Eiffel Tower", 
    Description : "Go find the meeting room in the Points Office called Eiffel Tower. Once you’re there, look for a QR Code to scan. Ask your Game Host if you need help",
    completed : false}]

export const Main = () => {
  return (
    <div>
        <Header />
        <div className="LeaveButton" style = {{width : "375px", height : "94px"}}>
            <Button sx = {{width : "375px", height : "94px", backgroundColor : "#FF005C", color : "white"}}>Leave Game</Button>
        </div>
        <h2 style={{marginLeft : "10px", marginRight : "10px", marginBottom : "20px", marginTop : "20px", textAlign : "left"}}>Your Player Card</h2>
        <Player name="Salvador Dali" className="YourPlayer" AllTasks={AllTasks}/>
        <Box sx = {{marginTop : "20px", marginBottom : "20px", marginLeft : "10px", marginRight : "10px", height : "8.6px", width : "355px", background: "#EEEEEE"}}></Box>
        <div style = {{marginLeft : "10px", marginRight : "10px", width : 355}}>
            <h2 style = {{marginBottom : "20px", textAlign : "left"}}>Instructions:</h2>
            <p1 style = {{textAlign : "left"}}>
                Search the Points office for QR codes. Each item has a clue and a code. They are all listed for you down below. If you have questions, ask your Game Host
            </p1>
        </div>
        <Box sx = {{marginTop : "20px", marginBottom : "20px", marginLeft : "10px", marginRight : "10px", height : "8.6px", width : "355px", background: "#EEEEEE"}}></Box>
        <Tasks AllTasks={AllTasks}/>
        
    </div>
  )
}

export default Main