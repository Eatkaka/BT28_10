
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export default function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbar-header">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >
                  Recipe Book
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  <Link to="/recipes" >Recipes</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  <Link to="/shopping-list">Shopping List</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}