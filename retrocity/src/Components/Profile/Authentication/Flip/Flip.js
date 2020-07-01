
import React, { useState } from 'react';
import './Flip.css'
import SignIN from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Flip = (props) => {
  const [rot, setRotate] = useState(false)

  return (
    <div
      className={"flip-card"}>
      <img 
      alt="Problems?"
      onClick={() => setRotate(!rot)} rot={rot} 
      style={{width: '100px', height: '80px'}}
      src={rot ? 'https://cdn.dribbble.com/users/1986212/screenshots/6144741/sign-in---character-for-animation.gif' : 'https://cdn-images-1.medium.com/max/1200/1*1OxDpSqmW3ugfAzp_i4OgA.gif'}/>
      <br />
      <div
        className={rot ? ['flip-card-inner', 'rot'].join(' ') : "flip-card-inner"}>
        <div className="flip-card-front">
          <SignIN profHandler={() => props.profHandler()} />
        </div>
        <div className="flip-card-back">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default Flip;