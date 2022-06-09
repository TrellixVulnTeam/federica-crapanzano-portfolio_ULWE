import React from "react";
import "./Header.scss";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a
              href="/"
              className="logo py-5 d-flex align-items-center justify-content-center flex-column"
            >
              <h1>Federica</h1>
              <h1> Crapanzano & co.</h1>
            </a>
          </div>

          <div className="col-12">
            <nav className="navbar">
              <ul>
                <li>
                  <a href="/">
                    <span>Homepage.</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>Portfolio.</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>About.</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>Contacts.</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
