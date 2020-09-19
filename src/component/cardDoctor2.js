import React from 'react';
import {
    Link
} from "react-router-dom";

const CardDoctor = ({ dataDoctor }) => {
    return (
        <div className="col-md-9 row d-flex justify-content-start ml-5 pl-5">
            {dataDoctor.map((doctor) => (
                <div className="card card-doctor col-md-5 mr-4 ml-4 mb-5 p-5">
                    <div className="row">
                        <div className="img-doctor" style={{ backgroundImage: 'url("' + doctor.img + '")' }}>
                            <div className={'icon-' + doctor.status}></div>
                        </div>
                        <div className="col-md-8 m-2">
                            <div className="header-label ml-2 mr-3 mb-3">{doctor.name}</div>
                            <div className="header-label ml-2">{doctor.doctor}</div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-1"><img src="../src/img/icons/pink_like.svg" alt="" /></div>
                        <label className="col-md-2 ml-3 mt-2 label">{doctor.percentase}</label>
                        <div className="col-md-7"><Link className="btn btn-primary" to="/">Chat Now</Link></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardDoctor ;