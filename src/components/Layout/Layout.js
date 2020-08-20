import React, {Fragment} from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout(props) {

    const {scrollTo, serviceRef, contactRef} = props;

    return <Fragment>
        <Navigation serviceRef={serviceRef} contactRef={contactRef} scrollTo={scrollTo}/>
        <div className="content">
            {props.children}
        </div>
        <Footer serviceRef={serviceRef} contactRef={contactRef} scrollTo={scrollTo}/>
    </Fragment>;
}

export default Layout;