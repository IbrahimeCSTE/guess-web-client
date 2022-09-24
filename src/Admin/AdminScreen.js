import React from "react";

const AdminScreen = () => {
  return (
    <div className="container my-5">
      <div className="card p-4">
        <div className="mobileUpdate">
          <h5>Mobile update</h5>
          <div className="card p-2">
            <input
              type="number"
              className="form-control my-2"
              placeholder="Mobile update"
            />
            <button className="btn btn-info form-control my-2">Update</button>
          </div>
        </div>
        <div className="emailUpdate">
          <h5>Email update</h5>
          <div className="card p-2">
            <input
              type="email"
              className="form-control my-2"
              placeholder="Email update"
            />
            <button className="btn btn-info form-control my-2">Update</button>
          </div>
        </div>
        <div className="ytLink">
          <h5>Youtube Link</h5>

          <div className="card p-2">
            <input
              type="text"
              className="form-control my-2"
              placeholder="yt link update"
            />
            <button className="btn btn-info form-control my-2">Update</button>
          </div>
        </div>
        <div className="fbLink mt-4">
          <h5>Facebook Page Link</h5>
          <div className="card p-2">
            <input
              type="text"
              className="form-control my-2"
              placeholder="fb page link update"
            />
            <button className="btn btn-info form-control my-2">Update</button>
          </div>
        </div>
        <div className="updateNews mt-4">
          <h5>Update News</h5>
          <div className="card p-2">
            <textarea
              type="text"
              className="form-control my-2"
              placeholder="update news"
            />
            <button className="btn btn-info form-control my-2">Update</button>
          </div>
        </div>
        <div className="prizeSection mt-4">
          <h5>Prize</h5>
          <div className="card p-2">
            <input type="file" className="form-control my-2" />
            <input
              type="text"
              className="form-control my-2"
              placeholder="winnerNo"
            />
            <textarea
              type="text"
              className="form-control my-2"
              placeholder="whichPrize"
            />
            <button className="btn btn-info form-control my-2">Add</button>
          </div>
        </div>
        <div className="updateNews mt-4">
          <h5>Important Information</h5>
          <div className="card p-2">
            <textarea
              type="text"
              className="form-control my-2"
              placeholder="Add information"
            />
            <button className="btn btn-info form-control my-2">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
<h2>ADmin</h2>;
