/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

//component
import Home from "./component/home";
import { BiSolidLogIn } from "react-icons/bi";
import { MdHome } from "react-icons/md";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            {" "}
            Codigram
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  {" "}
                  <MdHome class="me-1" />
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  {" "}
                  Posting
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  {" "}
                  User
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  {" "}
                  <BiSolidLogIn class="me-1" />
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Home></Home>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
