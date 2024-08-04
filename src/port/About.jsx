import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper.js
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = ({about}) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="text-center my-4 py-4  text-danger textlg"><u>About</u></h1>
      <div className="container px-1 py-4"> {/* Removed padding */}
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center">
            <div className="img">
              <img src={about.subbu} className="img-fluid" height="200px" width="300px" alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-8 text-md-left mb-3 mb-md-0 px-2"> {/* Adjusted alignment and margin */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-5 border rounded mb-3 mb-md-2 mx-1"> {/* Adjusted margin */}
                <div className="matter px-3 py-4"> {/* Adjusted padding */}
                  <p className="text-center">
                    <img src={about.quality} width="30" alt="Quality Icon" />
                  </p>
                  <h5 className="text-center">Experience</h5>
                  <p className="text-center">4+ years<br />Full Stack Developer</p>
                </div>
              </div>
              <div className="col-12 col-md-5 border rounded mb-3 mb-md-2 ms-md-3 mx-1"> {/* Adjusted margin */}
                <div className="matter px-3 py-4"> {/* Adjusted padding */}
                  <p className="text-center">
                    <i className='fas fa-graduation-cap' style={{ fontSize: '24px' }}></i>
                  </p>
                  <h5 className="text-center">Education</h5>
                  <p className="text-center">B.Tech<br />QIS College of Engineering</p>
                </div>
              </div>
            </div>
            <p className="mt-3"> {/* Adjusted margin */}
              Hello everyone! This is Subramanyam from Ongole. I'm a MERN Stack Developer with three years of experience in MERN stack development and UI development. I have worked on several projects using this stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
