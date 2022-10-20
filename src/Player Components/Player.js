import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import TaskBar from './TaskBar';


export default function Player({  AllTasks  }) {
  return (
    <Box >
      <Card variant="outlined" sx={{ width : 355, height : "104px", marginLeft : "10px", marginRight : "10px"}}>
        <React.Fragment>
            <CardContent className='PlayerContent'>
                <div style={{marginRight : '47px'}}>
                    <Typography sx={{ fontSize: 14, height:"57.11px" }} color="text.secondary" gutterBottom>
                        Salvador Dali (You)
                    </Typography>
                    <Typography sx={{ fontSize: 8, marginBottom : "11px" }} color="text.secondary" gutterBottom>
                        2 Points
                    </Typography>
                </div>
                <div className="PlayerTaskBars">
                    {AllTasks.map(task => {
                        return <TaskBar task={task}> </TaskBar>
                    })}

                </div>
                
            </CardContent>

    </React.Fragment>
      </Card>
      
    </Box>
  );
}
