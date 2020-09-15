import React from 'react';

const Landing = () => {
    return (
        <article>
            <div class="background-landing">
                <div class="ml-5 mr-5 mb-5 pl-5 pr-5 landing-set">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="header mb-4">
                                Provide Solutions For Your Healthy Life
            </div>
                            <p class="content mb-4 col-md-9 set-content-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
            </p>
                            <div>
                                <button class="btn btn-primary mr-4">
                                    <img
                                        class="mr-2 icon-set-1"
                                        src="./src/img/icons/chat.svg"
                                        alt="Chat"
                                    />
                Chat Doctor
              </button>
                                <button class="btn btn-info">
                                    <img
                                        class="mr-2 icon-set-2"
                                        src="./src/img/icons/medicine.svg"
                                        alt="Medicine"
                                    />
                Buy Medicine
              </button>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <img
                                class="rounded-circle set-img-1"
                                src="./src/img/people1.jpg"
                                alt="people_1"
                            />
                            <img
                                class="rounded-circle set-img-2"
                                src="./src/img/people2.jpg"
                                alt="people_2"
                            />
                            <img
                                class="rounded-circle set-img-3"
                                src="./src/img/people3.jpg"
                                alt="people_3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Landing;