import React, {Fragment} from 'react';
import '../../styles/App.scss';
import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";
import Content from "../Layout/Content";

function App() {
    return (
        <Fragment>
            <Navigation/>
            <Content/>
            <Footer/>
        </Fragment>
    );
}

export default App;
