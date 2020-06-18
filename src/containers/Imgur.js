import React, { Component } from 'react'
import './Imgur.css'
import { Route, NavLink, Switch } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { Feed } from './Feed/Feed';
import HomeIcon from '@material-ui/icons/HomeTwoTone';
import AccountIcon from '@material-ui/icons/AccountCircleTwoTone';
import AddPhotoAlternateTwoToneIcon from '@material-ui/icons/AddPhotoAlternateTwoTone';

class Imgur extends Component {
    state = {
        loggedIn: true
    }




    render() {
        return (
            <div className="NavBar">
                <header>
                    <Paper square style={{ background: "linear-gradient(315deg, #7f53ac 0%, #647dee 74%)" }} elevation={0}>
                        <nav>
                            <div>
                                <ul className="Tabs">
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0} className="PaperLi">
                                        <li style={{ width: "40px", height: "40px" }}>
                                            <NavLink style={{ width: "100%", height: "100%" }} to='/' exact><HomeIcon style={{ width: "100%", height: "100%" }} /></NavLink>
                                        </li>
                                    </Paper>
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0} className="probel" />
                                    {this.state.loggedIn ? (
                                        <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0} className="PaperLi">
                                            <li style={{ width: "40px", height: "40px" }}>
                                                <NavLink style={{ width: "100%", height: "100%" }} to='/'><AccountIcon style={{ width: "100%", height: "100%" }} /></NavLink>
                                            </li>
                                        </Paper>
                                    ) : null}

                                </ul>
                            </div>
                            <div className="add">
                                <ul>
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0} className="PaperLi">
                                        <li style={{ width: "40px", height: "40px" }}>
                                            <NavLink style={{ width: "100%", height: "100%" }} to="/"><AddPhotoAlternateTwoToneIcon style={{ width: "100%", height: "100%" }} /></NavLink>
                                        </li>
                                    </Paper>
                                </ul>
                            </div>
                            <div>
                                <ul className="Tabs">
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0} className="PaperLi">
                                        <li style={{ width: "80px", height: "40px" }}>
                                            <NavLink style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} to="/">LOG IN</NavLink>
                                        </li>
                                    </Paper>
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0} className="probel" />
                                    <Paper style={{ background: "rgba(0,0,0,0)" }} elevation={0} className="PaperLi">
                                        <li style={{ width: "80px", height: "40px" }}>
                                            <NavLink style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} to="/">SIGN UP</NavLink>
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