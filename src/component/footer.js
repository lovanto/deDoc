import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-3">
                            <div className="footer-title mb-5">Sitemap</div>
                            <div className="mb-5"><a className="footer-text" href="/">Home</a></div>
                            <div className="mb-5"><a className="footer-text" href="/chat">Chat Doctor</a></div>
                            <div className="mb-5"><a className="footer-text" href="/medicine">Vitamis & Medicine</a></div>
                            <div className="mb-5"><a className="footer-text" href="/find">Find Doctor</a></div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-title mb-5">Information</div>
                            <div className="mb-5"><a className="footer-text" href="/blog">Blog</a></div>
                        </div>
                        <div className="col-md-6 mt-5 mb-5">
                            <div className="d-flex justify-content-end mt-4 mb-5 pb-5">
                                <img className="mr-5" src="../src/img/icons/instagram.svg" alt="Instagram" />
                                <img className="mr-5" src="../src/img/icons/facebook.svg" alt="Facebook" />
                                <img className="mr-5" src="../src/img/icons/twitter.svg" alt="Twitter" />
                                <img src="../src/img/icons/youtube.svg" alt="Youtube" />
                            </div>
                            <div className="d-flex justify-content-end mt-5" align="left">Website by <label className="footer-title ml-2"> DeDoc</label></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;