import React from 'react';
import Footer from './footer.js';

const DetailBlog = () => {
    return (
        <div>
            <article>
                <div className="background-img mb-5" style={{ backgroundImage: 'url("../src/img/basics.jpg")' }}>
                </div>
                <div className="container mb-5 p-5">
                    <div className="mr-5 pr-5 ml-5 pl-5">
                        <p className="sub-detail mb-3">Basics Health  |  March 30, 2020</p>
                        <h2 className="header-detail mb-3">How to Ease Into a Healthy Diet</h2>
                        <p className="written-detail mb-5">Written by Jonathan Valdez, RDN, CDE, CPT</p>
                    </div>
                    <div className="sub-detail d-flex justify-content-center mr-5 pr-5 ml-5 pl-5">
                    Breakfast is often called the most important meal of the day. There may not be any hard science to back up that claim, but it makes sense that eating healthy foods in the morning could set the stage for healthy eating all day long. The thing is, it's not easy to make good choices when you're rushing off to work or school. <br/><br/>

                    Get a head start on breakfast. Hard-boil some eggs the night before, or make a healthy batch of cupcake-sized bran muffins. When you're in a hurry you can grab an egg and a muffin before you go. That way you won't be tempted to eat the giant-sized bagels or pastries at the coffee shop on your way to work. <br/><br/>
                    
                    Do you go out for lunch every day? Most restaurant food is high in fat, calories and sodium. Cut back on high-calorie restaurant food and pack your lunch a couple of days each week. <br/><br/>

                    Start with a healthy sandwich. Choose whole grain bread, lean low-sodium meat or poultry, and lots of tomatoes, onions, lettuce, avocado or other sandwich vegetables. Go light on the mayonnaise or use a low-fat mayonnaise. Buy a small insulated container for a cup of vegetable soup and add a piece of fresh fruit for dessert. Now you have a tasty and healthy lunch. If you must eat lunch at a restaurant, try a salad as a meal or, at least, choose a salad instead of French fries. <br/><br/>

                    When snack time rolls around, and you find yourself staring at the vending machine, choose a package of mixed nuts instead of a candy bar. Drink fresh water instead of sugary soda or that third cup of coffee. <br/><br/>

                    Here's an easy way to plan a balanced meal. Mentally divide your plate into four quadrants. Half of your plate should be covered with green or colorful vegetables and fruit. One-quarter of your plate can be home to your protein source (chicken, meat, eggs, fish, and seafood or a vegetarian dish). Finally, you can use that last quarter of your plate for something starchy like potatoes, whole grain pasta, or brown or wild rice.  <br/><br/>

                    Buy prewashed and prepackaged salad ingredients so that you can make salads quickly and easily. Salads are an easy way to add vegetables to your diet, and they take up space in your stomach so that you can feel satisfied with a smaller entree. <br/><br/>

                    Instead of having a big bowl of ice cream for dessert, choose a cup of plain Greek yogurt. It's an excellent source of protein and calcium. Add nuts and berries or sliced fruit and some honey. <br/><br/>

                    Do you like snacks like potato chips or corn chips? Baked chips are better than fried. And if it's the dip you love, try scooping your chip dip with fresh vegetables like raw carrots or green beans instead. <br/><br/>

                    Source: https://www.verywellfit.com/easing-into-a-healthy-diet-2507090
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