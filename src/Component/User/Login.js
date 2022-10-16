import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import appTest from "../Firebase/Firebase8";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const provider = new GoogleAuthProvider();
  const provider = new firebase.auth.GoogleAuthProvider();
  const googleAuth = () => {
    firebase
      .auth(appTest)
      .signInWithPopup(provider)
      .then((result) => {
        const userArr = {};
        const user = result.user;
        userArr.newUser = user;
        console.log(user);
        localStorage.setItem("User", JSON.stringify(userArr));
        // console.log(userArr.newUser);
        toast("লগ-ইন সম্পন্ন হয়েছে।");
        setInterval(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        toast(errorMessage);
      });

    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     const userArr = {};
    //     const user = result.user;
    //     userArr.newUser = user;
    //     console.log(user);
    //     localStorage.setItem("User", JSON.stringify(userArr));
    //     // console.log(userArr.newUser);
    //     toast("লগ-ইন সম্পন্ন হয়েছে।");
    //     setInterval(() => {
    //       window.location.href = "/";
    //     }, 2000);
    //   })
    //   .catch((error) => {
    //     //console.log(error.message);
    //     toast(error.message);
    //   });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    firebase
      .auth(appTest)
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const userArr = {};
        const user = userCredential.user;
        userArr.newUser = user;
        // console.log(user);
        if (user.emailVerified) {
          localStorage.setItem("User", JSON.stringify(userArr));
          toast("লগ-ইন সম্পন্ন হয়েছে।");
          setInterval(() => {
            window.location.href = "/";
          }, 2000);
        } else {
          // sendEmailVerification(auth.currentUser).then(() => {
          //   toast("আপনার ই-মেইল ভেরিফাই করে পুনরায় লগ-ইন করুন");
          // });
        }
      })
      .catch((error) => {
        toast(error.message);
      });

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const userArr = {};
    //     const user = userCredential.user;
    //     userArr.newUser = user;
    //     // console.log(user);

    //     if (user.emailVerified) {
    //       localStorage.setItem("User", JSON.stringify(userArr));
    //       toast("লগ-ইন সম্পন্ন হয়েছে।");
    //       setInterval(() => {
    //         window.location.href = "/";
    //       }, 2000);
    //     } else {
    //       sendEmailVerification(auth.currentUser).then(() => {
    //         toast("আপনার ই-মেইল ভেরিফাই করে পুনরায় লগ-ইন করুন");
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     toast(error.message);
    //     //console.log(error);
    //   });
  };

  return (
    <div className="container my-5">
      <div className="card p-4">
        <h4>Login Form</h4>
        <hr />
        <div className="card p-3">
          <form onSubmit={HandleSubmit}>
            <input
              type="email"
              onBlur={(e) => setEmail(e.target.value)}
              className="form-control my-2"
              placeholder="Email"
              required
            />
            <input
              type="password"
              onBlur={(e) => setPassword(e.target.value)}
              className="form-control my-2"
              placeholder="Password"
              required
            />
            <button className="form-control btn btn-primary">Login</button>
            <ToastContainer />
          </form>
        </div>
        <div className="googleBtn mt-4">
          <h4 className="text-center mb-2">Or</h4>
          <button
            onClick={googleAuth}
            className="btn form-control btn-secondary"
          >
            <i className="fab mx-1 fa-google"></i>Google
          </button>
        </div>
      </div>
      <div className="linkRegister text-center my-3">
        <h5>
          নতুন ইউজার হলে <Link to="/user/register">রেজিস্টার</Link> করুন
        </h5>
      </div>
    </div>
  );
};

export default Login;
