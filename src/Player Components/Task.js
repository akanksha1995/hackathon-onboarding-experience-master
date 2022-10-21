import React from 'react'
import { Box, Card, Button, Typography, CardContent } from '@mui/material'

export const Task = ({  task, setOpenTask, setcurrTask }) => {
    function makeIncomplete()
    {

    }
  return (
    <Box sx = {{textAlign : "left", marginBottom : "20px" }}>
        <Card sx = {{marginLeft : "10px", marginRight : "10px", width : "355px", height : "auto"}}>
            <CardContent className="Task">
                <div style = {{marginLeft : "8px"}}>
                    <Typography sx={{ fontSize: 10, color : "black"}} gutterBottom>
                        {task.Type}:
                    </Typography>
                    <Typography sx={{ fontSize: 18, color : "black" }} gutterBottom>
                        {task.Title}
                    </Typography>
                </div>
                <div style = {{marginLeft : "84px"}} className="CompleteButton">
                    <Button onClick={() => {setOpenTask(true); setcurrTask(task);}}
                    sx = {{width : "75px", height : "34px" , fontSize : 9, position : "relative"}} variant="contained" disabled={task.completed} >
                        {task.completed ? "Completed" : "Incompleted"}
                    </Button>
                </div>
            </CardContent>
        </Card>

    </Box>
  )
}

export default Task
