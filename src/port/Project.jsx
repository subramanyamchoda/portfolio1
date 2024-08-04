import React from 'react';
import { project } from './img';

 
const Project = ({Project}) => {


  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
      <h1 className="text-center  py-2  text-danger textlg"><u>Projects</u></h1>
      <div className="container centered-container">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-md-3 text-center border rounded m-3 p-2"> 
            <div className="img">
              <img src={project.panda} className="img-fluid" alt="Project One" />
              <p className="text">Resturant <br /> (Table-booking)</p>
              <a className="btn btn-dark btn-floating m-1 rounded" style={{ backgroundColor: '#333333' }} href="https://github.com/subramanyamchoda/pandarestaurant" role="button">
                  Github
                </a>
                <a className="btn btn-dark btn-floating m-1 rounded" style={{ backgroundColor: '#333333' }} href="https://github.com/subramanyamchoda" role="button">
                  Demo
                </a>
            </div>
          </div>

          <div className="col-12 col-md-3 text-center border rounded m-3 p-2">
            <div className="img">
              <img src={project.academy} className="img-fluid"  alt="Project Two" />
              <p className="text">Learners Academy <br /> (online-courses)</p>
              <a className="btn btn-dark btn-floating m-1 rounded" style={{ backgroundColor: '#333333' }} href="https://github.com/subramanyamchoda/learnersacademy" role="button">
                  Github
                </a>
                <a className="btn btn-dark btn-floating m-1 rounded" style={{ backgroundColor: '#333333' }} href="https://github.com/subramanyamchoda" role="button">
                  Demo
                </a>
            </div>
          </div>

          <div className="col-12 col-md-3 text-center border rounded m-3 p-2"> 
            <div className="img">
              <img src={project.subbu} className="img-fluid" alt="Project Three" />
              <p className="text">Project Three</p>
              <a className="btn btn-dark btn-floating m-1 rounded" style={{ backgroundColor: '#333333' }} href="https://github.com/subramanyamchoda" role="button">
                  Github
                </a>
                <a className="btn btn-dark btn-floating m-1 rounded" style={{ backgroundColor: '#333333' }} href="https://github.com/subramanyamchoda" role="button">
                  Demo
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
