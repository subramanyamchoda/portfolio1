import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-light px-4 py-4 border rounded ">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-8">
            <h1 className="text-center text-danger text">Subbu</h1>
            <ul className="nav justify-content-center mt-3 px-4 text">
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Contact</a>
              </li>
            </ul>
           < div className='px-4 py-1'>
                <a className="btn btn-primary btn-floating m-3" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
                  <i className="fab fa-instagram fa-beat"></i>
                </a>
                <a className="btn btn-primary btn-floating m-3" style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/in/subramanyam-choda-29238a305/" role="button">
                  <i className="fab fa-linkedin-in fa-beat"></i>
                </a>
                <a className="btn btn-primary btn-floating m-3" style={{ backgroundColor: '#333333' }} href="https://github.com/subramanyamchoda" role="button">
                  <i className="fab fa-github fa-beat"></i>
                </a>
              </div>
              <h1 className="text-center text-dark text">Copyright <i className="fa-regular fa-copyright fa-beat"> </i> 2024  All rights reserved I This template is made with <i className="fa-regular fa-heart fa-beat"></i> by Subbu</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
