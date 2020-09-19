import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import Landing from './landing.js';
import Blog from './blog.js';
import Chat from './chat.js';
import Medicine from './medicine.js';
import MedicineList from './medicineList.js';
import DetailBlog1 from './detailBlog.js';
import DetailBlog2 from './detailBlog2.js';
import DetailBlog3 from './detailBlog3.js';

const Container = () => {
    return (
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/detailpost/HealthyEating">
                    <DetailBlog1 />
                </Route>
                <Route path="/detailpost/HowtoLiveaHealthierLifestyle">
                    <DetailBlog2 />
                </Route>
                <Route path="/detailpost/HowtoEaseIntoaHealthyDiet">
                    <DetailBlog3 />
                </Route>
                <Route path="/chat">
                    <Chat />
                </Route>
                <Route path="/medicineList">
                    <MedicineList />
                </Route>
                <Route path="/medicine">
                    <Medicine />
                </Route>
            </Switch>
    );
};

export default Container;