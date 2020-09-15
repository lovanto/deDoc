import React from 'react';

const Landing = () => {
    return (
        <article>
            <div className="background-landing">
                <div className="ml-5 mr-5 mb-5 pl-5 pr-5 landing-set">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="header mb-4">
                                Provide Solutions For Your Healthy Life
                            </div>
                            <p className="content mb-4 col-md-9 set-content-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div>
                                <button className="btn btn-primary mr-4">
                                    <img
                                        className="mr-2 icon-set-1"
                                        src="./src/img/icons/chat.svg"
                                        alt="Chat"
                                    />
                                    Chat Doctor
                                </button>
                                <button className="btn btn-info">
                                    <img
                                        className="mr-2 icon-set-2"
                                        src="./src/img/icons/medicine.svg"
                                        alt="Medicine"
                                    />
                                    Buy Medicine
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img
                                className="rounded-circle set-img-1"
                                src="./src/img/people1.jpg"
                                alt="people_1"
                            />
                            <img
                                className="rounded-circle set-img-2"
                                src="./src/img/people2.jpg"
                                alt="people_2"
                            />
                            <img
                                className="rounded-circle set-img-3"
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