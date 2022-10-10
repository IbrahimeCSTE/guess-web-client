import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FooterScreen = () => {
  const [flink, setfLink] = useState([]);
  const [ylink, setyLink] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://server.kajitbe.com/api/fb-link"
      );
      setfLink(data[data.length - 1]);
      const res = await axios.get("https://server.kajitbe.com/api/yt-link");
      setyLink(res.data[data.length - 1]);
    };
    fetchData();
  }, []);
  return (
    <div className="mt-5  bg-dark text-white">
      <div className="footer">
        <div className="pt-5">
          <h5>Kajitbe.com</h5>
          <small>
            <i className="far mx-1 fa-envelope"></i>support:kajitbe@gmail.com
          </small>
          <br />
          <small>
            <i className="fas mx-1 fa-phone-alt"></i>Available:10AM-10PM
          </small>
        </div>
        <div className="pt-5">
          <div className="bottomMenu">
            <ul>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/own-idea" className="nav-link">
                Registration
              </Link>
              <Link to="/sports" className="nav-link">
                Sports
              </Link>
              <Link to="/" className="nav-link">
                About Us
              </Link>
              <Link to="/" className="nav-link">
                Policy
              </Link>
            </ul>
          </div>
        </div>
        <div className="pt-5">
          <h5>Follow Us</h5>
          <div className="footerIcon mt-3">
            <a className="text-white" href={flink && flink.fbLink}>
              <i className="fab mx-1 fa-facebook"></i>
            </a>

            <a className="text-white" href={ylink && ylink.ytLink}>
              <i className="fab mx-1 fa-youtube"></i>
            </a>
            <h6>
              <i className="fab fa-whatsapp"></i>
            </h6>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 pb-2">
        <span>
          copyright<i className="far mx-1 fa-copyright"></i>2022 kajitbe.com
        </span>
      </div>
    </div>
  );
};

export default FooterScreen;
