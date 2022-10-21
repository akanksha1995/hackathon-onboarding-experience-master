import { Box, Card, CardActionArea } from '@mui/material';

import React from 'react'

export const TriviaBox = ({  task, answer, correctClick, setCorrectClick  }) => {
    const [localCorrectClick, setLocalCorrectClick] = React.useState(0)

    function Done() {
        console.log(correctClick)
        if (answer.Correct && (correctClick != 1 && correctClick != 2)) {
            setCorrectClick(1)
            setLocalCorrectClick(1)
            task.completed = true;
        }
        else if (correctClick != 1 && correctClick != 2){
            setCorrectClick(2)
            setLocalCorrectClick(2)
        }
    }

    return (
        <Box>
            <Card sx = {{marginLeft : "8px", marginRight : "8px", minHeight : "50px", marginBottom : "20px"}} className="TriviaBox">
                <CardActionArea onClick={() => {Done()}}>
                    <h3 style={{marginLeft : "6px"}}>
                        {answer.Text}
                    </h3>
                </CardActionArea>
                <div className="Circle">
                        {localCorrectClick ? (localCorrectClick == 1 ? <div className="CircleBlue"></div> : <div className="CircleRed"></div>): null}
                </div>
            </Card>
        </Box>
    )
}

export default TriviaBox