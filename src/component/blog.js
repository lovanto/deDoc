import React, { Component } from 'react';
import CardBlog from './cardBlog.js';

class Blog extends Component {
    render() {
        return (
            <div>
                <article>
                    <div className="background-img mb-5 animate__animated animate__fadeIn" style={{ backgroundImage: 'url("../src/img/doctor.jpg")' }}>
                    </div>
                    <div className="container mb-5">
                        <div className="d-flex justify-content-center mb-5 animate__animated animate__fadeIn">
                            <input className="form-control form-style col-md-6 searchBlog" type="text" placeholder="Search for articles by title and category" />
                            <button className="btn whiteButton setSearch"><img className="icon-set-3" src="../src/img/icons/search.svg" alt="" /><label id="searchText">Search</label></button>
                        </div>
                        <div id="adwadawd" className="animate__animated animate__fadeInUp">
                            <CardBlog dataArticles={this.state.dataArticles} />
                        </div>
                        <div className="col-md-12 d-flex justify-content-center mb-5 animate__animated animate__fadeInUp">
                            <button className="btn btn-primary btn-view">View More</button>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    state = {
        dataArticles: []
    };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/lovanto/deDoc/master/src/data/sourceArticle.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dataArticles: data });
            })
            .catch(console.log)
    }
};

export default Blog;