import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HeaderImg = () => {
  const [imgUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState([]);

  const handleImageUpload = async (e) => {
    setLoading(true);
    const imageFile = e.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    //your folder name
    data.append("upload_preset", "WinnerImg");
    data.append("cloud_name", "ditdynru4");

    try {
      const result = await axios.post(
        //aykhne [Your Cloudinary Cloud Name] baki link thik thak thakbe
        "https://api.cloudinary.com/v1_1/ditdynru4/image/upload",
        data
      );
      console.log(result?.data?.url);
      setImageUrl(result?.data?.url);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addHeaderImgDetails = async () => {
    //console.log(imgUrl);
    const { data } = await axios.post(
      "https://server.kajitbe.com/api/header-img",
      {
        imgUrl,
      }
    );
    //console.log(data);
    toast(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://server.kajitbe.com/api/header-img"
      );
      setLink(data);
    };
    fetchData();
  }, []);

  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://server.kajitbe.com/api/header-img/${id}`
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
        <div className="HeaderImg mt-4">
          <h5>Header Img</h5>
          <div className="card p-2">
            <input
              type="file"
              onChange={handleImageUpload}
              className="form-control my-2"
            />
            <div className="my-2">
              {loading ? (
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                ""
              )}
            </div>

            <button
              onClick={addHeaderImgDetails}
              className="btn btn-info form-control my-2"
            >
              Add
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="timeList my-5">
        <h3 className="text-center">Update or Delete Header Img Link</h3>
        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Img Link</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {link.length > 0 &&
              link.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.imgUrl}</td>
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

export default HeaderImg;
