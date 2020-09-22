import React, { Component } from 'react';

import DrugOption from './drugsOption.js';

class Medicine extends Component {
    render() {
        return (
            <div className="background-landing" >
                <article>
                    <div className="col-md-12 text-center banner-medic">
                        <div className="header animate__animated animate__fadeInLeft">Pilih Obat Sesuai Kategori</div>
                        <div className="sub-header animate__animated animate__fadeInRight">Pilih Obat Sesuai Kategori</div>
                    </div>
                    <div className="d-flex justify-content-center mb-5 animate__animated animate__fadeInUp">
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
                    <div className="d-flex justify-content-center mb-5 pb-5 animate__animated animate__fadeInUp">
                        <div className="col-md-8">
                            <div className="card card-rounded">
                                <div className="card-body m-5 p-5">
                                    <div className="text-left subheader-detail min-l-1">Penjelasan</div><br />
                                    <div className="row d-flex justify-content-center col-md-11 content">
                                        1.  Kami telah bekerja sama dengan perusahaan penyuplai obat-obatan yang telah terverifikasi. <br /><br />
                                        2.  Obat yang kami jual, tidak boleh dipakai SEMBARANGAN dan harus sesuai dengan dosisnya. <br /><br />
                                        3.  Tanyakan terlebih dahulu kepada Dokter yang terkait perihal Obat apa yang sesuai untuk
                                        kebutuhan medis anda. <br/><br/>
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
        dataDrugs: []
    };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/lovanto/deDoc/master/src/data/sourceSick.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dataDrugs: data });
            })
            .catch(console.log)
    }
};

export default Medicine;