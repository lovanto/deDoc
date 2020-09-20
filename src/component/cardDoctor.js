import React from 'react';
import {
    Link
} from "react-router-dom";

const CardDoctor = ({ dataDoctor }) => {
    return (
        <div className="col-md-9 row d-flex justify-content-center">
            {dataDoctor.map((doctor) => (
                <div className="card card-doctor col-md-5 mr-4 ml-4 mb-5 p-5">
                    <div className="row">
                        <div className="img-doctor" style={{ backgroundImage: 'url("' + doctor.img + '")' }}>
                            <div className={'icon-' + doctor.status}></div>
                        </div>
                        <div className="col-md-7 m-2 width-set">
                            <div className="header-label mb-3">{doctor.name}</div>
                            <div className="header-label">{doctor.doctor}</div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="ml-2"><img src="../src/img/icons/pink_like.svg" alt="" /></div>
                        <label className="ml-3 mt-2 label" style={{ width: '50px' }}>{doctor.percentase}</label>
                        <div><Link className="btn btn-primary" to="/chatDoctor">Chat Now</Link></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardDoctor;