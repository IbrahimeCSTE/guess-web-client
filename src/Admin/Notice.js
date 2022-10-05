import React, { useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Notice = () => {
  const [notice, setNotice] = useState("");
  const [link, setLink] = useState([]);
  const handleNotice = async () => {
    try {
      const { data } = await axios.post("/api/notice", { notice });
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }

    // console.log(fbLink);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/notice");
      setLink(data);
    };
    fetchData();
  }, []);

  const editBtn = (id) => {
    //console.log(id);
  };
  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(`/api/notice/${id}`);
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
        <div className="updateNews mt-4">
          <h5>Important Information</h5>
          <div className="card p-2">
            <textarea
              onChange={(e) => setNotice(e.target.value)}
              type="text"
              className="form-control my-2"
              placeholder="Add information"
            />
            <button
              onClick={handleNotice}
              className="btn btn-info form-control my-2"
            >
              Add
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="timeList my-5">
        <h3 className="text-center">Update or Delete Notice</h3>
        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Notice</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {link.length > 0 &&
              link.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.notice}</td>
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

export default Notice;
