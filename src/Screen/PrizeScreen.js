import axios from "axios";
import React, { useEffect, useState } from "react";
const PrizeScreen = () => {
  const [winnerprize, setWinnerPrize] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const winnerPrizeDetails = await axios.get(
        "https://server.kajitbe.com/api/winner-details"
      );
      setWinnerPrize(winnerPrizeDetails.data);
    };
    fetchData();
  }, []);
  return (
    <div className="container my-4">
      <div className="row PrizeAndUpdate">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">আজকের প্রাইজ</h3>
            </div>
            <div className="card-body">
              <div className="row">
                {winnerprize.length > 0 ? (
                  winnerprize.map((item, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="card my-3 prizeCard">
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
      </div>
    </div>
  );
};

export default PrizeScreen;
