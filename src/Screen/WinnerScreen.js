import axios from "axios";
import React, { useEffect, useState } from "react";

const WinnerScreen = () => {
  const [allIdea, setAllIdea] = useState([]);
  const [winnerId, setWinnerId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/idea");
      setAllIdea(data);
      const res = await axios.get("/api/winner-result");
      setWinnerId(res.data);
    };
    fetchData();
  }, []);
  console.log(winnerId);
  return (
    <div className="container text-center my-5">
      <div className="cardHeader">
        <i className="fas winnerTophy  fa-trophy"></i>
        <h3>Prize Winner</h3>
        <hr />
      </div>
      <div className="Winners card winnerCard p-4">
        {winnerId ? (
          winnerId.map((res, idx) => (
            <div key={idx} className="card my-2">
              <div className="winnerPerson row">
                <div className="col-md-3">
                  <h5>{idx + 1}</h5>
                </div>
                <div className="col-md-3">
                  <h5>
                    <i className="fas fa-user-circle"></i>
                    {allIdea[res.winnerIdx] && allIdea[res.winnerIdx].name}
                  </h5>
                </div>
                <div className="col-md-3">
                  <h5>
                    {allIdea[res.winnerIdx] && allIdea[res.winnerIdx].mobile}
                  </h5>
                </div>
                <div className="col-md-3">
                  <h5>
                    {allIdea[res.winnerIdx] && allIdea[res.winnerIdx].zila}
                  </h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-white text-center">
            বিজয়ী ফলাফল প্রকাশ করে হয়নি।
          </h4>
        )}
      </div>
    </div>
  );
};

export default WinnerScreen;
