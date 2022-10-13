import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FootballScreen = () => {
  const [link, setLink] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://server.kajitbe.com/api/news");
      setLink(data.reverse());
      //console.log(data);
    };
    fetchData();
  }, []);
  const Football = link.filter((item) => item.catagory === "football");
  console.log(Football);
  return (
    <div className="container my-4">
      <h3 className="text-danger my-3">খেলাধুলা</h3>
      <div className="">
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
        <div className="card-body my-5">
          <div className="row g-0">
            {Football.length > 0 ? (
              Football.map((item, idx) => (
                <div key={idx} className="col-md-6 my-2 col-lg-4">
                  <Link to={`/sports/single-news/${item._id}`}>
                    <div className="card newsCard p-2">
                      <img
                        src={item.imgUrl}
                        className="card-img-top img-fluid"
                        alt="news"
                      />
                      <div className="card-body">
                        <h5 className="card-title newsTitle">{item.title}</h5>
                        <p className="card-text newsDes1">{item.des1}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballScreen;
