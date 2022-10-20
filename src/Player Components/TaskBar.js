import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


export const TaskBar = ({  task  }) => {
  return (
    <Box >
        <Card variant="outlined" sx={{ width: 14.9, height: 83.35, background: task.completed ? "#FEA9A9" : "EEEEEE", marginLeft : "2px", marginBottom : "10px"}}></Card>
    </Box>
  )
}

export default TaskBar
