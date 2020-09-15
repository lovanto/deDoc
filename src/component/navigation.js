import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Landing from './landing.js';
import Blog from './blog.js';
import Chat from './chat.js';
import Medicine from './medicine.js';
import Find from './find.js';

const Navigation = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light nav-font">
                <button
                    className="navbar-toggler"
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
                    <Link className="navbar-brand ml-5 header-nav" to="/">DeDoc.</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                    <ul className="navbar-nav my-2 my-lg-0 mr-5">
                        <li className="nav-item mr-5 ml-5">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item mr-5 ml-5">
                            <Link className="nav-link" to="/chat">Chat Doctor</Link>
                        </li>
                        <li className="nav-item mr-5 ml-5">
                            <Link className="nav-link" to="/medicine">Vitamin & Medicine</Link>
                        </li>
                        <li className="nav-item mr-5 ml-5">
                            <Link className="nav-link" to="/find">Find Doctor</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/chat">
                    <Chat />
                </Route>
                <Route path="/medicine">
                    <Medicine />
                </Route>
                <Route path="/find">
                    <Find />
                </Route>
            </Switch>
        </Router>
    );
};

export default Navigation;