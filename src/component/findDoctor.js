import React, { Component } from 'react';

import CardDoctor from './cardDoctor2.js';

class Chat extends Component {
    render() {
        return (
            <div className="background-landing" >
                <article>
                    <div className="col-md-12 text-center banner-doctor animate__animated animate__fadeInLeft">
                        <div className="header">Chat dengan dokter terpercaya</div>
                        <div className="sub-header awd">Pilih Dokter sesuai dengan kebutuhan anda</div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 ml-3 mr-3 animate__animated animate__fadeInRight">
                        <input className="form-control form-style col-md-6 searchBlog" type="text" placeholder="Search for articles by title and category" />
                        <button className="btn whiteButton setSearch"><img className="icon-set-3" src="../src/img/icons/search.svg" alt="" /><label id="searchText">Search</label></button>
                    </div>
                    <div className="d-flex justify-content-center animate__animated animate__fadeInUp">
                        <CardDoctor dataDoctor={this.state.dataDoctor} />
                    </div>
                    <div className="d-flex justify-content-center animate__animated animate__fadeInUp">
                        <CardDoctor dataDoctor={this.state.dataDoctor} />
                    </div>
                    <div className="col-md-12 d-flex justify-content-center row mb-5 pb-5 poppins-bold animate__animated animate__fadeInUp">
                        <p className="m-2 color-pink">1</p> <p className="m-2">2</p> <p className="m-2">3</p>
                    </div>
                    <div className="d-flex justify-content-center mb-5 pb-5 animate__animated animate__fadeInUp">
                        <div className="col-md-8">
                            <div className="card card-rounded">
                                <div className="card-body m-5 p-5">
                                    <div className="text-left subheader-detail min-l-1">Ringkasan</div><br />
                                    <div className="row d-flex justify-content-center col-md-11 content">
                                        1.  Kami memilih Dokter terbaik yang siap memberikanmu penjelasan yang akurat mengenai
                                        penyakit yang Anda derita dan juga memberikan saran. <br /><br />
                                        2.  Kami juga menjamin kerahasiaan Anda 100%, dan tidak akan memberitahu kepada siapapun
                                        mengenai penyakit yang diderita. <br /><br />
                                        3.  Dokter - dokter kami akan melayani mu dengan cepat, dengan membalas chatmu dengan
                                        kurung waktu 1 menit. <br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    state = {
        dataDoctor: []
    };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/lovanto/deDoc/master/src/data/sourceDoctor.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dataDoctor: data });
            })
            .catch(console.log)
    }
};

export default Chat;