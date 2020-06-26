import React, { useState } from 'react';
import './Home.css'
import Cards from '../Cards/Cards';
import Profile from '../Profile/Profile';


const Home = (props) => {
    const [Comp, setComp] = useState(null)
    const [Current, setCurrent] = useState(null)

    const profile = (by = "me") => {
        setCurrent("profile")
        return (<Profile by={by} />)
    }
    const cards = () => {
        setCurrent("cards")
        return (<Cards props={props.prop} profClick={profClick} />)
    }

    const profClick = (by) => {
        setComp(() => profile(by))
    }

    return (


        <div className='Home'>
            <div className="cont">
                {Comp}
            </div>

            <div className='btnDiv'>
                <div className="btn" onClick={() => {
                    let audio = document.getElementById("chopin")
                    audio.paused ? audio.play() : audio.pause()
                }}>
                    <span className="noselect">Mute</span>
                    <div id="circle"></div>
                </div>
                <div className="btn cardbtn" onClick={() => {
                    if (Current !== "cards") { setComp(() => cards()) } else { setComp(null); setCurrent(null) }
                }}>
                    <span className="noselect">Gallery</span>
                    <div id="circle"></div>
                </div>
                <div className="btn profbtn" onClick={() => {
                    if (Current !== "profile") { setComp(() => profile()); } else { setComp(null); setCurrent(null) }
                }}>
                    <span className="noselect">Profile</span>
                    <div id="circle"></div>
                </div>
            </div>
        </div >
    );
}

export default Home;