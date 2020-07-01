import React from 'react';
import './Prof.css'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Card from '../../Cards/Card/Card'

import SimpleModal from '../../UI/modal/Modal';
import PostUploader from './postUploader/PostUploader'

const Prof = (props) => {
    const token = localStorage.getItem("token")
    const prof = props.prof
    const cards = props.posts


    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const body = <PostUploader />

    // const addPost = async(value) => {
    //     const token = localStorage.getItem('token');
    //     const data = await fetch('localhost:3000/posts/add',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'auth-token': token
    //         },
    //         body: JSON.stringify(value)
    //     })
    // }

    return (
        <div className="Prof">
            <div className="ProfSide">
                <div className="Image">
                    <img style={{ width: "100%", height: "100%" }} src={prof.avatarUrl} alt="problems?" />
                </div>
                <div className="Description">
                    <h3> {prof.name} </h3>
                </div>
                {token ? (
                    <div
                        className='addPost'>
                        <p
                            className='para'
                            onClick={handleOpen}>+</p>
                        <SimpleModal
                            handleClose={handleClose}
                            open={open}
                            body={body} />
                    </div>
                ) : null}
            </div>
            <div className="PostSide">

                {cards.map((i, index) => (
                    <ScrollAnimation
                        animateIn={index % 3 === 0 ? "fadeInLeftBig" : index % 3 === 2 ? "fadeInRightBig" : "fadeIn"}
                        scrollableParentSelector='.PostSide'
                        animateOnce={true}
                        initiallyVisible={false}
                        key={index}
                    >
                        <Card imgUrl={i.imgUrl} title={i.title} by={i.userId.name} date={i.date} />
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    );
}

export default Prof;