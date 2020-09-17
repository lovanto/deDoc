import React from 'react';
import Footer from './footer.js';

const DetailBlog = () => {
    return (
        <div>
            <article>
                <div className="background-img mb-5" style={{ backgroundImage: 'url("../src/img/goodlife.jpg")' }}>
                </div>
                <div className="container mb-5 p-5">
                    <div className="mr-5 pr-5 ml-5 pl-5">
                        <p className="sub-detail mb-3">Tips & Trick  |  June 2020</p>
                        <h2 className="header-detail mb-3">Healthy Eating</h2>
                        <p className="written-detail mb-5">Written by Rachel Goldman, PhD</p>
                    </div>
                    <div className="sub-detail d-flex justify-content-center mr-5 pr-5 ml-5 pl-5">
                        You know the obvious behaviors that describe someone who is healthy and takes care of themselves. A healthy person doesn't smoke, tries to maintain a healthy weight, eats healthy foods with plenty of fruits, vegetables and fiber and, of course, exercises on a regular basis. <br /><br />

                        Then there are other elements to add to the list. A healthy person also knows how to manage stress, gets good quality sleep each night, doesn't drink too much, doesn't sit too much—basically, does everything in moderation all the time. When you look at everything that could possibly go into a healthy lifestyle, you can see just how hard all of those things are in our current world. <br /><br />

                        The good news is, you don't have to change everything at the same time. In fact, the trick to healthy living is making small changes—taking more steps each day, adding fruit to your cereal, having an extra glass of water, or saying no to that second helping of buttery mashed potatoes. One thing you can do right now to make your lifestyle healthier is to move more. <br /><br />

                        The great thing about moving is that just a few minutes a day can have other lasting benefits, many of which you may not even be aware of. Just some of the benefits include: <br/><br/>

                        Enhances self-esteem, Helps maintain flexibility as you age, Improves joint stability, Improves memory in elderly people, Improves mood and reduce symptoms of anxiety and depression, Increases and improves range of motion, Maintains bone mass, Prevents osteoporosis and fractures, Reduces stress, Reduces the risk of heart disease, stroke, and diabetes. <br/><br/>

                        Source: https://www.verywellfit.com/simple-ways-to-live-a-healthy-lifestyle-1231193
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