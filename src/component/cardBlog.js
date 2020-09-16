import React from 'react';

const CardBlog = ({ dataArticles, category = "Category", date = "19-09-2020", title = "Title Post", description = "This is part of a short description of this post in website DeDoc by Admin.", img = "../../src/img/dummy.jpg", link = "" }) => {
    return (
        <div className="row d-flex justify-content-center mb-5">
            {dataArticles.map((articles) => (
                <div className="card col-md-4 set-padding-0 m-3">
                    <div className="img-bg" style={{ backgroundImage: 'url("' + articles.img + '")' }} />
                    <div className="card-body">
                        <p className="card-text font-weight-bold category">{articles.category} | {articles.date}</p>
                        <h5 className="card-title">{articles.title}</h5>
                        <p className="card-text">{articles.description}</p>
                        <div className="d-flex justify-content-center">
                            <a href={`/` + link} className="btn btn-info">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardBlog;