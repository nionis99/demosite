import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

function Routes() {
    return <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
        </Switch>
    </Router>
}

export default Routes;
