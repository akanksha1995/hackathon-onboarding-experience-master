import React from 'react'
import { Box, Card, Typography, CardContent, Button } from '@mui/material'
import QrReader from 'react-qr-scanner'

export const FullTask = ({  task , setOpenTask}) => {
    const [data, setData] = React.useState()

    function done(){
        if(data && data.text == task.code)
        {
            task.completed = true;
            setOpenTask(false)
        }
        
    }

    return (
        <Box sx = {{textAlign : "left", marginBottom : "20px" }}>
            <Card sx = {{marginLeft : "10px", marginRight : "10px", height : "420.px"}}>
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
                    <QrReader
                    delay={100}
                    style={{
                        height: 240,
                        width: 320,
                      }}
                    onError={(result) => {console.log(result)}}
                    onScan={(data) => {setData(data);<h3>data.text</h3>;}}
                    />
                    <Button sx = {{marginTop : "48px", height : "34px", width : "100%", backgroundColor : "#EEEEEE"}} onClick={() => {setOpenTask(false)}}>Back</Button>
                    {data ? done() : null}
                </CardContent>
            </Card>
        </Box>
    )
}

export default FullTask