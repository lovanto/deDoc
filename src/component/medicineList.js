import React, { Component } from 'react';
import Footer from './footer.js';

import DrugList from './drugsList.js';

class Medicine extends Component {
    render() {
        return (
            <div className="background-landing" >
                <article>
                    <div className="col-md-8 banner-medic-2">
                        <div className="header ml-5 pl-5 mb-4">Pernapasan</div>
                        <div className="d-flex justify-content-start ml-5 pl-5">
                            <input className="form-control form-style col-md-6" type="text" placeholder="Search for articles by title and category" />
                            <button className="btn whiteButton"><img className="icon-set-3" src="../src/img/icons/search.svg" alt="" /> Search</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-10 row mb-5 pb-5">
                            <DrugList dataDrug={this.state.dataDrugs} />
                        </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center row mb-5 pb-5 poppins-bold">
                        <p className="m-2 color-pink">1</p> <p className="m-2">2</p> <p className="m-2">3</p>
                    </div>

                    {/* MODAL */}
                    <div class="modal bd-example-modal-xl fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl" role="document">
                            <div class="modal-content">
                                <button type="button" class="circle-icon-4" data-dismiss="modal" aria-label="Close">
                                    <svg className="hayangweh" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 34.769 34.769">
                                        <g id="Group_5" data-name="Group 5" transform="translate(2.121 2.121)">
                                            <line id="Line_5" data-name="Line 5" x1="29.437" y2="30.527" transform="translate(1.09)" fill="none" stroke="#d7547b" stroke-linecap="round" stroke-width="3" />
                                            <line id="Line_6" data-name="Line 6" x2="29.437" y2="30.527" transform="translate(0)" fill="none" stroke="#d7547b" stroke-linecap="round" stroke-width="3" />
                                        </g>
                                    </svg>
                                </button>
                                <div className="card card-rounded col-md-12 set-padding-0 mb-5">
                                    <div className="card-body row">
                                        <div className="col-md-6">
                                            <div className="img-bg-3" style={{ backgroundImage: 'url("../src/img/drugs.jpg")' }} />
                                        </div>
                                        <div className="col-md-6 mt-5">
                                            <div className="poppins-bold mb-3">Drugs</div>
                                            <p className="sub-detail">Per Strip</p>
                                            <p className="sub-detail">Rp. 13.000,-</p>
                                            <div className="row">
                                                <div className="col-md-1">
                                                    <div className="circle-icon-1">-</div>
                                                </div>
                                                <div className="col-md-1 ml-3">
                                                    <div className="circle-icon-2">+</div>
                                                </div>
                                                <div className="d-flex justify-content-end col-md-9">
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

                                <div className="card card-rounded col-md-12 set-padding-0 mt-5">
                                    <div className="card-body m-5">
                                        <div className="subheader-detail color-gray">Deskripsi Produk</div>
                                        <div className="sub-detail color-gray col-md-8 mt-3" style={{ marginLeft: '-15px' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                        <div className="subheader-detail color-gray mt-5">Indikasi Umum</div>
                                        <div className="sub-detail color-gray col-md-8 mt-3" style={{ marginLeft: '-15px' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                        <div className="subheader-detail color-gray mt-5">Kategori</div>
                                        <div className="sub-detail color-gray col-md-8 mt-3" style={{ marginLeft: '-15px' }}>
                                            <p className="sub-detail color-pink font-weight-bold">Obat Lain.</p>
                                        </div>
                                        <div className="subheader-detail color-gray mt-5">Komposisi</div>
                                        <div className="sub-detail color-gray col-md-8 mt-3" style={{ marginLeft: '-15px' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                        <div className="subheader-detail color-gray mt-5">Dosis</div>
                                        <div className="sub-detail color-gray col-md-8 mt-3" style={{ marginLeft: '-15px' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                        <div className="subheader-detail color-gray mt-5">Kemasan</div>
                                        <div className="sub-detail color-gray col-md-8 mt-3" style={{ marginLeft: '-15px' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                        <div className="subheader-detail color-gray mt-5">Segmentasi</div>
                                        <div className="sub-detail color-gray col-md-8 mt-3" style={{ marginLeft: '-15px' }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </div>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center mb-5">
                                    <div className="subheader-detail color-gray mt-5">Produk Sejenis</div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="color-pink circle-icon-5">
                                        &#x276E;
                                    </div>
                                    <div className="card card-rounded col-md-3 set-padding-0 m-3 mb-5">
                                        <div className="img-bg-2" style={{ backgroundImage: 'url("../src/img/drugs.jpg")' }} />
                                        <div className="card-body">
                                            <div className="ml-4">
                                                <div className="poppins-bold mb-3">Drugs</div>
                                                <p className="sub-detail">Per Strip</p>
                                                <p className="sub-detail">Rp. 13.000,-</p>
                                                <div className="row">
                                                    <div className="col-md-1">
                                                        <div className="circle-icon-1">-</div>
                                                    </div>
                                                    <div className="col-md-1 ml-3">
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
                                    <div className="card card-rounded col-md-3 set-padding-0 m-3 mb-5">
                                        <div className="img-bg-2" style={{ backgroundImage: 'url("../src/img/drugs.jpg")' }} />
                                        <div className="card-body">
                                            <div className="ml-4">
                                                <div className="poppins-bold mb-3">Drugs</div>
                                                <p className="sub-detail">Per Strip</p>
                                                <p className="sub-detail">Rp. 13.000,-</p>
                                                <div className="row">
                                                    <div className="col-md-1">
                                                        <div className="circle-icon-1">-</div>
                                                    </div>
                                                    <div className="col-md-1 ml-3">
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
                                    <div className="card card-rounded col-md-3 set-padding-0 m-3 mb-5">
                                        <div className="img-bg-2" style={{ backgroundImage: 'url("../src/img/drugs.jpg")' }} />
                                        <div className="card-body">
                                            <div className="ml-4">
                                                <div className="poppins-bold mb-3">Drugs</div>
                                                <p className="sub-detail">Per Strip</p>
                                                <p className="sub-detail">Rp. 13.000,-</p>
                                                <div className="row">
                                                    <div className="col-md-1">
                                                        <div className="circle-icon-1">-</div>
                                                    </div>
                                                    <div className="col-md-1 ml-3">
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
                                    <div className="color-pink circle-icon-6">
                                        &#x276F;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <Footer />
            </div>
        );
    }

    state = {
        dataDrugs: []
    };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/lovanto/deDoc/master/src/data/sourceSick.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dataDrugs: data });
                console.log(data);
            })
            .catch(console.log)
    }
};

export default Medicine;