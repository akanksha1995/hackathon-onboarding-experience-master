import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { v4 as uuid } from 'uuid';

import TaskBar from './TaskBar';
import { useParams } from 'react-router-dom';


export default function Player({ AllTasks, name, hostMode=false }) {
  const {hire_name} = useParams();

  function calculatePoints(){
    return (AllTasks.filter(task => {return task.completed})).length
  }

  return (
    <Box className='player-status-card'>
      <Card variant="outlined" sx={{ width: 355, height: "104px", marginLeft: "10px", marginRight: "10px", border: "none" }}>
        <React.Fragment>
          <CardContent className='PlayerContent'>
            <div style={{ marginRight: '47px' }}>
              <Typography sx={{ fontSize: 14, height: "57.11px" }} color="text.secondary" gutterBottom>
              {hostMode? name : hire_name}
              </Typography>
              <Typography sx={{ fontSize: 8, marginBottom: "11px" }} color="text.secondary" gutterBottom>
                {calculatePoints()} Points
              </Typography>
            </div>
            <div className="PlayerTaskBars">
              {AllTasks.map(task => {
                return <TaskBar key={uuid()} task={task}> </TaskBar>
              })}

            </div>

          </CardContent>

        </React.Fragment>
      </Card>

    </Box>
  );
}
