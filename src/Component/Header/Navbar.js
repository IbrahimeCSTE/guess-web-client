import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import appTest from "../Firebase/Firebase8";

const Navbar = () => {
  const [loginUser, setLoginUser] = useState({});
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("User"));
    if (userData) {
      setLoginUser(userData.newUser);
    }
  }, []);
  // console.log(loginUser.email);
  const userLogout = () => {
    firebase
      .auth(appTest)
      .signOut()
      .then(() => {
        // Sign-out successful.
        toast("লগ আউট সম্পন্ন হয়েছে।");
        window.location.href = "/";
        localStorage.removeItem("User");
      })
      .catch((error) => {
        // An error happened.
        toast(error.massage);
      });

    // signOut(auth)
    //   .then(() => {
    //     toast("লগ আউট সম্পন্ন হয়েছে।");
    //     window.location.href = "/";
    //     localStorage.removeItem("User");
    //   })
    //   .catch((error) => {
    //     toast(error.massage);
    //   });
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link LinkColor" aria-current="page">
                  হোম
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-link LinkColor">
                  খেলাধুলা
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/winner-prize" className="nav-link LinkColor">
                  বিজয়ী
                </Link>
              </li>
              <li className="nav-item">
                <Link to="own-idea" className="nav-link LinkColor">
                  রেজিস্ট্রেশন
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link to="/news" className="nav-link LinkColor">
                  তথ্য
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/private" className="nav-link LinkColor">
                  প্রাইভেট
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              {loginUser.email ? (
                <li className="nav-item text-end">
                  <button
                    onClick={userLogout}
                    className="btn btn-dark text-white LinkColor"
                  >
                    লগ-আউট
                  </button>
                  <ToastContainer />
                </li>
              ) : (
                <li className="nav-item text-end">
                  <Link
                    to="/user/login"
                    className="nav-link loginBtn LinkColor"
                  >
                    <button className="btn btn-dark text-white"> লগ-ইন</button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
