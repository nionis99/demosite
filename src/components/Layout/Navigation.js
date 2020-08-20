import React from 'react';
import {Link, NavLink} from 'react-router-dom';


function Navigation() {
    return (
        <div className="nav">
            <div className="nav-shortcuts">
                <ul>
                    <li><Link to={"/"}>meniu</Link></li>
                    <li><Link to={"/"}>some text</Link></li>
                    <li><Link to={"/"}>another item</Link></li>
                    <li><Link to={"/"}>one more</Link></li>
                    <li><Link to={"/"}>and last one</Link></li>
                </ul>
            </div>
            <div className="nav-menu">
                <div className="nav-title">
                    <span className="nav-bold-title">demo</span>
                    <span className="nav-light-title">site</span>
                </div>
                <div className="menu">
                    <ul>
                        <li><NavLink exact to={"/"} activeClassName='active'>home</NavLink></li>
                        <li><Link to={"/"}>service</Link></li>
                        <li><Link to={"/"}>works</Link>
                            <ul>
                                <li><Link to={"/"}>All</Link></li>
                                <li><Link to={"/"}>Graphic</Link></li>
                                <li><Link to={"/"}>Design</Link></li>
                                <li><Link to={"/"}>Logo</Link></li>
                                <li><Link to={"/"}>Website</Link></li>
                            </ul>
                        </li>
                        <li><NavLink exact to={"/about"} activeClassName='active'>about me</NavLink></li>
                        <li><NavLink exact to={"/contact"}>contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;