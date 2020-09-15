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
            <div class="background-landing">
                <nav class="navbar navbar-expand-lg navbar-light nav-font">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse m-4" id="navbarTogglerDemo01">
                        <Link class="navbar-brand ml-5 header-nav" to="/">DeDoc.</Link>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
                        <ul class="navbar-nav my-2 my-lg-0 mr-5">
                            <li class="nav-item mr-5 ml-5">
                                <Link class="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item mr-5 ml-5">
                                <Link class="nav-link" to="/chat">Chat Doctor</Link>
                            </li>
                            <li class="nav-item mr-5 ml-5">
                                <Link class="nav-link" to="/medicine">Vitamin & Medicine</Link>
                            </li>
                            <li class="nav-item mr-5 ml-5">
                                <Link class="nav-link" to="/find">Find Doctor</Link>
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
            </div>
        </Router>
    );
};

export default Navigation;