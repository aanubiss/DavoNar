import React from 'react';
import './Profile.css'
import MyProf from './MyProf/MyProf';
import NotMyProf from './NotMyProf/NotMyProf';
import Reg from './Reg/Reg';

const Profile = (props) => {
    const log = true

    if (log && props.by === "me") {
        return (
            <MyProf profId="me" />
        )
    } else if(log && props.by !== "me") {
        return (
            <NotMyProf profId={props.by} />
        )
    } else{
        return(
            <Reg />
        )
    }
}

export default Profile;