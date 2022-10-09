import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsManage = () => {
  const [imgUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [des1, setDes1] = useState("");
  const [des2, setDes2] = useState("");
  const [catagory, setCatagory] = useState("");
  const [upImgUrl, setUpImageUrl] = useState("");
  const [upTitle, setUpTitle] = useState("");
  const [upDes1, setUpDes1] = useState("");
  const [upDes2, setUpDes2] = useState("");
  const [upCatagory, setUpCatagory] = useState("");
  const [newsId, setNewsId] = useState("");
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
      // console.log(result?.data?.url);
      setImageUrl(result?.data?.url);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addNews = async () => {
    //console.log(imgUrl);
    const { data } = await axios.post("https://server.kajitbe.com/api/news", {
      imgUrl,
      title,
      des1,
      des2,
      catagory,
    });
    //console.log(data);
    toast(data);
    setTitle("");
    setDes1(" ");
    setDes2(" ");
    setCatagory(" ");
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://server.kajitbe.com/api/news");
      setLink(data);
      //console.log(data);
    };
    fetchData();
  }, []);

  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://server.kajitbe.com/api/news/${id}`
      );
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }
  };
  const editBtn = async () => {
    try {
      const { data } = await axios.put("https://server.kajitbe.com/api/news", {
        upImgUrl,
        upTitle,
        upDes1,
        upDes2,
        upCatagory,
        newsId,
      });
      //console.log(data);
      toast(data);
    } catch (err) {
      toast(err.message);
    }
  };
  return (
    <div className="container my-5">
      <AdminNav />
      <div className="card p-2">
        <div className="newsSection mt-4">
          <h5>Add News</h5>
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
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control my-2"
              placeholder="news title"
            />
            <textarea
              value={des1}
              onChange={(e) => setDes1(e.target.value)}
              type="text"
              className="form-control my-2"
              placeholder="short description"
            />
            <textarea
              value={des2}
              onChange={(e) => setDes2(e.target.value)}
              type="text"
              className="form-control my-2"
              placeholder="log description"
            />
            <select
              value={catagory}
              className="form-select mt-4 mb-3"
              onChange={(e) => setCatagory(e.target.value)}
              aria-label="Default select example"
              required
            >
              <option selected>Choice Catagory</option>
              <option value="cricket">Cricket</option>
              <option value="football">Football</option>
              <option value="tenis">Tenis</option>
              <option value="other">Other</option>
            </select>
            <button
              onClick={addNews}
              className="btn btn-info form-control my-2"
            >
              Add
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="timeList my-5">
        <h3 className="text-center">Update or Delete News</h3>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Prize details</th>
                  <th scope="col">Id</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {link.length > 0 &&
                  link.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.title}</td>
                      <td>{item._id}</td>
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
          <div className="col-md-4">
            <hr />
            <div className="upDateForm">
              <div className="card p-2">
                <div className="newsSection mt-4">
                  <h6>Update Form</h6>
                  <div className="card p-2">
                    <input
                      value={newsId}
                      onChange={(e) => setNewsId(e.target.value)}
                      type="text"
                      className="form-control my-2"
                      placeholder="_id"
                    />
                    <input
                      value={upTitle}
                      onChange={(e) => setUpTitle(e.target.value)}
                      type="text"
                      className="form-control my-2"
                      placeholder="news title"
                    />
                    <textarea
                      value={upDes1}
                      onChange={(e) => setUpDes1(e.target.value)}
                      type="text"
                      className="form-control my-2"
                      placeholder="short description"
                    />
                    <textarea
                      value={upDes2}
                      onChange={(e) => setUpDes2(e.target.value)}
                      type="text"
                      className="form-control my-2"
                      placeholder="log description"
                    />
                    <select
                      value={upCatagory}
                      className="form-select mt-4 mb-3"
                      onChange={(e) => setUpCatagory(e.target.value)}
                      aria-label="Default select example"
                      required
                    >
                      <option selected>Choice Catagory</option>
                      <option value="cricket">Cricket</option>
                      <option value="football">Football</option>
                      <option value="tenis">Tenis</option>
                      <option value="other">Other</option>
                    </select>
                    <button
                      onClick={editBtn}
                      className="btn btn-info form-control my-2"
                    >
                      Update Now
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsManage;
