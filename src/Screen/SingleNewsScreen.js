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
  const [loginUser, setLoginUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("User"));
    setLoginUser(userData ? userData.newUser : "");
    const fetchData = async () => {
      const { data } = await axios.get("https://server.kajitbe.com/api/news");
      setLink(data.reverse());
      const data1 = await axios.get(
        "https://server.kajitbe.com/api/news/comment"
      );
      setAllComment(data1.data);
    };
    fetchData();
  }, []);
  const singleNews = link.filter((item) => item._id === id);
  const commentBox = allComment.filter((item) => item.commentId === id);
  //console.log(loginUser);

  const addCommet = async (commentId, name, email, photo) => {
    const { data } = await axios.post(
      "https://server.kajitbe.com/api/news/comment/new",
      { commentId, comment, name, email, photo }
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
                  <div>
                    {loginUser ? (
                      <button
                        onClick={() =>
                          addCommet(
                            item._id,
                            loginUser.displayName,
                            loginUser.email,
                            loginUser.photoURL
                          )
                        }
                        className="btn btn-primary"
                      >
                        comment
                      </button>
                    ) : (
                      <div className="linkRegister  my-3">
                        <h5>
                          কমেন্ট করতে
                          <Link className="mx-2" to="/user/login">
                            লগ-ইন
                          </Link>{" "}
                          করুন।
                        </h5>
                      </div>
                    )}
                  </div>

                  <ToastContainer />
                </div>
                <div className="showComment">
                  {commentBox.length > 0 ? (
                    commentBox.map((item, idx) => (
                      <div className="commentElement  my-4" key={idx}>
                        <div className="commentImg">
                          <img src={item.photo} alt="" />
                        </div>
                        <div className="mx-3">
                          <div className="commentor">
                            <small className="text-primary">{item.name}</small>
                          </div>
                          <div className="comment">
                            <small>{item.comment}</small>
                          </div>
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
