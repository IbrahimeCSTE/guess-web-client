import React, { useEffect } from "react";
import { useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DynamicHadle = () => {
  const [text, setText] = useState("");
  const [link, setLink] = useState([]);

  const addDynamic = async () => {
    const { data } = await axios.post("/api/dynamic-text", { text });
    toast(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/dynamic-text");
      setLink(data);
    };
    fetchData();
  }, []);
  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(`/api/dynamic-text/${id}`);
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }
  };

  return (
    <div className="container my-5">
      <AdminNav />
      <div className="dynamic">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="my-2 form-control"
          placeholder="dynamic text"
          type="text"
        />
        <button onClick={addDynamic} className="btn btn-info form-control">
          Add
        </button>
        <ToastContainer />
      </div>
      <div className="dynamicText my-5">
        <h3 className="text-center">Update or Delete dynamic text</h3>
        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Text</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {link.length > 0 &&
              link.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.text}</td>

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

export default DynamicHadle;
