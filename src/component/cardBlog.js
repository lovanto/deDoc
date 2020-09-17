import React from 'react';
import {
    Link
} from "react-router-dom";

const CardBlog = ({ dataArticles }) => {
    return (
        <div className="row d-flex justify-content-center mb-5">
            {dataArticles.map((articles) => (
                <div className="card col-md-4 set-padding-0 m-3">
                    <div className="img-bg" style={{ backgroundImage: 'url("' + articles.img + '")' }} />
                    <div className="card-body">
                        <p className="card-text font-weight-bold category">{articles.category} | {articles.date}</p>
                        <h5 className="card-title">{articles.title}</h5>
                        <p className="card-text">{articles.description}</p>
                        <div className="d-flex font-weight-bold justify-content-end">
                            <Link to={`/detailpost/` + articles.url} className="">Read more &gt;&gt;</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardBlog;