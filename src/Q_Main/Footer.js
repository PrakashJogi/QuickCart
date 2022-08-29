import "./Footer.css";

import { NavLink } from "react-router-dom";

const Footer = () =>
{
    return (
            <div>
                <footer className="footer_ p-3" align="center">
                    <div className="footer-1" align="center">
                        <NavLink to="/about-us" className="nav-link f_link m-3" >About</NavLink>
                        <NavLink to="/contact-us" className="nav-link f_link p-2">Contact</NavLink>
                    </div>
                    <div className="text-center p-2">
                        Copyright © 2022 <NavLink to="/" className="nav-link web_link f_link"> QuickCart</NavLink>
                    </div>
                </footer>
            </div>
    );
}

export default Footer;