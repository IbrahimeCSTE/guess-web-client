import axios from "axios";
import React, { useEffect, useState } from "react";
const PrizeScreen = () => {
  const [unews, setuNews] = useState([]);
  const [flink, setfLink] = useState([]);
  const [ylink, setyLink] = useState([]);
  const [winnerPrize, setWinnerPrize] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const winnerPrizeDetails = await axios.get("/api/winner-details");
      setWinnerPrize(winnerPrizeDetails.data);
      const { data } = await axios.get("/api/update-news");
      setuNews(data[data.length - 1]);
      const res1 = await axios.get("/api/fb-link");
      setfLink(res1.data[data.length - 1]);
      const res = await axios.get("/api/yt-link");
      setyLink(res.data[data.length - 1]);
    };
    fetchData();
  }, []);
  console.log(winnerPrize);
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
                {winnerPrize.length > 0 &&
                  winnerPrize.map((item, idx) => (
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
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
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
                <a className="text-primary" href={flink && flink.fbLink}>
                  পেজে আপডেট জানুন
                </a>
                <br />
                ইউটিউব লিঙ্কঃ
                <a className="text-primary" href={ylink && ylink.ytLink}>
                  ইউটিউবে আপডেট জানুন
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeScreen;
