import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const Header = () => {
  const [link, setLink] = useState([]);
  const [headerImg, setHeaderImg] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://server.kajitbe.com/api/time-date"
      );
      setLink(data[data.length - 1]);
      const res = await axios.get("https://server.kajitbe.com/api/header-img");
      setHeaderImg(res.data[res.data.length - 1]);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="headerImg">
        <div className="card  text-bg-dark">
          <img
            src={headerImg ? headerImg.imgUrl : "image/cover1.jpg"}
            className="card-img img-fluid"
            alt="..."
          />

          <div className="card-img-overlay cardText">
            <div className="text-center">
              <TypeAnimation
                sequence={[
                  " আপনার আইডিয়া শেয়ার করে জিতে নিন আকর্ষনীয় পুরুষ্কার।", // Types 'One'
                  1000, // Waits 1s
                ]}
                speed={40}
                cursor={false}
                wrapper="div"
                repeat={Infinity}
                style={{ fontSize: "2em" }}
              />
              <div className="showTime justify-content-center d-flex text-dark text-center">
                <div>
                  {link ? (
                    <div className="displayTime">
                      <h2>
                        {" "}
                        {link ? link.hour : "00"}
                        {link ? ":" : ""}
                        {link ? link.min : "00"}
                        {link ? ":" : ""}
                        {link ? link.sec : "00"} {link ? link.ampm : ""}
                      </h2>
                      <h6>
                        {" "}
                        {link ? link.date : ""}
                        {link ? "/" : ""}
                        {link ? link.month : ""}
                        {link ? "/" : ""}
                        {link ? link.year : ""}
                      </h6>
                    </div>
                  ) : (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div>
                  <button className="btn btn-danger my-2">
                    <Link
                      className="text-white text-decoration-none"
                      to="/own-idea"
                    >
                      {" "}
                      রেজিস্ট্রেশন করুন ফ্রি
                    </Link>
                  </button>
                </div>

                <div className="spinner-grow spinerColor" role="status">
                  <i className="fas fa-mouse-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
