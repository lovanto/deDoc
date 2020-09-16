import React from 'react';
import Footer from './footer.js';
import CardBlog from './cardBlog.js';

const Blog = () => {
    return (
        <div>
            <article>
                <div className="headerBlog mb-5">
                </div>
                <div className="container mb-5">
                    <div className="d-flex justify-content-center mb-5">
                        <input className="form-control form-style col-md-6" type="text" placeholder="Search for articles by title and category" />
                        <button className="btn whiteButton"><img className="icon-set-3" src="./src/img/icons/search.svg" alt="" /> Search</button>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-center mb-5">
                            <CardBlog link="detailpost"/>
                            <CardBlog link="detailpost"/>
                            <CardBlog link="detailpost"/>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center mb-5">
                            <a href="/" className="btn btn-primary btn-view">View More</a>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
};

export default Blog;