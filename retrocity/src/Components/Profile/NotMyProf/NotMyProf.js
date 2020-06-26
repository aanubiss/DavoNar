import React from 'react';
import './NotMyProf.css'

const NotMyProf = (props) => {
    return (  
        <div className="Prof">
            <h1> Profile: {props.profId} </h1>
        </div>
    );
}
 
export default NotMyProf;