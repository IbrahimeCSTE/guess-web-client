import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const Header = () => {
  let localTime = new Date();
  let displayLocalTime = localTime.toLocaleTimeString();
  let getHour = localTime.getHours();
  let getMin = localTime.getMinutes();
  let getSec = localTime.getSeconds();

  const [time, setTime] = useState("");
  const [stopDisTime, setStopDisTime] = useState(false);
  const [clickBtn, setClickBtn] = useState(false);

  useEffect(() => {
    setInterval(() => {
      localTime = new Date();
      displayLocalTime = localTime.toLocaleTimeString();
      setTime(displayLocalTime);
      getHour = localTime.getHours();
      getMin = localTime.getMinutes();
      getSec = localTime.getSeconds();
      // console.log(getHour, getMin, getSec);

      // if () {
      //   setClickBtn(true);
      //   setStopDisTime(true);
      //   console.log("timeup");
      //   console.log(hourDiff, minDiff, secDiff);
      // }
    }, 1000);
  }, []);
  return (
    <div>
      <div className="headerImg">
        <div className="card  text-bg-dark">
          <img
            src="image/cover1.jpg"
            className="card-img img-fluid"
            alt="..."
          />

          <div className="card-img-overlay cardText">
            <div className="text-center">
              <TypeAnimation
                sequence={[
                  " আপনার আইডিয়া শেয়ার করে জিতে নিন আকর্ষনীয় পুরুষ্কার।", // Types 'One'
                  1000, // Waits 1s
                ]}
                speed={40}
                cursor={false}
                wrapper="div"
                repeat={Infinity}
                style={{ fontSize: "2em" }}
              />
              <div className="showTime justify-content-center d-flex text-dark text-center">
                <div className="displayTime">
                  <h2>{stopDisTime ? "00:00:00" : <h2>{time}</h2>}</h2>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div>
                  {clickBtn ? (
                    <button className="btn btn-danger my-2" disabled>
                      এখানে ক্লিক করুন
                    </button>
                  ) : (
                    <button className="btn btn-danger my-2">
                      <Link
                        className="text-white text-decoration-none"
                        to="/own-idea"
                      >
                        {" "}
                        এখানে ক্লিক করুন
                      </Link>
                    </button>
                  )}
                </div>

                <div className="spinner-grow spinerColor" role="status">
                  <i className="fas fa-mouse-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
