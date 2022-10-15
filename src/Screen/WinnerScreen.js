import axios from "axios";
import React, { useEffect, useState } from "react";

const WinnerScreen = () => {
  const [winner, setWinner] = useState([]);

  useEffect(() => {
    window.document.title = "winner";
    const fetchData = async () => {
      const res = await axios.get(
        "https://server.kajitbe.com/api/winner-result"
      );
      setWinner(res.data);
    };
    fetchData();
  }, []);
  // console.log(winnerId);
  return (
    <div className="container text-center my-5">
      <div className="cardHeader">
        <i className="fas winnerTophy  fa-trophy"></i>
        <h3>প্রাইজ উইনার</h3>
        <hr />
      </div>
      <div className="Winners card winnerCard p-4">
        {winner.length > 0 ? (
          winner.map((res, idx) => (
            <div key={idx} className="card my-2">
              <div className="winnerPerson row">
                <div className="col-md-3">
                  <h5>{idx + 1}</h5>
                </div>
                <div className="col-md-3">
                  <h5>
                    <i className="fas fa-user-circle"></i>
                    {res.name}
                  </h5>
                </div>
                <div className="col-md-3">
                  <h5>{res.mobile}</h5>
                </div>
                <div className="col-md-3">
                  <h5>{res.zila}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-white text-center">
            বিজয়ী ফলাফল প্রকাশ করে হয়নি।খেলা শেষ হওয়ার ৩০ মিনিটের ভিতর ফলাফল
            প্রকাশ করা হবে।ধন্যবাদ
          </h4>
        )}
      </div>
    </div>
  );
};

export default WinnerScreen;
