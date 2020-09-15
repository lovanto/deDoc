import React from 'react';

const Blog = () => {
    return (
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
                        <div class="card col-md-3 set-padding-0 m-3">
                            <div class="card-img-top img-bg" />
                            <div class="card-body">
                                <p class="card-text font-weight-bold category">Category | Date</p>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-flex justify-content-center">
                                    <a href="/" class="btn btn-info">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="card col-md-3 set-padding-0 m-3">
                            <div class="card-img-top img-bg" />
                            <div class="card-body">
                                <p class="card-text font-weight-bold category">Category | Date</p>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-flex justify-content-center">
                                    <a href="/" class="btn btn-info">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="card col-md-3 set-padding-0 m-3">
                            <div class="card-img-top img-bg" />
                            <div class="card-body">
                                <p class="card-text font-weight-bold category">Category | Date</p>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-flex justify-content-center">
                                    <a href="/" class="btn btn-info">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center mb-5">
                        <a href="/" class="btn btn-primary btn-view">View More</a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-3">
                            <div className="footer-title mb-5">Sitemap</div>
                            <div className="mb-5"><a className="footer-text" href="/">Home</a></div>
                            <div className="mb-5"><a className="footer-text" href="/chat">Chat Doctor</a></div>
                            <div className="mb-5"><a className="footer-text" href="/medicine">Vitamis & Medicine</a></div>
                            <div className="mb-5"><a className="footer-text" href="/find">Find Doctor</a></div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-title mb-5">Information</div>
                            <div className="mb-5"><a className="footer-text" href="/blog">Blog</a></div>
                        </div>
                        <div className="col-md-6 mt-5 mb-5">
                            <div className="d-flex justify-content-end mt-4 mb-5 pb-5">
                                <img className="mr-5" src="../src/img/icons/instagram.svg" alt="Instagram"/>
                                <img className="mr-5" src="../src/img/icons/facebook.svg" alt="Facebook"/>
                                <img className="mr-5" src="../src/img/icons/twitter.svg" alt="Twitter"/>
                                <img src="../src/img/icons/youtube.svg" alt="Youtube"/>
                            </div>
                            <div className="d-flex justify-content-end mt-5" align="left">Website by <label className="footer-title ml-2"> DeDoc</label></div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Blog;