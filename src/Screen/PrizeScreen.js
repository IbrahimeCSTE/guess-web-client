import axios from "axios";
import React, { useEffect, useState } from "react";
const PrizeScreen = () => {
  const [unews, setuNews] = useState([]);
  const [flink, setfLink] = useState([]);
  const [ylink, setyLink] = useState([]);
  const [winnerprize, setWinnerPrize] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const winnerPrizeDetails = await axios.get(
        "https://server.kajitbe.com/api/winner-details"
      );
      setWinnerPrize(winnerPrizeDetails.data);
      const { data } = await axios.get(
        "https://server.kajitbe.com/api/update-news"
      );
      setuNews(data[data.length - 1]);
      const res1 = await axios.get("https://server.kajitbe.com/api/fb-link");
      setfLink(res1.data[res1.data.length - 1]);
      console.log(res1.data[0]);
      const res = await axios.get("https://server.kajitbe.com/api/yt-link");
      setyLink(res.data[res.data.length - 1]);
    };
    fetchData();
  }, []);
  console.log(flink, ylink);
  return (
    <div className="container my-4">
      <div className="row PrizeAndUpdate">
        <div className="col-md-9">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">আজকের প্রাইজ</h3>
            </div>
            <div className="card-body">
              <div className="row">
                {winnerprize.length > 0 ? (
                  winnerprize.map((item, idx) => (
                    <div key={idx} className="col-md-4">
                      <div className="card prizeCard">
                        <img
                          className="card-img-top img-fluid"
                          src={item.imgUrl}
                          alt="kajitbe"
                        />
                        <div className="card-body">
                          <h5 className="mt-1 card-title text-center">
                            {item.winnerNo}
                          </h5>
                          <hr />
                          <p className="card-text">{item.prize}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-3">
          <div className="card p-2 bg-dark text-white">
            <div className="text-center">
              <h5>আপডেট জানুন</h5>
              <hr />
            </div>
            <div className="updateText">
              <div>
                <p>{unews && unews.updateNews}</p>
                <br />
                ফেইসবুক পেইজ লিঙ্কঃ
                <button className="btn pt-3 form-control fbBtn">
                  <h6>
                    <i className="fab mx-1 fa-facebook"></i>
                    <a className="text-white" href={flink && flink.fbLink}>
                      পেজে আপডেট জানুন
                    </a>
                  </h6>
                </button>
                <br />
                ইউটিউব লিঙ্কঃ
                <button className="btn pt-3 my-2 form-control ytBtn">
                  <h6>
                    <i className="fab mx-1 fa-youtube"></i>
                    <a className="text-white" href={ylink && ylink.ytLink}>
                      ইউটিউবে আপডেট জানুন
                    </a>
                  </h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeScreen;
