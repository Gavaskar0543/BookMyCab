import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light p-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>&copy; 2023 BookMyCab. All rights reserved.</p>
                    </div>
                   
                    <div className="col-12 col-md-6 text-end">
                        <div>
                        <p className='fs-6 fw-semibold'>Follow Us</p>
                        </div>
                        <a href="#"><i className="fab fa-facebook-f fa-2x p-1 text-light"></i></a>
                        <a href="#"><i className="fab fa-twitter fa-2x p-1 text-light"></i></a>
                        <a href="#"><i className="fab fa-instagram fa-2x p-1 text-light"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in fa-2x p-1 text-light"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
