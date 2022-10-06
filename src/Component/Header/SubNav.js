import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const SubNav = () => {
  const [flink, setfLink] = useState([]);
  const [ylink, setyLink] = useState([]);
  const [mobEmail, setMobEmail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://server.kajitbe.com/api/fb-link"
      );
      setfLink(data[data.length - 1]);
      const res = await axios.get("https://server.kajitbe.com/api/yt-link");
      setyLink(res.data[data.length - 1]);
      const res2 = await axios.get(
        "https://server.kajitbe.com/api/mobile-email"
      );
      setMobEmail(res2.data[data.length - 1]);
    };
    fetchData();
  }, []);

  //console.log(ylink && ylink.ytLink);

  return (
    <div className="subNav">
      <div className="subEmail">
        <div>
          <i className="far fa-envelope"></i>
          {mobEmail ? mobEmail.email : "emonnstu14@gmail.com"}
        </div>
      </div>
      <div>
        <div>
          {" "}
          <i className="fas fa-phone-alt"></i>+880
          {mobEmail ? mobEmail.mobile : "01612701346"}
        </div>
      </div>
      <div>
        <small>আপডেট জানুনঃ</small>
        <a className="text-white" href={flink && flink.fbLink}>
          <i className="fab mx-1 fa-facebook"></i>
        </a>

        <a className="text-white" href={ylink && ylink.ytLink}>
          <i className="fab mx-1 fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default SubNav;
