import React, { useEffect } from "react";
import { useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MobEmail = () => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState([]);

  const addMobEmail = async () => {
    try {
      const { data } = await axios.post("/api/mobile-email", { mobile, email });
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/mobile-email");
      setLink(data);
    };
    fetchData();
  }, []);

  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(`/api/mobile-email/${id}`);
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }
  };

  return (
    <div className="container my-5">
      <AdminNav />
      <div className="card p-2">
        <div className="mobileUpdate mt-4">
          <h5>Mobile and Email Add</h5>
          <div className="card p-2">
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="number"
              className="form-control my-2"
              placeholder="Mobile update"
            />{" "}
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control my-2"
              placeholder="Email update"
            />
            <button
              onClick={addMobEmail}
              className="btn btn-info form-control my-2"
            >
              Add
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="mobileEmail my-5">
        <h3 className="text-center">Update or Delete mobile email</h3>
        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">mobEmail</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {link.length > 0 &&
              link.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    {item.mobile},{item.email}
                  </td>
                  <td>
                    <button
                      onClick={() => deleteBtn(item._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MobEmail;
