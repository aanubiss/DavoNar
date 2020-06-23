import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className='Card'>
            <div className='mid'>
                <div className="image" style={{ backgroundImage: `url(${props.imgUrl})` }}>

                </div>
                <div className='desc'>
                    <div>
                        <h4 style={{ marginLeft: "7px", marginBottom: "3px" }}> {props.title} </h4>
                        <h5 style={{ marginLeft: "7px" }}> {props.by} </h5>
                    </div>
                    <div>
                        <h5 style={{ marginRight: "7px" }}> {props.date} </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;