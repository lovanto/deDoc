import React, { Component } from 'react';
import Footer from './footer.js';
import CardBlog from './cardBlog.js';

class Blog extends Component {
    render() {
        return (
            <div>
                <article>
                    <div className="background-img mb-5" style={{ backgroundImage: 'url("../src/img/doctor.jpg")' }}>
                    </div>
                    <div className="container mb-5">
                        <div className="d-flex justify-content-center mb-5">
                            <input className="form-control form-style col-md-6" type="text" placeholder="Search for articles by title and category" />
                            <button className="btn whiteButton"><img className="icon-set-3" src="../src/img/icons/search.svg" alt="" /> Search</button>
                        </div>
                        <CardBlog dataArticles={this.state.dataArticles} />
                        <div className="col-md-12 d-flex justify-content-center mb-5">
                            <a href="/" className="btn btn-primary btn-view">View More</a>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        );
    }

    state = {
        dataArticles: []
    };

    componentDidMount() {
        fetch('../src/data/sourceArticle.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dataArticles: data });
                console.log(data);
            })
            .catch(console.log)
    }
};

export default Blog;