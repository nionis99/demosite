import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./components/Pages/Home/Home";
import Service from "./components/Pages/Service";
import AllWorks from "./components/Pages/Works/AllWorks";
import Graphic from "./components/Pages/Works/Graphic";
import Design from "./components/Pages/Works/Design";
import Logo from "./components/Pages/Works/Logo";
import Website from "./components/Pages/Works/Website";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

function Routes() {
    return <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/service' component={Service}/>
            <Route exact path='/works' component={AllWorks}/>
            <Route exact path='/graphic' component={Graphic}/>
            <Route exact path='/design' component={Design}/>
            <Route exact path='/logo' component={Logo}/>
            <Route exact path='/website' component={Website}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
        </Switch>
    </Router>
}

export default Routes;
