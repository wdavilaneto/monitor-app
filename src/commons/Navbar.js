import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    state = {};

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                                <a data-toggle="dropdown" className="dropdown-toggle" href="/">
                                    <span className="block m-t-xs font-bold">GSI</span>
                                    <span className="text-muted text-xs block">menu <b className="caret"></b></span>
                                </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li>
                                        <Link className="dropdown-item" to="/">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="logo-element">IN+</div>
                        </li>
                        <li className="active">
                            <Link to="/">
                                <i className="fa fa-th-large"></i>
                                <span className="nav-label">Team Boards</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/okr">
                                <i className="fa fa-th-large"></i>
                                <span className="nav-label">OKR</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};
export default Navbar;
