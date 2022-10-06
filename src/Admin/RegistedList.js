import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNav from "./AdminNav";

const RegistedList = () => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [link, setLink] = useState([]);
  const [link1, setLink1] = useState([]);
  const addTeam = async (e) => {
    e.preventDefault();
    console.log(team1, team2);
    if (team1 && team2) {
      const { data } = await axios.post(
        "https://server.kajitbe.com/api/team-list",
        { team1, team2 }
      );
      toast(data);
    } else {
      console.log("missing data!");
    }
  };
  const deleteElement = async () => {
    const { data } = await axios.delete("https://server.kajitbe.com/api/idea");
    toast(data);
  };
  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://server.kajitbe.com/api/team-list/${id}`
      );
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://server.kajitbe.com/api/idea");
      setLink(data);
      const res = await axios.get("https://server.kajitbe.com/api/team-list");
      setLink1(res.data);
      console.log(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="container my-4">
      <AdminNav />
      <div className="teamOption card p-4">
        <h4 className="text-center">Today 2 team</h4>
        <form onSubmit={addTeam}>
          <input
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
            type="text"
            placeholder="team1"
            className="form-control my-2"
          />
          <input
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
            type="text"
            placeholder="team2"
            className="form-control my-2"
          />
          <button className="btn btn-info form-control my-2">Submit</button>
        </form>
        <div className="teamListhere">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Team</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {link1.length > 0 &&
                link1.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      {item.team1} vs {item.team2}
                    </td>

                    <td>
                      <button
                        onClick={() => deleteBtn(item._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="registdList mt-3">
        <h1 className="text-center">Registed List</h1>
        <div className="card p-4 my-5">
          <button onClick={deleteElement} className="btn btn-danger ">
            Delete all registed
          </button>
          <ToastContainer />
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Zila</th>
              <th scope="col">Team</th>
            </tr>
          </thead>
          <tbody>
            {link.length > 0 &&
              link.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.zila}</td>
                  <td>{item.team}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistedList;
