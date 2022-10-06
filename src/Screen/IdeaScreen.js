import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const IdeaScreen = () => {
  const [next, setNext] = useState(true);
  const [showNextData, setShowNextData] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [zila, setDistic] = useState("");
  const [code, setCode] = useState("");
  const [team, setWinner] = useState("");
  const [link1, setLink1] = useState([]);
  const [link2, setLink2] = useState([]);

  const HandleNextBtn = (e) => {
    e.preventDefault();
    if (name && mobile && email && zila) {
      setNext(true);
      setShowNextData(true);
      setSubmitBtn(true);
    } else {
      alert("ফর্মটি অসম্পূর্ণ আছে!");
    }

    //console.log("next");
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, mobile, email, zila, code, team);
    const { data } = await axios.post("/api/idea", {
      name,
      mobile,
      email,
      zila,
      code,
      team,
    });
    toast(data);
    //console.log(1);
    setName("");
    setMobile("");
    setEmail("");
    setDistic("");
    setCode("");
    setWinner("");
  };

  useEffect(() => {
    window.document.title = "Idea";
    const fetchData = async () => {
      const res = await axios.get("/api/team-list");
      setLink1(res.data[res.data.length - 1]);
      const res2 = await axios.get("/api/video-link");
      setLink2(res2.data[res2.data.length - 1]);
    };
    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <div className="card bg-danger p-4 worrning">
        <h4 className="text-center text-white">
          খেলা শুরু হওয়ার পর রেজিস্ট্রেশন করা যাবে নাহ।তাই খেলা শুরু হওয়ার আগের
          আপনার আইডিয়া দিয়ে জিতে নিন পুরুষ্কার
        </h4>
      </div>
      <div className="text-center mt-3 ">
        <h3>আপনার আইডিয়া শেয়ার করুন</h3>
        <hr />
      </div>
      <div>
        <div className="card p-4">
          <form onSubmit={HandleSubmit}>
            <div>
              {next && (
                <div>
                  <input
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="form-control my-2"
                    placeholder="আপনার নাম"
                    required
                  />
                  <input
                    type="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control my-2"
                    placeholder="আপনার মোবাইল নম্বর"
                    required
                  />
                  <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control my-2"
                    placeholder="আপনার ই-মেইল"
                    required
                  />
                  <input
                    value={zila}
                    type="text"
                    onChange={(e) => setDistic(e.target.value)}
                    className="form-control my-2"
                    placeholder="আপনার জেলা"
                    required
                  />
                </div>
              )}
            </div>
            <div className="my-3">
              {showNextData && (
                <div>
                  <input
                    value={code}
                    type="text"
                    onChange={(e) => setCode(e.target.value)}
                    className="form-control mt-2"
                    placeholder="ভিডিও কোড"
                    required
                  />
                  <small className="mb-5">
                    কোড পেতে এখানে{" "}
                    <a href={link2 ? link2.videoLink : ""}>ক্লিক করুন</a>
                  </small>
                  <select
                    value={team}
                    className="form-select mt-4 mb-3"
                    onChange={(e) => setWinner(e.target.value)}
                    aria-label="Default select example"
                    required
                  >
                    <option selected>জয়ীদল সিলেক্ট করুন</option>
                    <option value={link1 ? link1.team1 : "প্রকাশ করা হয়নি "}>
                      {link1 ? link1.team1 : "প্রকাশ করা হয়নি "}
                    </option>
                    <option value={link1 ? link1.team2 : "প্রকাশ করা হয়নি "}>
                      {link1 ? link1.team2 : "প্রকাশ করা হয়নি "}
                    </option>
                  </select>
                </div>
              )}
            </div>
            <div className="nexPevBtn">
              {!submitBtn ? (
                <div className="btn2">
                  <button
                    onClick={(e) => HandleNextBtn(e)}
                    className="btn 
                   ml-5 btn-info form-control"
                  >
                    Next
                  </button>
                </div>
              ) : (
                <div className="btn2">
                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                  <ToastContainer />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IdeaScreen;
