import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

import CardDoctor from './cardDoctor.js';
import DoctorOption from './doctorOption.js';

class Chat extends Component {
    render() {
        return (
            <div className="background-landing" >
                <article>
                    <div className="col-md-12 text-center banner-doctor">
                        <div className="header animate__animated animate__fadeInLeft">Chat dengan dokter terpercaya</div>
                        <div className="sub-header awd animate__animated animate__fadeInRight">Pilih Dokter sesuai dengan kebutuhan anda</div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 ml-3 mr-3 animate__animated animate__fadeInUp">
                        <input className="form-control form-style col-md-6 searchBlog" type="text" placeholder="Search for articles by title and category" />
                        <Link to="/findDoctor" className="btn whiteButton setSearch"><img className="icon-set-3 mt-set" src="../src/img/icons/search.svg" alt="" /><label id="searchText" style={{ marginTop: '13px' }}>Search</label></Link>
                    </div>
                    <div className="d-flex justify-content-center animate__animated animate__fadeInUp">
                        <CardDoctor dataDoctor={this.state.dataDoctor} />
                    </div>
                    <div className="container height-set-1 mb-5 marb animate__animated animate__fadeInLeft" style={{ marginTop: '-125px' }}>
                        <div className="col-md-12 text-center banner-medic animate__animated animate__fadeInRight">
                            <div className="header2">Pilih dokter yang sesuai <br /> dengan kebutuhan medis anda</div>
                            <div className="sub-header2 mt-4">Pilih Dokter sesuai dengan diagnosa penyakit anda</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 animate__animated animate__fadeInUp">
                        <div className="col-md-8">
                            <div className="card card-rounded">
                                <div className="card-body">
                                    <div className="row mr-4 ml-4 mt-3 mb-3 d-flex justify-content-center">
                                        <DoctorOption dataDrug={this.state.dataDrugs} />
                                    </div>
                                </div>
                            </div>
                        </div>
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
        dataDoctor: [],
        dataDrugs: []
    };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/lovanto/deDoc/master/src/data/sourceDoctor.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dataDoctor: data });
            })
            .catch(console.log)

        fetch('https://raw.githubusercontent.com/lovanto/deDoc/master/src/data/sourceTypeDoctor.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dataDrugs: data });
            })
            .catch(console.log)
    }
};

export default Chat;