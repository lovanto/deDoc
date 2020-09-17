import React from 'react';
import Footer from './footer.js';

const DetailBlog = () => {
    return (
        <div>
            <article>
                <div className="background-img mb-5" style={{ backgroundImage: 'url("../../src/img/CompleteNutritionFood.jpg")' }}>
                </div>
                <div className="container mb-5 p-5">
                    <div className="mr-5 pr-5 ml-5 pl-5">
                        <p className="sub-detail mb-3">Tips & Trick  |  June 2020</p>
                        <h2 className="header-detail mb-3">Healthy Eating</h2>
                        <p className="written-detail mb-5">Written by Lawrence Robinson, Jeanne Segal Ph.D., and Robert Segal, M.A</p>
                    </div>
                    <div className="sub-detail d-flex justify-content-center mr-5 pr-5 ml-5 pl-5">
                        Eating a healthy diet is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about feeling great, having more energy, improving your health, and boosting your mood. <br /><br />

                        Healthy eating doesn’t have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and diet advice out there, you’re not alone. It seems that for every expert who tells you a certain food is good for you, you’ll find another saying exactly the opposite. The truth is that while some specific foods or nutrients have been shown to have a beneficial effect on mood, it’s your overall dietary pattern that is most important. The cornerstone of a healthy diet should be to replace processed food with real food whenever possible. Eating food that is as close as possible to the way nature made it can make a huge difference to the way you think, look, and feel. <br /><br />

                        By using these simple tips, you can cut through the confusion and learn how to create—and stick to—a tasty, varied, and nutritious diet that is as good for your mind as it is for your body. <br /><br />

                        Prepare more of your own meals. Cooking more meals at home can help you take charge of what you’re eating and better monitor exactly what goes into your food. You’ll eat fewer calories and avoid the chemical additives, added sugar, and unhealthy fats of packaged and takeout foods that can leave you feeling tired, bloated, and irritable, and exacerbate symptoms of depression, stress, and anxiety. <br /><br />

                        Make the right changes. When cutting back on unhealthy foods in your diet, it’s important to replace them with healthy alternatives. Replacing dangerous trans fats with healthy fats (such as switching fried chicken for grilled salmon) will make a positive difference to your health. Switching animal fats for refined carbohydrates, though (such as switching your breakfast bacon for a donut), won’t lower your risk for heart disease or improve your mood. <br /><br />

                        Read the labels. It’s important to be aware of what’s in your food as manufacturers often hide large amounts of sugar or unhealthy fats in packaged food, even food claiming to be healthy. <br /><br />

                        Focus on how you feel after eating. This will help foster healthy new habits and tastes. The healthier the food you eat, the better you’ll feel after a meal. The more junk food you eat, the more likely you are to feel uncomfortable, nauseous, or drained of energy. <br /><br />

                        Drink plenty of water. Water helps flush our systems of waste products and toxins, yet many of us go through life dehydrated—causing tiredness, low energy, and headaches. It’s common to mistake thirst for hunger, so staying well hydrated will also help you make healthier food choices. <br /><br />

                        Source: https://www.helpguide.org/articles/healthy-eating/healthy-eating.htm
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