import React, { useEffect } from "react";
import { useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TimeUp = () => {
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  const [ampm, setAmPm] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [link, setLink] = useState([]);

  const addTimeDate = async () => {
    const { data } = await axios.post(
      "https://server.kajitbe.com/api/time-date",
      {
        hour,
        min,
        sec,
        ampm,
        date,
        month,
        year,
      }
    );
    toast(data);
    setHour("");
    setMin("");
    setSec("");
    setAmPm("");
    setDate("");
    setMonth("");
    setYear("");
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://server.kajitbe.com/api/time-date"
      );
      setLink(data);
    };
    fetchData();
  }, []);

  const deleteBtn = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://server.kajitbe.com/api/time-date/${id}`
      );
      toast(data);
      // console.log(data);
    } catch (err) {
      toast(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <AdminNav />
      <div className="card p-4">
        <div className="stopRegistration mt-4">
          <h5>Set time</h5>
          <div className="card p-2">
            <input
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              type="number"
              className="form-control my-2"
              placeholder="update Hour"
            />
            <input
              value={min}
              onChange={(e) => setMin(e.target.value)}
              type="number"
              className="form-control my-2"
              placeholder="update Min"
            />
            <input
              value={sec}
              onChange={(e) => setSec(e.target.value)}
              type="number"
              className="form-control my-2"
              placeholder="update second"
            />
            <input
              value={ampm}
              onChange={(e) => setAmPm(e.target.value)}
              type="text"
              className="form-control my-2"
              placeholder="am/pm"
            />
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="number"
              className="form-control my-2"
              placeholder="date"
            />
            <input
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              type="number"
              className="form-control my-2"
              placeholder="month"
            />
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              type="number"
              className="form-control my-2"
              placeholder="year"
            />
            <button
              onClick={addTimeDate}
              className="btn btn-info form-control my-2"
            >
              Add Time and Date
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="timeList my-5">
        <h3 className="text-center">Update or Delete time</h3>
        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">time and date</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {link.length > 0 &&
              link.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    {item.hour},{item.min},{item.sec},{item.date},{item.month},
                    {item.year}
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
  );
};

export default TimeUp;
