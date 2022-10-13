import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleNewsScreen = () => {
  const { id } = useParams();
  const [link, setLink] = useState([]);
  const [comment, setComment] = useState();
  const [allComment, setAllComment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://server.kajitbe.com/api/news");
      setLink(data.reverse());
      const data1 = await axios.get(
        "https://server.kajitbe.com/api/news/comment"
      );
      setAllComment(data1.data);
      console.log(data1);
    };
    fetchData();
  }, []);
  const singleNews = link.filter((item) => item._id === id);
  const commentBox = allComment.filter((item) => item.commentId === id);
  console.log(allComment);
  const addCommet = async (commentId) => {
    const { data } = await axios.post(
      "https://server.kajitbe.com/api/news/comment/new",
      { commentId, comment }
    );
    toast(data);
    setComment("");
  };
  return (
    <div className="container my-4">
      <h3 className="text-danger my-3">খেলাধুলা</h3>
      <div className="card-header">
        <ul className="nav sportsTab nav-tabs card-header-tabs">
          <li className="nav-item ">
            <Link className="nav-link" to="/sports/cricket">
              ক্রিকেট
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sports/football">
              ফুটবল
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sports/tenis">
              টেনিস
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sports/other">
              অন্য খেলা
            </Link>
          </li>
        </ul>
      </div>
      <div className="singleNews">
        {singleNews.length > 0
          ? singleNews.map((item, idx) => (
              <div key={idx}>
                <div className="news">
                  <h2 className="my-3">{item.title}</h2>
                  <img
                    src={item.imgUrl}
                    className="img-fluid singleNewsImg"
                    alt="news"
                  />
                  <p className="my-3">{item.des2}</p>
                </div>
                <div className="commentSection my-5">
                  <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="form-control my-2"
                    placeholder="কমেন্ট করুন....."
                  />
                  <button
                    onClick={() => addCommet(item._id)}
                    className="btn btn-primary"
                  >
                    comment
                  </button>
                  <ToastContainer />
                </div>
                <div className="showComment">
                  {commentBox.length > 0 ? (
                    commentBox.map((item, idx) => (
                      <div className="d-flex commentElement my-2" key={idx}>
                        <div>
                          <i className="fas mx-2 fa-user-circle"></i>
                        </div>
                        <div>
                          <small>{item.comment}</small>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h3 className="text-center mb-3">কমেন্ট নেই...</h3>
                  )}
                </div>
              </div>
            ))
          : "Processing..."}
      </div>
    </div>
  );
};

export default SingleNewsScreen;
