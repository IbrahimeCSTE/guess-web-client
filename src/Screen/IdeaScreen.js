import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrizeScreen from "./PrizeScreen";
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
  const [unews, setuNews] = useState([]);
  const [flink, setfLink] = useState([]);
  const [ylink, setyLink] = useState([]);

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
    //console.log(name, mobile, email, zila, code, team);
    const { data } = await axios.post("https://server.kajitbe.com/api/idea", {
      name,
      mobile,
      email,
      zila,
      code,
      team,
    });
    toast(`${data} দয়া করে আমাদের চ্যানেলটি সাবস্ক্রাইব করুন।`);

    //console.log(1);
    setName("");
    setMobile("");
    setEmail("");
    setDistic("");
    setCode("");
    setWinner("");
    setInterval(() => {
      window.location.href =
        "https://www.youtube.com/channel/UCwLWQd__jp01MCd3s5Q1a3g?sub_confirmation=1";
    }, 1500);
  };

  useEffect(() => {
    window.document.title = "Idea";
    const fetchData = async () => {
      const res3 = await axios.get("https://server.kajitbe.com/api/team-list");
      setLink1(res3.data[res3.data.length - 1]);
      const res2 = await axios.get("https://server.kajitbe.com/api/video-link");
      setLink2(res2.data[res2.data.length - 1]);
      const { data } = await axios.get(
        "https://server.kajitbe.com/api/update-news"
      );
      setuNews(data[data.length - 1]);
      const res1 = await axios.get("https://server.kajitbe.com/api/fb-link");
      setfLink(res1.data[res1.data.length - 1]);
      // console.log(res1.data[0]);
      const res = await axios.get("https://server.kajitbe.com/api/yt-link");
      setyLink(res.data[res.data.length - 1]);
    };
    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <div className="card bg-danger p-4 worrning">
        <h3 className="text-center my-2 text-info">
          পড়ুন।ভুল হলে প্রাইজ পাবেন নাহ
        </h3>
        <h6 className="text-center mt-2 text-white">
          খেলা শুরু হওয়ার পর রেজিস্ট্রেশন করা যাবে নাহ। রেজিস্ট্রেশনের কোড পেতে
          হলে লিঙ্কে গিয়ে ফুল ভিডিও দেখতে হবে।ভিডিও দেখা শেষ হলে সম্ভাব্য জয়ী
          দলের নাম কমেন্টে লিখতে হবে এবং আমাদের চ্যানেল সাবস্ক্রাইব করতে
          হবে।সঠিক মোবাইল এবং ই-মেইল ব্যবহার করতে হবে।কারন আমরা আপনার মোবাইলে
          এবং ই-মেইল এ আলাদা কোড পাঠাবো।সাবস্ক্রাইব,কমেন্ট,কোড চেক করার পর সব
          কিছু ঠিক থাকলে আপনাকে প্রাইস দেওয়া হবে।
        </h6>
      </div>
      <div className="text-center mt-3 ">
        <h3>আপনার আইডিয়া শেয়ার করুন</h3>
        <hr />
      </div>
      <div>
        <div className="row">
          <div className="col-md-4 my-4">
            <div className="row">
              <div className="card p-4">
                <h5>রেজিস্ট্রেশন ফর্ম</h5>
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
                        <a href={link2 ? link2.videoLink : ""}>
                          <small className="btn btn-info text-dark text-blod my-1">
                            কোড পেতে এখানে ক্লিক করুন
                          </small>
                        </a>

                        <select
                          value={team}
                          className="form-select mt-4 mb-3"
                          onChange={(e) => setWinner(e.target.value)}
                          aria-label="Default select example"
                          required
                        >
                          <option selected>জয়ীদল সিলেক্ট করুন</option>
                          <option
                            value={link1 ? link1.team1 : "প্রকাশ করা হয়নি "}
                          >
                            {link1 ? link1.team1 : "প্রকাশ করা হয়নি "}
                          </option>
                          <option
                            value={link1 ? link1.team2 : "প্রকাশ করা হয়নি "}
                          >
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
            <div className="row">
              <div className="col-md-12 my-3">
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
                          <a
                            className="text-white"
                            href={flink && flink.fbLink}
                          >
                            পেজে আপডেট জানুন
                          </a>
                        </h6>
                      </button>
                      <br />
                      ইউটিউব লিঙ্কঃ
                      <button className="btn pt-3 my-2 form-control ytBtn">
                        <h6>
                          <i className="fab mx-1 fa-youtube"></i>
                          <a
                            className="text-white"
                            href={ylink && ylink.ytLink}
                          >
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
          <div className="col-md-8">
            <PrizeScreen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaScreen;
