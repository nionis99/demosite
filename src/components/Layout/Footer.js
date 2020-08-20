import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
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
                        <li><Link to={"/"}>home</Link></li>
                        <li><Link to={"/service"}>service</Link></li>
                        <li><Link to={"/works"}>works</Link></li>
                        <li><Link to={"/about"}>about me</Link></li>
                        <li><Link to={"/contact"}>contact</Link></li>
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