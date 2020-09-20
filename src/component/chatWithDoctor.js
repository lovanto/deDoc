import React, { Component } from 'react';
import Footer from './footer.js';

class Blog extends Component {
    render() {
        return (
            <div className="background-landing" >
                <article className="awdaw" style={{ minHeight: '620px', marginLeft: '110px', background: '#ffffff' }}>
                    <div className="row" style={{marginRight: '0px'}}>
                        <div className="dwsefgdwsefg" id="contactArea">
                            <div className="d-flex justify-content-start adawd" style={{ border: '1px solid #ebebeb', borderBottom: '0px solid #ebebeb'}}>
                                <button className="btn inSearchIcon pl-3"><img className="icon-set-5 adawdawt" src="../src/img/icons/search.svg" alt="" /></button>
                                <input id="searchChatContact" className="form-control form-style searchChatsearchChat col-md-11 searchChat idkwhat" type="text" placeholder="Search" />
                            </div>
                            <div className="adwadadwdwdawd" style={{ border: '1px solid #ebebeb', minHeight: '535px', maxHeight: '535px', overflowY: 'scroll' }}>
                                <div className="col-md-12 contactList row" onClick={this.showChat}>
                                    <div className="mini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 awsfawdwa sub-detail mt-2 ml-3">
                                        Dr. Michele Angeloo S.pd
                                        <div className="mt-3 label">saya ingin membicarakan....</div>
                                    </div>
                                    <div className="label mt-2 ml-3 wefrgt">3:15 PM</div>
                                </div>
                                <div className="col-md-12 contactList row" onClick={this.showChat}>
                                    <div className="mini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 awsfawdwa sub-detail mt-2 ml-3">
                                        Dr. Michele Angeloo S.pd
                                        <div className="mt-3 label">saya ingin membicarakan....</div>
                                    </div>
                                    <div className="label mt-2 ml-3 wefrgt">3:15 PM</div>
                                </div>
                                <div className="col-md-12 contactList row" onClick={this.showChat}>
                                    <div className="mini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 awsfawdwa sub-detail mt-2 ml-3">
                                        Dr. Michele Angeloo S.pd
                                        <div className="mt-3 label">saya ingin membicarakan....</div>
                                    </div>
                                    <div className="label mt-2 ml-3 wefrgt">3:15 PM</div>
                                </div>
                                <div className="col-md-12 contactList row" onClick={this.showChat}>
                                    <div className="mini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 awsfawdwa sub-detail mt-2 ml-3">
                                        Dr. Michele Angeloo S.pd
                                        <div className="mt-3 label">saya ingin membicarakan....</div>
                                    </div>
                                    <div className="label mt-2 ml-3 wefrgt">3:15 PM</div>
                                </div>
                                <div className="col-md-12 contactList row" onClick={this.showChat}>
                                    <div className="mini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 awsfawdwa sub-detail mt-2 ml-3">
                                        Dr. Michele Angeloo S.pd
                                        <div className="mt-3 label">saya ingin membicarakan....</div>
                                    </div>
                                    <div className="label mt-2 ml-3 wefrgt">3:15 PM</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8" id="chatArea" style={{ marginLeft: '-33px', zIndex: '100' }}>
                            <div className="header-chat" id="chatNow" style={{ border: '1px solid #ebebeb'}}>
                                <div className="col-md-12 row">
                                    <div id="backbtn" style={{marginRight: '2rem', marginTop: '1rem'}} onClick={this.closeChat}> <img src="../src/img/icons/back.svg" alt=""/> </div>
                                    <div className="supermini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="col-md-6 awsfawdwa2 label mt-1 ml-2" style={{ color: 'black' }}>
                                        <div>Dr. Michele Angeloo S.pd</div>
                                        <div className="mt-1 label">Online</div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-area" id="chatNow2" style={{ border: '1px solid #ebebeb', minHeight: '390px', zIndex: '100', background: 'white' }}>
                                <div className="row d-flex justify-content-start">
                                    <div className="supermini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="bubble-chat" style={{ maxWidth: '750px' }}>Ada yang bisa saya bantu?</div>
                                    <div className="label ml-3 adwadawd mb-3" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                </div>
                                <div className="row d-flex justify-content-end">
                                    <div className="label mr-3 awdwada" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                    <div className="bubble-chat-2" style={{ maxWidth: '750px' }}>Jadi begini pak...</div>
                                    <div className="supermini-img-doctor-2" style={{ backgroundImage: 'url("../src/img/people1.jpg")' }}></div>
                                    <div className="label mr-3 awdwada2" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                </div>
                                <div className="row d-flex justify-content-end">
                                    <div className="label mr-3 awdwada" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                    <div className="bubble-chat-2" style={{ maxWidth: '750px' }}>Akhir akhir ini saya sulit tidur karena tugas dari dosen saya banyak sekali</div>
                                    <div className="supermini-img-doctor-2" style={{ backgroundImage: 'url("../src/img/people1.jpg")' }}></div>
                                    <div className="label mr-3 awdwada2" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                </div>
                                <div className="row d-flex justify-content-end">
                                    <div className="label mr-3 awdwada" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                    <div className="bubble-chat-2" style={{ maxWidth: '750px' }}>Apakah bapak punya saran agar saya bisa tidur lebih cepat?</div>
                                    <div className="supermini-img-doctor-2" style={{ backgroundImage: 'url("../src/img/people1.jpg")' }}></div>
                                    <div className="label mr-3 awdwada2" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                </div>
                                <div className="row d-flex justify-content-start">
                                    <div className="supermini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="bubble-chat" style={{ maxWidth: '750px' }}>Menurut saya ade bisa menggunakan obat tidur..</div>
                                    <div className="label ml-3 adwadawd mb-3" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                </div>
                                <div className="row d-flex justify-content-start">
                                    <div className="supermini-img-doctor" style={{ backgroundImage: 'url("../src/img/people2.jpg")' }}></div>
                                    <div className="bubble-chat" style={{ maxWidth: '750px' }}>Tapi jangan sampai ketergantungan ya...</div>
                                    <div className="label ml-3 adwadawd mb-3" style={{ marginTop: '2.2rem' }}>3:15 PM</div>
                                </div>
                            </div>
                            <div className="footer-chat" id="chatNow3">
                                <div className="col-md-12 row">
                                    <div className="d-flex justify-content-start col-md-12">
                                        <input id="typeArea" className="form-control typingChat pl-5 idkwhat col-md-8" type="text" placeholder="Type Something" />
                                        <div className="d-flex justify-content-end">
                                            <img className="ml-2 mr-2 adawdawdad" src="../src/img/icons/pink-attachment.svg" alt="" />
                                            <img className="ml-2 mr-2 adawdawdad" src="../src/img/icons/pink-smile.svg" alt="" />
                                            <button className="btn btn-primary rounded-0 custom-size-1 ml-3 mt-2" id="adawd"> <label id="adwadwadaadawda"> Send </label><img className="ml-1 mr-1" src="../src/img/icons/send.svg" alt="" height="15px" /></button>
                                        </div>
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

    showChat(){
        document.getElementById("chatNow").style.display = "block";
        document.getElementById("chatNow2").style.display = "block";
        document.getElementById("chatNow3").style.display = "block";
        document.getElementById("contactArea").style.display = "none";
    }

    closeChat(){
        document.getElementById("chatNow").style.display = "none";
        document.getElementById("chatNow2").style.display = "none";
        document.getElementById("chatNow3").style.display = "none";
        document.getElementById("contactArea").style.display = "block";
    }

};

export default Blog;