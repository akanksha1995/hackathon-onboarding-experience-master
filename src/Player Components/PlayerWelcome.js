import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import OnboardingCard from "../OnboardingCard";
import Input from '@mui/material';
import TextField from '@mui/material/TextField';
import '../Home.css';

export const PlayerWelcome = ({userList, setUserList}) => {
const [name, setValue] = useState("");

const updateUserList = () => {
    const newUserList = [...userList, name]
    setUserList(newUserList);
}

const handleChange = e => {
    setValue(e.target.value);
}

return (
<div className='home'>
<Header />
<OnboardingCard>
    <div className="onboarding-card-intro">
    Remember to help your new pointsters as they hunt for their clues! The players have been given their own hints, but they may still need help.     
    </div>
</OnboardingCard>
<div style={{margin: "20px 10px"}} >
<div style={{height : "8.6px", background : "#EEEEEE"}}></div>
<div style = {{fontWeight : "700", textAlign: "left", margin : "10px 0"}}> Your Information</div>
<TextField fullWidth label="Name" id="name" variant="filled" value = {name} onChange={handleChange}/>
<TextField fullWidth label="Invite Code" id="invite-code" variant="filled" sx = {{marginTop : "10px"}}/>
</div>
<div className="home-login-buttons">
<Link to={{pathname :"player/"+name}} className="host-link" onClick={updateUserList}>Join Game</Link>
</div>
</div>
);
}
export default PlayerWelcome