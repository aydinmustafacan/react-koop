import React, {Component} from 'react';
import FooterStyles from "./Footer.module.css";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (



            <div className={FooterStyles.footerContainer}>
                <ul className={"footer-links"}>
                <li>
                    <Link to="/aboutus">Hakkimmizda</Link>
                </li>
                <li>
                    <Link to="/contact">Iletisim</Link>
                </li>
                <li>
                    <Link to="/services">Hizmetlerimiz</Link>
                </li>
                    </ul>



            </div>

        );
    }
}

export default Footer;