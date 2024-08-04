import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import { skills } from './img';

const Skills = ({Skills}) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="text-center px-1 py-4  text-danger textlg"><u>Skills</u></h1>
      <div className="container px-1 py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 mb-4 mb-md-0 mx-2 border rounded px-4 py-4">
            <h4 className="text-center text"><u>Frontend development</u></h4><br />
            <div className="row justify-content-between center-container">
              <div className="col-12 col-md-5 mb-4 mb-md-0 mx-2">
                <div className="matter custom-padding px-2 py-2">
                  <img src={skills.html} width="40px" className="img-center" alt="HTML logo" /><br />
                  <span className="text">HTML</span>
                  <p>Experienced</p>
                  <br />
                  <img src={skills.css} width="40px" className="img-center" alt="CSS logo" /><br />
                  <span className="text">CSS</span>
                  <p>Experienced</p>
                  <br />
                  <img src={skills.js} width="40px" className="img-center" alt="JavaScript logo" /><br />
                  <span className="text">JavaScript</span>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="col-12 col-md-5 mb-4 mb-md-0 mx-2">
                <div className="matter custom-padding px-2 py-2">
                  <img src={skills.boot} width="40px" className="img-center" alt="Bootstrap logo" /><br />
                  <span className="text">Bootstrap</span>
                  <p>Intermediate</p>
                  <br />
                  <img src={skills.react} width="40px" className="img-center" alt="React logo" /><br />
                  <span className="text">React.js</span>
                  <p>Beginner</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 mb-4 mb-md-0 mx-2 border rounded px-4 py-4">
            <h4 className="text-center text"><u>Backend development</u></h4><br />
            <div className="row justify-content-between center-container">
              <div className="col-12 col-md-5 mb-4 mb-md-0 mx-2">
                <div className="matter custom-padding px-2 py-2">
                  <img src={skills.java} width="40px" className="img-center" alt="Java logo" /><br />
                  <span className="text">Java</span>
                  <p>Beginner</p>
                  <br />
                  <img src={skills.node} width="40px" className="img-center" alt="Express logo" /><br />
                  <span className="text">Express</span>
                  <p>Beginner</p>
                  <br />
                  <img src={skills.php} width="40px" className="img-center" alt="PHP logo" /><br />
                  <span className="text">PHP</span>
                  <p>Beginner</p>
                </div>
              </div>
              <div className="col-12 col-md-5 mb-4 mb-md-0 mx-2">
                <div className="matter custom-padding px-2 py-2">
                  <img src={skills.mysql} width="40px" className="img-center" alt="MySQL logo" /><br />
                  <span className="text">MySQL</span>
                  <p>Beginner</p>
                  <br />
                  <img src={skills.mongo} width="110px" className="img-center" alt="MongoDB logo" /><br />
                  <span className="text">MongoDB</span>
                  <p>Beginner</p>
                  <br />
                  <img src={skills.github} width="40px" className="img-center" alt="GitHub logo" /><br />
                  <span className="text">GitHub</span>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
