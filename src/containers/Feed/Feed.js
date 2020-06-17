import React from 'react'
import './Feed.css'
import Card from '../../components/Card/Card'

export const Feed = () => {
    const arr = [0, 1, 1, 2, 2, 1, 1]
    return (
        <div className="Feed">
            <div className="Content">
                {arr.map(() => {
                    return (
                        <div className="CardDiv">
                            <Card avatar="A" title="First Card" />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
