import React from 'react';
import {
    Link
} from "react-router-dom";

const DrugsOption = ({ dataDrug }) => {
    return (
        <div className="row d-flex justify-content-center mb-5">
            {dataDrug.map((drug) => (
                <div key={drug.id}>
                    <Link to="medicineList"><div className="circle-btn mr-4 ml-4" style={{backgroundImage: 'url("'+ drug.img +'")'}}></div></Link>
                    <div className="text-center mt-3 mb-5 content">{drug.name}</div>
                </div>
            ))}
        </div>
    );
};

export default DrugsOption;