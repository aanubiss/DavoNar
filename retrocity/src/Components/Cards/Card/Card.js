import React, { useState } from 'react';
import './Card.css'

const Card = (props) => {
    const [rot, setRot] = useState(false)

    return (
        <div className='Card' onClick={() => setRot(!rot)}>
            <div className={["mid", rot ? "mid-rot" : ""].join(" ")}>
                <div className="image" style={{ backgroundImage: `url(${props.imgUrl})` }} />
                <div className='desc'>
                    <div>
                        <h4> {props.title} </h4>
                        <h5 onClick={props.profClick} style={{ textDecoration: "none", color: "black", cursor: "pointer" }} to={`/profile/${props.by}`}> By: <i> {props.by} </i> </h5>
                    </div>
                    <div>
                        <h5> {props.date} </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;