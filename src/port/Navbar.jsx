import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text px-4 py-1 fixed-top bg-light container border rounded">
      <div className="d-flex w-100 justify-content-between align-items-center ">
        <a className="navbar-brand text-danger fs-4 textlg" href="index.jsp">Subbu</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse px-4" id="navbarNav">
          <ul className="navbar-nav ms-auto">
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
        </div>
      
    </nav>
  );
}

export default Navbar;
