import React from 'react';
import {
    Link
} from "react-router-dom";

const drugsList = ({ dataDrug }) => {
    return (
        <div className="row d-flex justify-content-center mb-5">
            {dataDrug.map((drugs) => (
                <div className="card card-rounded col-md-3 set-padding-0 m-3 mb-5">
                    <div data-toggle="modal" data-target="#exampleModal" to="/detailDrug" className="special-link">
                        <div className="img-bg-2" style={{ backgroundImage: 'url("../src/img/drugs.jpg")' }} />
                    </div>
                    <div className="card-body">
                        <div className="ml-4">
                            <div data-toggle="modal" data-target="#exampleModal" to="/detailDrug" className="special-link">
                                <div className="poppins-bold mb-3">{drugs.name}</div>
                            </div>
                            <p className="sub-detail">Per Strip</p>
                            <p className="sub-detail">Rp. 13.000,-</p>
                            <div className="row">
                                <div className="ml-2">
                                    <div className="circle-icon-1">-</div>
                                </div>
                                <div className="ml-2">
                                    <div className="circle-icon-2">+</div>
                                </div>
                                <div className="d-flex justify-content-end col-md-8">
                                    <svg className="circle-icon-3" id="Icon_feather-shopping-cart" data-name="Icon feather-shopping-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.864 22.915">
                                        <path id="Path_35" data-name="Path 35" d="M13.9,30.948A.948.948,0,1,1,12.948,30,.948.948,0,0,1,13.9,30.948Z" transform="translate(-3.862 -10.481)" fill="none" stroke="#d7547b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                        <path id="Path_36" data-name="Path 36" d="M30.4,30.948A.948.948,0,1,1,29.448,30,.948.948,0,0,1,30.4,30.948Z" transform="translate(-9.93 -10.481)" fill="none" stroke="#d7547b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                        <path id="Path_37" data-name="Path 37" d="M1.5,1.5H5.293L7.835,14.2a1.9,1.9,0,0,0,1.9,1.527H18.95a1.9,1.9,0,0,0,1.9-1.527l1.517-7.957H6.242" fill="none" stroke="#d7547b" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                    </svg>
                                </div>
                                <div className="btn-border-pink col-md-11 mb-3">Buy Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default drugsList;