import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import AdminNav from "./AdminNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const VideoLink = () => {
  const [videoLink, setVideoLink] = useState("");
  const [link, setLink] = useState([]);
  const handleVideo = async () => {
    try {
      const { data } = await axios.post(
        "https://server.kajitbe.com/api/video-link",
        { videoLink }
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
        "https://server.kajitbe.com/api/video-link"
      );
      setLink(data);
    };
    fetchData();
  }, []);

  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://server.kajitbe.com/api/video-link/${id}`
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
        <input
          type="text"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="form-control my-2"
          placeholder="latest video link"
        />
        <button onClick={handleVideo} className="btn btn-info form-control">
          Add
        </button>
        <ToastContainer />
      </div>
      <div className="VideoList">
        <h4>Add or Delete</h4>
        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Link</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {link.length > 0 &&
              link.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.videoLink}</td>
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

export default VideoLink;
