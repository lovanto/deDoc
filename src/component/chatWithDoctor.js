import React, { Component } from 'react';
import Footer from './footer.js';

class Blog extends Component {
    render() {
        return (
            <div className="background-landing" >
                <article className="mb-5" style={{ minHeight: '620px', marginLeft: '110px', background: '#ffffff' }}>
                    <div className="row" style={{ marginRight: '10px' }}>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-center">
                                <button className="btn inSearchIcon"><img className="icon-set-5" src="../src/img/icons/search.svg" alt="" /></button>
                                <input id="searchChatContact" className="form-control form-style col-md-11 searchChat idkwhat" type="text" placeholder="Search" />
                            </div>
                            <div style={{ border: '1px solid #F8F8F8', minHeight: '537px', maxHeight: '537px', overflowY: 'scroll' }}>
                                <div className="col-md-12 contactList row">
                                    <div className="mini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 sub-detail mt-2 ml-3">
                                        Dr. Michele Angeloo S.pd
                                        <div className="mt-3 label">saya ingin membicarakan....</div>
                                    </div>
                                    <div className="col-md-3 label mt-2 ml-3">3:15 PM</div>
                                </div>
                                <div className="col-md-12 contactList row">
                                    <div className="mini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 sub-detail mt-2 ml-3">
                                        Dr. Michele Angeloo S.pd
                                        <div className="mt-3 label">saya ingin membicarakan....</div>
                                    </div>
                                    <div className="col-md-3 label mt-2 ml-3">3:15 PM</div>
                                </div>
                                <div className="col-md-12 contactList row">
                                    <div className="mini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 sub-detail mt-2 ml-3">
                                        Dr. Michele Angeloo S.pd
                                        <div className="mt-3 label">saya ingin membicarakan....</div>
                                    </div>
                                    <div className="col-md-3 label mt-2 ml-3">3:15 PM</div>
                                </div>
                                <div className="col-md-12 contactList row">
                                    <div className="mini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 sub-detail mt-2 ml-3">
                                        Dr. Michele Angeloo S.pd
                                        <div className="mt-3 label">saya ingin membicarakan....</div>
                                    </div>
                                    <div className="col-md-3 label mt-2 ml-3">3:15 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8" style={{ marginLeft: '-33px', zIndex: '100' }}>
                            <div className="header-chat">
                                <div className="col-md-12 row">
                                    <div className="supermini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 label mt-1 ml-3" style={{ color: 'black' }}>
                                        Dr. Michele Angeloo S.pd
                                        <div className="mt-1 label">Online</div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-area" style={{ border: '1px solid #F8F8F8', minHeight: '390px', zIndex: '100', background: 'white' }}>
                                <div className="row d-flex justify-content-start">
                                    <div className="supermini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="bubble-chat" style={{ maxWidth: '750px' }}>Ada yang bisa saya bantu?</div>
                                    <div className="label ml-3" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                </div>
                                <div className="row d-flex justify-content-end">
                                    <div className="label mr-3" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                    <div className="bubble-chat-2" style={{ maxWidth: '750px' }}>Jadi begini pak...</div>
                                    <div className="supermini-img-doctor-2" style={{ backgroundImage: 'url("../src/img/people1.jpg")' }}></div>
                                </div>
                                <div className="row d-flex justify-content-end">
                                    <div className="label mr-3" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                    <div className="bubble-chat-2" style={{ maxWidth: '750px' }}>Akhir akhir ini saya sulit tidur karena tugas dari dosen saya banyak sekali</div>
                                    <div className="supermini-img-doctor-2" style={{ backgroundImage: 'url("../src/img/people1.jpg")' }}></div>
                                </div>
                                <div className="row d-flex justify-content-end">
                                    <div className="label mr-3" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                    <div className="bubble-chat-2" style={{ maxWidth: '750px' }}>Apakah bapak punya saran agar saya bisa tidur lebih cepat?</div>
                                    <div className="supermini-img-doctor-2" style={{ backgroundImage: 'url("../src/img/people1.jpg")' }}></div>
                                </div>
                                <div className="row d-flex justify-content-start">
                                    <div className="supermini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="bubble-chat" style={{ maxWidth: '750px' }}>Menurut saya ade bisa menggunakan obat tidur..</div>
                                    <div className="label ml-3" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                </div>
                                <div className="row d-flex justify-content-start">
                                    <div className="supermini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="bubble-chat" style={{ maxWidth: '750px' }}>Tapi jangan sampai ketergantungan ya...</div>
                                    <div className="label ml-3" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                </div>
                                <div className="row d-flex justify-content-start">
                                    <div className="supermini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="bubble-chat" style={{ maxWidth: '750px' }}>Sebentar, saya tulis dulu resepnya</div>
                                    <div className="label ml-3" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                </div>
                            </div>
                            <div className="footer-chat">
                                <div className="col-md-12 row">
                                    <div className="d-flex justify-content-start col-md-12">
                                        <input id="typeArea" className="form-control typingChat idkwhat col-md-9" type="text" placeholder="Type Something"/>
                                        <img className="ml-3 mr-3" src="../src/img/icons/pink-attachment.svg" alt=""/>
                                        <img className="ml-3 mr-3" src="../src/img/icons/pink-smile.svg" alt=""/>
                                        <button className="btn btn-primary rounded-0 custom-size-1 ml-3 mt-2"> Send <img className="ml-1" src="../src/img/icons/send.svg" alt="" height="15px"/></button>
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
};

export default Blog;