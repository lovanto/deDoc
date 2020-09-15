import React from 'react';
import Footer from './footer.js';

const Blog = () => {
    return (
        <div>
            <article>
                <div className="headerBlog mb-5">
                </div>
                <div className="container mb-5">
                    <div className="d-flex justify-content-center mb-5">
                        <input className="form-control form-style col-md-6" type="text" placeholder="Cari artikel berdasarkan judul, dan kategori" />
                        <button className="btn whiteButton"><img className="icon-set-3" src="./src/img/icons/search.svg" alt="" /> Cari</button>
                    </div>
                    <div className="row">
                        <div className="d-flex justify-content-center mb-5">
                            <div className="card col-md-3 set-padding-0 m-3">
                                <div className="card-img-top img-bg" />
                                <div className="card-body">
                                    <p className="card-text font-weight-bold category">Category | Date</p>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="d-flex justify-content-center">
                                        <a href="/" className="btn btn-info">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card col-md-3 set-padding-0 m-3">
                                <div className="card-img-top img-bg" />
                                <div className="card-body">
                                    <p className="card-text font-weight-bold category">Category | Date</p>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="d-flex justify-content-center">
                                        <a href="/" className="btn btn-info">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card col-md-3 set-padding-0 m-3">
                                <div className="card-img-top img-bg" />
                                <div className="card-body">
                                    <p className="card-text font-weight-bold category">Category | Date</p>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="d-flex justify-content-center">
                                        <a href="/" className="btn btn-info">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
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