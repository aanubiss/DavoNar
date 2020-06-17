import React, { Component } from 'react'
import './Imgur.css'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'


class Imgur extends Component {
    render() {
        return (
            <div className="NavBar">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to='/'
                                exact
                            >
                                Main</NavLink></li>
                            <li><NavLink to='/'>Main</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    {/* components */}
                </Switch>
            </div >
        )
    }
}

export default Imgur