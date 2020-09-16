import React from 'react';
import Footer from './footer.js';

const DetailBlog = () => {
    return (
        <div>
            <article>
                <div className="headerBlog mb-5">
                </div>
                <div className="container mb-5 p-5">
                    <div className="mr-5 pr-5 ml-5 pl-5">
                        <p className="sub-detail mb-3">Category Name  |  May 17, 2020</p>
                        <h2 className="header-detail mb-3">What is the Ideal Design Workflow for UX/UI Designers?</h2>
                        <p className="written-detail mb-5">Written by Author Name</p>
                    </div>
                    <div className="sub-detail d-flex justify-content-center mr-5 pr-5 ml-5 pl-5">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br /><br />

                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br /><br />

                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br /><br />

                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br /><br />

                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. <br /><br />

                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr. <br /><br />
                    </div>
                    <div className="mr-5 pr-5 ml-5 pl-5 mt-5">
                        <div className="row">
                            <div className="backgroundPink icon-set-4 ml-4"><img src="../src/img/icons/white-love.png" alt="" width="25" /></div>
                            <div className="written-detail mt-3 ml-4 col-md-2">128 Likes</div>
                            <div className="col-md-8 d-flex justify-content-end">
                                <img className="mr-4" src="../src/img/icons/pink-facebook.svg" alt="" />
                                <img className="mr-4" src="../src/img/icons/pink-twitter.svg" alt="" />
                                <img src="../src/img/icons/pink-linkedin.svg" alt="" />
                            </div>
                        </div>
                        <hr className="mb-5" />
                        <p className="subheader-detail mb-3">16 comments</p>
                        <textarea className="form-control" name="commentIDE" id="commentIDE" cols="30" rows="10" placeholder="Write a response…"></textarea>
                        <div className="d-flex justify-content-end mt-3">
                            <a href="/" className="btn btn-primary btn-view">Submit</a>
                        </div>
                        <div>
                            <div className="row">
                                <div className="img-profile-set ml-3"></div>
                                <div className="col-md-10">
                                    <div className="m-2 written-detail">Name</div>
                                    <div className="m-2 written-detail">5 Hours Ago</div>
                                </div>
                            </div>
                            <div className="written-detail mt-3 mb-3">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            </div>
                            <div className="d-flex justify-content-end mt-3">
                                <img src="../src/img/icons/love.svg" alt="" />
                                <p className="m-3">16</p>
                                <img src="../src/img/icons/comment.svg" alt="" />
                                <p className="m-3">15</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
};

export default DetailBlog;