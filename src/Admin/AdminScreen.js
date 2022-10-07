import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AdminNav from "./AdminNav";

const AdminScreen = () => {
  const [admin, setAdmin] = useState(false);
  const [registed, setRegisted] = useState(0);
  const handleLogout = async () => {
    window.location.href = "/private";
    await axios.post("https://server.kajitbe.com/api/admin", { admin });
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://server.kajitbe.com/api/idea");
      setRegisted(data.length);
    };
    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <AdminNav></AdminNav>
      <div className="my-4">
        <div className="row">
          <div className="col-md-12 my-2">
            <div className="card bg-dark text-white text-center">
              <h3>Registranion People</h3>
              <hr />
              <h4>{registed ? registed : 0}</h4>
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
