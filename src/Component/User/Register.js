import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/FirebaseAuth";

const Register = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const provider = new GoogleAuthProvider();
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userArr = {};
        const user = result.user;
        userArr.newUser = user;
        // console.log(user);
        localStorage.setItem("User", JSON.stringify(userArr));
        // console.log(userArr.newUser);
        toast("লগ-ইন সম্পন্ন হয়েছে।");
        setInterval(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        //console.log(error.message);
        toast(error.message);
      });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("পাসওয়ার্ড মিনিমাম ৬ ডিজিট হতে হবে।");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const userArr = {};
        const user = userCredential.user;
        userArr.newUser = user;
        // localStorage.setItem("User", JSON.stringify(userArr));
        updateUserProfile();
        setName("");
        setEmail("");
        setPassword("");
        sendEmailVerification(auth.currentUser).then(() => {
          toast("আপনার ই-মেইল ভেরিফাই করে পুনরায় লগ-ইন করুন");
          setInterval(() => {
            window.location.href = "/user/login";
          }, 3000);
        });
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage);
        // ..
      });
  };
  const updateUserProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRF-ExnKXwTybHkZFPV8PAniae32NIh-AgiA&usqp=CAU",
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        toast(error.massage);
      });
  };
  return (
    <div className="container my-5">
      <div className="card p-4">
        <h4>Register Form</h4>
        <hr />
        <div className="card p-3">
          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control my-2"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control my-2"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control my-2"
              placeholder="Password"
              required
            />
            <button className="form-control btn btn-info">Register</button>
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
          রেজিস্টার করা থাকলে <Link to="/user/login">লগ-ইন</Link> করুন
        </h5>
      </div>
    </div>
  );
};

export default Register;
