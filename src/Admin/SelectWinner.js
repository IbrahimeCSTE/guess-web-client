import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import AdminNav from "./AdminNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SelectWinner = () => {
  const [winnerTeam, setWinnerTeam] = useState("");
  const [winnerNo, setWinnerNo] = useState("");
  const [allIdea, setAllIdea] = useState([]);
  const [winnerId, setWinnerId] = useState([]);
  //const [mobile, setMobile] = useState("017272020202");

  const handleWinner = async () => {
    let RandomNo = [];
    const winnerList = allIdea.filter((item) => item.team === winnerTeam);

    if (parseInt(winnerNo) <= winnerList.length) {
      for (let i = 0; parseInt(winnerNo) !== RandomNo.length; i++) {
        let winnerIdx = Math.floor(Math.random() * winnerList.length);
        let found = RandomNo.includes(winnerIdx);
        if (!found) {
          // console.log(typeof mobile);
          const { data } = await axios.post("/api/winner-result", {
            winnerIdx,
          });
          toast(data);
          RandomNo.push(winnerIdx);
        }
      }
    } else {
      alert("invalid");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/idea");
      setAllIdea(data);
      const res = await axios.get("/api/winner-result");
      setWinnerId(res.data);
    };
    fetchData();
  }, []);

  const deleteWinner = async (id) => {
    const { data } = await axios.delete(`/api/winner-result/${id}`);
    toast(data);
  };

  return (
    <div className="container my-5">
      <AdminNav />
      <div className="card p-4">
        <input
          type="text"
          value={winnerTeam}
          onChange={(e) => setWinnerTeam(e.target.value)}
          className="form-control my-2"
          placeholder="Winner taem name"
        />
        <input
          type="number"
          value={winnerNo}
          onChange={(e) => setWinnerNo(e.target.value)}
          className="form-control my-2"
          placeholder="How much winner selected"
        />
        <button onClick={handleWinner} className="btn btn-info form-control">
          selected
        </button>
        <ToastContainer />
      </div>
      <div className="Winners card winnerCard p-4">
        {winnerId &&
          winnerId.map((res, idx) => (
            <div key={idx} className="card my-2">
              <div className="winnerPerson">
                <h5>{idx + 1}</h5>
                <h5>
                  <i className="fas fa-user-circle"></i>
                  {allIdea[res.winnerIdx] && allIdea[res.winnerIdx].name}
                </h5>
                <h5>
                  {allIdea[res.winnerIdx] && allIdea[res.winnerIdx].mobile}
                </h5>
                <h5>{allIdea[res.winnerIdx] && allIdea[res.winnerIdx].zila}</h5>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteWinner(res._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectWinner;
