import React, { Component } from 'react';
import Footer from './footer.js';

import DrugOption from './drugsOption.js';

class Medicine extends Component {
    render() {
        return (
            <div className="background-landing" >
                <article>
                    <div className="col-md-12 text-center banner-medic">
                        <div className="header">Pilih Obat Sesuai Kategori</div>
                        <div className="sub-header">Pilih Obat Sesuai Kategori</div>
                    </div>
                    <div className="d-flex justify-content-center mb-5">
                        <div className="col-md-8">
                            <div className="card card-rounded">
                                <div className="card-body">
                                    <div className="row mr-4 ml-4 mt-3 mb-3 d-flex justify-content-center">
                                        <DrugOption dataDrug={this.state.dataDrugs} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 pb-5">
                        <div className="col-md-8">
                            <div className="card card-rounded">
                                <div className="card-body m-5 p-5">
                                    <div className="text-left subheader-detail min-l-1">Penjelasan</div><br />
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