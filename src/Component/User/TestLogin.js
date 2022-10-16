import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import appTest from "../Firebase/Firebase8";

const TestLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const googleSign = () => {
    firebase
      .auth(appTest)
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="container">
      <button onClick={googleSign} className="btn btn-info">
        TestLogin
      </button>
    </div>
  );
};

export default TestLogin;
