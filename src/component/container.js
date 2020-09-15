import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import Landing from './landing.js';
import Blog from './blog.js';
import Chat from './chat.js';
import Medicine from './medicine.js';
import Find from './find.js';

const Container = () => {
    return (
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
    );
};

export default Container;