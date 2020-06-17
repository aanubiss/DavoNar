import React, { Component } from 'react'
import './Imgur.css'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { Feed } from './Feed/Feed';

class Imgur extends Component {
    render() {
        return (
            <div className="NavBar">
                <header>
                    <Paper square style={{ background: "linear-gradient(90deg, rgba(4,0,36,1) 0%, rgba(18,9,121,1) 35%, rgba(85,0,255,1) 100%)" }} elevation={3}>
                        <nav>
                            <div>
                                <ul className="Tabs">
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0.5} className="PaperLi">
                                        <li>
                                            <NavLink to='/' exact>Feed</NavLink>
                                        </li>
                                    </Paper>
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0} className="probel" />
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0.5} className="PaperLi">
                                        <li><NavLink to='/'>Profile</NavLink></li>
                                    </Paper>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0.5} className="PaperLi">
                                        <li>
                                            <NavLink to="/">New Post</NavLink>
                                        </li>
                                    </Paper>
                                </ul>
                            </div>
                            <div>
                                <ul className="Tabs">
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0.5} className="PaperLi">
                                        <li>
                                            <NavLink to="/">Log In</NavLink>
                                        </li>
                                    </Paper>
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0} className="probel" />
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0.5} className="PaperLi">
                                        <li>
                                            <NavLink to="/">Sign Up</NavLink>
                                        </li>
                                    </Paper>
                                </ul>
                            </div>
                        </nav>
                    </Paper>
                </header>

                <Switch>
                    <Route exact path="/" component={Feed} />
                </Switch>
            </div >
        )
    }
}

export default Imgur