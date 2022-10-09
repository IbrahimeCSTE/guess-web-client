import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sports = () => {
  const [link, setLink] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://server.kajitbe.com/api/news");
      setLink(data);
      //console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="container my-4">
      <h3 className="text-danger my-3">খেলাধুলা</h3>
      <div className="">
        <div className="card-header">
          <ul className="nav sportsTab nav-tabs card-header-tabs">
            <li className="nav-item ">
              <Link className="nav-link" to="/cricket">
                ক্রিকেট
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/football">
                ফুটবল
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/football">
                টেনিস
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/football">
                অন্য খেলা
              </Link>
            </li>
          </ul>
        </div>
        <div className="card-body my-5">
          <div className="row g-0">
            {link.length > 0
              ? link.map((item) => (
                  <div className="col-md-6 my-2 col-lg-4">
                    <div className="card newsCard p-2">
                      <img
                        src={item.imgUrl}
                        className="card-img-top img-fluid"
                        alt="news"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.des1}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "No news Now"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
