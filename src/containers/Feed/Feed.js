import React from 'react'
import './Feed.css'
import Card from '../../components/Card/Card'

export const Feed = () => {
    const arr = [
        {
            by: "Narek",
            title: 'First Card',
            ava: "https://i.imgur.com/WddIqBl.png",
            img: "https://avatars.mds.yandex.net/get-pdb/1088712/8b19d278-0b9b-46f8-89e4-66f5541efc55/s1200?webp=false",
            imgTitle: "butifl"
        },
        {
            by: "Davit",
            title: 'Second Card',
            ava: "https://i.imgur.com/RVIJMGT.jpg",
            img: "https://avatars.mds.yandex.net/get-pdb/1823871/68cf28a5-f5a8-4996-a878-b77ce3af75be/s1200?webp=false",
            imgTitle: "butifl 2"
        },
        {
            by: "Seda",
            title: 'Third Card',
            ava: "https://i.imgur.com/QUgFlrW.jpg",
            img: "https://avatars.mds.yandex.net/get-pdb/939428/ea9b495d-332d-4ae4-a7c5-97871af5f3c1/s1200?webp=false",
            imgTitle: "butifl 3"
        },
        {
            by: "Tatevik",
            title: 'Fourth Card',
            ava: "https://i.imgur.com/eOBR9Dd.jpg",
            img: "https://s1.1zoom.me/big3/273/Thailand_Tropics_Coast_Boats_PhraNang_Cave_Beach_527327_4592x3080.jpg",
            imgTitle: "butifl 4"
        },
        {
            by: "Anonimus",
            title: 'Fifth Card',
            ava: "",
            img: "https://cs13.pikabu.ru/post_img/2019/11/03/6/og_og_1572770789245164191.jpg",
            imgTitle: "Me and friends :D" 
        }
    ]
    return (
        <div className="Feed">
            <div className="Content">
                {arr.map((i, index) => {
                    return (
                        <div key={index.toString()} className="CardDiv">
                            <Card avatarSign={i.by[0]} img={i.img} imgTitle={i.imgTitle} avatarUrl={i.ava} by={`by ${i.by}`} title={i.title} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
