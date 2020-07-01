import React from 'react';
import Prof from './Prof/Prof'
import Reg from './Authentication/Flip/Flip';

const Profile = (props) => {
    const token = localStorage.getItem('token');
    
    if (token) {
        return (
            <Prof prof={props.by} posts={props.posts} />
        )
    } else {
        return (
            <Reg profHandler={()=>props.profHandler()} />
        )
    }
}

export default Profile;