import React from "react";
import { useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
const Fb = () => {
  const [fbLink, setFblink] = useState("");
  const [link, setLink] = useState([]);
  const handleFb = async () => {
    try {
      const { data } = await axios.post(
        "https://server.kajitbe.com/api/fb-link",
        { fbLink }
      );
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }

    // console.log(fbLink);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://server.kajitbe.com/api/fb-link"
      );
      setLink(data);
    };
    fetchData();
  }, []);

  const editBtn = (id) => {
    //console.log(id);
  };
  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://server.kajitbe.com/api/fb-link/${id}`
      );
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }
  };

  return (
    <div className="container my-5">
      <AdminNav />
      <div className="card p-4">
        <div className="fbLink mt-4">
          <h5>Facebook Page Link</h5>
          <div className="card p-2">
            <input
              type="text"
              onChange={(e) => setFblink(e.target.value)}
              className="form-control my-2"
              placeholder="fb page link update"
            />
            <button
              onClick={handleFb}
              className="btn btn-info form-control my-2"
            >
              Add
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="timeList my-5">
        <h3 className="text-center">Update or Delete fb Link</h3>
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
                  <td>{item.fbLink}</td>
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

export default Fb;
