import React from 'react'
import { Box, Card, Typography, CardContent, Button } from '@mui/material'
import { TriviaBox } from './TriviaBox';

export const FullTrivia = ({  task , setOpenTask}) => {
    const [correctClick, setCorrectClick] = React.useState(0)


    return (
        <Box sx = {{textAlign : "left", marginBottom : "20px" }}>
            <Card sx = {{marginLeft : "10px", marginRight : "10px"}}>
                <CardContent className="FullTask">
                    <div style = {{marginLeft : "8px"}}>
                        <Typography sx={{ fontSize: 10, color : "black"}} gutterBottom>
                            {task.Type}:
                        </Typography>
                        <Typography sx={{ fontSize: 18, color : "black" }} gutterBottom>
                            {task.Title}
                        </Typography>
                        <Typography sx={{ fontSize: 14, color : "black" }} gutterBottom>
                            {task.Description}
                        </Typography>
                    </div>
                    <Box sx = {{marginTop : "20px", marginBottom : "20px", marginLeft : "8px", marginRight : "9px", height : "8.6px", background: "#EEEEEE"}}></Box>
                    {correctClick ? (correctClick == 1 ? 
                    <Box sx={{backgroundColor : "#4DC9EE", color : "white", height : "37px", marginBottom : "20px", marginLeft : "8px", marginRight : "8px"}}>
                        <h2 style={{marginLeft : "6px"}} className="CorrectBox">
                            Correct
                        </h2>
                    </Box> : 
                    <Box sx={{backgroundColor : "#FF005C", color : "white", height : "37px", marginBottom : "20px", marginLeft : "8px", marginRight : "8px"}}>
                        <h2 style={{marginLeft : "6px"}} className="IncorrectBox">
                            Incorrect
                        </h2>
                    </Box> ): 
                    null}
                    {task.Answers.map(answer => {
                        return <TriviaBox task={task} answer={answer} correctClick={correctClick} setCorrectClick={setCorrectClick}/>
                    })}
                    <Button sx = {{height : "34px", width : "100%", backgroundColor : "#EEEEEE"}} onClick={() => {setOpenTask(false)}}>Back</Button>

                </CardContent>
            </Card>
        </Box>
    )
}

export default FullTrivia