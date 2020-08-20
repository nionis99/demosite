import React, {Fragment, useRef} from 'react';
import '../../styles/App.scss';
import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";
import Content from "../Layout/Content";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Service from "../Service/Service";

function App() {

    const serviceRef = useRef();
    const contactRef = useRef();
    const scrollTo = (elRef) => {
        const el = elRef.current ? elRef.current : elRef

        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    return (
        <Fragment>
            <Navigation serviceRef={serviceRef} contactRef={contactRef} scrollTo={scrollTo}/>
            <Content>
                <Header/>
                <Service serviceRef={serviceRef}/>
                <Contact contactRef={contactRef}/>
            </Content>
            <Footer serviceRef={serviceRef} contactRef={contactRef} scrollTo={scrollTo}/>
        </Fragment>);
}

export default App;
