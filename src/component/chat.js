import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

import Footer from './footer.js';
import CardDoctor from './cardDoctor.js';
import DoctorOption from './doctorOption.js';

class Chat extends Component {
    render() {
        return (
            <div className="background-landing" >
                <article>
                    <div className="col-md-12 text-center banner-doctor">
                        <div className="header">Chat dengan dokter terpercaya</div>
                        <div className="sub-header">Pilih Dokter sesuai dengan kebutuhan anda</div>
                    </div>
                    <div className="d-flex justify-content-center mb-5">
                        <input className="form-control form-style col-md-4" type="text" placeholder="Search for articles by title and category" />
                        <Link to="/findDoctor" className="btn whiteButton setSearch"><img className="icon-set-3" src="../src/img/icons/search.svg" alt="" /><label id="searchText" style={{marginTop:'13px'}}>Search</label></Link>
                    </div>
                    <div className="d-flex justify-content-center">
                        <CardDoctor dataDoctor={this.state.dataDoctor} />
                    </div>
                    <div className="container height-set-1" style={{ marginTop: '-125px' }}>
                        <div className="col-md-12 text-center banner-medic">
                            <div className="header2">Pilih dokter yang sesuai <br /> dengan kebutuhan medis anda</div>
                            <div className="sub-header2 mt-4">Pilih Dokter sesuai dengan diagnosa penyakit anda</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-5">
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
                    <div className="d-flex justify-content-center mb-5 pb-5">
                        <div className="col-md-8">
                            <div className="card card-rounded">
                                <div className="card-body m-5 p-5">
                                    <div className="text-left subheader-detail min-l-1">Ringkasan</div><br />
                                    <div className="row d-flex justify-content-center col-md-11 content">
                                        1.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. <br /><br />
                                    2.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. <br /><br />
                                    3.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. <br /><br />
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
        dataDoctor: [],
        dataDrugs: []
    };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/lovanto/deDoc/master/src/data/sourceDoctor.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dataDoctor: data });
                console.log(data);
            })
            .catch(console.log)

        fetch('https://raw.githubusercontent.com/lovanto/deDoc/master/src/data/sourceSick.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dataDrugs: data });
                console.log(data);
            })
            .catch(console.log)
    }
};

export default Chat;