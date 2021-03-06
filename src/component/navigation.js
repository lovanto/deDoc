import React from 'react';
import {
    Link
} from "react-router-dom";

const Navigation = () => {
    return (
        <header>
            <div className="background-landing">
                <nav className="navbar navbar-expand-lg navbar-light nav-font">
                    <button
                        className="navbar-toggler mt-3 mb-3"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse m-4" id="navbarTogglerDemo01">
                        <Link className="navbar-brand ml-5 header-nav animate__animated animate__rubberBand" to="/">DeDoc.</Link>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                        <ul className="navbar-nav my-2 my-lg-0 mr-5">
                            <li className="nav-item mr-5 ml-5">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item mr-5 ml-5">
                                <Link className="nav-link" to="/chat">Chat Doctor</Link>
                            </li>
                            <li className="nav-item ml-5">
                                <Link className="nav-link" to="/medicine">Vitamin & Medicine</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;