import React from "react";
import { useState } from "react";

const PravateScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (email === "emonnstu14@gmail.com" && password === "129224pk@") {
      window.location.href = "/admin";
    }
    //console.log(email, password);
  };
  return (
    <div className="container my-5">
      <div className="card p-4">
        <h4>Login</h4>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default PravateScreen;