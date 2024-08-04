import React, { useEffect } from 'react';
import Typed from 'typed.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Home = ({ home }) => {
  useEffect(() => {
    const optionsName = {
      strings: ["Subramanyam"],
      typeSpeed: 150
    };

    const optionsDeveloper = {
      strings: ["WEB Developer", "UI Designer", "React DEVELOPER"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    };

    const typedName = new Typed(".name", optionsName);
    const typedDeveloper = new Typed(".developer", optionsDeveloper);

    return () => {
      typedName.destroy();
      typedDeveloper.destroy();
    };
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="container my-5 py-4 px-4 w-100">
        <div className="row align-items-center text-center">
          <div className="col-12 col-md-7 mb-4 mb-md-0">
            <div className="matter">
              <p className="mb-1 text">Hello, I'm</p>   
              <span className="name"></span><br />
              <span className="developer"></span><br /><br />
              <button className="btn btn-outline-dark btn-custom mb-1">Resume</button><br /><br />
              <div>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
                  <i className="fab fa-instagram fa-beat"></i>
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/in/subramanyam-choda-29238a305/" role="button">
                  <i className="fab fa-linkedin-in fa-beat"></i>
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="https://github.com/subramanyamchoda" role="button">
                  <i className="fab fa-github fa-beat"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="img">
              <img src={home.subbu} className="img-fluid" alt="Subramanyam" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
