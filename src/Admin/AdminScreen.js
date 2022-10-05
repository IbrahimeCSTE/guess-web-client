import axios from "axios";
import React from "react";
import { useState } from "react";
import AdminNav from "./AdminNav";

const AdminScreen = () => {
  const [admin, setAdmin] = useState(false);
  const handleLogout = async () => {
    window.location.href = "/private";
    await axios.post("/api/admin", { admin });
  };
  return (
    <div className="container my-5">
      <AdminNav></AdminNav>
      <div className="my-4">
        <div className="row">
          <div className="col-md-4 my-2">
            <div className="card bg-dark">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                nam.
              </h4>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card bg-dark">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                nam.
              </h4>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card bg-dark">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                nam.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="logoutAdmin">
        <button onClick={handleLogout} className="btn btn-danger form-control">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminScreen;
<h2>ADmin</h2>;
