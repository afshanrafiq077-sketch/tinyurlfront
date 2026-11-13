import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#0980a1", padding: "0" }}>
      <div className="container-fluid" style={{ backgroundColor: "#0980a1", color: "white" }}>

        <a className="navbar-brand text-white" href="#">
          <h1 className="text-white m-0">TINYURL</h1>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul  style={{ display: "flex", gap: "28px", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>

            <li className="nav-item">
              <Link to="/plans" style={{ color: "white", textDecoration: "none", fontSize: "22px", fontWeight: "600" }}>Plans</Link>

            </li>

            <li className="nav-item">
              <Link to="/features" style={{ color: "white", textDecoration: "none", fontSize: "22px", fontWeight: "600" }}>Features</Link>
              
            </li>

            <li className="nav-item">
              <Link to="/domains" style={{ color: "white", textDecoration: "none", fontSize: "22px", fontWeight: "600" }}>Domains</Link>
            
            </li>

            <li className="nav-item">
              <Link to="/resources" style={{ color: "white", textDecoration: "none", fontSize: "22px", fontWeight: "600" }}>Resources</Link>
              
            </li>

          </ul>

          <form className="d-flex ms-auto" role="search">
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/signup" className="btn btn-light">Sign Up</Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;