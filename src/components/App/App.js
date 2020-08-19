import React, {Fragment} from 'react';
import '../../styles/App.scss';
import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";
import Content from "../Layout/Content";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";

function App() {
    return (
        <Fragment>
            <Navigation/>
            <Content>
                <Header/>
                <Contact/>
            </Content>
            <Footer/>
        </Fragment>);
}

export default App;
