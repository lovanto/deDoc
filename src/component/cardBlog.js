import React from 'react';

const CardBlog = ({ category = "Category", date = "19-09-2020", title = "Title Post", description = "Ini adalah bagian dari deskripsi singkat tentang postingan ini.", img = "../../src/img/dummy.jpg", link = "" }) => {
    return (
        <div className="card col-md-3 set-padding-0 m-3">
            <div className="img-bg" style={{backgroundImage: 'url("'+ img +'")'}}/>
            <div className="card-body">
                <p className="card-text font-weight-bold category">{category} | {date}</p>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-center">
                    <a href={`/` + link} className="btn btn-info">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default CardBlog;