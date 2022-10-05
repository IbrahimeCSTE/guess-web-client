import React, { useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Yt = () => {
  const [ytLink, setYtlink] = useState("");
  const [link, setLink] = useState([]);

  const handleYt = async () => {
    try {
      const { data } = await axios.post("/api/yt-link", { ytLink });
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/yt-link");
      setLink(data);
    };
    fetchData();
  }, []);

  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(`/api/yt-link/${id}`);
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }
  };
  const editBtn = (id) => {
    //console.log(id);
  };
  return (
    <div className="container my-5">
      <AdminNav />
      <div className="card p-4">
        <div className="ytLink mt-4">
          <h5>Youtube Link</h5>

          <div className="card p-2">
            <input
              onChange={(e) => setYtlink(e.target.value)}
              type="text"
              className="form-control my-2"
              placeholder="yt link update"
            />
            <button
              onClick={handleYt}
              className="btn btn-info form-control my-2"
            >
              Add Link
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
      <div className="timeList my-5">
        <h3 className="text-center">Update or Delete Yt Link</h3>
        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Link</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {link.length > 0 &&
              link.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.ytLink}</td>
                  <td>
                    <button
                      onClick={() => editBtn(item._id)}
                      className="btn btn-info"
                    >
                      Edit
                    </button>
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

export default Yt;
