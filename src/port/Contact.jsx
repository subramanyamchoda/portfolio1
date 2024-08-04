import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { contact } from './img';

const Contact = ({Contact}) => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="container py-1 px-1">
        <div className="row align-items-center text-center">
          <div className="col-12 col-md-7 mb-1 mb-md-0 mx-auto">
            <div className="matter">
              <p className='text-center text'>Get in Touch</p>
              <p className='text-center text'>Click on Icons</p>
              <h1 className="text-center text-danger text-1   text-lg">Contact Me</h1><br />
              
              <button className='btn-light border'>
                <a className="btn  btn-floating m-1"href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVwxSDrLNCrvFFfFhHzGrkdNJwFGZmTWNFdtfWnzkmlMDDDHVcQjbTTRfpTNhFvPKSjmg" role="button" aria-label="LinkedIn Profile">
                 <img src={contact.gmail} alt="" width="30px" />
                </a>
                <span> </span>Email : subramanyamchoda50@gmail.com
              </button><br /><br />
              
             
              
              <button className='btn-light border'>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/in/subramanyam-choda-29238a305/" role="button" aria-label="LinkedIn Profile">
                  <i className="fab fa-linkedin-in fa-beat"></i>
                </a>
                <span> </span>Linked In : subramanyam choda
              </button><br /><br />
              
              <button className='btn-light border'>
                <a className="btn btn-primary btn-floating m-0" style={{ backgroundColor: '#333333' }} href="https://github.com/subramanyamchoda" role="button" aria-label="GitHub Profile">
                  <i className="fab fa-github fa-beat"></i>
                </a>
                <span> </span>Github : subramanyam choda
              </button><br /><br />
              
              <button className='btn-light border'>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: 'white' }}  role="button" aria-label="Phone">
                  <i className="fa-solid fa-phone fa-beat" style={{ color: '#0082ca' }}></i>
                </a>
                <span> </span>Contact : 8919348949
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
