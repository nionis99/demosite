import React from 'react';

function Navigation(props) {

    const {scrollTo, serviceRef, contactRef} = props;

    return (
        <div className="nav">
            <div className="nav-shortcuts">
                <ul>
                    <li><a href={""}>meniu</a></li>
                    <li><a href={""}>some text</a></li>
                    <li><a href={""}>another item</a></li>
                    <li><a href={""}>one more</a></li>
                    <li><a href={""}>and last one</a></li>
                </ul>
            </div>
            <div className="nav-menu">
                <div className="nav-title">
                    <span className="nav-bold-title">demo</span>
                    <span className="nav-light-title">site</span>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href={""}>home</a></li>
                        <li onClick={() => scrollTo(serviceRef)}>service</li>
                        <li><a href={"#"}>works</a>
                            <ul>
                                <li><a href="">All</a></li>
                                <li><a href="">Graphic</a></li>
                                <li><a href="">Design</a></li>
                                <li><a href="">Logo</a></li>
                                <li><a href="">Website</a></li>
                            </ul>
                        </li>
                        <li><a href={""}>about me</a></li>
                        <li onClick={() => scrollTo(contactRef)}>contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navigation;