import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [home, setHome] = useState(true);
  const [winner, setWinner] = useState(false);
  const [idea, setIdea] = useState(false);
  const [contact, setContact] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleActive = (data) => {
    if (data === "setHome") {
      setHome(true);
      setWinner(false);
      setIdea(false);
      setContact(false);
      setAdmin(false);
    }
    if (data === "setWinner") {
      setHome(false);
      setWinner(true);
      setIdea(false);
      setContact(false);
      setAdmin(false);
    }
    if (data === "setIdea") {
      setHome(false);
      setWinner(false);
      setIdea(true);
      setContact(false);
      setAdmin(false);
    }
    if (data === "setContact") {
      setHome(false);
      setWinner(false);
      setIdea(false);
      setContact(true);
      setAdmin(false);
    }
    if (data === "setAdmin") {
      setHome(false);
      setWinner(false);
      setIdea(false);
      setContact(false);
      setAdmin(true);
    }
    //console.log(home, winner, idea, contact, admin);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbarBg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            <img src="/image/logo.jpeg" className="img-fluid" alt="" />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    home
                      ? "nav-link LinkColor activeLink"
                      : "nav-link LinkColor"
                  }
                  aria-current="page"
                  onClick={() => handleActive("setHome")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/winner-prize"
                  className={
                    winner
                      ? "nav-link LinkColor activeLink"
                      : "nav-link LinkColor"
                  }
                  onClick={() => handleActive("setWinner")}
                >
                  Winners
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="own-idea"
                  className={
                    idea
                      ? "nav-link LinkColor activeLink"
                      : "nav-link LinkColor"
                  }
                  onClick={() => handleActive("setIdea")}
                >
                  Idea
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link
                  to="/news"
                  className={
                    contact
                      ? "nav-link LinkColor activeLink"
                      : "nav-link LinkColor"
                  }
                  onClick={() => handleActive("setContact")}
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/private"
                  className={
                    admin
                      ? "nav-link LinkColor activeLink"
                      : "nav-link LinkColor"
                  }
                  onClick={() => handleActive("setAdmin")}
                >
                  Private
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
