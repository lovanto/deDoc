import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from "react-router-dom";

import Navigation from './navigation.js';
import Landing from './landing.js';
import Blog from './blog.js';
import Chat from './chat.js';
import ChatWithDoctor from './chatWithDoctor.js';
import Medicine from './medicine.js';
import MedicineList from './medicineList.js';
import DetailBlog1 from './detailBlog.js';
import DetailBlog2 from './detailBlog2.js';
import DetailBlog3 from './detailBlog3.js';
import FindDoctor from './findDoctor.js';
import Footer from './footer.js';

const Container = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Navigation />
                    <Landing />
                </Route>
                <Route path="/blog">
                    <Navigation />
                    <Blog />
                    <Footer />
                </Route>
                <Route path="/detailpost/HealthyEating">
                    <Navigation />
                    <DetailBlog1 />
                    <Footer />
                </Route>
                <Route path="/detailpost/HowtoLiveaHealthierLifestyle">
                    <Navigation />
                    <DetailBlog2 />
                    <Footer />
                </Route>
                <Route path="/detailpost/HowtoEaseIntoaHealthyDiet">
                    <Navigation />
                    <DetailBlog3 />
                    <Footer />
                </Route>
                <Route path="/chat">
                    <Navigation />
                    <Chat />
                    <Footer />
                </Route>
                <Route path="/medicineList">
                    <Navigation />
                    <MedicineList />
                    <Footer />
                </Route>
                <Route path="/medicine">
                    <Navigation />
                    <Medicine />
                    <Footer />
                </Route>
                <Route path="/findDoctor">
                    <Navigation />
                    <FindDoctor />
                    <Footer />
                </Route>
                <Route path="/chatDoctor">
                    <ChatWithDoctor />
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default Container;