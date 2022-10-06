import React, { useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const UpdateNews = () => {
  const [updateNews, setUpdateNews] = useState("");
  const [getData, setGetData] = useState([]);

  const handleNews = async () => {
    try {
      const { data } = await axios.post(
        "https://server.kajitbe.com/api/update-news",
        { updateNews }
      );
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://server.kajitbe.com/api/update-news"
      );
      setGetData(data);
    };
    fetchData();
  }, []);

  const editBtn = (id) => {
    //console.log(id);
  };
  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://server.kajitbe.com/api/update-news/${id}`
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
      <div className="card p-2">
        <div className="updateNews mt-4">
          <h5>Update News</h5>
          <div className="card p-2">
            <textarea
              type="text"
              onChange={(e) => setUpdateNews(e.target.value)}
              className="form-control my-2"
              placeholder="update news"
            />
            <button
              onClick={handleNews}
              className="btn btn-info form-control my-2"
            >
              Update
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div>
        <h3>Update and delete</h3>
        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">News</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {getData.length > 0 &&
              getData.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.updateNews}</td>
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

export default UpdateNews;
