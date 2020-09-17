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