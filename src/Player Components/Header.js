import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <Box className='HeaderBox' sx={{width : "375px", height : "61.81px", backgroundColor : "#FF005C"}}>
        <img src={require('./Imgs/Points_RGB_White 1.png')} style={{marginTop : "24px", width : "46.33px", height : "25.81px", marginRight : "5px"}} alt="Points Logo"/>
        <Typography sx={{ fontSize: 11, height:"57.11px", marginTop : "35px", color : "white" }} gutterBottom>
            OnBoarding
        </Typography>
    </Box>
  )
}

export default Header