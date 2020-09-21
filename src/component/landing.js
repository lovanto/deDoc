import React from 'react';
import {
    Link
} from "react-router-dom";

const Landing = () => {
    return (
        <article>
            <div className="background-landing">
                <div className="ml-5 mr-5 mb-5 pl-5 pr-5 landing-set">
                    <div className="row">
                        <div className="col-md-7 animate__animated animate__fadeInLeft">
                            <div className="header mb-4">
                                Provide Solutions For Your Healthy Life
                            </div>
                            <p className="content mb-4 col-md-9 set-content-1">
                                Menyediakan beragam solusi untuk kebutuhan medis
                                anda dengan mudah, aman  dan praktis tanpa harus
                                meninggalkan rumah anda.
                            </p>
                            <div>
                                <Link to="chat" className="btn btn-primary mr-4">
                                    <img
                                        className="mr-2 icon-set-1"
                                        src="./src/img/icons/chat.svg"
                                        alt="Chat"
                                    />
                                    Chat Doctor
                                </Link>
                                <Link to="medicine" className="btn btn-info">
                                    <img
                                        className="mr-2 icon-set-2"
                                        src="./src/img/icons/medicine.svg"
                                        alt="Medicine"
                                    />
                                    Buy Medicine
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-5 animate__animated animate__fadeInRight">
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