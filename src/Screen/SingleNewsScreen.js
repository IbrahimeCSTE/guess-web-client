import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
const SingleNewsScreen = () => {
  const { id } = useParams();
  const [link, setLink] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://server.kajitbe.com/api/news");
      setLink(data.reverse());
      //console.log(data);
    };
    fetchData();
  }, []);
  const singleNews = link.filter((item) => item._id === id);
  // console.log(singleNews);
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
          ? singleNews.map((item) => (
              <div className="news">
                <h2 className="my-3">{item.title}</h2>
                <img
                  src={item.imgUrl}
                  className="img-fluid singleNewsImg"
                  alt="news"
                />
                <p className="my-3">{item.des2}</p>
              </div>
            ))
          : "Processing..."}
      </div>
    </div>
  );
};

export default SingleNewsScreen;
