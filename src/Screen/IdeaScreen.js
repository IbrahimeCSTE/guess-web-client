import React, { useState } from "react";

const IdeaScreen = () => {
  const [next, setNext] = useState(true);
  const [showNextData, setShowNextData] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [distic, setDistic] = useState("");
  const [code, setCode] = useState("");
  const [winner, setWinner] = useState("");

  const HandleNextBtn = (e) => {
    e.preventDefault();
    if (name && mobile && email && distic) {
      setNext(true);
      setShowNextData(true);
      setSubmitBtn(true);
    } else {
      alert("ফর্মটি অসম্পূর্ণ আছে!");
    }

    //console.log("next");
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(name, mobile, email, distic, code, winner);
    setName("");
    setMobile("");
    setEmail("");
    setDistic("");
    setCode("");
    setWinner("");
    //console.log(1);
  };
  return (
    <div className="container my-5">
      <div className="text-center">
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
                    type="text"
                    onBlur={(e) => setName(e.target.value)}
                    className="form-control my-2"
                    placeholder="আপনার নাম"
                    required
                  />
                  <input
                    type="number"
                    onBlur={(e) => setMobile(e.target.value)}
                    className="form-control my-2"
                    placeholder="আপনার মোবাইল নম্বর"
                    required
                  />
                  <input
                    type="email"
                    onBlur={(e) => setEmail(e.target.value)}
                    className="form-control my-2"
                    placeholder="আপনার ই-মেইল"
                    required
                  />
                  <input
                    type="text"
                    onBlur={(e) => setDistic(e.target.value)}
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
                    type="text"
                    onBlur={(e) => setCode(e.target.value)}
                    className="form-control mt-2"
                    placeholder="ভিডিও কোড"
                    required
                  />
                  <small className="mb-5">
                    কোড পেতে এখানে <a href="">ক্লিক করুন</a>
                  </small>
                  <select
                    className="form-select mt-4 mb-3"
                    onBlur={(e) => setWinner(e.target.value)}
                    aria-label="Default select example"
                    required
                  >
                    <option selected>জয়ীদল সিলেক্ট করুন</option>
                    <option value="বাংলাদেশ">বাংলাদেশ</option>
                    <option value="শ্রীলংকা">শ্রীলংকা</option>
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
