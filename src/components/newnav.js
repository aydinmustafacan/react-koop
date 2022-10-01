import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo_sharp1.png";
export default class Newnav extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (
            <div
                 >
            <nav className="navbar navbar-expand navbar-light" >
                <Link to={"/tutorials"} className="navbar-brand">
                    Mustafa
                </Link>
                <div className="navbar-nav mr-auto" >
                    <li className="nav-item">
                        <Link to={"/tutorials"} className="navbar-brand">
                            s0moethiugn
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add"} className="navbar-brand">
                            some other thinfs
                        </Link>
                    </li>
                </div>
            </nav>
            </div>
        );
    }
}
