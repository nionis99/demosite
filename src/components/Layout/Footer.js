import React from 'react';

function Footer(props) {

    const {scrollTo, serviceRef, contactRef} = props;

    return (
        <div className="footer">
            <div className="footer-left">
                Phasellus interdum aliquam eros, vitae vestibulum elit malesuada ut. Integer nec ex accumasan, suscipit
                eros a, tempus nis. Suspendisse pretium elementum.
                Phasellus interdum aliquam eros, vitae vestibulum elit malesuada ut. Integer nec

            </div>
            <div className="footer-right">
                <div className="footer-shortcuts">
                    <ul>
                        <li><a href={""}>home</a></li>
                        <li onClick={() => scrollTo(serviceRef)}>service</li>
                        <li><a href={""}>works</a></li>
                        <li><a href={""}>about me</a></li>
                        <li onClick={() => scrollTo(contactRef)}>contact</li>
                    </ul>
                </div>
                <div className="footer-copyright">
                    <p>
                        &copy;
                        <span className="footer-bold-title"> demo</span>
                        <span className="footer-light-title">site </span>
                        All right reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;