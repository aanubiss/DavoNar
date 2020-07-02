import React from 'react';
import './Prof.css'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Card from '../../Cards/Card/Card'
import MyModal from '../../UI/Modal/MyModal'


const Prof = (props) => {
    const token = localStorage.getItem("token")
    const prof = props.prof
    const cards = props.posts
    const [isOpen, setisOpen] = React.useState(false)

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

    const body = (
        <div>
            <p>MyModal</p>
        </div>
    )

    return (
        <div className="Prof">
            <div className="ProfSide">
                <div className="Image">
                    <img style={{ width: "100%", height: "100%" }} src={prof.avatarUrl} alt="problems?" />
                </div>
                <div className="Description">
                    <h3> {prof.name} </h3>
                    <h3> {prof.date} </h3>
                    <h3> {prof.email} </h3>
                </div>
                {token ? (
                    <div className='addPost'>
                        <p style={{ color: "red", fontSize: "30px" }} onClick={() => setisOpen(true)}>+</p>
                        <MyModal open={isOpen} close={() => setisOpen(false)} body={body} />
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